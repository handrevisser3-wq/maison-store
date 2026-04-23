"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/providers";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";

export default function ProductDetail({ product }: { product: Product }) {
  const { dispatch } = useCart();

  // Initialise selected state — default to first variant / first size
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants?.[0]
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes?.[0]
  );
  const [justAdded, setJustAdded] = useState(false);

  // The image we're currently displaying — may differ from activeKey while fading
  const resolveImage = (key?: string) =>
    (key && product.variantImages?.[key]) ?? product.image;

  const [displayImage, setDisplayImage] = useState(() =>
    resolveImage(product.variants?.[0] ?? product.sizes?.[0])
  );
  const [imgOpacity, setImgOpacity] = useState(1);

  // Smoothly cross-fade to a new image
  const crossfade = (newKey: string) => {
    const next = resolveImage(newKey);
    if (next === displayImage) return;
    setImgOpacity(0);
    setTimeout(() => {
      setDisplayImage(next);
      setImgOpacity(1);
    }, 200); // fade out 200 ms, then swap + fade in
  };

  const handleVariant = (v: string) => {
    setSelectedVariant(v);
    crossfade(v);
  };

  const handleSize = (s: string) => {
    setSelectedSize(s);
    // Only crossfade if this size has a dedicated image
    if (product.variantImages?.[s]) crossfade(s);
  };

  // Build thumbnail list — one per variant (or per size if product has no variants)
  const thumbKeys = product.variants ?? product.sizes ?? [];
  const thumbs = thumbKeys
    .map((k) => ({ key: k, src: resolveImage(k) }))
    // Only show distinct images as thumbnails (collapse duplicates)
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

      {/* ── LEFT: image + thumbnails ── */}
      <div>
        {/* Main image — object-contain so the full product is always visible */}
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
          {/* MAISON watermark */}
          <span
            className="absolute bottom-[10px] right-[10px] font-serif text-[11px] tracking-[0.25em] text-white pointer-events-none select-none z-10"
            style={{ opacity: 0.55 }}
            aria-hidden="true"
          >
            MAISON
          </span>
        </div>

        {/* Thumbnail row — only shown when multiple distinct images exist */}
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

      {/* ── RIGHT: product details ── */}
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
    </div>
  );
}
