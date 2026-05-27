# CV Harta Dwi Jaya — Website Blueprint v2.0
**Architect & Contractor | Bali, Indonesia**
*Master document: Content · Design System · Tech Spec · SEO · Developer Handoff*
*Versi: 2.0 | Updated: 2025 | Stack: Next.js 14 / Vite + React*

---

## DAFTAR ISI

1. [Tech Stack & Setup](#1-tech-stack--setup)
2. [Struktur Folder Proyek](#2-struktur-folder-proyek)
3. [Metadata & SEO](#3-metadata--seo)
4. [Design System](#4-design-system)
5. [Komponen Global](#5-komponen-global)
6. [Halaman Utama — Section by Section](#6-halaman-utama--section-by-section)
7. [WhatsApp Bubble](#7-whatsapp-bubble)
8. [Animasi & Interaksi](#8-animasi--interaksi)
9. [Performa & Aksesibilitas](#9-performa--aksesibilitas)
10. [Checklist Pre-Launch](#10-checklist-pre-launch)

---

## 1. TECH STACK & SETUP

### Rekomendasi Stack (Pilih Salah Satu)

#### Opsi A — Next.js 14 (Direkomendasikan untuk SEO terbaik)
```
Framework     : Next.js 14 (App Router)
Runtime       : Node.js ≥ 18.17
Package Manager: pnpm (lebih cepat) atau npm
Styling       : Tailwind CSS v3
Animasi       : Framer Motion
Icons         : Lucide React
Font Loader   : next/font (Google Fonts — zero layout shift)
Image         : next/image (otomatis WebP + lazy load)
Form          : React Hook Form + Zod
SEO           : next-seo atau native Next.js metadata API
Sitemap       : next-sitemap
Analytics     : @next/third-parties (Google Analytics 4)
Dev Server    : npm run dev  /  pnpm run dev  → http://localhost:3000
Build         : npm run build / pnpm run build
```

#### Opsi B — Vite + React (Lebih ringan, SPA)
```
Framework     : Vite 5 + React 18
Package Manager: pnpm atau npm
Styling       : Tailwind CSS v3
Animasi       : Framer Motion
Icons         : Lucide React
Font          : Google Fonts via @fontsource atau CDN link
Image         : Lazy loading native + intersection observer
Form          : React Hook Form + Zod
SEO           : React Helmet Async
Dev Server    : npm run dev  /  pnpm run dev  → http://localhost:5173
Build         : npm run build / pnpm run build
```

### Dependencies Wajib (berlaku kedua opsi)
```
dependencies:
  - framer-motion           ← animasi scroll, hover, transisi halaman
  - lucide-react            ← ikon SVG ringan & konsisten
  - react-hook-form         ← form kontak (validasi client-side)
  - zod                     ← validasi schema form
  - @hookform/resolvers     ← integrasi zod + react-hook-form
  - react-intersection-observer  ← trigger animasi saat scroll
  - swiper                  ← slider testimoni & portofolio mobile
  - clsx                    ← conditional class utility
  - tailwind-merge          ← merge Tailwind classes tanpa konflik

devDependencies:
  - tailwindcss
  - autoprefixer
  - postcss
  - @types/react (jika TypeScript)
  - eslint + eslint-config-next (Next.js) / eslint-plugin-react (Vite)
  - prettier
```

### Perintah Instalasi Cepat
```
# Opsi A — Next.js
pnpm create next-app@latest harta-dwi-jaya --typescript --tailwind --app --src-dir
cd harta-dwi-jaya
pnpm add framer-motion lucide-react react-hook-form zod @hookform/resolvers react-intersection-observer swiper clsx tailwind-merge

# Opsi B — Vite
pnpm create vite@latest harta-dwi-jaya -- --template react-ts
cd harta-dwi-jaya
pnpm install
pnpm add framer-motion lucide-react react-hook-form zod @hookform/resolvers react-intersection-observer swiper clsx tailwind-merge react-helmet-async
```

---

## 2. STRUKTUR FOLDER PROYEK

### Next.js 14 (App Router)
```
harta-dwi-jaya/
├── public/
│   ├── favicon.ico
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── apple-touch-icon.png
│   ├── og-image.jpg              ← 1200×630px untuk Open Graph
│   ├── robots.txt
│   └── sitemap.xml               ← di-generate otomatis via next-sitemap
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            ← Root layout: font, metadata, analytics
│   │   ├── page.tsx              ← Halaman utama (single page)
│   │   ├── globals.css           ← CSS variables + Tailwind base
│   │   └── sitemap.ts            ← Dynamic sitemap generator
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CtaBanner.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── SectionLabel.tsx
│   │   │   ├── AnimatedSection.tsx   ← wrapper fade-in on scroll
│   │   │   ├── StatCounter.tsx       ← angka animasi count-up
│   │   │   └── WhatsAppBubble.tsx    ← floating WA button
│   │   │
│   │   └── seo/
│   │       └── JsonLd.tsx            ← Schema.org LocalBusiness
│   │
│   ├── data/
│   │   ├── services.ts           ← data kartu layanan
│   │   ├── portfolio.ts          ← data foto + label portofolio
│   │   ├── testimonials.ts       ← data testimoni
│   │   └── process.ts            ← data langkah proses
│   │
│   ├── hooks/
│   │   ├── useScrolled.ts        ← detect scroll untuk navbar
│   │   └── useCountUp.ts         ← animasi angka statistik
│   │
│   ├── lib/
│   │   └── utils.ts              ← helper: cn(), formatPhone(), dll
│   │
│   └── types/
│       └── index.ts              ← TypeScript interfaces
│
├── .env.local                    ← variabel environment (GA ID, WA number)
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

### Environment Variables (.env.local)
```
NEXT_PUBLIC_WA_NUMBER=628xxxxxxxxxx       ← nomor WA tanpa + (contoh: 6281234567890)
NEXT_PUBLIC_WA_MESSAGE=Halo, saya ingin konsultasi mengenai proyek bangunan
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?...
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX           ← Google Analytics 4 Measurement ID
NEXT_PUBLIC_SITE_URL=https://hartadwijaya.com
```

---

## 3. METADATA & SEO

### Head / Metadata Lengkap
```
Title (Primary)    : CV Harta Dwi Jaya | Arsitek & Kontraktor Profesional di Bali
Title Template     : %s | CV Harta Dwi Jaya
Meta Description   : Wujudkan hunian dan villa impian Anda bersama CV Harta Dwi Jaya — jasa arsitektur dan kontraktor profesional di Bali. Lebih dari 10 tahun pengalaman, 100+ proyek selesai, konsultasi pertama gratis.
Meta Keywords      : arsitek bali, kontraktor bali, jasa bangun rumah bali, desain arsitektur bali, kontraktor villa bali, CV Harta Dwi Jaya, renovasi bali, desain interior bali
Canonical URL      : https://hartadwijaya.com
Robots             : index, follow
Language           : id
Charset            : UTF-8
Viewport           : width=device-width, initial-scale=1
Theme Color        : #1A1A2E
```

### Open Graph (Facebook / WhatsApp / LinkedIn Preview)
```
og:type            : website
og:url             : https://hartadwijaya.com
og:title           : CV Harta Dwi Jaya | Arsitek & Kontraktor Profesional di Bali
og:description     : Wujudkan hunian dan villa impian Anda bersama CV Harta Dwi Jaya — jasa arsitektur dan kontraktor profesional di Bali.
og:image           : https://hartadwijaya.com/og-image.jpg   ← 1200×630px
og:image:width     : 1200
og:image:height    : 630
og:locale          : id_ID
og:site_name       : CV Harta Dwi Jaya
```

### Twitter Card
```
twitter:card       : summary_large_image
twitter:title      : CV Harta Dwi Jaya | Arsitek & Kontraktor Profesional di Bali
twitter:description: Jasa arsitektur dan kontraktor profesional di Bali. Konsultasi pertama gratis.
twitter:image      : https://hartadwijaya.com/og-image.jpg
```

### Favicon Set
```
/public/favicon.ico             ← 16×16 + 32×32 multi-size ICO
/public/favicon-16x16.png
/public/favicon-32x32.png
/public/apple-touch-icon.png    ← 180×180px untuk iOS
/public/android-chrome-192.png  ← 192×192 untuk Android
/public/android-chrome-512.png  ← 512×512 untuk PWA splash
/public/site.webmanifest        ← PWA manifest (opsional)
```

### Schema.org — JSON-LD (LocalBusiness)
Render sebagai komponen `<JsonLd />` di dalam `<head>`, invisible bagi user:
```
@context          : https://schema.org
@type             : LocalBusiness  (+ subtype: GeneralContractor)
name              : CV Harta Dwi Jaya
description       : Jasa arsitektur dan kontraktor profesional di Bali, Indonesia.
url               : https://hartadwijaya.com
telephone         : [nomor telepon aktual]
email             : [email aktual]
address:
  @type           : PostalAddress
  addressLocality : Bali
  addressRegion   : Bali
  addressCountry  : ID
geo:
  @type           : GeoCoordinates
  latitude        : [lat dari Google Maps]
  longitude       : [lng dari Google Maps]
openingHours      : Mo-Sa 08:00-17:00
image             : https://hartadwijaya.com/og-image.jpg
sameAs:
  - [URL Instagram]
  - [URL Facebook]
  - [URL Google Maps Business]
hasMap            : https://maps.app.goo.gl/hC1CMJZjtjfsXhZF7
priceRange        : Rp Rp
areaServed        : Bali, Indonesia
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://hartadwijaya.com/sitemap.xml
```

### sitemap.xml (Struktur)
```xml
<urlset>
  <url>
    <loc>https://hartadwijaya.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 4. DESIGN SYSTEM

### 4.1 Filosofi Visual
```
Konsep       : "Bali Luxury Modern" — keanggunan tropis bertemu presisi kontemporer
Mood         : Gelap, berat, mewah (dark-first) dengan aksen emas hangat
Referensi    : Aman Resorts · COMO Hotels · high-end Bali villa branding
Anti-pattern : Hindari warna pastel muda, template korporat biru-putih, padding terlalu ketat
```

### 4.2 Color Palette
```css
/* ─── WARNA UTAMA ─── */
--color-dark-base       : #0D0D14;   /* Hitam tinta — background utama dark sections */
--color-dark-surface    : #14141F;   /* Surface card di dark bg */
--color-dark-border     : #1E1E2E;   /* Border subtle di dark */

--color-light-base      : #F5F1EA;   /* Krem hangat — background light sections */
--color-light-surface   : #FFFFFF;   /* Surface card di light bg */

/* ─── AKSEN MEWAH ─── */
--color-gold-primary    : #C8A96E;   /* Gold utama — CTA, highlight, aksen premium */
--color-gold-light      : #E2C98A;   /* Gold terang — hover state */
--color-gold-dark       : #A08050;   /* Gold gelap — border, shadow subtle */
--color-gold-muted      : rgba(200, 169, 110, 0.15);  /* Gold sangat transparan — card bg */

/* ─── TEKS ─── */
--color-text-on-dark    : #F0EBE0;   /* Teks utama di atas bg gelap */
--color-text-muted-dark : #8B8B9A;   /* Subtext di dark */
--color-text-on-light   : #1A1A2E;   /* Teks utama di atas bg terang */
--color-text-muted-light: #6B6577;   /* Subtext di light */

/* ─── FUNGSIONAL ─── */
--color-success         : #4CAF7D;
--color-error           : #E05555;
--color-overlay-hero    : linear-gradient(
  to bottom,
  rgba(13, 13, 20, 0.35) 0%,
  rgba(13, 13, 20, 0.65) 60%,
  rgba(13, 13, 20, 0.90) 100%
);
--color-whatsapp        : #25D366;
--color-whatsapp-dark   : #128C7E;
```

### 4.3 Tipografi
```css
/* ─── FONT FAMILY ─── */
--font-display  : 'Cormorant Garamond', serif;
/* Digunakan: H1 hero, H2 section headline — karakter, anggun, luxury */
/* Google Fonts: weights 400, 500, 600, 700 — subset latin */

--font-heading  : 'Raleway', sans-serif;
/* Digunakan: H3 card title, navbar brand — modern, tegas */
/* Google Fonts: weights 400, 500, 600, 700, 800 */

--font-body     : 'Jost', sans-serif;
/* Digunakan: body text, form, caption — clean, legible di mobile */
/* Google Fonts: weights 300, 400, 500 */

--font-label    : 'Raleway', sans-serif;
/* Digunakan: section label uppercase, badge — spasi lebar */

/* ─── SKALA UKURAN (fluid/responsive) ─── */
--text-display  : clamp(3.2rem, 7vw, 6.5rem);  /* Hero H1 */
--text-h2       : clamp(2.2rem, 4.5vw, 3.8rem); /* Section headline */
--text-h3       : clamp(1.3rem, 2.5vw, 1.8rem); /* Card title */
--text-body-lg  : clamp(1rem, 1.5vw, 1.2rem);   /* Lead paragraph */
--text-body     : 1rem;       /* 16px — body standar */
--text-sm       : 0.875rem;   /* 14px — caption, meta */
--text-xs       : 0.75rem;    /* 12px — label uppercase */

/* ─── LINE HEIGHT ─── */
--leading-tight  : 1.15;  /* Headline besar */
--leading-snug   : 1.4;   /* Subheadline */
--leading-normal : 1.6;   /* Body */
--leading-relaxed: 1.75;  /* Body panjang */

/* ─── LETTER SPACING ─── */
--tracking-tight : -0.02em;   /* Headline display */
--tracking-normal: 0;
--tracking-wide  : 0.08em;    /* Label uppercase */
--tracking-wider : 0.15em;    /* Badge, tag */
```

### 4.4 Spacing & Layout
```css
/* ─── CONTAINER ─── */
--container-max     : 1280px;
--container-padding : clamp(1.25rem, 5vw, 5rem);  /* Padding kiri-kanan */

/* ─── SECTION PADDING ─── */
--section-py        : clamp(4.5rem, 9vw, 8rem);   /* Padding atas-bawah section */

/* ─── GRID ─── */
--grid-gap          : clamp(1rem, 2.5vw, 1.75rem);

/* ─── BORDER RADIUS ─── */
--radius-sm   : 6px;
--radius-md   : 12px;
--radius-lg   : 20px;
--radius-xl   : 32px;
--radius-pill : 9999px;

/* ─── SHADOW ─── */
--shadow-card     : 0 2px 16px rgba(13, 13, 20, 0.12);
--shadow-card-lg  : 0 8px 40px rgba(13, 13, 20, 0.20);
--shadow-gold     : 0 4px 24px rgba(200, 169, 110, 0.25);
--shadow-gold-lg  : 0 8px 48px rgba(200, 169, 110, 0.35);
--shadow-float    : 0 16px 64px rgba(13, 13, 20, 0.30);

/* ─── TRANSITION ─── */
--ease-smooth : cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce : cubic-bezier(0.34, 1.56, 0.64, 1);
--duration-fast   : 180ms;
--duration-base   : 280ms;
--duration-slow   : 500ms;
--duration-slower : 800ms;
```

### 4.5 Breakpoints (Tailwind Custom)
```
xs      : 375px    ← small mobile
sm      : 640px    ← mobile landscape
md      : 768px    ← tablet portrait
lg      : 1024px   ← tablet landscape / small desktop
xl      : 1280px   ← desktop
2xl     : 1536px   ← wide desktop
```

### 4.6 Komponen UI Atom

#### Button — Varian
```
PRIMARY (Gold Filled):
  Background    : var(--color-gold-primary)
  Text          : var(--color-dark-base)
  Font          : Raleway 600, uppercase, tracking wide
  Padding       : 14px 32px
  Border Radius : var(--radius-pill)
  Hover         : Background → var(--color-gold-light), shadow gold naik
  Active        : Scale 0.98

SECONDARY (Outlined Gold):
  Background    : transparent
  Border        : 1.5px solid var(--color-gold-primary)
  Text          : var(--color-gold-primary)
  Hover         : Background → var(--color-gold-muted)

GHOST (Dark BG teks putih):
  Background    : transparent
  Text          : var(--color-text-on-dark)
  Hover         : Text → gold, border-bottom 1px gold
```

#### Section Label (Eyebrow)
```
Format    : Teks pendek 2–4 kata, UPPERCASE, tracking wider
Font      : Raleway 600
Ukuran    : var(--text-xs)
Warna     : var(--color-gold-primary)
Dekorasi  : Garis horizontal pendek (—) di kiri atau kanan, warna gold
Contoh    : "— TENTANG KAMI —"  atau  "✦ PORTOFOLIO ✦"
```

---

## 5. KOMPONEN GLOBAL

### 5.1 Navbar

#### Behavior
```
State Default (Top halaman):
  Background    : transparent
  Teks Logo     : Putih
  Menu Items    : Putih, opacity 0.85
  Border Bottom : Tidak ada

State Scrolled (scroll > 80px):
  Background    : rgba(13, 13, 20, 0.95) + backdrop-blur: 16px
  Teks Logo     : Putih + gold accent
  Menu Items    : Putih
  Border Bottom : 1px solid rgba(200, 169, 110, 0.15)
  Transisi      : background 0.35s ease, backdrop-filter 0.35s ease

State Mobile (< 768px):
  Hamburger icon (3 garis) — ikon lucide: Menu / X
  Drawer slide-in dari kanan (fullscreen overlay dark)
  Drawer Background: rgba(13, 13, 20, 0.98) backdrop-blur
  Menu items besar, stacked, dengan stagger animation masuk
```

#### Konten
```
KIRI — Logo:
  Line 1: "HARTA DWI JAYA"   — Raleway 700, uppercase, tracking wide, putih
  Line 2: "Architect & Contractor · Bali"  — Jost 400, xs, gold muted

TENGAH — Menu (desktop only):
  Beranda       → href="#beranda"     (anchor smooth scroll)
  Tentang Kami  → href="#tentang"
  Layanan       → href="#layanan"
  Portofolio    → href="#portofolio"
  Kontak        → href="#kontak"

  Hover style: garis bawah gold 2px, slide-in dari kiri
  Active style: teks gold (section yang sedang aktif di viewport)

KANAN — CTA:
  Tombol: [ Konsultasi Gratis ]
  Style: Button PRIMARY (gold pill)
  Mobile: Tersembunyi di navbar, muncul di drawer
```

---

### 5.2 Footer

#### Layout
```
Grid 4 kolom (desktop)  →  2 kolom (tablet)  →  1 kolom (mobile)
Background: var(--color-dark-base)
Border Top: 1px solid var(--color-gold-dark)
Padding: section-py
```

#### Konten
```
KOLOM 1 — Brand (lebar: 30%)
  Logo text: "CV HARTA DWI JAYA"  [Cormorant Garamond, 1.5rem, gold]
  Tagline: "Architect & Contractor"  [Jost, sm, muted]
  Deskripsi:
    "Menghadirkan arsitektur dan konstruksi berkualitas tinggi
     dengan sentuhan estetika khas Bali. Kami membangun bukan
     hanya bangunan — tapi warisan."
  Sosial Media (icon row, gap 16px):
    - Instagram  → [URL Instagram]  (ikon: lucide Instagram)
    - Facebook   → [URL Facebook]   (ikon: lucide Facebook)
    - WhatsApp   → https://wa.me/[NEXT_PUBLIC_WA_NUMBER]  (ikon: custom WA)
    - Google Maps→ https://maps.app.goo.gl/hC1CMJZjtjfsXhZF7

KOLOM 2 — Navigasi Cepat
  Judul: "NAVIGASI"  [label uppercase gold]
  Links:
    - Beranda
    - Tentang Kami
    - Layanan
    - Portofolio
    - Kontak
  Hover: text → gold, translate-x 4px

KOLOM 3 — Layanan
  Judul: "LAYANAN"  [label uppercase gold]
  Links:
    - Desain Arsitektur
    - Konstruksi & Kontraktor
    - Renovasi & Restorasi
    - Visualisasi 3D
    - Desain Interior & Lansekap
    - Perencanaan & IMB

KOLOM 4 — Kontak
  Judul: "KONTAK"  [label uppercase gold]
  Items (ikon Lucide + teks):
    📍 Bali, Indonesia
       [Lihat Lokasi →] → https://maps.app.goo.gl/hC1CMJZjtjfsXhZF7
    📞 [Nomor Telepon Aktual]
    📧 [Email Aktual]
    🕐 Senin – Sabtu  08.00 – 17.00 WITA

BOTTOM BAR (full width, border-top gold muted):
  Kiri  : © 2025 CV Harta Dwi Jaya. Semua hak dilindungi.
  Kanan : Bali, Indonesia
  Font  : Jost, xs, muted
  Mobile: Center align, stacked
```

---

## 6. HALAMAN UTAMA — SECTION BY SECTION

Urutan render (atas → bawah):
```
[Navbar]
 ↓  Section 1: Hero
 ↓  Section 2: Tentang Kami
 ↓  Section 3: Layanan
 ↓  Section 4: Portofolio
 ↓  Section 5: Proses Kerja
 ↓  Section 6: Testimoni
 ↓  Section 7: CTA Banner
 ↓  Section 8: Kontak & Peta
[Footer]
[WhatsApp Bubble — fixed]
```

---

### SECTION 1 — HERO

**id:** `#beranda`
**Background:** Dark (foto + overlay gradient)
**Tinggi:** `100vh` (min-height: 100svh untuk mobile browser toolbar)

#### Layout
```
Foto Background: Parallax subtle (translateY saat scroll, efek depth)
Overlay: var(--color-overlay-hero) — gradasi gelap bawah lebih pekat
Konten: Absolute center — flex column, align-center atau align-start (kiri)
```

#### Foto Background (Slideshow / Ken Burns)
```
Slideshow otomatis 5 detik, cross-fade 1.5s:
  Slide 1: https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_2_ok38cd.webp
  Slide 2: https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_7_f87bdr.webp
  Slide 3: https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_3_wyj3bi.webp
Ken Burns per slide: slow zoom-in scale(1.0) → scale(1.08), duration 8s
Fallback statis (jika JS off): Slide 1
```

#### Konten
```
BADGE (atas, masuk pertama — fade down):
  "✦  Arsitek & Kontraktor Terpercaya di Bali  ✦"
  Background: rgba(200, 169, 110, 0.12)
  Border: 1px solid rgba(200, 169, 110, 0.40)
  Border-radius: pill
  Teks: Jost 500, xs, gold, tracking wider

HEADLINE H1 (masuk kedua — fade up, delay 150ms):
  "Membangun Visi,"
  "Melampaui Ekspektasi."
  Font: Cormorant Garamond 600, var(--text-display)
  Warna: #F0EBE0
  Line-height: var(--leading-tight)
  Letter-spacing: var(--tracking-tight)
  "Ekspektasi." — kata ini: warna var(--color-gold-primary), italic

SUBHEADLINE (masuk ketiga — fade up, delay 300ms):
  "Kami menghadirkan solusi arsitektur dan konstruksi kelas atas
   yang mencerminkan keindahan, ketahanan, dan karakter unik setiap klien."
  Font: Jost 300, var(--text-body-lg)
  Warna: rgba(240, 235, 224, 0.80)
  Max-width: 580px

CTA ROW (masuk keempat — fade up, delay 450ms):
  [ Lihat Portofolio ]   → Button PRIMARY  → anchor #portofolio
  [ Konsultasi Gratis ]  → Button SECONDARY (gold outline, teks putih)  → anchor #kontak
  Gap antar button: 16px
  Mobile: stacked, full-width

TRUST STRIP (masuk kelima — fade up, delay 600ms):
  Background: rgba(13, 13, 20, 0.40), backdrop-blur 8px
  Border-top: 1px solid rgba(200, 169, 110, 0.20)
  Padding: 20px 0
  Position: Absolute bottom 0, full width
  Layout: Flex row, space-evenly, dengan divider vertikal gold muted
  Items (3 buah):
    ✦  10+ Tahun Pengalaman
    ✦  100+ Proyek Selesai
    ✦  50+ Klien Puas
  Font: Raleway 600, sm, putih
  "10+" / "100+" / "50+" — ukuran lebih besar, warna gold
  Mobile: scroll horizontal atau stacked 1 kolom
```

#### Scroll Indicator
```
Position: Absolute bottom 90px, center horizontal
Animasi: Bounce up-down infinite (lucide ChevronDown atau ikon mouse)
Warna: gold, opacity 0.6
```

---

### SECTION 2 — TENTANG KAMI

**id:** `#tentang`
**Background:** Light (var(--color-light-base))

#### Layout
```
Desktop: Grid 2 kolom — Teks 55% (kiri) · Foto 45% (kanan)
Tablet : Grid 2 kolom compressed
Mobile : Foto atas (full width, rounded-xl) → Teks bawah
```

#### Konten — Teks (Kiri)
```
LABEL: "— TENTANG KAMI —"  [section label gold]

HEADLINE H2:
  "Dibangun di Atas"
  "Dedikasi & Keahlian."
  Font: Cormorant Garamond 600, var(--text-h2)
  Warna: var(--color-text-on-light)
  "Keahlian." — italic, gold

BODY COPY (paragraf 1):
  CV Harta Dwi Jaya adalah perusahaan arsitektur dan kontraktor yang berbasis
  di Bali, berdiri dengan satu visi: menghadirkan bangunan berkualitas tinggi
  yang mencerminkan karakter, keindahan, dan ketahanan jangka panjang.

BODY COPY (paragraf 2):
  Dengan tim profesional yang berpengalaman di bidang desain, struktur, dan
  manajemen proyek, kami menangani setiap pekerjaan — dari tahap perencanaan
  hingga finishing akhir — dengan standar eksekusi yang tidak pernah kami
  kompromikan.

BODY COPY (paragraf 3):
  Kami percaya bahwa setiap ruang memiliki cerita. Tugas kami adalah
  menceritakannya melalui arsitektur yang indah dan konstruksi yang solid.

STAT ROW (3 kolom, gap 32px, border-top gold muted, padding-top 32px):
  ┌──────────────┬──────────────┬──────────────┐
  │  10+         │  100+        │  50+         │
  │  Tahun       │  Proyek      │  Klien       │
  │  Pengalaman  │  Diselesaikan│  Puas        │
  └──────────────┴──────────────┴──────────────┘
  Angka: Cormorant Garamond 700, 2.8rem, gold — animasi count-up saat masuk viewport
  Label: Jost 400, sm, muted
  Divider: border-right 1px solid var(--color-gold-dark) (kecuali kolom terakhir)

CTA LINK:
  "Kenali Tim Kami →"  → anchor #kontak
  Warna: gold, Raleway 600, sm
  Underline slide-in from left on hover
```

#### Konten — Foto (Kanan)
```
Foto utama: https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_1_sx4io4.webp
Ukuran: 100% width, aspect-ratio 4/5 (portrait)
Border-radius: var(--radius-lg)
Object-fit: cover
Box-shadow: var(--shadow-card-lg)

Foto aksen (floating badge di pojok kiri bawah, overlap):
  Background: var(--color-dark-base)
  Padding: 16px 20px
  Border-radius: var(--radius-md)
  Border-left: 3px solid var(--color-gold-primary)
  Konten:
    "Berpengalaman" — Jost 400, xs, gold
    "Sejak 2010"    — Raleway 700, 1.5rem, putih
  Box-shadow: var(--shadow-float)
  Animasi: Fade in delay 400ms + float subtle (translateY ±6px, 4s infinite)
```

---

### SECTION 3 — LAYANAN

**id:** `#layanan`
**Background:** Dark (var(--color-dark-base))

#### Layout
```
Header section: center
Grid kartu: 3 kolom (desktop) · 2 kolom (tablet) · 1 kolom (mobile)
Gap: var(--grid-gap)
```

#### Header
```
LABEL: "✦  LAYANAN KAMI  ✦"  [section label, center]

HEADLINE H2:
  "Solusi Lengkap untuk"
  "Setiap Kebutuhan Bangunan Anda"
  Font: Cormorant Garamond 600, var(--text-h2), putih, center
  Max-width: 700px, margin: 0 auto

SUBTEXT:
  "Dari konsep awal hingga serah terima kunci — kami hadir di setiap tahap."
  Font: Jost 300, body-lg, text-muted-dark, center
```

#### Data Kartu Layanan (6 kartu)
```
KARTU 1:
  Ikon      : Lucide — PenLine (atau Ruler)
  Judul     : Desain Arsitektur
  Deskripsi : Kami merancang bangunan yang tidak hanya estetis, tetapi juga fungsional dan selaras dengan lingkungan Bali. Dari konsep awal hingga gambar kerja lengkap siap bangun.
  CTA hover : "Pelajari →"

KARTU 2:
  Ikon      : Lucide — HardHat
  Judul     : Konstruksi & Kontraktor
  Deskripsi : Eksekusi pembangunan dengan material terpilih, tenaga ahli bersertifikat, dan pengawasan ketat setiap tahapan. Tepat waktu, tepat anggaran.
  CTA hover : "Pelajari →"

KARTU 3:
  Ikon      : Lucide — Hammer
  Judul     : Renovasi & Restorasi
  Deskripsi : Perbarui, perkuat, dan perindah bangunan Anda yang sudah ada. Kami menangani renovasi skala kecil hingga total overhaul.
  CTA hover : "Pelajari →"

KARTU 4:
  Ikon      : Lucide — FileCheck
  Judul     : Perencanaan & IMB / PBG
  Deskripsi : Konsultasi tata ruang, kebutuhan lahan, dan pengurusan izin bangunan agar proyek Anda berjalan legal dan lancar sejak awal.
  CTA hover : "Pelajari →"

KARTU 5:
  Ikon      : Lucide — Boxes (atau Monitor)
  Judul     : Visualisasi 3D & Rendering
  Deskripsi : Lihat bangunan Anda sebelum dibangun. Rendering 3D fotorealistis membantu Anda membuat keputusan desain dengan percaya diri.
  CTA hover : "Pelajari →"

KARTU 6:
  Ikon      : Lucide — Sofa
  Judul     : Desain Interior & Lansekap
  Deskripsi : Lengkapi bangunan dengan sentuhan interior harmonis dan taman yang mencerminkan jiwa tropis Bali yang autentik dan elegan.
  CTA hover : "Pelajari →"
```

#### Desain Kartu
```
Background    : var(--color-dark-surface)
Border        : 1px solid var(--color-dark-border)
Border-radius : var(--radius-lg)
Padding       : 32px 28px
Transition    : border-color, transform, box-shadow  0.3s ease

Ikon container:
  Background  : var(--color-gold-muted)
  Border-radius: var(--radius-md)
  Width/Height: 52px × 52px
  Ikon warna  : var(--color-gold-primary)
  Margin-bottom: 20px

Judul kartu:
  Font        : Raleway 600, var(--text-h3), putih

Deskripsi:
  Font        : Jost 400, sm, var(--color-text-muted-dark)
  Margin-top  : 10px

Hover state kartu:
  Border-color: var(--color-gold-primary)
  Transform   : translateY(-4px)
  Box-shadow  : var(--shadow-gold)
  CTA link    : fade in (muncul hanya saat hover)

Animasi masuk: Stagger 0.1s per kartu, fade-up
```

---

### SECTION 4 — PORTOFOLIO

**id:** `#portofolio`
**Background:** Light (var(--color-light-base))

#### Layout
```
Desktop: Masonry grid 3 kolom (kolom tengah sedikit lebih tinggi untuk variasi)
Tablet : 2 kolom masonry
Mobile : 1 kolom, stack vertikal

Lightbox: Klik foto → full-screen overlay foto + navigasi panah kiri/kanan
```

#### Header
```
LABEL: "— PORTOFOLIO —"  [center]

HEADLINE H2:
  "Karya Kami Berbicara"
  "Lebih Keras dari Kata-Kata"
  Font: Cormorant Garamond 600, center

SUBTEXT:
  "Setiap proyek adalah cerminan komitmen kami terhadap kualitas,
   keindahan, dan ketepatan waktu."
  Font: Jost 300, center, muted
```

#### Data Foto (12 item)
```yaml
item_01:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_2_ok38cd.webp
  alt    : Eksterior bangunan modern — CV Harta Dwi Jaya Bali
  label  : Hunian Modern
  kategori: Residensial
  grid   : tall  ← kartu tinggi (span 2 baris)

item_02:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_6_sp5xs8.webp
  alt    : Detail finishing eksterior proyek Bali
  label  : Detail & Finishing
  kategori: Detail
  grid   : normal

item_03:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_7_f87bdr.webp
  alt    : Proyek arsitektur tropis Bali
  label  : Arsitektur Tropis
  kategori: Residensial
  grid   : normal

item_04:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_3_wyj3bi.webp
  alt    : Konstruksi bangunan tahap struktur
  label  : Konstruksi Struktur
  kategori: Konstruksi
  grid   : normal

item_05:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/2021-04-14_khhods.webp
  alt    : Proyek Bali April 2021
  label  : In Progress 2021
  kategori: Konstruksi
  grid   : tall

item_06:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_5_r0xoai.webp
  alt    : Fasad bangunan selesai
  label  : Fasad Selesai
  kategori: Residensial
  grid   : normal

item_07:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_1_sx4io4.webp
  alt    : Eksterior proyek residensial Bali
  label  : Residensial
  kategori: Residensial
  grid   : normal

item_08:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/2021-04-14_4_kyecgd.webp
  alt    : Dokumentasi proyek April 2021
  label  : Proyek 2021
  kategori: Konstruksi
  grid   : normal

item_09:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/2021-04-17_ej1spq.webp
  alt    : Proyek konstruksi aktif April 2021
  label  : Konstruksi Aktif
  kategori: Konstruksi
  grid   : normal

item_10:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906433/2021-04-14_3_ou30j6.webp
  alt    : Tampak bangunan proyek Bali
  label  : Tampak Bangunan
  kategori: Residensial
  grid   : normal

item_11:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906433/unnamed_4_nt2jsn.webp
  alt    : Detail eksterior dan material bangunan
  label  : Detail Material
  kategori: Detail
  grid   : tall

item_12:
  url    : https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906433/2021-04-14_2_nbbc2l.webp
  alt    : Proyek selesai CV Harta Dwi Jaya Bali
  label  : Proyek Selesai
  kategori: Residensial
  grid   : normal
```

#### Desain Item Foto
```
Border-radius  : var(--radius-lg)
Overflow       : hidden
Position       : relative
Cursor         : pointer

Overlay hover (absolute fill, fade in 0.3s):
  Background   : rgba(13, 13, 20, 0.65)
  Konten center:
    Label teks : Raleway 600, sm, uppercase, putih, tracking wide
    Ikon       : Lucide ZoomIn, putih

Animasi masuk  : Stagger 0.08s per item, fade-up + scale(0.97)→scale(1)

Lightbox library: react-image-gallery  ATAU  custom dengan Framer Motion AnimatePresence
```

---

### SECTION 5 — PROSES KERJA

**id:** `#proses`
**Background:** Dark (var(--color-dark-base))

#### Layout
```
Desktop: Timeline horizontal — nomor + garis connector + konten bawah
Tablet : Timeline horizontal compressed
Mobile : Timeline vertikal — garis di kiri, konten di kanan
```

#### Header
```
LABEL: "✦  CARA KAMI BEKERJA  ✦"  [center, gold]

HEADLINE H2:
  "Proses Transparan dari"
  "Konsultasi hingga Serah Terima"
  Font: Cormorant Garamond, center, putih
```

#### Data Langkah (5 step)
```
STEP 1:
  Nomor : 01
  Ikon  : Lucide — MessageSquare
  Judul : Konsultasi Awal
  Teks  : Kami mendengarkan visi, kebutuhan, dan anggaran Anda secara mendalam. Tidak ada biaya untuk sesi konsultasi pertama.

STEP 2:
  Nomor : 02
  Ikon  : Lucide — PenTool
  Judul : Desain & Perencanaan
  Teks  : Tim arsitek kami menyusun konsep, gambar kerja detail, estimasi biaya, dan jadwal proyek yang terstruktur.

STEP 3:
  Nomor : 03
  Ikon  : Lucide — FileSignature
  Judul : Persetujuan & Kontrak
  Teks  : Anda menyetujui desain final dan kami formalkan kesepakatan secara transparan dan tertulis — tidak ada biaya tersembunyi.

STEP 4:
  Nomor : 04
  Ikon  : Lucide — Construction (atau HardHat)
  Judul : Konstruksi
  Teks  : Proses pembangunan berjalan dengan pengawasan penuh, laporan progres berkala, dan komunikasi terbuka setiap saat.

STEP 5:
  Nomor : 05
  Ikon  : Lucide — KeyRound
  Judul : Finishing & Serah Terima
  Teks  : Kami menyelesaikan setiap detail dengan teliti, melakukan inspeksi akhir bersama Anda, dan menyerahkan bangunan dalam kondisi sempurna.
```

#### Desain Timeline
```
Connector line (desktop): Garis horizontal, 1px, dashed, gold opacity 0.30
  Animate: Draw dari kiri ke kanan saat masuk viewport (stroke-dashoffset)

Nomor circle:
  Ukuran      : 48×48px
  Background  : var(--color-gold-muted)
  Border      : 1.5px solid var(--color-gold-primary)
  Teks        : Cormorant Garamond 600, 1.1rem, gold
  Hover/Active: Background gold solid, teks dark

Step card:
  Background  : var(--color-dark-surface)
  Border      : 1px solid var(--color-dark-border)
  Border-radius: var(--radius-md)
  Padding     : 24px 20px
  Max-width   : 220px (desktop)
  Hover       : border-color → gold muted, translateY(-3px)

Animasi: Stagger step, setiap item masuk dari bawah dengan delay 0.15s
```

---

### SECTION 6 — TESTIMONI

**id:** `#testimoni`
**Background:** Light (var(--color-light-base))

#### Layout
```
Desktop: Carousel 3 kartu terlihat sekaligus (active center lebih besar)
Tablet : Carousel 2 kartu
Mobile : Carousel 1 kartu, full-width
Library: Swiper.js (SwiperJS dengan loop, autoplay 5s, drag support)
```

#### Header
```
LABEL: "— TESTIMONI KLIEN —"  [center]

HEADLINE H2:
  "Kepercayaan Mereka adalah"
  "Kebanggaan Kami"
  Font: Cormorant Garamond 600, center

Bintang dekoratif: ★★★★★ — gold, besar, center, di atas headline
```

#### Data Testimoni (3 item)
```
TESTIMONI 1:
  Rating : ★★★★★
  Kutipan: "CV Harta Dwi Jaya mengubah lahan kosong kami menjadi villa yang melampaui semua ekspektasi. Prosesnya profesional, komunikasinya jelas, dan hasilnya sungguh luar biasa."
  Nama   : Budi Santoso
  Jabatan: Villa Owner
  Kota   : Seminyak, Bali
  Inisial: BS  (avatar placeholder — lingkaran gold bg, teks putih)

TESTIMONI 2:
  Rating : ★★★★★
  Kutipan: "Tim mereka sangat detail dan sabar dalam menjelaskan setiap tahapan. Proyek renovasi rumah kami selesai tepat waktu dan sesuai budget. Sangat direkomendasikan!"
  Nama   : Dewi Rahayu
  Jabatan: Homeowner
  Kota   : Denpasar, Bali
  Inisial: DR

TESTIMONI 3:
  Rating : ★★★★★
  Kutipan: "Desain arsitekturnya benar-benar mencerminkan jiwa Bali namun tetap modern dan fungsional. Banyak tamu villa kami yang memuji desainnya — semua berkat Harta Dwi Jaya."
  Nama   : Michael Tan
  Jabatan: Property Investor
  Kota   : Canggu, Bali
  Inisial: MT
```

#### Desain Kartu Testimoni
```
Background    : var(--color-light-surface)
Border-radius : var(--radius-lg)
Padding       : 36px 32px
Box-shadow    : var(--shadow-card)
Border        : 1px solid rgba(200, 169, 110, 0.15)

Tanda kutip dekoratif:
  "  (besar, 5rem, Cormorant Garamond, gold opacity 0.25)
  Position: absolute, top-left

Bintang rating:
  ★★★★★ — gold, gap 4px, margin-bottom 20px

Kutipan:
  Font: Jost 400, body, italic, var(--color-text-on-light)
  Line-height: var(--leading-relaxed)

Nama:
  Font: Raleway 700, sm, var(--color-text-on-light)
  Margin-top: 24px

Jabatan + Kota:
  Font: Jost 400, xs, var(--color-text-muted-light)

Avatar:
  Lingkaran 44px
  Background: var(--color-gold-primary)
  Teks inisial: Raleway 700, putih

Swiper navigation:
  Custom prev/next button — bulat, border gold, ikon ChevronLeft/Right (Lucide)
  Pagination dots — warna gold, active dot lebih besar
```

---

### SECTION 7 — CTA BANNER

**id:** `#cta`
**Background:** Foto proyek terbaik (item_01) + overlay gradasi sangat pekat

#### Layout
```
Full-width, padding vertical besar (80px desktop, 56px mobile)
Konten: center, max-width 700px
```

#### Konten
```
DEKORASI: Garis horizontal gold 60px, center, margin-bottom 20px

HEADLINE H2:
  "Siap Membangun"
  "Sesuatu yang Luar Biasa?"
  Font: Cormorant Garamond 700, var(--text-h2), putih
  "Luar Biasa?" — italic, gold

SUBTEXT:
  "Kami siap mendengar dan mewujudkan visi Anda.
   Konsultasi pertama gratis — tanpa kewajiban apapun."
  Font: Jost 300, body-lg, rgba(240,235,224,0.80)

CTA BUTTONS (center, gap 16px):
  [ Konsultasi Sekarang ]    → Button PRIMARY gold     → anchor #kontak
  [ Lihat Portofolio ]       → Button GHOST (outline putih)  → anchor #portofolio
  Mobile: stacked, full-width

DEKORASI bawah: Sama dengan atas
```

---

### SECTION 8 — KONTAK & PETA

**id:** `#kontak`
**Background:** Light (var(--color-light-base))

#### Layout
```
Desktop: Grid 2 kolom — Form kiri (55%) · Info + Peta kanan (45%)
Mobile : Info kontak → Form → Peta (stacked)
```

#### Header
```
LABEL: "— HUBUNGI KAMI —"  [center]

HEADLINE H2:
  "Mulai Proyek Anda"
  "Bersama Kami Hari Ini"
  Font: Cormorant Garamond 600, center

SUBTEXT:
  "Konsultasi pertama Anda gratis. Ceritakan visi Anda,
   dan tim kami siap membantu mewujudkannya."
  Font: Jost 300, center, muted
```

#### Form Kontak (Kiri)
```
Style form:
  Background   : var(--color-light-surface)
  Border       : 1px solid rgba(200,169,110,0.20)
  Border-radius: var(--radius-lg)
  Padding      : 40px 36px
  Box-shadow   : var(--shadow-card)

Input style:
  Background   : transparent
  Border-bottom: 1.5px solid rgba(26,26,46,0.15)  ← hanya border bawah (gaya mewah)
  Border-radius: 0
  Padding      : 12px 0
  Font         : Jost 400, body
  Focus state  : border-color gold, label float ke atas (floating label animation)

FIELD 1:
  Tipe      : text
  Name      : nama_lengkap
  Label     : Nama Lengkap
  Required  : Ya
  Validasi  : min 2 karakter

FIELD 2:
  Tipe      : tel
  Name      : nomor_wa
  Label     : Nomor WhatsApp / Telepon
  Required  : Ya
  Placeholder: +62 ...
  Validasi  : min 10 digit

FIELD 3:
  Tipe      : email
  Name      : email
  Label     : Email (opsional)
  Required  : Tidak

FIELD 4:
  Tipe      : select (custom styled)
  Name      : jenis_proyek
  Label     : Jenis Proyek
  Required  : Ya
  Options   :
    - Pilih jenis proyek...  (disabled, default)
    - Rumah Tinggal
    - Villa / Resort
    - Bangunan Komersial
    - Renovasi
    - Konsultasi Desain
    - Lainnya

FIELD 5:
  Tipe      : textarea
  Name      : pesan
  Label     : Ceritakan Proyek Anda
  Rows      : 4
  Required  : Tidak
  Placeholder: Deskripsikan lokasi, luas lahan, budget estimasi, dan keinginan Anda...

SUBMIT BUTTON:
  Teks        : [ Kirim Pesan → ]
  Style       : Button PRIMARY gold, full-width
  Loading state: Spinner + teks "Mengirim..."
  Success state: Ikon centang + "Pesan terkirim! Kami akan menghubungi Anda segera."
  Error state : Teks merah + "Gagal mengirim. Coba via WhatsApp di bawah."

Form action:
  Opsi A: mailto: (paling sederhana, tanpa backend)
  Opsi B: Formspree.io (free tier, no backend needed, recommended)
  Opsi C: Custom API route Next.js (advanced)
  Alternatif CTA bawah form:
    "Atau langsung chat kami di WhatsApp →"  [link ke WA]
```

#### Info Kontak (Kanan Atas)
```
Items (ikon Lucide + konten):

📍 Lokasi:
   Bali, Indonesia
   Teks link: "Lihat di Google Maps →"
   URL: https://maps.app.goo.gl/hC1CMJZjtjfsXhZF7

📞 Telepon / WhatsApp:
   [ISI NOMOR AKTUAL]
   Teks link: "Hubungi via WhatsApp →"  → href=https://wa.me/[WA_NUMBER]

📧 Email:
   [ISI EMAIL AKTUAL]
   Teks link: "Kirim Email →"  → href=mailto:[EMAIL]

🕐 Jam Operasional:
   Senin – Sabtu : 08.00 – 17.00 WITA
   Minggu        : Tutup
   Catatan       : Konsultasi via WhatsApp tetap tersedia

Desain item:
  Flex row, ikon gold 20px, gap 16px
  Divider: border-bottom 1px dashed rgba(200,169,110,0.15) per item
  Padding: 20px 0
```

#### Google Maps Embed (Kanan Bawah)
```
URL Bisnis : https://maps.app.goo.gl/hC1CMJZjtjfsXhZF7
Embed      : iframe via Google Maps > Share > Embed a map
Ukuran     : 100% width, height: 280px
Border     : none
Border-radius: var(--radius-lg)  ← wrapper div dengan overflow hidden
Loading    : lazy
```

---

## 7. WHATSAPP BUBBLE

### Spesifikasi Komponen `WhatsAppBubble.tsx`

#### Posisi & Tampilan
```
Position    : fixed
Bottom      : 24px
Right       : 24px
Z-index     : 9999

TOMBOL UTAMA (lingkaran):
  Ukuran      : 60px × 60px
  Background  : var(--color-whatsapp)  → #25D366
  Border-radius: 50%
  Box-shadow  : 0 4px 20px rgba(37, 211, 102, 0.45)
  Ikon        : Custom SVG WhatsApp logo, putih, 30px
  Hover       : Background #128C7E, shadow lebih besar, scale(1.08)
  Active      : scale(0.96)
  Transisi    : all 0.25s var(--ease-bounce)

PULSE ANIMASI (ring hijau bergerak keluar):
  Pseudo-element ::before, ::after
  Background  : rgba(37, 211, 102, 0.35)
  Border-radius: 50%
  Animation   : pulse-ring 2.5s ease-out infinite
  Delay       : ::after + 1.25s (offset)

TOOLTIP (muncul saat hover, kiri tombol):
  Teks        : "Chat dengan Kami"
  Background  : var(--color-dark-base)
  Teks warna  : putih
  Font        : Jost 500, sm
  Border-radius: var(--radius-md)
  Padding     : 8px 14px
  Arrow kanan : CSS triangle
  Animasi     : fade-in + translateX(6px)→(0)  0.2s ease

NOTIF BADGE (opsional — menarik perhatian):
  Posisi      : absolute, top-right tombol
  Ukuran      : 18px × 18px
  Background  : #E53935  (merah)
  Teks        : "1"  — Raleway 700, xs, putih
  Border-radius: 50%
  Muncul      : setelah 5 detik halaman terbuka (setTimeout)
  Hilang      : saat tombol diklik (setState)
```

#### Behavior
```
Link WhatsApp:
  URL format : https://wa.me/[NEXT_PUBLIC_WA_NUMBER]?text=[NEXT_PUBLIC_WA_MESSAGE]
  Target     : _blank
  Rel        : noopener noreferrer

Muncul       : Langsung saat halaman load (tidak di-hide saat top)
Mobile       : Ukuran diperbesar 64px × 64px (lebih mudah di-tap)
Aksesibilitas: aria-label="Chat via WhatsApp" , role="button"
```

#### Animasi Keyframes (Pulse Ring)
```
Nama animasi : pulse-ring
0%   : transform scale(1),   opacity 0.7
100% : transform scale(2.2), opacity 0
Duration     : 2.5s
Timing       : ease-out
Iteration    : infinite
```

---

## 8. ANIMASI & INTERAKSI

### 8.1 Scroll Reveal (AnimatedSection wrapper)
```
Library      : Framer Motion + react-intersection-observer

Varian animasi:
  fadeUp     : y: 40 → 0, opacity: 0 → 1, duration: 0.65s
  fadeIn     : opacity: 0 → 1, duration: 0.5s
  slideLeft  : x: -50 → 0, opacity: 0 → 1, duration: 0.6s
  slideRight : x: 50 → 0, opacity: 0 → 1, duration: 0.6s
  scaleIn    : scale: 0.92 → 1, opacity: 0 → 1, duration: 0.55s

Trigger      : threshold 0.15 (15% elemen terlihat → trigger)
Once         : true (hanya trigger sekali, tidak re-animate saat scroll balik)
Stagger      : staggerChildren 0.1s untuk grup kartu/item
Easing       : [0.25, 0.1, 0.25, 1]
```

### 8.2 Navbar Scroll
```
Event        : window scroll listener (passive: true)
Threshold    : 80px
State change : transparent → dark-blur (backdrop-filter: blur(16px))
Transisi     : 0.35s ease-in-out
Highlight nav item aktif: IntersectionObserver per section, update active link
```

### 8.3 Hero Slideshow
```
Interval     : 5000ms autoplay
Transisi     : cross-fade opacity 0→1 / 1→0, duration 1500ms
Ken Burns    : CSS animation scale(1.0)→scale(1.08) per slide, 8s ease
```

### 8.4 Count-Up Animasi (Statistik)
```
Trigger      : IntersectionObserver, threshold 0.5
Duration     : 2000ms
Easing       : easeOutCubic
Format       : angka bulat + suffix "+"
Contoh       : 0 → 10+, 0 → 100+, 0 → 50+
```

### 8.5 Hover States
```
Kartu layanan : translateY(-4px), border gold, shadow gold — 0.3s ease
Foto portfolio: overlay dark fade-in, label + ikon ZoomIn muncul — 0.3s
Link footer   : translateX(4px), text gold — 0.2s ease
Tombol PRIMARY: background gold-light, shadow gold — 0.25s ease, scale 1.01
Tombol OUTLINE: background gold-muted — 0.25s ease
Nav links     : underline slide-in — 0.2s ease
Social icons  : scale(1.15), color gold — 0.2s ease
```

### 8.6 Page Load
```
Urutan masuk (stagger):
  1. Navbar     : fade down 0.4s, delay 0ms
  2. Hero badge : fade down 0.4s, delay 100ms
  3. Hero H1    : fade up 0.6s, delay 250ms
  4. Subheadline: fade up 0.5s, delay 400ms
  5. CTA buttons: fade up 0.5s, delay 550ms
  6. Trust strip: fade up 0.4s, delay 700ms
```

### 8.7 Smooth Scroll
```
Behavior : scroll-behavior: smooth (CSS)  +  scrollIntoView({ behavior: 'smooth', block: 'start' })
Offset   : -80px (kompensasi tinggi navbar sticky)
Implementasi: Custom hook useScrollTo dengan offset support
```

### 8.8 Mobile Drawer Navigation
```
Trigger  : Hamburger icon klik → state isOpen true
Animasi  : Framer Motion AnimatePresence
  Masuk  : x: "100%" → x: 0, duration 0.4s ease
  Keluar : x: 0 → x: "100%", duration 0.35s ease
Backdrop : opacity 0 → 0.8 (dark), klik backdrop → tutup drawer
Menu items masuk: staggerChildren 0.08s, fadeRight masing-masing item
```

---

## 9. PERFORMA & AKSESIBILITAS

### 9.1 Image Optimization
```
Format        : Semua foto sudah .webp (Cloudinary) ✅
Loading       : lazy (semua foto kecuali hero above-fold)
Hero above-fold: loading="eager" + fetchpriority="high"
Sizes         : responsive srcset via next/image atau manual sizes attribute
Cloudinary transform (append ke URL):
  Kualitas auto: tambahkan /q_auto,f_auto/ di URL
  Resize hero  : /w_1920,h_1080,c_fill/
  Resize thumb : /w_600,h_400,c_fill/
  Contoh: https://res.cloudinary.com/dmrjs8ryu/image/upload/q_auto,f_auto,w_1920/v1779906435/unnamed_2_ok38cd.webp
```

### 9.2 Font Loading
```
Strategi   : next/font (Next.js) — zero layout shift, self-hosted otomatis
Fallback   : font-display: swap  →  serif, sans-serif
Preconnect : <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
Subset     : latin saja (hemat ~40% ukuran font file)
```

### 9.3 Performance Targets
```
Lighthouse Performance   : ≥ 90
Lighthouse Accessibility : ≥ 95
Lighthouse Best Practices: ≥ 95
Lighthouse SEO           : 100
Core Web Vitals:
  LCP (Largest Contentful Paint) : < 2.5s
  FID / INP                      : < 200ms
  CLS (Cumulative Layout Shift)  : < 0.1
```

### 9.4 Aksesibilitas
```
Semantic HTML  : h1-h6 terstruktur, section, nav, main, footer, article
ARIA labels    : semua tombol ikon (aria-label), form fields (aria-required, aria-invalid)
Focus visible  : outline gold 2px pada semua interaktif element
Alt text       : semua gambar memiliki alt deskriptif ✅ (sudah di data portofolio)
Color contrast : Pastikan rasio ≥ 4.5:1 (gold #C8A96E di atas dark #0D0D14 = ~8:1 ✅)
Keyboard nav   : Semua link dan tombol dapat diakses via Tab/Enter/Space
Skip to content: Link tersembunyi "Langsung ke Konten" di awal DOM (muncul saat Tab pertama)
Reduced motion : Media query prefers-reduced-motion — matikan semua animasi
```

### 9.5 SEO Teknis
```
Heading hierarchy: Hanya 1× H1 per halaman (Hero), H2 per section, H3 per kartu
Internal links   : Anchor navigation (#beranda, #tentang, dll) — crawlable
Image alt text   : Deskriptif, mengandung keyword alami ✅
Page speed       : Inline critical CSS, defer non-critical JS
Canonical tag    : <link rel="canonical" href="https://hartadwijaya.com">
hreflang         : id (jika monobahasa)
Structured data  : LocalBusiness JSON-LD ✅ (lihat Section 3)
Google Search Console: Verifikasi via meta tag atau DNS
Google Business Profile: Daftarkan dan verifikasi (sangat penting untuk SEO lokal Bali)
```

---

## 10. CHECKLIST PRE-LAUNCH

### Konten
- [ ] Isi nomor telepon aktual (cari & ganti `[Nomor Telepon Aktual]`)
- [ ] Isi nomor WhatsApp di `.env.local` → `NEXT_PUBLIC_WA_NUMBER`
- [ ] Isi email aktual (cari & ganti `[Email Aktual]`)
- [ ] Ganti `[URL Instagram]` dengan URL Instagram bisnis
- [ ] Ganti `[URL Facebook]` dengan URL Facebook bisnis
- [ ] Buat `og-image.jpg` (1200×630px) menggunakan foto hero + logo
- [ ] Verifikasi semua 12 URL foto Cloudinary dapat diakses ✅
- [ ] Ganti testimoni placeholder dengan testimoni asli dari klien

### Teknis
- [ ] `npm run dev` / `pnpm run dev` berjalan mulus di `localhost:3000` (Next.js) atau `localhost:5173` (Vite)
- [ ] `npm run build` sukses tanpa error
- [ ] Semua anchor scroll berfungsi (#beranda, #tentang, #layanan, #portofolio, #kontak)
- [ ] WhatsApp bubble muncul, link terbuka WA dengan pesan pre-fill
- [ ] Google Maps embed tampil (aktifkan iframe dari Google Maps > Share > Embed)
- [ ] Form kontak berfungsi (Formspree / mailto / API)
- [ ] Navbar transparan di top → dark blur saat scroll
- [ ] Mobile menu drawer buka/tutup dengan animasi
- [ ] Semua foto lazy-load benar, hero foto eager-load
- [ ] Console browser bersih (0 error, 0 warning kritis)

### Responsive
- [ ] Mobile 375px — semua section tampil benar
- [ ] Mobile 390px (iPhone 14) — semua section tampil benar
- [ ] Tablet 768px — grid menyesuaikan
- [ ] Desktop 1280px — layout penuh benar
- [ ] Desktop 1920px — tidak ada elemen melebihi max-width

### SEO & Analytics
- [ ] `<title>` dan `<meta description>` terpasang benar
- [ ] JSON-LD LocalBusiness terverifikasi via Google Rich Results Test
- [ ] `robots.txt` aktif dan dapat diakses
- [ ] `sitemap.xml` ter-generate dan valid
- [ ] Google Analytics 4 aktif, event pageview terkirim
- [ ] Google Search Console: properti didaftarkan, sitemap disubmit
- [ ] Open Graph preview benar (test via opengraph.xyz)

### Performa
- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, SEO)
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1

### Sebelum Domain Live
- [ ] SSL aktif (HTTPS) — pastikan hosting mendukung (Vercel/Netlify otomatis SSL)
- [ ] Domain canonical terpasang di env: `NEXT_PUBLIC_SITE_URL`
- [ ] Redirect www → non-www (atau sebaliknya, konsisten)

---

## QUICK REFERENCE — DATA PENTING

### Aset Foto (Ready to Use)
```
HERO SLIDESHOW:
  [1] https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_2_ok38cd.webp
  [2] https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_7_f87bdr.webp
  [3] https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_3_wyj3bi.webp

ABOUT SECTION:
  https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906434/unnamed_1_sx4io4.webp

PORTFOLIO (12 foto):
  Lihat Section 4 — Data Foto

CTA BANNER BG:
  https://res.cloudinary.com/dmrjs8ryu/image/upload/v1779906435/unnamed_2_ok38cd.webp
```

### Links Penting
```
Google Maps    : https://maps.app.goo.gl/hC1CMJZjtjfsXhZF7
WhatsApp base  : https://wa.me/[NEXT_PUBLIC_WA_NUMBER]?text=[ENCODED_MESSAGE]
Formspree      : https://formspree.io  (free tier: 50 submission/bulan)
Cloudinary CDN : https://res.cloudinary.com/dmrjs8ryu/image/upload/
```

### Deploy (Rekomendasi — Gratis)
```
Vercel (Next.js) :
  - vercel.com → Import GitHub repo → Deploy otomatis
  - Preview URL langsung untuk testing
  - SSL otomatis
  - `vercel --prod` untuk production

Netlify (Vite) :
  - netlify.com → Add new site → GitHub → Build command: pnpm run build → Publish dir: dist
  - SSL otomatis
```

---

*Dokumen ini adalah master blueprint website CV Harta Dwi Jaya.*
*Versi: 2.0 | Stack: Next.js 14 / Vite + React | Dev: npm run dev / pnpm run dev*
*Dibuat sebagai handoff sempurna untuk Figma design & frontend development.*
