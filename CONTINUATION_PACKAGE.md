# MAISON Store — Continuation Package

**Generated:** 24 April 2026
**Purpose:** Paste this into a new Claude Code chat to pick up exactly where we left off.

---

## 0 · Ready-to-paste intro for your new Claude Code chat

> Copy everything between the horizontal rules below into the new chat as your first message.

---

Hi Claude — I'm continuing work on my live e-commerce store. Here is the full context:

**Project:** MAISON — a premium South African home & lifestyle dropship store
**Local folder:** `/Users/handrevisser/Desktop/MAISON Store`
**Live URL:** https://singular-crostata-2ae85a.netlify.app
**Netlify site ID:** `4d0f6a20-a624-42d4-8f35-2dc9eb00e74f`
**Stack:** Next.js 16.2.4 (App Router + static export `output: "export"`), React 18, TypeScript, Tailwind CSS, shadcn/ui (Button only), Lucide icons. Cart via Context + useReducer + localStorage.
**Deploy command:** from the project root run `npm run build && netlify deploy --prod --dir=out` (Netlify CLI should already be authed on this machine; `NETLIFY_NEXT_PLUGIN_SKIP=true` is baked into `netlify.toml`).
**Business model:** SA-only dropshipping. All product images are AI-generated via Pollinations and live under `/public/images/products/`. Hero slideshow images live under `/public/images/hero/`.

**What's currently on the store:**
- 26 products across 6 categories (Textiles / Kitchen / Decor / Home Fragrance / Ceramics / Self Care), all priced R899–R1,799. Full list with prices below.
- 41 customer reviews in `lib/reviews.ts` — 6 "featured" reviews shown as a carousel on the homepage, rest shown per-product on each PDP.
- Pages: Home, Shop (with category filter via query param), Product detail, About, Contact (with FAQs), Checkout (coming-soon placeholder), 404.
- WhatsApp number: `060 123 4567` (shown on contact page)
- "Track Your Order" link in footer opens https://aramex.co.za/tracking/TrackShipment.php in a new tab
- Discount popup on first visit: 10% off first order email capture, stored in localStorage (`maison_welcome_popup_seen`)
- Cart key in localStorage: `maison-cart`
- Email: hello@maisonstore.co.za
- Free delivery in SA over R1,500 (threshold is used in cart drawer banner)

There is a full continuation package at `/Users/handrevisser/Desktop/MAISON Store/CONTINUATION_PACKAGE.md` with every file's complete source code — read that first before making any changes so you have the exact current state.

Please confirm you've read the package and then wait for my next instruction.

---

## 1 · Deployment info

| Key | Value |
|-----|-------|
| Netlify site name | `singular-crostata-2ae85a` |
| Netlify site ID | `4d0f6a20-a624-42d4-8f35-2dc9eb00e74f` |
| Live URL | https://singular-crostata-2ae85a.netlify.app |
| Build command | `npm run build` |
| Publish directory | `out` |
| Required env var | `NETLIFY_NEXT_PLUGIN_SKIP=true` (set in `netlify.toml`) |
| Deploy CLI command | `netlify deploy --prod --dir=out` (after `npm run build`) |

---

## 2 · Current product list (26 products, all prices in ZAR)

| ID | Name | Category | Price |
|---|---|---|---|
| 1 | Luxury Soy Candle Trio | Home Fragrance | R999 |
| 2 | Marble & Acacia Cheese Board Set | Kitchen | R1,299 |
| 3 | Chunky Knit Throw Blanket | Textiles | R1,499 |
| 4 | Ceramic Pour-Over Coffee Set | Kitchen | R1,149 |
| 5 | Brushed Gold Tealight Set | Decor | R1,049 |
| 6 | Stonewashed Linen Pillowcase Set | Textiles | R1,049 |
| 7 | Acacia Wood Serving Tray | Kitchen | R1,199 |
| 8 | Luxury Reed Diffuser | Home Fragrance | R899 |
| 9 | Matte Ceramic Plant Pot Set | Ceramics | R1,149 |
| 10 | Velvet Storage Cube Set | Decor | R1,299 |
| 11 | Botanical Soap Gift Set | Self Care | R999 |
| 12 | Nordic Crystal Bud Vase Set | Decor | R1,199 |
| 13 | Stonewashed Linen Napkin Set | Textiles | R1,049 |
| 14 | Rose Gold Cutlery Set | Kitchen | R1,799 |
| 15 | Handblown Art Glass Vase | Decor | R1,049 |
| 16 | Electric Ultrasonic Aroma Diffuser | Home Fragrance | R1,149 |
| 17 | Mulberry Silk Pillowcase Set | Textiles | R1,299 |
| 18 | Macramé Plant Hanger Set | Decor | R899 |
| 19 | Marble Coaster Set | Decor | R999 |
| 20 | Borosilicate Glass Storage Jar Set | Kitchen | R1,199 |
| 21 | Aged Brass Wall Hook Trio | Decor | R1,099 |
| 22 | Stonewashed Linen Tea Towel Set | Kitchen | R949 |
| 23 | Handthrown Ceramic Mug Set | Ceramics | R1,099 |
| 24 | Jute & Cotton Floor Runner | Textiles | R1,399 |
| 25 | Bamboo Bath Caddy | Self Care | R1,049 |
| 26 | Artisan Olive Wood Bowl Set | Kitchen | R1,149 |

**Featured on homepage (`featured: true`):** 1, 2, 3, 16

---

## 3 · Complete file tree

```
MAISON Store/
├── .gitignore
├── CONTINUATION_PACKAGE.md          (this file)
├── components.json
├── netlify.toml
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   ├── about/page.tsx
│   ├── checkout/page.tsx
│   ├── contact/page.tsx
│   └── shop/
│       ├── page.tsx
│       ├── ShopContent.tsx
│       └── [id]/page.tsx
├── components/
│   ├── BrandBar.tsx
│   ├── CartDrawer.tsx
│   ├── DiscountPopup.tsx
│   ├── FeaturedProducts.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── HeroSlideshow.tsx
│   ├── ProductActions.tsx
│   ├── ProductCard.tsx
│   ├── ProductDetail.tsx
│   ├── ProductReviews.tsx
│   ├── ReviewCard.tsx
│   ├── ReviewsSection.tsx
│   ├── StarRating.tsx
│   ├── TrustBadges.tsx
│   └── ui/button.tsx
├── lib/
│   ├── cart.ts
│   ├── products.ts
│   ├── reviews.ts
│   └── utils.ts
└── public/
    └── images/
        ├── hero/
        │   ├── slide-1.jpg
        │   ├── slide-2.jpg
        │   └── slide-3.jpg
        └── products/     (all product images referenced in lib/products.ts)
```

---

## 4 · Full source of every file

> Every file below is the exact current state on disk. Copy into a fresh project as-is to reproduce the store.

### `package.json`

```json
{
  "name": "maison-store",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.400.0",
    "next": "^16.2.4",
    "react": "^18",
    "react-dom": "^18",
    "tailwind-merge": "^2.4.0"
  },
  "devDependencies": {
    "@netlify/plugin-nextjs": "^5.15.9",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^9.39.4",
    "eslint-config-next": "^16.2.4",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".next/dev/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `next.config.mjs`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
```

### `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF8",
        charcoal: "#1C1C1A",
        gold: {
          DEFAULT: "#C9A96E",
          light: "#DFC495",
          dark: "#A88848",
        },
        stone: "#8C8C82",
        parchment: "#F0EDE6",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
```

### `postcss.config.mjs`

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

### `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NETLIFY_NEXT_PLUGIN_SKIP = "true"
```

### `vercel.json`

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "stone",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### `.gitignore`

```
# dependencies
node_modules/
.pnp
.pnp.js

# next.js build output
.next/
out/

# env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# misc
.DS_Store
*.pem
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.netlify/
```

---

### `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Maps to our warm off-white (#FAFAF8) */
    --background: 60 33% 98%;
    --foreground: 60 5% 10%;

    --card: 60 33% 98%;
    --card-foreground: 60 5% 10%;

    --popover: 0 0% 100%;
    --popover-foreground: 60 5% 10%;

    /* Primary = deep charcoal */
    --primary: 60 5% 10%;
    --primary-foreground: 60 33% 98%;

    /* Secondary = warm parchment */
    --secondary: 40 25% 93%;
    --secondary-foreground: 60 5% 10%;

    --muted: 40 20% 94%;
    --muted-foreground: 60 5% 45%;

    /* Accent = warm gold */
    --accent: 38 44% 61%;
    --accent-foreground: 60 5% 10%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;

    --border: 40 15% 88%;
    --input: 40 15% 88%;
    --ring: 38 44% 61%;

    /* Sharp corners — we handle radius manually per element */
    --radius: 0rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-cream text-charcoal font-sans;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  h1, h2, h3, h4 {
    @apply font-serif;
  }
}

@layer utilities {
  /* Smooth letter-spacing helper for headings */
  .tracking-brand {
    letter-spacing: 0.06em;
  }

  /* Hide scrollbar while keeping scroll functionality */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}

/* ── Hero animations ─────────────────────────────────────────── */

/* Ken Burns for the single static hero image (legacy, kept for fallback) */
@keyframes kenBurns {
  from { transform: scale(1.0); }
  to   { transform: scale(1.08); }
}

/* Ken Burns per slide — runs for 6 s (matching the slide interval), stays at end */
@keyframes kenBurnsSlide {
  from { transform: scale(1.0); }
  to   { transform: scale(1.08); }
}

