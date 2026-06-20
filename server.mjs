import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT || 4173);
const isProduction = process.env.NODE_ENV === "production";
const dataDir = process.env.DATA_DIR || path.join(__dirname, "data");
const contentPath = path.join(dataDir, "site-content.json");
const leadsPath = path.join(dataDir, "contact-leads.json");
const adminPassword = process.env.ADMIN_PASSWORD || "Omega@2022@M";
const adminUsers = new Set(
  (process.env.ADMIN_USERS || "Admin,admin,Mohammad")
    .split(",")
    .map((user) => user.trim())
    .filter(Boolean)
);
const uploadDir = path.join(__dirname, "public", "uploads");
const tokens = new Set();

app.disable("x-powered-by");
app.use(express.json({ limit: "2mb" }));
app.use("/uploads", express.static(uploadDir, { maxAge: "1h" }));

const upload = multer({
  storage: multer.diskStorage({
    destination: async (_req, _file, cb) => {
      try {
        await fs.mkdir(uploadDir, { recursive: true });
        cb(null, uploadDir);
      } catch (error) {
        cb(error);
      }
    },
    filename: (_req, file, cb) => {
      const extension = path.extname(file.originalname || "").toLowerCase() || ".jpg";
      cb(null, `${Date.now()}-${crypto.randomBytes(8).toString("hex")}${extension}`);
    }
  }),
  limits: { fileSize: 4 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!/^image\/(png|jpe?g|webp)$/i.test(file.mimetype || "")) {
      cb(new Error("Only PNG, JPG, and WEBP images are allowed."));
      return;
    }
    cb(null, true);
  }
});

async function ensureDataDir() {
  await fs.mkdir(dataDir, { recursive: true });
}

async function readJson(filePath, fallback) {
  await ensureDataDir();
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeJson(filePath, fallback);
      return fallback;
    }
    throw error;
  }
}

async function writeJson(filePath, payload) {
  await ensureDataDir();
  const tmp = `${filePath}.tmp`;
  await fs.writeFile(tmp, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  await fs.rename(tmp, filePath);
}

function cleanText(value, max = 2000) {
  return String(value || "").trim().slice(0, max);
}

function getBaseUrl(req) {
  const configured = process.env.PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  const protocol = req.headers["x-forwarded-proto"] || req.protocol || "https";
  return `${protocol}://${req.get("host")}`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSeoHead(content, baseUrl) {
  const seo = content.seo || {};
  const brand = content.brand || {};
  const description =
    seo.description ||
    "سواعد منصة تساعد الباحثين عن عمل على متابعة فرص مناسبة، تنظيم التقديم على الوظائف، واستلام تقارير واضحة.";
  const title = seo.title || "سواعد | منصة تنظيم ومتابعة فرص العمل";
  const keywords = seo.keywords || "سواعد, وظائف الأردن, فرص عمل, تقديم وظائف, متابعة وظائف";
  const image = `${baseUrl}/assets/campaign-hero.png`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name || "سواعد",
    alternateName: brand.englishName || "Sawaed",
    description,
    areaServed: ["Jordan", "Gulf Countries", "Europe"],
    email: brand.email || "sawaed.jobs@gmail.com",
    telephone: brand.whatsapp || "0771475627",
    url: baseUrl,
    image,
    serviceType: [
      "Job application support",
      "Job opportunity tracking",
      "CV preparation support",
      "Employment report preparation"
    ]
  };

  return `
    <link rel="canonical" href="${escapeHtml(baseUrl)}" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(keywords)}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="ar_JO" />
    <meta property="og:site_name" content="${escapeHtml(brand.name || "سواعد")}" />
    <meta property="og:url" content="${escapeHtml(baseUrl)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  `;
}

function requireAdmin(req, res, next) {
  const token = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!token || !tokens.has(token)) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  return next();
}

app.get("/api/content", async (_req, res, next) => {
  try {
    const content = await readJson(contentPath, {});
    res.json(content);
  } catch (error) {
    next(error);
  }
});

app.get("/robots.txt", (req, res) => {
  const baseUrl = getBaseUrl(req);
  res.type("text/plain").send(`User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`);
});

app.get("/sitemap.xml", (req, res) => {
  const baseUrl = getBaseUrl(req);
  const now = new Date().toISOString();
  const urls = ["/", "/offers", "/dashboard"].filter((url) => url !== "/dashboard");
  res.type("application/xml").send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url === "/" ? "" : url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`);
});

app.post("/api/contact", async (req, res, next) => {
  try {
    const lead = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name: cleanText(req.body.name, 160),
      phone: cleanText(req.body.phone, 80),
      email: cleanText(req.body.email, 160),
      profession: cleanText(req.body.profession, 160),
      message: cleanText(req.body.message, 1200),
      source: "website"
    };

    if (!lead.name || !lead.phone) {
      return res.status(400).json({ message: "Name and phone are required." });
    }

    const leads = await readJson(leadsPath, []);
    leads.unshift(lead);
    await writeJson(leadsPath, leads.slice(0, 500));
    res.status(201).json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.post("/api/admin/login", (req, res) => {
  const username = String(req.body.username || "").trim();
  if (!adminUsers.has(username) || String(req.body.password || "") !== adminPassword) {
    return res.status(401).json({ message: "Wrong password" });
  }
  const token = crypto.randomBytes(32).toString("hex");
  tokens.add(token);
  res.json({ token });
});

app.get("/api/admin/content", requireAdmin, async (_req, res, next) => {
  try {
    res.json(await readJson(contentPath, {}));
  } catch (error) {
    next(error);
  }
});

app.post("/api/admin/upload", requireAdmin, upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image uploaded" });
  }
  res.status(201).json({ url: `/uploads/${req.file.filename}` });
});

app.put("/api/admin/content", requireAdmin, async (req, res, next) => {
  try {
    const payload = req.body && typeof req.body === "object" ? req.body : {};
    payload.updatedAt = new Date().toISOString();
    await writeJson(contentPath, payload);
    res.json({ ok: true, content: payload });
  } catch (error) {
    next(error);
  }
});

app.get("/api/admin/leads", requireAdmin, async (_req, res, next) => {
  try {
    res.json(await readJson(leadsPath, []));
  } catch (error) {
    next(error);
  }
});

if (isProduction) {
  const distDir = path.join(__dirname, "dist");
  app.use(express.static(distDir, { maxAge: "1h", index: false }));
  app.get("*", async (req, res, next) => {
    try {
      const content = await readJson(contentPath, {});
      const html = await fs.readFile(path.join(distDir, "index.html"), "utf8");
      const title = escapeHtml(content.seo?.title || "سواعد | منصة تنظيم ومتابعة فرص العمل");
      const cleanHtml = html
        .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "")
        .replace(/<meta\s+(name|property)="(description|keywords|og:[^"]+|twitter:[^"]+)"[^>]*>\s*/gi, "")
        .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, "")
        .replace(/<title>[\s\S]*?<\/title>/gi, "");
      const withSeo = cleanHtml
        .replace("<!-- SEO_DYNAMIC -->", buildSeoHead(content, getBaseUrl(req)))
        .replace(/<title>[\s\S]*?<\/title>/gi, "");
      res.type("html").send(withSeo.replace("</head>", `<title>${title}</title></head>`));
    } catch (error) {
      next(error);
    }
  });
} else {
  const { createServer } = await import("vite");
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "spa"
  });
  app.use(vite.middlewares);
}

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Sawaed website running on http://127.0.0.1:${port}`);
});
