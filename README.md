# Sawaed Commercial Website

موقع تجاري كامل لسواعد مع واجهة 3D، صفحات عروض وتواصل، ولوحة تحكم لتعديل المحتوى والأسعار والعروض.

## التشغيل المحلي

```bash
npm install
npm run dev
```

أو على ويندوز اضغط مرتين على:

```text
start-local.bat
```

الرابط المحلي:

```text
http://127.0.0.1:4173
```

لوحة التحكم:

```text
http://127.0.0.1:4173/dashboard
```

بيانات الدخول الافتراضية محليًا:

```text
user: Admin أو admin أو Mohammad
pass: Omega@2022@M
```

غيّرها على Render من Environment Variables باسم `ADMIN_PASSWORD` و`ADMIN_USERS`.

## الرفع على GitHub ثم Render

1. ارفع مجلد المشروع على GitHub.
2. من Render اختر New Web Service.
3. اربط الريبو.
4. استخدم الإعدادات الموجودة في `render.yaml`.
5. أضف Environment Variable:

```text
ADMIN_PASSWORD=كلمة_مرور_قوية
ADMIN_USERS=Admin,admin,Mohammad
```

اختياريًا، أضف رابط الموقع النهائي لتحسين `canonical` و`sitemap`:

```text
PUBLIC_SITE_URL=https://your-render-domain.onrender.com
```

## تعديل المحتوى

من `/dashboard` تستطيع تعديل:

- النص الرئيسي.
- واتساب ومعلومات التواصل.
- المهن.
- العروض والأسعار وإظهار/إخفاء الأسعار.
- الأسئلة الشائعة.
- محتوى التقارير والخطوات.

## ملاحظة التخزين على Render

المحتوى يُحفظ في `data/site-content.json`. إذا أردت بقاء التعديلات بعد إعادة النشر أو إعادة تشغيل الخدمة لفترات طويلة، استخدم Render Disk أو اربط قاعدة بيانات لاحقًا.
