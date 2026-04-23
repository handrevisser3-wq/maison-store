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
      {/* Variant selector */}
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

      {/* Size selector */}
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

      {/* Add to Cart */}
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

      {/* Reassurance */}
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
