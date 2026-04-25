import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getProductById, products } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";
import ProductReviews from "@/components/ProductReviews";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone mb-10 md:mb-14"
      >
        <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
        <ChevronRight size={12} className="text-stone/50" />
        <Link href="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
        <ChevronRight size={12} className="text-stone/50" />
        <span className="text-charcoal">{product.name}</span>
      </nav>

      {/* Full product detail — image gallery + variant selection + cart */}
      <ProductDetail product={product} />

      {/* Customer reviews for this product */}
      <ProductReviews productId={product.id} />
    </div>
  );
}
