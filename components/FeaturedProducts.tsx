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
