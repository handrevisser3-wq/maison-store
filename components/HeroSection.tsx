import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden">

      {/* ── Background slideshow (client component) ── */}
      <HeroSlideshow />

      {/* ── Subtle gold gradient tint over everything ── */}
      <div className="absolute inset-0 z-[11] bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,_rgba(201,169,110,0.06)_0%,_transparent_70%)] pointer-events-none" />

      {/* ── Text content ── */}
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

      {/* ── Bottom page-blend ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream/15 to-transparent pointer-events-none z-20" />
    </section>
  );
}
