import { Suspense } from "react";
import type { Metadata } from "next";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse the full MAISON collection — premium home goods and lifestyle objects, curated for South Africa.",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-stone text-sm">
          Loading collection...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