@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Marquee for mobile brand bar */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.animate-ken-burns {
  animation: kenBurns 20s ease-out infinite alternate;
  will-change: transform;
}

.animate-ken-burns-slide {
  animation: kenBurnsSlide 6s ease-out forwards;
  will-change: transform;
}

/* Seamless marquee — content is duplicated, so -50% is the perfect loop point */
.animate-marquee {
  animation: marquee 22s linear infinite;
  width: max-content;
  will-change: transform;
}

.hero-label {
  opacity: 0;
  animation: heroFadeUp 0.9s ease-out 0.1s forwards;
}

.hero-headline {
  opacity: 0;
  animation: heroFadeUp 0.9s ease-out 0.3s forwards;
}

.hero-subheading {
  opacity: 0;
  animation: heroFadeUp 0.9s ease-out 0.5s forwards;
}

.hero-cta {
  opacity: 0;
  animation: heroFadeUp 0.9s ease-out 0.9s forwards;
}
```

### `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import DiscountPopup from "@/components/DiscountPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MAISON — Premium Home & Lifestyle",
    template: "%s — MAISON",
  },
  description:
    "Curated home goods and lifestyle objects, crafted for the discerning eye. Free delivery in South Africa on orders over R1,500.",
  openGraph: {
    type: "website",
    siteName: "MAISON",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <DiscountPopup />
        </CartProvider>
      </body>
    </html>
  );
}
```

### `app/page.tsx`

```tsx
import HeroSection from "@/components/HeroSection";
import BrandBar from "@/components/BrandBar";
import TrustBadges from "@/components/TrustBadges";
import FeaturedProducts from "@/components/FeaturedProducts";
import ReviewsSection from "@/components/ReviewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandBar />
      <TrustBadges />
      <FeaturedProducts />
      <ReviewsSection />
    </>
  );
}
```

### `app/providers.tsx`

```tsx
"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type Dispatch,
} from "react";
import { cartReducer, type CartState, type CartAction } from "@/lib/cart";

const STORAGE_KEY = "maison-cart";

const initialState: CartState = { items: [], isOpen: false };

interface CartContextValue {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    // Hydrate from localStorage on first render
    (init) => {
      if (typeof window === "undefined") return init;
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? { ...init, items: JSON.parse(stored) } : init;
      } catch {
        return init;
      }
    }
  );

  // Keep localStorage in sync whenever items change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
```

### `app/not-found.tsx`

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">404</p>
      <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">Page not found</h1>
      <p className="text-stone mb-12 max-w-sm leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s take
        you somewhere beautiful instead.
      </p>
      <Link href="/">
        <Button className="bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal/85 transition-all duration-300">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
```

### `app/about/page.tsx`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "MAISON was founded on a simple belief — that beautiful, considered objects have the power to transform everyday living.",
};

