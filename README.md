# Xalveriq-AI — Futuristic AI-Powered Interior Architecture

> **"Spaces, Intelligently Designed."**  
> Luxury Interior Architecture Practice based in Pune, Maharashtra, India.  
> Delivering turnkey homes across Koregaon Park, Baner, Kharadi, Kalyani Nagar, Viman Nagar, and Hinjawadi with a strict **45-Day Handover Guarantee** and **10-Year Comprehensive Warranty**.

---

## 🌟 The "Antigravity" Design Concept & Features

Xalveriq presents a weightless, futuristic, light-luxury aesthetic with AI-native tools built for the Pune real estate market:

1. **Floating 3D Hero Scene:** Lightweight Three.js, React Three Fiber (`@react-three/fiber`), and `@react-three/drei` canvas depicting a floating pearl ceramic sculpture with a champagne-gold orbit ring that reacts dynamically to mouse movement.
2. **AI Design Studio:**
   - *Room Photo Neural Redesign:* Select styles (Modern Haute Luxury, Japandi, Scandinavian, Indian Contemporary, Neo-Industrial) with instant before/after render previews.
   - *AI Style Quiz:* Interactive 4-step diagnostic finding your personalized aesthetic and Pune-tailored color palette.
   - *Instant Budget Estimator:* Real-time calculation in ₹ INR (Lakhs) by BHK configuration (1 BHK to Penthouse/Villa), carpet area, Pune neighborhood tier, and execution package.
3. **Ask Xalveriq AI Concierge:** Floating assistant answering Pune real estate guidelines, Vastu compliance, materials, and pricing, with typewriter streaming and automated smart lead scoring (`Hot`, `Warm`, `Cold`).
4. **Interactive Before/After Transformation Slider:** Draggable laser slider comparing raw builder concrete possession against completed turnkey luxury.
5. **Curated Portfolio Showcase:** Pinned horizontal scroll rail, filterable room/style grid, and architectural lightbox with before/after views.
6. **Lead Capture & Slot Booking:** Comprehensive consultation booking with Calendly-style time/date slot reservation and instant WhatsApp architect routing.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router) + TypeScript
- **Styling:** Tailwind CSS, Custom Glassmorphism, CSS Custom Variable Design Tokens
- **3D & Motion:** React Three Fiber, Drei, Three.js, Framer Motion, GSAP (ScrollTrigger), Lenis Inertia Scroll
- **Icons:** Lucide React
- **Typography:** Space Grotesk, Sora, Inter via `next/font/google`
- **APIs & Backend:** Next.js Route Handlers (`/api/concierge`, `/api/lead-capture`)
- **SEO & Performance:** Metadata API, Open Graph, LocalBusiness JSON-LD schema, dynamic Sitemap & Robots.txt

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.x or 20.x+
- npm or pnpm

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/pranavgorani/Xalveriq-AI.git
cd Xalveriq-AI

# Install dependencies
npm install --legacy-peer-deps
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
*(Optional: add `ANTHROPIC_API_KEY` for live Claude chat; if omitted, the concierge uses its built-in Pune architectural knowledge engine).*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel

The application is fully optimized for zero-configuration deployment on **Vercel**:

1. Push your code to your GitHub repository.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Framework Preset will automatically detect **Next.js**.
4. (Optional) Add your environment variables (`ANTHROPIC_API_KEY`, `NEXT_PUBLIC_APP_URL`) in Vercel Project Settings.
5. Click **Deploy**.

Alternatively, deploy using the Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

## 📌 Content & Media Notice

> **Important:** All interior photography currently utilized across the hero, portfolio, before/after slider, and blog are high-resolution Unsplash placeholders marked with `// REPLACE WITH REAL XALVERIQ PROJECT PHOTO`. Similarly, stats (e.g. 450+ delivered homes) and client testimonials are representative samples designed for demonstration and should be replaced with verified firm records prior to commercial production launch.

---

## 📁 Project Architecture
```
src/
├── app/
│   ├── layout.tsx         # Space Grotesk + Inter fonts, Navbar, Footer, WhatsApp & AI Concierge
│   ├── page.tsx           # Antigravity Hero, TrustBar, Services, AI Teaser, Before/After, Process, Reviews
│   ├── studio/page.tsx    # Neural Redesign Engine, Style Quiz, Pune Budget Estimator
│   ├── portfolio/page.tsx # Filterable project showcase, before/after toggle, detail modal
│   ├── services/page.tsx  # In-depth architectural service tiers, guarantees, and pricing
│   ├── about/page.tsx     # Founding story, Pune principals, philosophy, and certifications
│   ├── blog/page.tsx      # Space planning and material guides for Pune
│   ├── contact/page.tsx   # Lead capture form with smart scoring, Calendly-style slot picker
│   ├── sitemap.ts         # XML Sitemap
│   ├── robots.ts          # Search engine directives
│   └── api/
│       ├── concierge/route.ts    # AI chat concierge route with fallback intelligence
│       └── lead-capture/route.ts # Smart lead scoring algorithm (Hot/Warm/Cold)
├── components/
│   ├── 3d/                # React Three Fiber Antigravity canvas & fallbacks
│   ├── chat/              # Floating AI Concierge widget
│   ├── contact/           # Contact form and Calendly slot booking
│   ├── home/              # Hero, TrustBar, BeforeAfterSlider, ProcessTimeline, Services, Testimonials, FAQ
│   ├── layout/            # Glassmorphic Navbar, Footer with LocalBusiness schema, WhatsApp float
│   └── studio/            # RoomRedesign, StyleQuiz, BudgetEstimator
├── data/
│   ├── blogPosts.ts       # Articles optimized for Pune interior design
│   ├── faq.ts             # Comprehensive FAQs
│   ├── projects.ts        # Delivered projects (Panchshil, Trump Towers, Castel Royale, etc.)
│   ├── puneLocalities.ts  # Koregaon Park, Baner, Kharadi, Kalyani Nagar, etc.
│   └── services.ts        # Turnkey, Modular Kitchen, Wardrobes, Living, Bedroom, Commercial
└── lib/
    └── utils.ts           # Class merging and INR formatting helpers
```

---

## 🏢 Pune Experience Centers
- **Flagship Studio:** Plot 18, Lane 7, Koregaon Park, Pune, Maharashtra 411001
- **Design Lab:** Suite 402, High Street Hub, Balewadi / Baner Link Road, Pune 411045
- **Phone:** +91 98230 XALV (9258)
- **WhatsApp:** Direct Instant Chat

---

## 📄 License
Proprietary & Confidential © Xalveriq Interiors Pvt. Ltd.
