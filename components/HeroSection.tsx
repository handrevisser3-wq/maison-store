import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background photo */}
      <Image
        src="/images/hero/hero-interior.jpg"
        alt="Warm, moody Cape Town living room — the MAISON aesthetic"
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content — sits above overlay */}
      <div className="relative z-10 text-center px-6 sm:px-10 max-w-3xl mx-auto flex flex-col items-center gap-0">

        {/* Eyebrow */}
        <p className="hero-label text-[10px] tracking-[0.55em] uppercase mb-8"
          style={{ color: "#C4A882" }}
        >
          Curated in Cape Town
        </p>

        {/* Headline */}
        <h1 className="hero-headline font-serif leading-[1.06] mb-6 text-white"
          style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
        >
          Live Beautifully.
          <br />
          <span
            className="italic"
            style={{
              color: "#C9A96E",
              fontSize: "clamp(2.4rem, 5.8vw, 5rem)",
            }}
          >
            Live Proudly South African.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="hero-subheading leading-relaxed max-w-md mx-auto mb-12"
          style={{
            color: "rgba(255,255,255,0.80)",
            fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
          }}
        >
          Discover home décor and lifestyle pieces thoughtfully
          selected for the modern South African home.
        </p>

        {/* CTA buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <Button
              className="font-sans font-medium text-[10px] tracking-widest uppercase px-10 py-6 h-auto rounded-none transition-all duration-300 w-full sm:w-auto"
              style={{
                backgroundColor: "#C4A882",
                color: "#1C1C1A",
                border: "none",
              }}
            >
              Explore the Collection
            </Button>
          </Link>
          <Link href="/about">
            <Button
              className="font-sans font-medium text-[10px] tracking-widest uppercase px-10 py-6 h-auto rounded-none transition-all duration-300 w-full sm:w-auto bg-transparent text-white"
              style={{
                border: "1px solid rgba(255,255,255,0.55)",
              }}
            >
              Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
