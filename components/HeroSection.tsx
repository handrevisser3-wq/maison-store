import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-charcoal">

      {/* Ambient gold gradients — depth without images */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_65%_25%,_rgba(201,169,110,0.10)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_20%_75%,_rgba(201,169,110,0.06)_0%,_transparent_60%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 max-w-3xl mx-auto">

        {/* Eyebrow label */}
        <p className="hero-label text-[10px] tracking-[0.55em] uppercase text-gold mb-10">
          Curated in Cape Town
        </p>

        {/* Headline */}
        <h1 className="hero-headline font-serif leading-[1.06] mb-7 text-cream"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5.2rem)" }}
        >
          Live Beautifully.
          <br />
          <span className="italic text-gold" style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.6rem)" }}>
            Live Proudly South African.
          </span>
        </h1>

        {/* Gold hairline divider */}
        <div className="mx-auto mb-8 w-10 h-px bg-gold opacity-40" />

        {/* Subheading */}
        <p className="hero-subheading text-cream/55 leading-relaxed max-w-md mx-auto mb-14"
          style={{ fontSize: "clamp(0.82rem, 1.1vw, 0.96rem)" }}
        >
          Discover home décor and lifestyle pieces thoughtfully selected
          for the modern South African home.
        </p>

        {/* CTA buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <Button className="bg-gold hover:bg-gold-dark text-charcoal font-sans font-medium text-[10px] tracking-widest uppercase px-10 py-6 h-auto rounded-none transition-all duration-300 w-full sm:w-auto">
              Explore the Collection
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              className="border-cream/25 text-cream hover:bg-cream/8 hover:border-cream/50 font-sans font-medium text-[10px] tracking-widest uppercase px-10 py-6 h-auto rounded-none bg-transparent transition-all duration-300 w-full sm:w-auto"
            >
              Our Story
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom page-blend into parchment */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#EDE8E1]/20 to-transparent pointer-events-none" />
    </section>
  );
}
