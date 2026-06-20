import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  FileSpreadsheet,
  Globe2,
  Instagram,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  Save,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import HeroScene from "./HeroScene.jsx";

const emptyContent = {
  brand: {},
  hero: {},
  stats: [],
  professions: [],
  workflow: [],
  reports: [],
  offers: { plans: [] },
  campaign: {},
  testimonials: { show: false, items: [] },
  faq: []
};

function routeTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function whatsappLink(phone, message) {
  const normalized = String(phone || "").replace(/[^\d+]/g, "");
  const intl = normalized.startsWith("+") ? normalized.slice(1) : normalized.replace(/^0/, "962");
  return `https://wa.me/${intl}?text=${encodeURIComponent(message)}`;
}

function instagramLink(brand = {}) {
  const directUrl = String(brand.instagramUrl || "").trim();
  if (directUrl) return directUrl;
  const account = String(brand.instagramAccount || "").trim().replace(/^@/, "");
  return account ? `https://www.instagram.com/${account}/` : "";
}

function displayInstagram(brand = {}) {
  const account = String(brand.instagramAccount || "").trim();
  if (account) return account.startsWith("@") ? account : `@${account}`;
  try {
    const parsed = new URL(instagramLink(brand));
    const handle = parsed.pathname.split("/").filter(Boolean)[0];
    return handle ? `@${handle}` : "Instagram";
  } catch (_error) {
    return "Instagram";
  }
}

function contactMethods(content, message) {
  const brand = content.brand || {};
  const methods = [];
  if (brand.whatsapp && brand.whatsappEnabled !== false) {
    methods.push({
      key: "whatsapp",
      label: "واتساب",
      value: brand.whatsapp,
      href: whatsappLink(brand.whatsapp, message),
      Icon: MessageCircle
    });
  }
  const instagramHref = instagramLink(brand);
  if (instagramHref && brand.instagramEnabled !== false) {
    methods.push({
      key: "instagram",
      label: "إنستغرام",
      value: displayInstagram(brand),
      href: instagramHref,
      Icon: Instagram
    });
  }
  return methods;
}

function primaryContact(content, message) {
  const methods = contactMethods(content, message);
  if (methods.length) return methods[0];
  return {
    key: "email",
    label: "البريد",
    value: content.brand?.email || "",
    href: `mailto:${content.brand?.email || ""}`,
    Icon: Mail
  };
}

function contactText(methods) {
  if (methods.some((method) => method.key === "whatsapp") && methods.some((method) => method.key === "instagram")) {
    return "يمكنك مراسلتنا مباشرة عبر واتساب أو إنستغرام أيضًا.";
  }
  if (methods.some((method) => method.key === "instagram")) return "يمكنك مراسلتنا مباشرة عبر إنستغرام أيضًا.";
  if (methods.some((method) => method.key === "whatsapp")) return "يمكنك مراسلتنا مباشرة عبر واتساب أيضًا.";
  return "يمكنك مراسلتنا عبر البريد وسنرد عليك بأقرب وقت.";
}

function setDeepValue(source, path, value) {
  const next = JSON.parse(JSON.stringify(source));
  const keys = path.split(".");
  let cursor = next;
  keys.slice(0, -1).forEach((key) => {
    cursor[key] = cursor[key] || {};
    cursor = cursor[key];
  });
  cursor[keys[keys.length - 1]] = value;
  return next;
}

function listToLines(list) {
  return Array.isArray(list) ? list.join("\n") : "";
}

function linesToList(value) {
  return String(value || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function youtubeEmbedUrl(url) {
  const value = String(url || "").trim();
  if (!value) return "";
  try {
    const parsed = new URL(value);
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "").split("/")[0];
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }
    if (parsed.hostname.includes("youtube.com")) {
      const embedMatch = parsed.pathname.match(/\/embed\/([^/?]+)/);
      const shortMatch = parsed.pathname.match(/\/shorts\/([^/?]+)/);
      const id = parsed.searchParams.get("v") || embedMatch?.[1] || shortMatch?.[1];
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }
  } catch (_error) {
    return "";
  }
  return "";
}

function normalizeProfession(profession, index = 0) {
  if (typeof profession === "string") {
    return {
      name: profession,
      image: `/assets/professions/profession-${String(index + 1).padStart(2, "0")}.jpg`
    };
  }
  return {
    name: profession?.name || "",
    image: profession?.image || `/assets/professions/profession-${String(index + 1).padStart(2, "0")}.jpg`
  };
}