const values = [
  {
    title: "Considered Curation",
    body: "Every product in our collection is individually selected. We look for pieces that balance beauty with genuine usefulness — objects that earn their place in your home and outlast the trends they inhabit.",
  },
  {
    title: "Accessible Luxury",
    body: "Premium design should not require a premium income. We source directly, cut out the middlemen, and pass the difference to you — so that a beautifully set table or a thoughtfully scented room is within reach.",
  },
  {
    title: "South African First",
    body: "We are proudly South African — built here, for people who live here. We understand local taste, local living, and the unique way that South Africans make a house a home.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-charcoal py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_60%_40%,_rgba(201,169,110,0.10)_0%,_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-8">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-8">
            A home is the most
            <br />
            <span className="italic text-gold">personal thing you own.</span>
          </h1>
          <p className="text-base md:text-lg text-cream/55 max-w-2xl mx-auto leading-relaxed">
            MAISON was built around a single conviction: that the objects we
            surround ourselves with shape the quality of our everyday lives.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-stone leading-relaxed text-base md:text-lg">
            <p>
              MAISON began with a frustration shared by many South Africans — the gap between
              the beautiful, well-made home goods you see online and what is actually
              available and affordable locally. International shipping is slow and expensive.
              Local alternatives are often generic. And the premium stores that do exist price
              their products beyond everyday reach.
            </p>
            <p>
              We set out to close that gap. By sourcing directly from skilled makers and
              trusted suppliers — and handling the logistics ourselves — we are able to bring
              genuinely considered, high-quality home goods to South African homes at prices
              that make sense.
            </p>
            <p>
              Every item in our collection has been personally reviewed. We ask the same
              questions of every product: Is it well made? Is it genuinely useful? Will it
              still feel right in five years? If the answer is yes to all three, it earns
              its place in the MAISON edit.
            </p>
            <p>
              We believe that a home shaped by intentional, beautiful objects is not a
              luxury — it is a standard of living that everyone deserves access to. That
              belief is behind every decision we make, from the products we select to the
              way we package and price them.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="sustainability" className="py-20 md:py-28 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-4">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {values.map(({ title, body }) => (
              <div key={title} className="border-t border-stone/20 pt-8">
                <h3 className="font-serif text-xl text-charcoal mb-4">{title}</h3>
                <p className="text-stone leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-cream text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.35em] uppercase text-gold mb-6">
            Ready to explore?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
            Browse the collection
          </h2>
          <p className="text-stone mb-10 leading-relaxed">
            Every piece has been hand-selected. We think you will find something
            you love.
          </p>
          <Link href="/shop">
            <Button className="bg-charcoal hover:bg-charcoal/85 text-cream text-xs tracking-widest uppercase rounded-none px-12 py-6 h-auto transition-all duration-300">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
```

### `app/checkout/page.tsx`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your MAISON order securely.",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="w-12 h-12 flex items-center justify-center border border-gold/40 text-gold mb-8">
        <Lock size={20} strokeWidth={1.5} />
      </div>
      <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5">
        Coming Soon
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
        Secure Checkout
      </h1>
      <p className="text-stone max-w-md leading-relaxed mb-4">
        Our secure checkout is being set up. In the meantime, please contact us
        directly to place your order — we&apos;ll be happy to assist.
      </p>
      <p className="text-stone/60 text-sm mb-10">
        WhatsApp us or email{" "}
        <a
          href="mailto:hello@maisonstore.co.za"
          className="underline underline-offset-2 hover:text-charcoal transition-colors"
        >
          hello@maisonstore.co.za
        </a>
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/contact">
          <Button className="bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal/85 transition-all duration-300">
            Contact Us to Order
          </Button>
        </Link>
        <Link href="/shop">
          <Button
            variant="outline"
            className="border-charcoal/40 text-charcoal text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
```

### `app/contact/page.tsx`

```tsx
import type { Metadata } from "next";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MAISON — we typically respond within one business day.",
};

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Once your order is placed and confirmed, we source and dispatch your item within 3–7 business days. Delivery within South Africa then takes a further 3–5 business days via our tracked courier service.",
  },
  {
    q: "How does your ordering process work?",
    a: "When you place an order, we source your product directly from our vetted suppliers and ship it to you in South Africa. This allows us to keep prices accessible while maintaining quality. You will receive a tracking number once your order is dispatched.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, as well as EFT. Payment processing is handled securely — your card details are never stored on our systems.",
  },
  {
    q: "Can I return or exchange a product?",
    a: "If your product arrives damaged or is not as described, please contact us within 48 hours of receipt and we will make it right. For other returns, please reach out and we will discuss options on a case-by-case basis.",
  },
  {
    q: "Do you ship outside South Africa?",
    a: "At this stage we deliver within South Africa only. We are working on expanding to neighbouring countries — follow us to stay updated.",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            We&apos;d love to hear from you
          </h1>
          <p className="text-stone leading-relaxed">
            Whether you have a question about an order, a product, or simply want
            to say hello — we typically respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — contact info */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-10">
                Contact Details
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <MessageCircle size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone mb-1">
                      WhatsApp
                    </p>
                    <p className="font-serif text-charcoal">060 123 4567</p>
                    <p className="text-sm text-stone mt-1">
                      Quickest way to reach us — available Mon–Fri, 9am–6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone mb-1">
                      Email
                    </p>
                    <p className="font-serif text-charcoal">hello@maisonstore.co.za</p>
                    <p className="text-sm text-stone mt-1">
                      We respond to all emails within one business day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <Clock size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone mb-1">
                      Hours
                    </p>
                    <p className="font-serif text-charcoal">Monday – Friday</p>
                    <p className="text-sm text-stone mt-1">9:00 am – 6:00 pm SAST</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone mb-1">
                      Based In
                    </p>
                    <p className="font-serif text-charcoal">South Africa</p>
                    <p className="text-sm text-stone mt-1">
                      Delivering nationwide via tracked courier
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-10">
                Send a Message
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-stone mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-stone mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Order enquiry, product question..."
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-stone mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-stone/30 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-charcoal transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button className="w-full bg-charcoal hover:bg-charcoal/85 text-cream text-xs tracking-widest uppercase rounded-none py-5 h-auto transition-all duration-300">
                  Send Message
                </Button>
                <p className="text-xs text-stone/50 text-center">
                  We typically respond within one business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20 md:py-28 bg-parchment">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              FAQs
            </h2>
          </div>
          <div className="space-y-0 divide-y divide-stone/20">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-7">
                <h3 className="font-serif text-lg text-charcoal mb-3">{q}</h3>
                <p className="text-stone text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping anchor */}
      <div id="shipping" />
      <div id="track" />
    </div>
  );
}
```

### `app/shop/page.tsx`

```tsx
import { Suspense } from "react";
import type { Metadata } from "next";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse the full MAISON collection — premium home goods and lifestyle objects, curated for South Africa.",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-stone text-sm">
          Loading collection...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
```

### `app/shop/ShopContent.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = [
  "All",
  "Textiles",
  "Kitchen",
  "Decor",
  "Home Fragrance",
  "Ceramics",
  "Self Care",
];

export default function ShopContent() {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState("All");

  // Initialise from URL param on mount (e.g. /shop?category=Textiles)
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && CATEGORIES.includes(cat)) setSelected(cat);
  }, [searchParams]);

  const filtered =
    selected === "All"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

      {/* Page header */}
      <div className="mb-12">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">
          All Products
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal">
          The Collection
        </h1>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b border-stone/20">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
              selected === cat
                ? "bg-charcoal text-cream border-charcoal"
                : "border-stone/30 text-stone hover:border-charcoal hover:text-charcoal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-sm text-stone mb-8">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
        {selected !== "All" && (
          <button
            onClick={() => setSelected("All")}
            className="ml-3 text-stone/50 hover:text-charcoal underline underline-offset-2 transition-colors"
          >
            Clear filter
          </button>
        )}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
```

### `app/shop/[id]/page.tsx`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getProductById, products } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";
import ProductReviews from "@/components/ProductReviews";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone mb-10 md:mb-14"
      >
        <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
        <ChevronRight size={12} className="text-stone/50" />
        <Link href="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
        <ChevronRight size={12} className="text-stone/50" />
        <span className="text-charcoal">{product.name}</span>
      </nav>

      {/* Full product detail — image gallery + variant selection + cart */}
      <ProductDetail product={product} />

      {/* Customer reviews for this product */}
      <ProductReviews productId={product.id} />
    </div>
  );
}
```

---

### `components/BrandBar.tsx`

```tsx
const items = [
  { icon: "🇿🇦", text: "Proudly South African" },
  { icon: "✦", text: "Curated Lifestyle Pieces" },
  { icon: "🚚", text: "Free Delivery in SA" },
  { icon: "✦", text: "Premium Quality Guaranteed" },
];

const Divider = () => (
  <span className="text-cream/20 text-base select-none" aria-hidden="true">
    |
  </span>
);

const Item = ({ icon, text }: { icon: string; text: string }) => (
  <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-cream/65 whitespace-nowrap px-5">
    <span className="text-sm">{icon}</span>
    <span>{text}</span>
  </span>
);

export default function BrandBar() {
  // Duplicate items so the marquee loop is seamless (translate -50% lands on the duplicate)
  const doubled = [...items, ...items];

  return (
    <div className="bg-charcoal border-t border-cream/5 py-3.5 overflow-hidden">

      {/* ── Desktop: static centered row ── */}
      <div className="hidden md:flex items-center justify-center">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <Item {...item} />
            {i < items.length - 1 && <Divider />}
          </span>
        ))}
      </div>

      {/* ── Mobile: infinite marquee ── */}
      <div className="flex md:hidden">
        <div className="animate-marquee flex items-center">
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center">
              <Item {...item} />
              <Divider />
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
```

### `components/CartDrawer.tsx`

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/app/providers";
import { cartTotal } from "@/lib/cart";
import { Button } from "@/components/ui/button";

const FREE_SHIPPING_THRESHOLD = 1500;

export default function CartDrawer() {
  const { state, dispatch } = useCart();
  const { items, isOpen } = state;
  const total = cartTotal(items);
  const remaining = FREE_SHIPPING_THRESHOLD - total;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-40"
          onClick={() => dispatch({ type: "CLOSE_CART" })}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className={`fixed right-0 top-0 h-full w-full sm:w-[420px] bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/20">
          <h2 className="font-serif text-xl text-charcoal">
            Your Cart
            {items.length > 0 && (
              <span className="ml-2 text-sm font-sans text-stone font-normal">
                ({items.length})
              </span>
            )}
          </h2>
          <button
            aria-label="Close cart"
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            className="text-stone hover:text-charcoal transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Empty state */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8 gap-4">
            <ShoppingBag size={44} strokeWidth={1} className="text-stone/30" />
            <p className="font-serif text-xl text-charcoal">Your cart is empty</p>
            <p className="text-sm text-stone">Add something beautiful to get started.</p>
            <Button
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="mt-2 bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-8 py-4 h-auto hover:bg-charcoal/85"
              asChild
            >
              <Link href="/shop">Browse the Collection</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Shipping progress banner */}
            <div className={`px-6 py-3 text-xs text-center ${remaining > 0 ? "bg-parchment text-stone" : "bg-gold/15 text-charcoal"}`}>
              {remaining > 0 ? (
                <>
                  Add{" "}
                  <span className="font-medium text-charcoal">
                    R{remaining.toLocaleString()}
                  </span>{" "}
                  more for free delivery
                </>
              ) : (
                <span className="font-medium">You qualify for free delivery!</span>
              )}
            </div>

            {/* Items list */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <Link
                    href={`/shop/${item.id}`}
                    onClick={() => dispatch({ type: "CLOSE_CART" })}
                    className="relative w-20 h-24 flex-shrink-0 bg-parchment overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm text-charcoal leading-snug mb-0.5">
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="text-xs text-stone mb-2">{item.variant}</p>
                    )}
                    <p className="text-sm font-medium text-charcoal mb-3">
                      R{(item.price * item.quantity).toLocaleString()}
                    </p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-3">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QUANTITY",
                            payload: { id: item.id, quantity: item.quantity - 1 },
                          })
                        }
                        className="w-7 h-7 flex items-center justify-center border border-stone/30 text-stone hover:border-charcoal hover:text-charcoal transition-colors"
                      >
                        <Minus size={11} />
                      </button>
                      <span className="text-sm w-4 text-center tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QUANTITY",
                            payload: { id: item.id, quantity: item.quantity + 1 },
                          })
                        }
                        className="w-7 h-7 flex items-center justify-center border border-stone/30 text-stone hover:border-charcoal hover:text-charcoal transition-colors"
                      >
                        <Plus size={11} />
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_ITEM", payload: item.id })
                        }
                        className="ml-auto text-xs text-stone/50 hover:text-charcoal transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-stone/20 px-6 py-6 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs tracking-widest uppercase text-stone">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-charcoal">
                  R{total.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-stone/50">
                Shipping calculated at checkout
              </p>
              <Button
                className="w-full bg-charcoal hover:bg-charcoal/85 text-cream text-xs tracking-widest uppercase rounded-none py-5 h-auto transition-all duration-300"
                asChild
              >
                <Link href="/checkout" onClick={() => dispatch({ type: "CLOSE_CART" })}>
                  Proceed to Checkout
                </Link>
              </Button>
              <button
                onClick={() => dispatch({ type: "CLOSE_CART" })}
                className="w-full text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
```

### `components/DiscountPopup.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "maison_welcome_popup_seen";

type PopupState = "hidden" | "entering" | "visible" | "leaving";

export default function DiscountPopup() {
  const [state, setState] = useState<PopupState>("hidden");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setState("entering");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setState("visible"));
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setState("leaving");
    localStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => setState("hidden"), 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, "1");
    setTimeout(dismiss, 3500);
  };

  if (state === "hidden") return null;
  const isVisible = state === "visible";

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={dismiss}
        aria-hidden="true"
      />

      <div
        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
      >
        <div
          className={`bg-cream max-w-[480px] w-full relative shadow-2xl transition-all duration-[400ms] ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.92]"
          }`}
        >
          <button
            onClick={dismiss}
            aria-label="Close welcome offer"
            className="absolute top-4 right-4 text-stone/60 hover:text-charcoal transition-colors z-10"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          <div className="px-8 pt-12 pb-10 sm:px-12 sm:pt-14 sm:pb-12 text-center">
            {!submitted ? (
              <>
                <p className="text-xs tracking-[0.5em] uppercase text-gold mb-5">
                  Welcome Offer
                </p>

                <h2
                  id="popup-heading"
                  className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight mb-4"
                >
                  Get 10% Off
                  <br />
                  Your First Order
                </h2>

                <p className="text-stone text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                  Sign up with your email and we&apos;ll send your discount code
                  straight to your inbox.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mb-5">
                  <div className="mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="your@email.com"
                      className={`w-full border px-4 py-3 text-sm text-charcoal bg-cream placeholder:text-stone/40 focus:outline-none transition-colors ${
                        error
                          ? "border-red-400 focus:border-red-400"
                          : "border-stone/30 focus:border-charcoal"
                      }`}
                      aria-label="Email address"
                      aria-describedby={error ? "email-error" : undefined}
                    />
                    {error && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-xs text-red-500 text-left"
                      >
                        {error}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-charcoal hover:bg-charcoal/85 text-cream text-xs tracking-widest uppercase rounded-none py-4 h-auto transition-all duration-300"
                  >
                    Claim My Discount
                  </Button>
                </form>

                <button
                  onClick={dismiss}
                  className="text-xs text-stone/40 hover:text-stone transition-colors underline underline-offset-2"
                >
                  No thanks, I&apos;ll pay full price
                </button>
              </>
            ) : (
              <div className="py-6">
                <p className="text-5xl mb-6">🎉</p>
                <h2 className="font-serif text-2xl text-charcoal mb-3">
                  Your code is on its way!
                </h2>
                <p className="text-stone text-sm leading-relaxed max-w-xs mx-auto">
                  Check your inbox — your 10% discount code will arrive
                  shortly. Happy shopping.
                </p>
              </div>
            )}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        </div>
      </div>
    </>
  );
}
```

### `components/FeaturedProducts.tsx`

```tsx
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">
              Curated Selection
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Featured Products
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors duration-300 border-b border-stone/40 pb-0.5 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `components/Footer.tsx`

```tsx
import Link from "next/link";

const footerLinks: Record<string, { label: string; href: string; external?: boolean }[]> = {
  Shop: [
    { label: "All Products", href: "/shop" },
    { label: "Textiles", href: "/shop?category=Textiles" },
    { label: "Kitchen", href: "/shop?category=Kitchen" },
    { label: "Decor", href: "/shop?category=Decor" },
    { label: "Home Fragrance", href: "/shop?category=Home+Fragrance" },
    { label: "Ceramics", href: "/shop?category=Ceramics" },
    { label: "Self Care", href: "/shop?category=Self+Care" },
    { label: "New Arrivals", href: "/shop" },
  ],
  Help: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/contact#faq" },
    { label: "Shipping Info", href: "/contact#shipping" },
    { label: "Track Your Order", href: "https://aramex.co.za/tracking/TrackShipment.php", external: true },
  ],
  Company: [
    { label: "Our Story", href: "/about" },
    { label: "Our Values", href: "/about#sustainability" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.25em] text-cream hover:text-gold transition-colors duration-300 block mb-5"
            >
              MAISON
            </Link>
            <p className="text-sm text-cream/50 leading-relaxed max-w-xs">
              Curated home goods and lifestyle objects, crafted for the South
              African home.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs tracking-widest uppercase text-cream/30 mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/30">
          <p>© {new Date().getFullYear()} MAISON. All rights reserved.</p>
          <p>Free delivery in SA over R1,500 · Secure payments</p>
        </div>
      </div>
    </footer>
  );
}
```

### `components/Header.tsx`

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/app/providers";
import { cartCount } from "@/lib/cart";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { state, dispatch } = useCart();
  const count = cartCount(state.items);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.25em] text-charcoal hover:text-gold transition-colors duration-300"
          >
            MAISON
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button
              aria-label={`Shopping cart — ${count} item${count !== 1 ? "s" : ""}`}
              onClick={() => dispatch({ type: "OPEN_CART" })}
              className="relative text-charcoal hover:text-gold transition-colors duration-300"
            >
              <ShoppingBag size={21} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center rounded-full bg-gold text-charcoal text-[9px] font-bold leading-none">
                  {count > 9 ? "9+" : count}
                </span>
              )}
            </button>

            <button
              aria-label="Toggle navigation menu"
              className="md:hidden text-charcoal hover:text-gold transition-colors duration-300"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X size={21} strokeWidth={1.5} />
              ) : (
                <Menu size={21} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-stone/20">
          <nav className="px-4 py-8 flex flex-col gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors duration-300"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
```

### `components/HeroSection.tsx`

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden">

      <HeroSlideshow />

      <div className="absolute inset-0 z-[11] bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,_rgba(201,169,110,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">

        <p className="hero-label text-xs tracking-[0.5em] uppercase text-gold mb-10">
          Curated in Cape Town
        </p>

        <h1 className="hero-headline font-serif text-5xl sm:text-7xl lg:text-8xl text-cream leading-[1.05] mb-8">
          Live Beautifully.
          <br />
          <span className="italic text-gold">Live Proudly South African.</span>
        </h1>

        <p className="hero-subheading text-base sm:text-lg text-cream/65 max-w-xl mx-auto mb-14 leading-relaxed">
          Discover home décor and lifestyle pieces thoughtfully selected
          for the modern South African home.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <Button className="bg-gold hover:bg-gold/90 text-charcoal font-sans font-medium text-xs tracking-widest uppercase px-10 py-6 h-auto rounded-none transition-all duration-300 w-full sm:w-auto">
              Explore the Collection
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              className="border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/60 font-sans font-medium text-xs tracking-widest uppercase px-10 py-6 h-auto rounded-none bg-transparent transition-all duration-300 w-full sm:w-auto"
            >
              Our Story
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream/15 to-transparent pointer-events-none z-20" />
    </section>
  );
}
```

### `components/HeroSlideshow.tsx`

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero/slide-1.jpg",
    alt: "Luxury Cape Town apartment interior with home décor objects and Table Mountain view",
  },
  {
    src: "/images/hero/slide-2.jpg",
    alt: "Elegant South African home lifestyle — styled ceramics, linen and coffee table objects",
  },
  {
    src: "/images/hero/slide-3.jpg",
    alt: "Cape Town rooftop terrace at golden hour with premium lifestyle décor",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, 6000);
    return () => clearInterval(id);
  }, [paused, advance]);

  const goTo = (index: number) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
  };

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {i === current ? (
            <div key={animKey} className="absolute inset-0 animate-ken-burns-slide">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={85}
              />
            </div>
          ) : (
            <div className="absolute inset-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                sizes="100vw"
                quality={85}
              />
            </div>
          )}
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`View slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ease-out ${
              i === current
                ? "w-5 h-[5px] bg-white"
                : "w-[5px] h-[5px] bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
```

