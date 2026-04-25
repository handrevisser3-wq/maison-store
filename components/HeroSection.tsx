import HeroSlideshow from "@/components/HeroSlideshow";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center">

      {/* ── Background slideshow (client component) ── */}
      <HeroSlideshow />

      {/* ── Subtle gold gradient tint over everything ── */}
      <div className="absolute inset-0 z-[11] bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,_rgba(201,169,110,0.06)_0%,_transparent_70%)] pointer-events-none" />

      {/* ── Bottom page-blend ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream/15 to-transparent pointer-events-none z-20" />
    </section>
  );
}