function upsertMeta(selector, createAttributes, valueAttribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(createAttributes).forEach(([key, attributeValue]) => {
      element.setAttribute(key, attributeValue);
    });
    document.head.appendChild(element);
  }
  element.setAttribute(valueAttribute, value || "");
}

function applySeo(content) {
  const title = content.seo?.title || "سواعد | منصة تنظيم ومتابعة فرص العمل";
  const description =
    content.seo?.description ||
    "سواعد منصة تساعد الباحثين عن عمل على متابعة فرص مناسبة وتنظيم التقديم واستلام تقارير واضحة.";
  const keywords = content.seo?.keywords || "سواعد, وظائف الأردن, فرص عمل, تقديم وظائف, متابعة وظائف";

  document.title = title;
  upsertMeta('meta[name="description"]', { name: "description" }, "content", description);
  upsertMeta('meta[name="keywords"]', { name: "keywords" }, "content", keywords);
  upsertMeta('meta[property="og:title"]', { property: "og:title" }, "content", title);
  upsertMeta('meta[property="og:description"]', { property: "og:description" }, "content", description);
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, "content", title);
  upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, "content", description);
}

function useContent() {
  const [content, setContent] = useState(emptyContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        const next = { ...emptyContent, ...data };
        setContent(next);
        applySeo(next);
      })
      .finally(() => setLoading(false));
  }, []);

  return { content, setContent, loading };
}

function Header({ content }) {
  const [open, setOpen] = useState(false);
  const contactMessage = "مرحبا، أريد الاشتراك أو معرفة تفاصيل خدمة سواعد.";
  const methods = contactMethods(content, contactMessage);
  const nav = [
    ["الخدمة", "/#service"],
    ["المصداقية", "/#reports"],
    ["العروض", "/offers"],
    ["تواصل", "/#contact"]
  ];

  return (
    <header className="site-header">
      <button className="brand-button" onClick={() => routeTo("/")} aria-label="Sawaed home">
        <span className="logo-frame">
          <img src={content.brand.logo} alt="Sawaed" />
        </span>
        <span>
          <strong>{content.brand.name || "سواعد"}</strong>
          <small>{content.brand.tagline}</small>
        </span>
      </button>

      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
        {nav.map(([label, href]) =>
          href.startsWith("/#") ? (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ) : (
            <button key={href} onClick={() => routeTo(href)}>
              {label}
            </button>
          )
        )}
      </nav>

      <div className="header-actions">
        {methods.length ? methods.map(({ key, label, href, Icon }) => (
          <a className="icon-button" href={href} title={label} aria-label={label} key={key}>
            <Icon size={20} />
          </a>
        )) : (
          <a className="icon-button" href={`mailto:${content.brand.email}`} title="البريد" aria-label="البريد">
            <Mail size={20} />
          </a>
        )}
        <button className="menu-button" onClick={() => setOpen((value) => !value)}>
          القائمة
        </button>
      </div>
    </header>
  );
}

