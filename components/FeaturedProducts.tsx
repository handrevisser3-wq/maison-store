import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import BorderGlow from "@/components/BorderGlow";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="pb-20 md:pb-28 bg-[#EDE8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featured.map((product) => (
            <BorderGlow
              key={product.id}
              className="product-card-glow"
              edgeSensitivity={35}
              glowColor="35 60 70"
              backgroundColor="#FAFAF8"
              borderRadius={8}
              glowRadius={20}
              glowIntensity={0.4}
              coneSpread={35}
              animated={false}
              colors={["#d4b896", "#c9a96e", "#e8d5b7"]}
              fillOpacity={0.15}
            >
              <ProductCard product={product} />
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
