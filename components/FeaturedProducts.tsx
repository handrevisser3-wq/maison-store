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
              edgeSensitivity={15}
              glowColor="38 60 72"
              backgroundColor="#F5F0EA"
              borderRadius={8}
              glowRadius={60}
              glowIntensity={2.5}
              coneSpread={35}
              animated={false}
              colors={["#C4A882", "#E8C98A", "#8C6D4F"]}
              fillOpacity={0.6}
            >
              <ProductCard product={product} />
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