function Hero({ content }) {
  const message = "مرحبا سواعد، أريد أن أبدأ خدمة متابعة فرص العمل.";
  const primary = primaryContact(content, message);
  const ctaText = primary.key === "instagram" ? "ابدأ عبر إنستغرام" : primary.key === "email" ? "راسلنا عبر البريد" : content.hero.primaryCta;
  const PrimaryIcon = primary.Icon;
  const heroStyle = content.campaign?.heroBackground
    ? { "--hero-bg": `url("${content.campaign.heroBackground}")` }
    : undefined;
  return (
    <section className="hero-section" style={heroStyle}>
      <HeroScene />
      <div className="hero-overlay">
        <p className="eyebrow">
          <Sparkles size={18} />
          {content.hero.eyebrow}
        </p>
        <h1>{content.hero.title}</h1>
        <p className="hero-copy">{content.hero.subtitle}</p>
        <div className="hero-actions">
          <a className="primary-action" href={primary.href}>
            <PrimaryIcon size={20} />
            {ctaText}
          </a>
          <button className="secondary-action" onClick={() => routeTo("/offers")}>
            {content.hero.secondaryCta}
            <ArrowLeft size={18} />
          </button>
        </div>
        <p className="trust-note">{content.hero.trustNote}</p>
      </div>
      <div className="hero-stats" aria-label="Sawaed summary">
        {(content.stats || []).map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}

function ServiceOverview({ content }) {
  const icons = [FileSpreadsheet, Globe2, BarChart3];
  return (
    <section id="service" className="section service-band">
      <SectionTitle
        eyebrow="كيف نخدم الباحث عن عمل"
        title="خدمة واضحة تساعدك على الوصول لفرص أنسب"
        text="نراجع سيرتك الذاتية ومعلوماتك، نتابع الوظائف المناسبة لمجالك، وننظم خطوات التقديم والمتابعة بأسلوب احترافي وواضح."
      />
      <div className="process-grid">
        {(content.workflow || []).map((step, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article className="process-item" key={step.title}>
              <Icon size={24} />
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Professions({ content }) {
  const professions = (content.professions || []).map(normalizeProfession);
  return (
    <section className="section professions-section">
      <SectionTitle
        eyebrow="المجالات المخدومة"
        title="مهن متعددة وفرص نتابعها لك باحترافية"
        text="سواء كنت خريجًا جديدًا أو صاحب خبرة، نساعدك على متابعة الفرص القريبة من مجالك وخطوتك المهنية القادمة، والعديد من الفرص الأخرى."
      />
      <div className="profession-grid">
        {professions.map((profession, index) => (
          <article className="profession-card" key={`${profession.name}-${index}`}>
            <img src={profession.image} alt="" aria-hidden="true" loading="lazy" />
            <div>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{profession.name}</h3>
            </div>
          </article>
        ))}
      </div>
      <p className="profession-note">والعديد من المجالات والفرص الأخرى حسب خبرتك وهدفك المهني.</p>
    </section>
  );
}

function Reports({ content }) {
  return (
    <section id="reports" className="section reports-section">
      <div className="reports-layout">
        <div>
          <SectionTitle
            eyebrow="المصداقية"
            title="تتيح لك سواعد متابعة عملية التقديم أولًا بأول"
            text="يتم إرسال تقرير يومي يحتوي على ملخص واضح للتقديمات التي تمت، والفرص المناسبة، والوظائف التي تحتاج متابعة منك، وفرص إضافية قريبة من مجالك."
          />
          <div className="report-list">
            {(content.reports || []).map((item) => (
              <div className="report-row" key={item}>
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="report-preview">
          <div className="sheet-top">
            <span />
            <span />
            <span />
          </div>
          <div className="sheet-header">
            <FileSpreadsheet size={28} />
            <strong>تقرير سواعد اليومي</strong>
          </div>
          <div className="sheet-table">
            {["فرص مناسبة", "تم التقديم", "وظائف تحتاج متابعة", "فرص إضافية"].map((row, index) => (
              <div key={row}>
                <span>{row}</span>
                <strong>{["1000+", "400+", "7+", "5000+"][index]}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ content }) {
  const testimonials = content.testimonials || { show: false, items: [] };
  if (!testimonials.show) return null;

  return (
    <section className="section testimonials-section">
      <SectionTitle
        eyebrow="آراء العملاء"
        title={testimonials.headline || "ماذا يقول عملاء سواعد؟"}
        text={testimonials.intro || "تجارب مختصرة من أشخاص استخدموا سواعد لتنظيم متابعة فرص العمل."}
      />
      <div className="testimonial-grid">
        {(testimonials.items || []).map((item, index) => (
          <article className="testimonial-card" key={`${item.name}-${index}`}>
            <img src={item.image || "/assets/testimonials/testimonial-01.jpg"} alt={item.name || "عميل سواعد"} loading="lazy" />
            <div>
              <p>{item.quote}</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Offers({ content, full = false }) {
  const offers = content.offers || { plans: [] };
  return (
    <section id="offers" className={full ? "section offers-page" : "section offers-section"}>
      <SectionTitle
        eyebrow="العروض"
        title={offers.headline}
        text={offers.intro}
      />
      {offers.priceNote ? <p className="offer-price-note">{offers.priceNote}</p> : null}
      <div className="plans-grid">
        {(offers.plans || []).map((plan) => (
          <article className={plan.highlighted ? "plan-card highlighted" : "plan-card"} key={plan.name}>
            <div className="plan-heading">
              <h3>{plan.name}</h3>
              <ShieldCheck size={22} />
            </div>
            {offers.showPrices ? (
              <div className="price-line">
                <strong>{plan.price}</strong>
                <span>{plan.duration}</span>
              </div>
            ) : null}
            <p>{plan.description}</p>
            <ul>
              {(plan.features || []).map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={17} />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {!full ? (
        <button className="inline-more" onClick={() => routeTo("/offers")}>
          عرض كل التفاصيل
          <ArrowLeft size={18} />
        </button>
      ) : null}
    </section>
  );
}

function CampaignMedia({ content }) {
  const embedUrl = youtubeEmbedUrl(content.campaign?.youtubeUrl || content.campaign?.video);
  return (
    <section className="section campaign-section">
      <SectionTitle
        eyebrow="شرح الخدمة"
        title="من الفوضى إلى متابعة مرتبة"
        text="سواعد لا يبيع وعودًا؛ سواعد يرتب البحث والتقديم والمتابعة حتى تكون خطواتك أوضح."
      />
      <div className="media-grid">
        <figure>
          <img src={content.campaign.image} alt="Sawaed campaign visual" />
          <figcaption>{content.campaign.caption}</figcaption>
        </figure>
        <figure>
          {embedUrl ? (
            <iframe
              className="youtube-frame"
              src={embedUrl}
              title="فيديو تعريفي عن سواعد"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="video-placeholder">
              <Sparkles size={28} />
              <strong>فيديو تعريفي قريبًا</strong>
              <span>يمكنك التواصل معنا لمعرفة تفاصيل الخدمة والخطة الأنسب لك.</span>
            </div>
          )}
          <figcaption>فيديو مختصر يوضح طريقة الاستفادة من خدمة سواعد.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Contact({ content }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", profession: "", message: "" });
  const [status, setStatus] = useState("");
  const contactMessage = "مرحبا، أرسلت طلب تواصل من موقع سواعد وأريد متابعة التفاصيل.";
  const methods = contactMethods(content, contactMessage);
  const primary = primaryContact(content, contactMessage);
  const PrimaryIcon = primary.Icon;

  async function submit(event) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        setStatus("error");
        return;
      }
      setForm({ name: "", phone: "", email: "", profession: "", message: "" });
      setStatus("sent");
    } catch (_error) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-info">
        <SectionTitle
          eyebrow="تواصل"
          title="ابدأ بخطوة واحدة مرتبة"
          text="اكتب مجال شغلك أو نوع الوظيفة التي تبحث عنها، وسنوضح لك الخدمة الأنسب وطريقة البدء."
        />
        <div className="contact-cards">
          {contactMethods(content, "مرحبا، أريد تفاصيل خدمة سواعد.").map(({ key, href, Icon, label, value }) => (
            <a href={href} key={key}>
              <Icon size={22} />
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          ))}
          {!contactMethods(content, "مرحبا، أريد تفاصيل خدمة سواعد.").length ? <a href={`mailto:${content.brand.email}`}>
            <Mail size={22} />
            <span>البريد</span>
            <strong>{content.brand.email}</strong>
          </a> : null}
        </div>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <label>
          الاسم
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </label>
        <label>
          رقم الهاتف أو واتساب
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        </label>
        <label>
          البريد الإلكتروني
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </label>
        <label>
          المجال المهني
          <input value={form.profession} onChange={(e) => setForm({ ...form, profession: e.target.value })} />
        </label>
        <label className="full-field">
          ملاحظات
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </label>
        <button className="primary-action" type="submit" disabled={status === "sending"}>
          <Phone size={18} />
          {status === "sending" ? "جاري الإرسال..." : "إرسال الطلب"}
        </button>
        {status === "sent" ? (
          <div className="form-status-card full-field">
            <strong>تم استلام طلبك بنجاح.</strong>
            <span>لتسريع المتابعة، {contactText(methods)}</span>
            <a href={primary.href}>
              <PrimaryIcon size={18} />
              تواصل عبر {primary.label}
            </a>
          </div>
        ) : null}
        {status === "error" ? (
          <div className="form-status-card error full-field">
            <strong>تعذر حفظ الطلب الآن.</strong>
            <span>{contactText(methods)}</span>
            <a href={primary.href}>
              <PrimaryIcon size={18} />
              فتح {primary.label}
            </a>
          </div>
        ) : null}
      </form>
    </section>
  );
}

function Faq({ content }) {
  return (
    <section className="section faq-section">
      <SectionTitle eyebrow="أسئلة متكررة" title="إجابات مختصرة قبل التواصل" />
      <div className="faq-list">
        {(content.faq || []).map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer({ content }) {
  const year = new Date().getFullYear();
  const contactMessage = "مرحبا، أريد معرفة تفاصيل خدمة سواعد.";
  const methods = contactMethods(content, contactMessage);
  const footerDescription = "متابعة منظمة للفرص، تقارير واضحة، وخطوة أسهل نحو العمل المناسب.";

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={content.brand.logo} alt="Sawaed" />
          <div>
            <strong>{content.brand.name}</strong>
            <span>{footerDescription}</span>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/#service">الخدمة</a>
          <a href="/#reports">المصداقية</a>
          <button type="button" onClick={() => routeTo("/offers")}>العروض</button>
          <a href="/#contact">تواصل</a>
        </nav>
        <div className="footer-contact">
          {methods.map(({ key, href, value, label }) => (
            <a href={href} key={key} aria-label={label}>{value}</a>
          ))}
          <a href={`mailto:${content.brand.email}`}>{content.brand.email}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>جميع الحقوق محفوظة © {year} {content.brand.name}</span>
        <span>جاهزون نساعدك ترتب خطوتك القادمة.</span>
      </div>
    </footer>
  );
}

function LandingPage({ content }) {
  return (
    <>
      <Header content={content} />
      <main>
        <Hero content={content} />
        <ServiceOverview content={content} />
        <Professions content={content} />
        <Reports content={content} />
        <Testimonials content={content} />
        <Offers content={content} />
        <CampaignMedia content={content} />
        <Faq content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}

function OffersPage({ content }) {
  return (
    <>
      <Header content={content} />
      <main className="page-shell">
        <Offers content={content} full />
        <Contact content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}

function TextField({ label, value, onChange, textarea = false }) {
  return (
    <label className={textarea ? "admin-field full-field" : "admin-field"}>
      {label}
      {textarea ? <textarea value={value || ""} onChange={(e) => onChange(e.target.value)} /> : <input value={value || ""} onChange={(e) => onChange(e.target.value)} />}
    </label>
  );
}

function AdminDashboard({ initialContent, setPublicContent }) {
  const [token, setToken] = useState(localStorage.getItem("sawaedAdminToken") || "");
  const [username, setUsername] = useState("Admin");
  const [password, setPassword] = useState("");
  const [draft, setDraft] = useState(initialContent);
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setDraft(initialContent);
  }, [initialContent]);

  useEffect(() => {
    loadLeads();
  }, [token]);

  async function loadLeads() {
    if (!token) return;
    const response = await fetch("/api/admin/leads", { headers: { Authorization: `Bearer ${token}` } });
    setLeads(response.ok ? await response.json() : []);
  }

  async function login(event) {
    event.preventDefault();
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
      setStatus("wrong-password");
      return;
    }
    const data = await response.json();
    localStorage.setItem("sawaedAdminToken", data.token);
    setToken(data.token);
    setStatus("");
  }

  function update(path, value) {
    setDraft((current) => setDeepValue(current, path, value));
  }

  async function uploadImage(file, pathToUpdate) {
    if (!file) return;
    const body = new FormData();
    body.append("image", file);
    const response = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body
    });
    if (response.ok) {
      const data = await response.json();
      update(pathToUpdate, data.url);
      setStatus("image-uploaded");
    } else {
      setStatus("save-error");
    }
  }

  async function save() {
    setStatus("saving");
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(draft)
    });
    if (response.ok) {
      const data = await response.json();
      setPublicContent(data.content);
      setDraft(data.content);
      applySeo(data.content);
      setStatus("saved");
    } else {
      setStatus("save-error");
    }
  }

  function updatePlan(index, patch) {
    const plans = [...(draft.offers?.plans || [])];
    plans[index] = { ...plans[index], ...patch };
    update("offers.plans", plans);
  }

  function updateStat(index, patch) {
    const stats = [...(draft.stats || [])];
    stats[index] = { ...stats[index], ...patch };
    update("stats", stats);
  }

  function updateProfession(index, patch) {
    const professions = (draft.professions || []).map(normalizeProfession);
    professions[index] = { ...professions[index], ...patch };
    update("professions", professions);
  }

  function addProfession() {
    const professions = (draft.professions || []).map(normalizeProfession);
    professions.push({
      name: "تخصص جديد",
      image: `/assets/professions/profession-${String((professions.length % 10) + 1).padStart(2, "0")}.jpg`
    });
    update("professions", professions);
  }

  function removeProfession(index) {
    const professions = (draft.professions || []).map(normalizeProfession);
    professions.splice(index, 1);
    update("professions", professions);
  }

  function addPlan() {
    const plans = [...(draft.offers?.plans || [])];
    plans.push({
      name: "عرض جديد",
      price: "حسب العرض الحالي",
      duration: "مدة قابلة للتحديد",
      description: "اكتب وصف العرض هنا.",
      features: ["ميزة أولى", "ميزة ثانية"],
      highlighted: false
    });
    update("offers.plans", plans);
  }

  function removePlan(index) {
    const plans = [...(draft.offers?.plans || [])];
    plans.splice(index, 1);
    update("offers.plans", plans);
  }

  function updateFaq(index, patch) {
    const faq = [...(draft.faq || [])];
    faq[index] = { ...faq[index], ...patch };
    update("faq", faq);
  }

  function addFaq() {
    const faq = [...(draft.faq || [])];
    faq.push({ question: "سؤال جديد", answer: "اكتب الإجابة هنا." });
    update("faq", faq);
  }

  function removeFaq(index) {
    const faq = [...(draft.faq || [])];
    faq.splice(index, 1);
    update("faq", faq);
  }

  function updateTestimonial(index, patch) {
    const testimonials = { ...(draft.testimonials || { items: [] }) };
    const items = [...(testimonials.items || [])];
    items[index] = { ...items[index], ...patch };
    update("testimonials", { ...testimonials, items });
  }

  function addTestimonial() {
    const testimonials = { ...(draft.testimonials || { show: true, items: [] }) };
    const items = [...(testimonials.items || [])];
    items.push({
      name: "اسم العميل",
      role: "باحث عن عمل",
      image: `/assets/testimonials/testimonial-${String((items.length % 3) + 1).padStart(2, "0")}.jpg`,
      quote: "اكتب رأي العميل هنا."
    });
    update("testimonials", { ...testimonials, items });
  }

  function removeTestimonial(index) {
    const testimonials = { ...(draft.testimonials || { items: [] }) };
    const items = [...(testimonials.items || [])];
    items.splice(index, 1);
    update("testimonials", { ...testimonials, items });
  }

  if (!token) {
    return (
      <main className="admin-login">
        <form onSubmit={login}>
          <Lock size={28} />
          <h1>لوحة تحكم سواعد</h1>
          <p>أدخل كلمة المرور لتعديل محتوى الموقع والعروض.</p>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="اسم المستخدم" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="كلمة المرور" />
          <button className="primary-action" type="submit">دخول</button>
          {status === "wrong-password" ? <span className="form-status error">كلمة المرور غير صحيحة.</span> : null}
        </form>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <aside className="admin-side">
        <strong>سواعد</strong>
        <button onClick={() => routeTo("/")}>عرض الموقع</button>
        <button onClick={save}>
          <Save size={18} />
          حفظ كل التعديلات
        </button>
        {status === "saved" ? <span>تم الحفظ</span> : null}
        {status === "image-uploaded" ? <span>تم رفع الصورة</span> : null}
        {status === "save-error" ? <span className="error">فشل الحفظ</span> : null}
      </aside>

      <section className="admin-content">
        <div className="admin-header">
          <div>
            <p>Dashboard</p>
            <h1>إدارة الموقع والعروض</h1>
          </div>
          <button className="primary-action" onClick={save}>
            <Save size={18} />
            حفظ
          </button>
        </div>

        <div className="admin-panel">
          <h2>الهوية والتواصل</h2>
          <div className="admin-grid">
            <TextField label="اسم العلامة" value={draft.brand?.name} onChange={(v) => update("brand.name", v)} />
            <TextField label="الشعار المختصر" value={draft.brand?.tagline} onChange={(v) => update("brand.tagline", v)} />
            <TextField label="واتساب" value={draft.brand?.whatsapp} onChange={(v) => update("brand.whatsapp", v)} />
            <TextField label="حساب إنستغرام" value={draft.brand?.instagramAccount} onChange={(v) => update("brand.instagramAccount", v)} />
            <TextField label="رابط إنستغرام" value={draft.brand?.instagramUrl} onChange={(v) => update("brand.instagramUrl", v)} />
            <TextField label="البريد" value={draft.brand?.email} onChange={(v) => update("brand.email", v)} />
          </div>
          <div className="contact-toggle-grid">
            <label className="toggle-row">
              <input
                type="checkbox"
                checked={draft.brand?.whatsappEnabled !== false}
                onChange={(e) => update("brand.whatsappEnabled", e.target.checked)}
              />
              إظهار واتساب في الموقع
            </label>
            <label className="toggle-row">
              <input
                type="checkbox"
                checked={draft.brand?.instagramEnabled !== false}
                onChange={(e) => update("brand.instagramEnabled", e.target.checked)}
              />
              إظهار إنستغرام في الموقع
            </label>
          </div>
        </div>

        <div className="admin-panel">
          <h2>أرقام الواجهة الرئيسية</h2>
          <div className="stats-editor-list">
            {(draft.stats || []).map((stat, index) => (
              <div className="stat-editor" key={`${stat.label}-${index}`}>
                <TextField label="الرقم" value={stat.value} onChange={(v) => updateStat(index, { value: v })} />
                <TextField label="الوصف" value={stat.label} onChange={(v) => updateStat(index, { label: v })} />
              </div>
            ))}
          </div>
        </div>

        <div className="admin-panel">
          <h2>الصفحة الرئيسية</h2>
          <div className="admin-grid">
            <TextField label="النص الصغير" value={draft.hero?.eyebrow} onChange={(v) => update("hero.eyebrow", v)} />
            <TextField label="العنوان الرئيسي" value={draft.hero?.title} onChange={(v) => update("hero.title", v)} textarea />
            <TextField label="الوصف" value={draft.hero?.subtitle} onChange={(v) => update("hero.subtitle", v)} textarea />
            <TextField label="ملاحظة الثقة" value={draft.hero?.trustNote} onChange={(v) => update("hero.trustNote", v)} textarea />
          </div>
        </div>

        <div className="admin-panel">
          <h2>صور الشرح وفيديو يوتيوب</h2>
          <div className="admin-grid">
            <TextField label="خلفية الصفحة الرئيسية" value={draft.campaign?.heroBackground} onChange={(v) => update("campaign.heroBackground", v)} />
            <TextField label="صورة شرح الخدمة" value={draft.campaign?.image} onChange={(v) => update("campaign.image", v)} />
            <TextField label="رابط فيديو يوتيوب اختياري" value={draft.campaign?.youtubeUrl} onChange={(v) => update("campaign.youtubeUrl", v)} />
            <TextField label="وصف صورة الشرح" value={draft.campaign?.caption} onChange={(v) => update("campaign.caption", v)} textarea />
            <label className="admin-field">
              رفع خلفية الصفحة الرئيسية
              <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => uploadImage(e.target.files?.[0], "campaign.heroBackground")} />
            </label>
            <label className="admin-field">
              رفع صورة شرح الخدمة
              <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => uploadImage(e.target.files?.[0], "campaign.image")} />
            </label>
          </div>
        </div>

        <div className="admin-panel">
          <h2>SEO وظهور Google</h2>
          <div className="admin-grid">
            <TextField label="عنوان محركات البحث" value={draft.seo?.title} onChange={(v) => update("seo.title", v)} />
            <TextField label="وصف محركات البحث" value={draft.seo?.description} onChange={(v) => update("seo.description", v)} textarea />
            <TextField label="كلمات مفتاحية" value={draft.seo?.keywords} onChange={(v) => update("seo.keywords", v)} textarea />
          </div>
        </div>

        <div className="admin-panel">
          <h2>المهن والتقارير</h2>
          <div className="admin-grid">
            <TextField label="بنود التقرير، كل بند بسطر" value={listToLines(draft.reports)} onChange={(v) => update("reports", linesToList(v))} textarea />
          </div>
          <div className="editor-section-heading">
            <strong>التخصصات المصورة</strong>
            <button type="button" onClick={addProfession}>إضافة تخصص</button>
          </div>
          <div className="profession-editor-list">
            {(draft.professions || []).map(normalizeProfession).map((profession, index) => (
              <div className="profession-editor" key={`${profession.name}-${index}`}>
                <img src={profession.image} alt={profession.name} />
                <TextField label="اسم التخصص" value={profession.name} onChange={(v) => updateProfession(index, { name: v })} />
                <TextField label="رابط الصورة" value={profession.image} onChange={(v) => updateProfession(index, { image: v })} />
                <label className="admin-field">
                  رفع صورة
                  <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => uploadImage(e.target.files?.[0], `professions.${index}.image`)} />
                </label>
                <button type="button" className="danger-button" onClick={() => removeProfession(index)}>حذف التخصص</button>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-panel">
          <h2>آراء العملاء</h2>
          <label className="toggle-row">
            <input
              type="checkbox"
              checked={Boolean(draft.testimonials?.show)}
              onChange={(e) => update("testimonials.show", e.target.checked)}
            />
            عرض قسم آراء العملاء في الموقع
          </label>
          <div className="admin-grid">
            <TextField label="عنوان القسم" value={draft.testimonials?.headline} onChange={(v) => update("testimonials.headline", v)} />
            <TextField label="وصف القسم" value={draft.testimonials?.intro} onChange={(v) => update("testimonials.intro", v)} textarea />
          </div>
          <button className="admin-add-button" type="button" onClick={addTestimonial}>
            إضافة رأي عميل
          </button>
          <div className="testimonial-editor-list">
            {((draft.testimonials && draft.testimonials.items) || []).map((item, index) => (
              <div className="testimonial-editor" key={`${item.name}-${index}`}>
                <div className="editor-title-row">
                  <strong>رأي رقم {index + 1}</strong>
                  <button type="button" onClick={() => removeTestimonial(index)}>حذف</button>
                </div>
                <img src={item.image} alt={item.name} />
                <TextField label="اسم العميل" value={item.name} onChange={(v) => updateTestimonial(index, { name: v })} />
                <TextField label="وصف مختصر" value={item.role} onChange={(v) => updateTestimonial(index, { role: v })} />
                <TextField label="رابط الصورة" value={item.image} onChange={(v) => updateTestimonial(index, { image: v })} />
                <label className="admin-field">
                  رفع صورة
                  <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => uploadImage(e.target.files?.[0], `testimonials.items.${index}.image`)} />
                </label>
                <TextField label="الرأي" value={item.quote} onChange={(v) => updateTestimonial(index, { quote: v })} textarea />
              </div>
            ))}
          </div>
        </div>

        <div className="admin-panel">
          <h2>العروض والأسعار</h2>
          <label className="toggle-row">
            <input
              type="checkbox"
              checked={Boolean(draft.offers?.showPrices)}
              onChange={(e) => update("offers.showPrices", e.target.checked)}
            />
            إظهار الأسعار للعامة
          </label>
          <div className="admin-grid">
            <TextField label="عنوان العروض" value={draft.offers?.headline} onChange={(v) => update("offers.headline", v)} />
            <TextField label="وصف العروض" value={draft.offers?.intro} onChange={(v) => update("offers.intro", v)} textarea />
            <TextField label="عبارة بداية الأسعار" value={draft.offers?.priceNote} onChange={(v) => update("offers.priceNote", v)} />
          </div>
          <button className="admin-add-button" type="button" onClick={addPlan}>
            إضافة عرض
          </button>
          <div className="plan-editor-list">
            {(draft.offers?.plans || []).map((plan, index) => (
              <div className="plan-editor" key={`${plan.name}-${index}`}>
                <div className="editor-title-row">
                  <strong>عرض رقم {index + 1}</strong>
                  <button type="button" onClick={() => removePlan(index)}>حذف</button>
                </div>
                <TextField label="اسم العرض" value={plan.name} onChange={(v) => updatePlan(index, { name: v })} />
                <TextField label="السعر" value={plan.price} onChange={(v) => updatePlan(index, { price: v })} />
                <TextField label="المدة" value={plan.duration} onChange={(v) => updatePlan(index, { duration: v })} />
                <TextField label="الوصف" value={plan.description} onChange={(v) => updatePlan(index, { description: v })} textarea />
                <TextField label="المزايا، كل ميزة بسطر" value={listToLines(plan.features)} onChange={(v) => updatePlan(index, { features: linesToList(v) })} textarea />
                <label className="toggle-row">
                  <input checked={Boolean(plan.highlighted)} type="checkbox" onChange={(e) => updatePlan(index, { highlighted: e.target.checked })} />
                  عرض مميز
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-panel">
          <h2>الأسئلة الشائعة</h2>
          <button className="admin-add-button" type="button" onClick={addFaq}>
            إضافة سؤال
          </button>
          <div className="faq-editor-list">
            {(draft.faq || []).map((item, index) => (
              <div className="faq-editor" key={`${item.question}-${index}`}>
                <div className="editor-title-row">
                  <strong>سؤال رقم {index + 1}</strong>
                  <button type="button" onClick={() => removeFaq(index)}>حذف</button>
                </div>
                <TextField label="السؤال" value={item.question} onChange={(v) => updateFaq(index, { question: v })} />
                <TextField label="الإجابة" value={item.answer} onChange={(v) => updateFaq(index, { answer: v })} textarea />
              </div>
            ))}
          </div>
        </div>

        <div className="admin-panel">
          <div className="editor-title-row">
            <h2>طلبات التواصل</h2>
            <button className="soft-action-button" type="button" onClick={loadLeads}>تحديث الطلبات</button>
          </div>
          <div className="lead-list">
            {leads.length ? leads.map((lead) => (
              <div className="lead-row" key={lead.id}>
                <strong>{lead.name}</strong>
                <span>{lead.phone}</span>
                <span>{lead.email || "بدون بريد"}</span>
                <small>{lead.profession || "بدون مجال"}</small>
                <p>{lead.message}</p>
              </div>
            )) : <p>لا توجد طلبات بعد.</p>}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const { content, setContent, loading } = useContent();
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname);
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  const page = useMemo(() => {
    const normalizedPath = path.replace(/\/+$/, "") || "/";
    if (loading) return <div className="loading-screen">Sawaed</div>;
    if (normalizedPath === "/dashboard") return <AdminDashboard initialContent={content} setPublicContent={setContent} />;
    if (normalizedPath === "/offers") return <OffersPage content={content} />;
    return <LandingPage content={content} />;
  }, [content, loading, path, setContent]);

  return page;
}
