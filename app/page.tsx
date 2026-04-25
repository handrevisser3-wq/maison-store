import VideoScrub from "@/components/VideoScrub";
import FeaturedProducts from "@/components/FeaturedProducts";
import ReviewsSection from "@/components/ReviewsSection";
import BrandBar from "@/components/BrandBar";

export default function HomePage() {
  return (
    <>
      <VideoScrub />
      <div className="w-full text-center pt-20 pb-8 bg-[#EDE8E1]">
        <p className="text-xs tracking-[0.3em] uppercase text-[#8C7B6E] mb-3">
          Curated Selection
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#2C2520] tracking-wide">
          Featured Products
        </h2>
        <div className="w-12 h-px bg-[#C4A882] mx-auto mt-6" />
      </div>
      <FeaturedProducts />
      <BrandBar />
      <ReviewsSection />
    </>
  );
}
