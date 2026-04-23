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
    e.preventDefault(); // prevent link navigation
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
      {/* Image */}
      <Link href={`/shop/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-parchment aspect-[4/5] mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* MAISON watermark */}
          <span
            className="absolute bottom-[10px] right-[10px] font-serif text-[11px] tracking-[0.25em] text-white pointer-events-none select-none z-10"
            style={{ opacity: 0.55 }}
            aria-hidden="true"
          >
            MAISON
          </span>
        </div>

        {/* Text */}
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

      {/* Price + action */}
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
