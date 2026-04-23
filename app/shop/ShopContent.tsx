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