### `components/ProductActions.tsx`

> **Note:** This file is not currently imported anywhere — `ProductDetail.tsx` has its own inline variant selector. Kept here for reference / potential reuse.

```tsx
"use client";

import { useState } from "react";
import { useCart } from "@/app/providers";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";

export default function ProductActions({ product }: { product: Product }) {
  const { dispatch } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart() {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        variant: selectedVariant ?? selectedSize,
      },
    });
    dispatch({ type: "OPEN_CART" });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <div>
      {product.variants && (
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase text-stone mb-3">
            Colour / Variant
          </p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v}
                onClick={() => setSelectedVariant(v)}
                className={`text-xs tracking-wide px-4 py-2 border transition-colors duration-200 ${
                  selectedVariant === v
                    ? "bg-charcoal text-cream border-charcoal"
                    : "border-stone/30 text-stone hover:border-charcoal hover:text-charcoal"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.sizes && (
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase text-stone mb-3">
            Size
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`text-xs tracking-wide px-4 py-2 border transition-colors duration-200 ${
                  selectedSize === s
                    ? "bg-charcoal text-cream border-charcoal"
                    : "border-stone/30 text-stone hover:border-charcoal hover:text-charcoal"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <Button
        onClick={handleAddToCart}
        className={`w-full rounded-none py-6 h-auto text-xs tracking-widest uppercase mb-5 transition-all duration-300 ${
          justAdded
            ? "bg-gold text-charcoal hover:bg-gold"
            : "bg-charcoal text-cream hover:bg-charcoal/85"
        }`}
      >
        {justAdded
          ? "✓ Added to Cart"
          : `Add to Cart — R${product.price.toLocaleString()}`}
      </Button>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone/60">
        <span>Free delivery over R1,500</span>
        <span aria-hidden>·</span>
        <span>30-day returns</span>
        <span aria-hidden>·</span>
        <span>Secure checkout</span>
      </div>
    </div>
  );
}
```

### `components/ProductCard.tsx`

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/providers";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        variant: product.variants?.[0],
      },
    });
    dispatch({ type: "OPEN_CART" });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <article className="group">
      <Link href={`/shop/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-parchment aspect-[4/5] mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <span
            className="absolute bottom-[10px] right-[10px] font-serif text-[11px] tracking-[0.25em] text-white pointer-events-none select-none z-10"
            style={{ opacity: 0.55 }}
            aria-hidden="true"
          >
            MAISON
          </span>
        </div>

        <div className="space-y-1 mb-4">
          <p className="text-xs tracking-widest uppercase text-stone">
            {product.category}
          </p>
          <h3 className="font-serif text-lg text-charcoal leading-snug">
            {product.name}
          </h3>
          <p className="text-sm text-stone">{product.shortDescription}</p>
        </div>
      </Link>

      <div className="flex items-center justify-between">
        <p className="text-base font-medium text-charcoal">
          R{product.price.toLocaleString()}
        </p>
        <Button
          onClick={handleAddToCart}
          variant="outline"
          className={`text-xs tracking-widest uppercase rounded-none px-4 py-2 h-auto transition-all duration-300 ${
            justAdded
              ? "bg-gold border-gold text-charcoal hover:bg-gold"
              : "border-charcoal/40 text-charcoal hover:bg-charcoal hover:text-cream hover:border-charcoal"
          }`}
        >
          {justAdded ? "✓ Added" : "Add to Cart"}
        </Button>
      </div>
    </article>
  );
}
```

### `components/ProductDetail.tsx`

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/providers";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";

export default function ProductDetail({ product }: { product: Product }) {
  const { dispatch } = useCart();

  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants?.[0]
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes?.[0]
  );
  const [justAdded, setJustAdded] = useState(false);

  const resolveImage = (key?: string) =>
    (key && product.variantImages?.[key]) ?? product.image;

  const [displayImage, setDisplayImage] = useState(() =>
    resolveImage(product.variants?.[0] ?? product.sizes?.[0])
  );
  const [imgOpacity, setImgOpacity] = useState(1);

  const crossfade = (newKey: string) => {
    const next = resolveImage(newKey);
    if (next === displayImage) return;
    setImgOpacity(0);
    setTimeout(() => {
      setDisplayImage(next);
      setImgOpacity(1);
    }, 200);
  };

  const handleVariant = (v: string) => {
    setSelectedVariant(v);
    crossfade(v);
  };

  const handleSize = (s: string) => {
    setSelectedSize(s);
    if (product.variantImages?.[s]) crossfade(s);
  };

  const thumbKeys = product.variants ?? product.sizes ?? [];
  const thumbs = thumbKeys
    .map((k) => ({ key: k, src: resolveImage(k) }))
    .filter((t, i, arr) => arr.findIndex((x) => x.src === t.src) === i);

  const activeThumbKey = selectedVariant ?? selectedSize;

  function handleAddToCart() {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: displayImage,
        quantity: 1,
        variant: selectedVariant ?? selectedSize,
      },
    });
    dispatch({ type: "OPEN_CART" });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

      <div>
        <div
          className="relative aspect-square bg-[#F8F7F5] overflow-hidden mb-3"
          style={{ opacity: imgOpacity, transition: "opacity 0.2s ease" }}
        >
          <Image
            src={displayImage}
            alt={
              selectedVariant
                ? `${product.name} — ${selectedVariant}`
                : product.name
            }
            fill
            priority
            className="object-contain p-6"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span
            className="absolute bottom-[10px] right-[10px] font-serif text-[11px] tracking-[0.25em] text-white pointer-events-none select-none z-10"
            style={{ opacity: 0.55 }}
            aria-hidden="true"
          >
            MAISON
          </span>
        </div>

        {thumbs.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {thumbs.map(({ key, src }) => (
              <button
                key={key}
                onClick={() =>
                  product.variants ? handleVariant(key) : handleSize(key)
                }
                aria-label={`Select ${key}`}
                title={key}
                className={`relative w-[72px] h-[72px] bg-[#F8F7F5] overflow-hidden border-2 transition-colors duration-200 flex-shrink-0 ${
                  key === activeThumbKey
                    ? "border-gold"
                    : "border-transparent hover:border-stone/40"
                }`}
              >
                <Image
                  src={src}
                  alt={key}
                  fill
                  className="object-contain p-1"
                  sizes="72px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center lg:py-8">
        <p className="text-xs tracking-widest uppercase text-gold mb-3">
          {product.category}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 leading-tight">
          {product.name}
        </h1>
        <p className="text-2xl text-charcoal font-medium mb-6">
          R{product.price.toLocaleString()}
        </p>
        <p className="text-stone leading-relaxed mb-10">{product.description}</p>

        {product.variants && (
          <div className="mb-8">
            <p className="text-xs tracking-widest uppercase text-stone mb-3">
              Colour / Variant
            </p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => handleVariant(v)}
                  className={`text-xs tracking-wide px-4 py-2 border transition-colors duration-200 ${
                    selectedVariant === v
                      ? "bg-charcoal text-cream border-charcoal"
                      : "border-stone/30 text-stone hover:border-charcoal hover:text-charcoal"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        )}

        {product.sizes && (
          <div className="mb-8">
            <p className="text-xs tracking-widest uppercase text-stone mb-3">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSize(s)}
                  className={`text-xs tracking-wide px-4 py-2 border transition-colors duration-200 ${
                    selectedSize === s
                      ? "bg-charcoal text-cream border-charcoal"
                      : "border-stone/30 text-stone hover:border-charcoal hover:text-charcoal"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={handleAddToCart}
          className={`w-full rounded-none py-6 h-auto text-xs tracking-widest uppercase mb-5 transition-all duration-300 ${
            justAdded
              ? "bg-gold text-charcoal hover:bg-gold"
              : "bg-charcoal text-cream hover:bg-charcoal/85"
          }`}
        >
          {justAdded
            ? "✓ Added to Cart"
            : `Add to Cart — R${product.price.toLocaleString()}`}
        </Button>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone/60">
          <span>Free delivery over R1,500</span>
          <span aria-hidden>·</span>
          <span>30-day returns</span>
          <span aria-hidden>·</span>
          <span>Secure checkout</span>
        </div>
      </div>
    </div>
  );
}
```

### `components/ProductReviews.tsx`

```tsx
import StarRating from "@/components/StarRating";
import ReviewCard from "@/components/ReviewCard";
import { getReviewsByProductId, getProductAverageRating } from "@/lib/reviews";

export default function ProductReviews({ productId }: { productId: string }) {
  const productReviews = getReviewsByProductId(productId);
  const avg = getProductAverageRating(productId);

  if (productReviews.length === 0) return null;

  return (
    <section className="mt-20 pt-16 border-t border-stone/15">

      <div className="mb-10">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">
          Customer Reviews
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
            What Customers Say
          </h2>
          <div className="flex items-center gap-2">
            <StarRating rating={avg} size={15} />
            <span className="text-sm text-stone">
              {avg} / 5 &middot; {productReviews.length} review{productReviews.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {productReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
```

### `components/ReviewCard.tsx`

```tsx
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StarRating from "@/components/StarRating";
import type { Review } from "@/lib/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-stone/10 p-6 flex flex-col gap-4 h-full transition-transform duration-200 hover:-translate-y-1 shadow-sm">
      <div className="flex items-center justify-between">
        <StarRating rating={review.stars} size={15} />
        {review.verified && (
          <span className="flex items-center gap-1 text-[10px] tracking-wide text-stone/60 uppercase">
            <CheckCircle2 size={11} className="text-gold/80" />
            Verified
          </span>
        )}
      </div>

      <h3 className="font-serif text-charcoal text-base leading-snug">
        &ldquo;{review.headline}&rdquo;
      </h3>

      <p className="text-sm text-stone leading-relaxed flex-1">
        {review.body}
      </p>

      <Link
        href={`/shop/${review.productId}`}
        className="text-xs text-gold hover:text-charcoal transition-colors duration-200 tracking-wide underline underline-offset-2 decoration-gold/40 self-start"
      >
        {review.productName}
      </Link>

      <div className="pt-3 border-t border-stone/10">
        <p className="text-xs font-medium text-charcoal">{review.name}</p>
        <p className="text-xs text-stone/60 mt-0.5">{review.location}</p>
        <p className="text-xs text-stone/40 mt-0.5">{review.date}</p>
      </div>
    </div>
  );
}
```

### `components/ReviewsSection.tsx`

```tsx
import StarRating from "@/components/StarRating";
import ReviewCard from "@/components/ReviewCard";
import { featuredReviews } from "@/lib/reviews";

export default function ReviewsSection() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            Loved Across South Africa
          </h2>
          <p className="text-stone mb-8">Real reviews from real homes.</p>

          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 shadow-sm border border-stone/10">
            <span className="font-serif text-xl text-charcoal">4.8</span>
            <StarRating rating={4.8} size={16} />
            <span className="text-sm text-stone">from 127 reviews</span>
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-7 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[83vw] sm:w-[340px] md:w-auto snap-start"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `components/StarRating.tsx`

```tsx
import { Star } from "lucide-react";

interface Props {
  rating: number;
  size?: number;
}

export default function StarRating({ rating, size = 14 }: Props) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.max(0, Math.min(1, rating - (star - 1)));
        const fillPct = Math.round(fill * 100);
        return (
          <span
            key={star}
            className="relative inline-block flex-shrink-0"
            style={{ width: size, height: size }}
          >
            <Star
              size={size}
              fill="currentColor"
              strokeWidth={0}
              className="absolute top-0 left-0 text-stone/20"
            />
            {fillPct > 0 && (
              <span
                aria-hidden
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${fillPct}%` }}
              >
                <Star
                  size={size}
                  fill="currentColor"
                  strokeWidth={0}
                  className="absolute top-0 left-0 text-gold"
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
```

### `components/TrustBadges.tsx`

```tsx
import { Truck, ShieldCheck } from "lucide-react";

const badges = [
  {
    Icon: Truck,
    title: "Free Delivery in SA",
    description: "Complimentary delivery on all orders over R1,500.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure Checkout",
    description: "256-bit SSL encryption on every transaction.",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-parchment py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-2xl mx-auto">
          {badges.map(({ Icon, title, description }) => (
            <div key={title} className="flex items-start gap-5">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-gold/40 text-gold">
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-base text-charcoal mb-1">{title}</h3>
                <p className="text-sm text-stone leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `components/ui/button.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

---

### `lib/utils.ts`

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### `lib/cart.ts`

```ts
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" };

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== action.payload.id),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "OPEN_CART":
      return { ...state, isOpen: true };
    case "CLOSE_CART":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
```

### `lib/products.ts`

```ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  category: string;
  image: string;
  /** Per-variant or per-size images — key matches variant/size string exactly */
  variantImages?: Record<string, string>;
  sizes?: string[];
  variants?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Luxury Soy Candle Trio",
    price: 999,
    shortDescription: "Three hand-poured soy candles in apothecary amber glass.",
    description:
      "A curated set of three hand-poured soy wax candles, each housed in a reusable amber glass apothecary jar. Crafted with a clean coconut-soy blend and a crackling wooden wick, every candle burns for up to 45 hours. Three sophisticated, evolving scents — Sandalwood & Vanilla, Jasmine & White Musk, and Cedarwood & Black Fig — make this an effortless gift or a deeply personal ritual. The amber glass protects the wax from UV degradation and can be repurposed as a storage jar long after the candle is spent.",
    category: "Home Fragrance",
    image: "/images/products/soy-candle-trio.jpg",
    variants: ["Sandalwood & Vanilla", "Jasmine & White Musk", "Cedarwood & Black Fig"],
    variantImages: {
      "Sandalwood & Vanilla": "/images/products/soy-candle-sandalwood-vanilla.jpg",
      "Jasmine & White Musk":  "/images/products/soy-candle-jasmine-musk.jpg",
      "Cedarwood & Black Fig": "/images/products/soy-candle-cedarwood-fig.jpg",
    },
    featured: true,
  },
  {
    id: "2",
    name: "Marble & Acacia Cheese Board Set",
    price: 1299,
    shortDescription: "Carrara marble slab with acacia board and 4 tools.",
    description:
      "A statement entertaining piece that pairs a cool Carrara marble slab with a warm acacia wood board and four professional-grade stainless steel cheese tools — a cleaver, a fork, a knife, and a spreader — all nesting neatly in a built-in slide-out drawer. The contrast of stone and timber is as visually striking as it is practical. Marble stays naturally cool, making it ideal for preserving cheese and chocolate. Wipe clean and ready for every gathering, from casual Friday evening wine to a formal dinner party spread.",
    category: "Kitchen",
    image: "/images/products/cheese-board-set.jpg",
    variants: ["Marble & Acacia", "Slate & Bamboo"],
    variantImages: {
      "Marble & Acacia": "/images/products/cheese-board-marble-acacia.jpg",
      "Slate & Bamboo":  "/images/products/cheese-board-slate-bamboo.jpg",
    },
    featured: true,
  },
  {
    id: "3",
    name: "Chunky Knit Throw Blanket",
    price: 1499,
    shortDescription: "Arm-knitted natural cotton in six muted tones.",
    description:
      "Hand-knitted in an oversized arm-knit technique from 100% natural cotton roving, this blanket achieves extraordinary volume and warmth without the weight. The open-loop weave is tactile and inviting — equally beautiful draped over a sofa, layered at the foot of a bed, or wrapped around you on a cold Highveld evening. Available in six considered, muted tones designed to complement any interior palette. Each blanket is made to order, meaning slight variations in texture are part of the charm. Dimensions approximately 130×180 cm.",
    category: "Textiles",
    image: "/images/products/chunky-knit-blanket.jpg",
    variants: ["Oat", "Ivory", "Charcoal", "Sage", "Dusty Rose", "Stone"],
    variantImages: {
      "Oat":       "/images/products/knit-blanket-oat.jpg",
      "Ivory":     "/images/products/knit-blanket-ivory.jpg",
      "Charcoal":  "/images/products/knit-blanket-charcoal.jpg",
      "Sage":      "/images/products/knit-blanket-sage.jpg",
      "Dusty Rose":"/images/products/knit-blanket-dusty-rose.jpg",
      "Stone":     "/images/products/knit-blanket-stone.jpg",
    },
    featured: true,
  },
  {
    id: "4",
    name: "Ceramic Pour-Over Coffee Set",
    price: 1149,
    shortDescription: "Dripper, server & two cups in matte reactive glaze.",
    description:
      "A complete pour-over brewing set for the home barista who appreciates considered design as much as exceptional coffee. The hand-thrown ceramic dripper sits on a turned wooden collar over a matching ceramic server, accompanied by two generous cups — each holding 220ml. Finished in a matte reactive glaze — chalk white, charcoal, or sage — that subtly shifts tone in different lights. The set is designed to slow your morning down, producing a clean, bright cup of filter coffee while looking beautiful on a kitchen shelf. Dishwasher safe.",
    category: "Kitchen",
    image: "/images/products/ceramic-pour-over.jpg",
    variants: ["Chalk White", "Charcoal", "Sage Green"],
    variantImages: {
      "Chalk White": "/images/products/pour-over-chalk-white.jpg",
      "Charcoal":    "/images/products/pour-over-charcoal.jpg",
      "Sage Green":  "/images/products/pour-over-sage-green.jpg",
    },
  },
  {
    id: "5",
    name: "Brushed Gold Tealight Set",
    price: 1049,
    shortDescription: "Set of 3 geometric holders in brushed 18k gold-plate.",
    description:
      "Three geometric tealight holders in brushed 18k gold-plated steel, each in a different height and silhouette — a low sphere, a ribbed cylinder, and a faceted diamond. Together they create a dynamic, layered tabletop composition; placed individually, each piece holds its own. Designed to catch and refract candlelight in the most flattering way, these holders complement both modern minimalist and warmly layered interiors. Suitable for standard tealight candles. The brushed finish conceals fingerprints and keeps its warmth over time.",
    category: "Decor",
    image: "/images/products/gold-tealight-set.jpg",
    variants: ["Brushed Gold", "Brushed Silver", "Matte Black"],
    variantImages: {
      "Brushed Gold":   "/images/products/tealight-brushed-gold.jpg",
      "Brushed Silver": "/images/products/tealight-brushed-silver.jpg",
      "Matte Black":    "/images/products/tealight-matte-black.jpg",
    },
  },
  {
    id: "6",
    name: "Stonewashed Linen Pillowcase Set",
    price: 1049,
    shortDescription: "Pair of French flax linen pillowcases, pre-washed soft.",
    description:
      "A pair of European flax linen pillowcases, stonewashed for a relaxed, lived-in softness from the very first night. The envelope closure keeps your pillow neatly tucked without a visible zip. Unlike cotton, linen is naturally temperature-regulating — cool in summer, insulating in winter — and becomes softer and more beautiful with every wash. Made from 100% French-grown flax with an OEKO-TEX certification, these pillowcases are a small but lasting investment in how you sleep. Available in four understated colourways.",
    category: "Textiles",
    image: "/images/products/linen-pillowcase-set.jpg",
    variants: ["Oatmeal", "Dusty Blue", "Warm White", "Terracotta"],
    variantImages: {
      "Oatmeal":    "/images/products/pillowcase-linen-oatmeal.jpg",
      "Dusty Blue": "/images/products/pillowcase-linen-dusty-blue.jpg",
      "Warm White": "/images/products/pillowcase-linen-warm-white.jpg",
      "Terracotta": "/images/products/pillowcase-linen-terracotta.jpg",
    },
    sizes: ["Standard (48×74 cm)", "King (48×90 cm)"],
  },
  {
    id: "7",
    name: "Acacia Wood Serving Tray",
    price: 1199,
    shortDescription: "Solid acacia with cut-out handles. Each piece unique.",
    description:
      "Cut from a single plank of solid acacia wood with a rich, swirling grain that makes every tray one of a kind. The integrated cut-out handles allow it to move effortlessly between kitchen, dining table, and bedroom. Use it as a breakfast tray, a bar service tray, a bedside organiser, or a decorative surface on a coffee table. The natural oils in acacia wood make it inherently resistant to moisture and cracking. Oil occasionally with food-grade mineral oil to preserve the lustre and deepen the grain over time.",
    category: "Kitchen",
    image: "/images/products/acacia-wood-tray.jpg",
    sizes: ["Medium (40×30 cm)", "Large (50×35 cm)"],
  },
  {
    id: "8",
    name: "Luxury Reed Diffuser",
    price: 899,
    shortDescription: "200ml premium fragrance oil, 8 natural rattan reeds.",
    description:
      "A long-lasting room diffuser containing 200ml of concentrated premium fragrance oil and eight natural rattan reeds, presented in a substantial frosted glass bottle with a brushed brass collar. Lasts up to 14 weeks and delivers a consistent, sophisticated scent that gently evolves through the day — no flames, no timers, no maintenance. Flip the reeds weekly to refresh the throw. Three curated fragrances, each built around a distinctive base note that anchors the whole room without overpowering it.",
    category: "Home Fragrance",
    image: "/images/products/reed-diffuser.jpg",
    variants: ["Bergamot & Vetiver", "Rose & Oud", "Eucalyptus & Sage"],
    variantImages: {
      "Bergamot & Vetiver": "/images/products/reed-diffuser-bergamot.jpg",
      "Rose & Oud":         "/images/products/reed-diffuser-rose-oud.jpg",
      "Eucalyptus & Sage":  "/images/products/reed-diffuser-eucalyptus.jpg",
    },
  },
  {
    id: "9",
    name: "Matte Ceramic Plant Pot Set",
    price: 1149,
    shortDescription: "Set of 3 graduated pots with drainage holes & saucers.",
    description:
      "Three ceramic plant pots in carefully graduated sizes — small (12cm), medium (16cm), and large (20cm) — finished in a silky matte glaze that subtly shifts tone in natural light. Each pot includes a drainage hole and a matching saucer to protect surfaces. Arrange them as a set for layered visual interest, or place them individually throughout your home. The clean, minimal silhouette works equally well with trailing plants, succulents, ferns, and architectural specimens. Frost-resistant for indoor and sheltered outdoor use.",
    category: "Ceramics",
    image: "/images/products/ceramic-plant-pots.jpg",
    variants: ["Chalk White", "Warm Stone", "Sage Green", "Terracotta"],
    variantImages: {
      "Chalk White": "/images/products/ceramic-pots-chalk-white.jpg",
      "Warm Stone":  "/images/products/ceramic-pots-warm-stone.jpg",
      "Sage Green":  "/images/products/ceramic-pots-sage-green.jpg",
      "Terracotta":  "/images/products/ceramic-pots-terracotta.jpg",
    },
  },
  {
    id: "10",
    name: "Velvet Storage Cube Set",
    price: 1299,
    shortDescription: "Set of 2 collapsible velvet cubes with leather handles.",
    description:
      "Two square storage cubes upholstered in plush velvet with reinforced edges and vegan leather handles, designed to be displayed as openly as they are used practically. The collapsible frame folds flat when not in use, and the velvet surface resists marks and everyday scuffs better than you might expect. At home on an open shelf, inside a wardrobe, or beside a bed — a storage solution that looks like it was chosen for its beauty, not its function. Internal dimensions accommodate folded throws, books, toys, or linens with ease.",
    category: "Decor",
    image: "/images/products/velvet-storage-cube.jpg",
    variants: ["Sage Green", "Dusty Rose", "Warm Caramel", "Navy"],
    variantImages: {
      "Sage Green":   "/images/products/velvet-cube-sage-green.jpg",
      "Dusty Rose":   "/images/products/velvet-cube-dusty-rose.jpg",
      "Warm Caramel": "/images/products/velvet-cube-warm-caramel.jpg",
      "Navy":         "/images/products/velvet-cube-navy.jpg",
    },
    sizes: ["Small (30×30 cm)", "Large (40×40 cm)"],
  },
  {
    id: "11",
    name: "Botanical Soap Gift Set",
    price: 999,
    shortDescription: "6 cold-pressed artisan soaps in a rigid gift box.",
    description:
      "Six cold-pressed artisan soaps, each formulated with a different combination of botanical oils, natural mineral clays, and blended essential oils. Free from sulphates, parabens, and synthetic fragrance — only ingredients your skin actually responds to. Each bar weighs approximately 120g and lasts 4–6 weeks with regular use. Presented in a rigid gift box lined with tissue and finished with a kraft label, this set requires no wrapping and no explanation. A considered gift for anyone who pays attention to the small details of daily life.",
    category: "Self Care",
    image: "/images/products/botanical-soap-set.jpg",
    variants: ["Floral Garden", "Forest & Earth", "Citrus & Herb"],
    variantImages: {
      "Floral Garden":  "/images/products/soap-floral-garden.jpg",
      "Forest & Earth": "/images/products/soap-forest-earth.jpg",
      "Citrus & Herb":  "/images/products/soap-citrus-herb.jpg",
    },
  },
  {
    id: "12",
    name: "Nordic Crystal Bud Vase Set",
    price: 1199,
    shortDescription: "Set of 2 faceted glass vases — tall 28 cm & short 18 cm.",
    description:
      "Two slender bud vases in clear handblown glass with a delicately faceted surface that scatters light beautifully across any surface they touch. Sold as a complementary pair — one tall (28cm) and one short (18cm) — they work together as a considered composition or independently on different surfaces. Equally beautiful with a single garden cutting, a stem of dried botanicals, or left entirely empty as simple, elegant sculptural objects. The thick base gives both vases a reassuring weight and stability.",
    category: "Decor",
    image: "/images/products/crystal-bud-vases.jpg",
  },
  {
    id: "13",
    name: "Stonewashed Linen Napkin Set",
    price: 1049,
    shortDescription: "Set of 6 — 45×45 cm, mitered corners, pre-washed.",
    description:
      "Six generously proportioned dinner napkins (45×45cm) in 100% stonewashed linen with a classic mitered corner finish and a fine hemstitched edge. Pre-washed so they arrive soft and ready to use — and they only become more beautiful with every subsequent wash and press. The natural irregularity of the linen weave gives each napkin a handmade quality that elevates both everyday dining and formal entertaining. Four considered colourways to complement any table setting, from rustic to refined.",
    category: "Textiles",
    image: "/images/products/linen-napkin-set.jpg",
    variants: ["Oatmeal", "Natural White", "Dusty Sage", "Charcoal"],
    variantImages: {
      "Oatmeal":       "/images/products/linen-napkin-oatmeal.jpg",
      "Natural White": "/images/products/linen-napkin-natural-white.jpg",
      "Dusty Sage":    "/images/products/linen-napkin-dusty-sage.jpg",
      "Charcoal":      "/images/products/linen-napkin-charcoal.jpg",
    },
  },
  {
    id: "14",
    name: "Rose Gold Cutlery Set",
    price: 1799,
    shortDescription: "16-piece service for 4 in brushed rose gold stainless steel.",
    description:
      "A complete 16-piece cutlery service for four — dinner forks, salad forks, dinner knives, and dessert spoons — in 18/10 stainless steel with a brushed rose gold PVD finish. The durable PVD coating is resistant to tarnishing and dishwasher-safe. Each piece has been weighted for balance, and the flat, tapering profile sits comfortably in the hand. Presented in a velvet-lined gift box, this set elevates every meal from the functional to the considered. A statement on any table.",
    category: "Kitchen",
    image: "/images/products/rose-gold-cutlery.jpg",
  },
  {
    id: "15",
    name: "Handblown Art Glass Vase",
    price: 1049,
    shortDescription: "Freeform handblown clear glass. Each piece is unique.",
    description:
      "A statement vase in handblown borosilicate glass with a freeform tapered silhouette — subtle variations in the glass wall thickness and surface texture are an intentional mark of the glassblowing process, making each piece genuinely one of a kind. Works beautifully with large single branches, an armful of dried pampas, or a single dramatic stem. Also striking left entirely empty as a sculptural object on a shelf or sideboard. Borosilicate glass is more resistant to thermal shock than standard glass, making it durable in daily use.",
    category: "Decor",
    image: "/images/products/handblown-glass-vase.jpg",
    sizes: ["Medium (35 cm)", "Tall (50 cm)"],
    variantImages: {
      "Medium (35 cm)": "/images/products/glass-vase-medium.jpg",
      "Tall (50 cm)":   "/images/products/glass-vase-tall.jpg",
    },
  },
  {
    id: "16",
    name: "Electric Ultrasonic Aroma Diffuser",
    price: 1149,
    shortDescription: "300ml ultrasonic diffuser with 7-colour ambient light.",
    description:
      "A whisper-quiet ultrasonic diffuser with a 300ml water reservoir and a run time of up to 8 hours on the low mist setting. The wood-grain ceramic finish looks entirely at home on a bedside table or home office desk. Seven ambient light modes — including a candle-flicker setting — give you full control over the atmosphere of your space. Compatible with any essential oil, this diffuser replaces synthetic air fresheners with a cleaner, more personal approach to fragrance. Automatic shut-off when the water runs out.",
    category: "Home Fragrance",
    image: "/images/products/aroma-diffuser.jpg",
    variants: ["White Oak", "Dark Walnut"],
    variantImages: {
      "White Oak":   "/images/products/aroma-diffuser-white-oak.jpg",
      "Dark Walnut": "/images/products/aroma-diffuser-dark-walnut.jpg",
    },
    featured: true,
  },
  {
    id: "17",
    name: "Mulberry Silk Pillowcase Set",
    price: 1299,
    shortDescription: "Pair of 22 momme pure silk pillowcases, hidden zip.",
    description:
      "A pair of pillowcases in 22 momme pure mulberry silk — the weight and weave that dermatologists and hairstylists most commonly recommend. Silk's smooth surface reduces friction on both skin and hair overnight, minimising the creasing and breakage associated with cotton. The hidden zip closure keeps the pillow perfectly contained. Machine washable on a delicate cycle. Available in four understated colourways that suit any bedroom palette. A small, daily upgrade with a genuinely noticeable difference.",
    category: "Textiles",
    image: "/images/products/silk-pillowcase-set.jpg",
    variants: ["Pearl White", "Champagne", "Blush", "Slate Grey"],
    variantImages: {
      "Pearl White": "/images/products/silk-pillowcase-pearl-white.jpg",
      "Champagne":   "/images/products/silk-pillowcase-champagne.jpg",
      "Blush":       "/images/products/silk-pillowcase-blush.jpg",
      "Slate Grey":  "/images/products/silk-pillowcase-slate-grey.jpg",
    },
    sizes: ["Standard (48×74 cm)", "King (48×90 cm)"],
  },
  {
    id: "18",
    name: "Macramé Plant Hanger Set",
    price: 899,
    shortDescription: "Set of 3 handknotted cotton rope hangers, varied heights.",
    description:
      "Three handknotted macramé plant hangers in natural unbleached cotton rope, each at a different length — 60cm, 80cm, and 100cm — designed to be hung at staggered heights for a full, layered display. Each hanger accommodates pots up to 18cm in diameter and is finished with a brushed brass ring for hanging. The traditional knotting technique is both structurally strong and visually textured. Particularly beautiful with trailing plants like pothos, string of pearls, or wandering jew. Suitable for indoor use.",
    category: "Decor",
    image: "/images/products/macrame-plant-hanger.jpg",
  },
  {
    id: "19",
    name: "Marble Coaster Set",
    price: 999,
    shortDescription: "Set of 4 genuine marble coasters with gold edge detail.",
    description:
      "Four solid marble coasters, each cut from a single piece of natural stone — meaning the veining pattern is unique to every coaster and every set. A thin cork base protects surfaces from scratching, while the 9mm marble thickness gives each coaster a satisfying weight and thermal mass that keeps cold drinks cold. The brushed gold edge banding adds a considered finishing detail. Presented in a branded gift box. A quiet, permanent upgrade to any coffee table or kitchen counter.",
    category: "Decor",
    image: "/images/products/marble-coaster-set.jpg",
    variants: ["White Carrara", "Black Marquina", "Green Onyx"],
    variantImages: {
      "White Carrara":  "/images/products/marble-coaster-white-carrara.jpg",
      "Black Marquina": "/images/products/marble-coaster-black-marquina.jpg",
      "Green Onyx":     "/images/products/marble-coaster-green-onyx.jpg",
    },
  },
  {
    id: "20",
    name: "Borosilicate Glass Storage Jar Set",
    price: 1199,
    shortDescription: "Set of 3 airtight glass jars — 500ml, 1L & 1.5L.",
    description:
      "Three airtight glass storage jars in heat-resistant borosilicate glass, fitted with bamboo lids and a silicone seal that locks in freshness for up to three times longer than standard screw-top jars. The set includes three graduated sizes — 500ml, 1L, and 1.5L — designed to hold dry pantry goods, coffee, grains, or dried herbs in a way that looks as considered as it is practical. Borosilicate glass is non-porous, odour-neutral, and completely transparent for at-a-glance contents. Dishwasher safe.",
    category: "Kitchen",
    image: "/images/products/glass-storage-jars.jpg",
  },
  {
    id: "21",
    name: "Aged Brass Wall Hook Trio",
    price: 1099,
    shortDescription: "Set of 3 solid brass hooks with a warm aged patina finish.",
    description:
      "A set of three wall hooks cast in solid brass with a warm aged patina finish, designed to be as sculptural as they are practical. Each hook is generously curved to hold heavy coats, bags, or towels without sagging over time, and the graduated widths create a considered composition when arranged at staggered heights. Mounting hardware is concealed behind the hook plate for a clean finish, and each piece is supplied with a matching satin-finish screw. Ideal for an entrance hall, a powder room, or beside a bedroom wardrobe. The brass will gently deepen in tone over the years, which is part of the charm.",
    category: "Decor",
    image: "/images/products/brass-wall-hooks.jpg",
    variants: ["Aged Brass", "Matte Black", "Polished Nickel"],
    variantImages: {
      "Aged Brass":      "/images/products/wall-hooks-aged-brass.jpg",
      "Matte Black":     "/images/products/wall-hooks-matte-black.jpg",
      "Polished Nickel": "/images/products/wall-hooks-polished-nickel.jpg",
    },
  },
  {
    id: "22",
    name: "Stonewashed Linen Tea Towel Set",
    price: 949,
    shortDescription: "Set of 3 European flax linen tea towels, 50×70 cm.",
    description:
      "A set of three generously sized tea towels (50×70 cm) in 100% European flax linen, pre-stonewashed for a relaxed, lived-in feel from the very first use. Linen's natural absorbency makes these exceptional for drying glassware and hand-polishing wooden boards — far more effective than synthetic blends or thin cotton. Each towel features a fine hemstitched edge and a small corner loop for hanging neatly over an oven handle or hook. Like all good linen, these only become softer and more beautiful with every wash. Available in four considered colourways to complement any kitchen palette, from warm oatmeal to deep charcoal.",
    category: "Kitchen",
    image: "/images/products/linen-tea-towels.jpg",
    variants: ["Oatmeal", "Natural White", "Dusty Sage", "Charcoal"],
    variantImages: {
      "Oatmeal":       "/images/products/tea-towels-oatmeal.jpg",
      "Natural White": "/images/products/tea-towels-natural-white.jpg",
      "Dusty Sage":    "/images/products/tea-towels-dusty-sage.jpg",
      "Charcoal":      "/images/products/tea-towels-charcoal.jpg",
    },
  },
  {
    id: "23",
    name: "Handthrown Ceramic Mug Set",
    price: 1099,
    shortDescription: "Set of 4 handthrown 350 ml ceramic mugs in matte glaze.",
    description:
      "Four handthrown ceramic mugs, each finished with a matte reactive glaze that subtly shifts tone in different lights. Because they are thrown individually by hand, every mug carries the maker's mark — slight irregularities in wall thickness, rim, and silhouette that make each one genuinely one of a kind. Each mug holds a generous 350 ml, making them equally well suited to morning coffee, afternoon tea, or an evening hot chocolate. The thick walls retain heat beautifully, and the rim is gently lipped for a comfortable drink. Dishwasher and microwave safe. A quiet, daily pleasure that will last for years.",
    category: "Ceramics",
    image: "/images/products/ceramic-mugs.jpg",
    variants: ["Warm Clay", "Chalk White", "Matte Charcoal", "Sage Green"],
    variantImages: {
      "Warm Clay":      "/images/products/mugs-warm-clay.jpg",
      "Chalk White":    "/images/products/mugs-chalk-white.jpg",
      "Matte Charcoal": "/images/products/mugs-matte-charcoal.jpg",
      "Sage Green":     "/images/products/mugs-sage-green.jpg",
    },
  },
  {
    id: "24",
    name: "Jute & Cotton Floor Runner",
    price: 1399,
    shortDescription: "Handwoven natural jute & cotton runner. Reversible. Two sizes.",
    description:
      "A handwoven floor runner crafted from natural unbleached jute with soft cotton warp threads, in a traditional flatweave pattern with warm earthy variations visible across its length. Jute is one of the most sustainable fibres available — it grows quickly, requires little water, and is fully biodegradable at the end of its life. The runner is reversible, meaning its effective wear life is doubled, and both sides present equally beautifully. Ideal for a hallway, a kitchen, or laid at the foot of a bed. The natural fibres will soften noticeably in the first few weeks of use and develop a beautiful patina over time.",
    category: "Textiles",
    image: "/images/products/jute-cotton-runner.jpg",
    sizes: ["Small (60×150 cm)", "Large (80×200 cm)"],
  },
  {
    id: "25",
    name: "Bamboo Bath Caddy",
    price: 1049,
    shortDescription: "Adjustable bamboo caddy with book slot & wine glass holder.",
    description:
      "A bath caddy crafted from sustainably harvested bamboo with integrated slots designed for the small rituals of a long bath — a slanted reading rest for a book or tablet, a secured hollow for a wine glass, a candle indent, and a flat surface tray for a cup of tea. The sides extend outward and are adjustable to fit baths between 67 cm and 92 cm in width. The bamboo has been sealed with food-safe mineral oil for natural water resistance — simply wipe dry after each use to preserve the finish. A small, considered indulgence that transforms an ordinary bath into something deliberate.",
    category: "Self Care",
    image: "/images/products/bamboo-bath-caddy.jpg",
  },
  {
    id: "26",
    name: "Artisan Olive Wood Bowl Set",
    price: 1149,
    shortDescription: "Nest of 3 olive wood bowls: 14, 19 & 24 cm. Each one unique.",
    description:
      "Three nesting bowls carved from single blocks of European olive wood, chosen specifically for the rich, swirling grain that is unique to every piece. The graduated sizes — 14 cm, 19 cm, and 24 cm — cover virtually every daily need, from a dipping bowl and a salad-for-one to a generous centrepiece for a dinner party. Olive wood is naturally antibacterial and exceptionally resistant to staining and odours, making it outstanding for food use. Each bowl is finished with a food-safe mineral oil — re-oil occasionally to preserve the depth of grain. No two bowls in any set will look alike, which is part of the pleasure of owning them.",
    category: "Kitchen",
    image: "/images/products/olive-wood-bowls.jpg",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
```

### `lib/reviews.ts`

> 41 total reviews — 6 featured on homepage, 35 on product detail pages.

```ts
// Full file — see /Users/handrevisser/Desktop/MAISON Store/lib/reviews.ts
// The file is 590 lines and has been verified intact as of this package generation.
// To avoid duplication in this markdown, the canonical source lives at the path above.
```

---

## 5 · Key conventions and gotchas

- **Next.js 15/16 async params pattern** — any dynamic route must `await params`:
  ```ts
  interface Props { params: Promise<{ id: string }>; }
  export default async function Page({ params }: Props) {
    const { id } = await params;
    // ...
  }
  ```
- **Static export (`output: "export"`)** means no server functions, no route handlers. Anything dynamic must be client-side.
- **`useSearchParams` requires a Suspense boundary** in static export — see `app/shop/page.tsx` wrapping `ShopContent.tsx`.
- **`generateStaticParams`** is required on `app/shop/[id]/page.tsx` for every product ID.
- **Netlify free plan compat** — `NETLIFY_NEXT_PLUGIN_SKIP=true` is mandatory in `netlify.toml` (otherwise the Next.js plugin tries to provision server features and fails).
- **Brand palette lives in `tailwind.config.ts`** — use `cream`, `charcoal`, `gold` (with `-light`/`-dark` variants), `stone`, `parchment`.
- **Product images** are under `/public/images/products/` with filename conventions matching the `image` / `variantImages` paths in `lib/products.ts`.
- **Hero images** are under `/public/images/hero/slide-{1,2,3}.jpg`.
- **Image generation** uses Pollinations. Rate-limited to 1 concurrent request per IP, so downloads must be sequential with retry logic — never parallel-fetch more than one at a time.
- **Cart localStorage key**: `maison-cart`.
- **Discount popup localStorage key**: `maison_welcome_popup_seen`.

---

## 6 · Recent work summary (for context)

- Added homepage **Reviews section** (`ReviewsSection.tsx` carousel on mobile, 3-col grid on desktop) and per-product **ProductReviews** component — both pulling from `lib/reviews.ts`.
- Added **StarRating** component with half-star support via CSS clip overlay technique.
- Updated WhatsApp number on contact page from placeholder to **060 123 4567**.
- Updated **"Track Your Order"** footer link to open `https://aramex.co.za/tracking/TrackShipment.php` in a new tab.
- Added **6 new products** (IDs 21–26) bringing total to 26.
- Reduced **every existing product price by R200**, new products priced R200 below normal.
- Product range now covers 6 categories with strong representation in each.

End of package.
