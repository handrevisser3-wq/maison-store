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
              edgeSensitivity={25}
              glowColor="38 45 65"
              backgroundColor="#F5F0EA"
              borderRadius={8}
              glowRadius={25}
              glowIntensity={0.8}
              coneSpread={20}
              animated={false}
              colors={["#C4A882", "#D4B896", "#8C6D4F"]}
              fillOpacity={0.2}
            >
              <ProductCard product={product} />
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
