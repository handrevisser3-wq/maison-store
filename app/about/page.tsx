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
