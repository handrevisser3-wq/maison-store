import StarRating from "@/components/StarRating";
import ReviewCard from "@/components/ReviewCard";
import { getReviewsByProductId, getProductAverageRating } from "@/lib/reviews";

export default function ProductReviews({ productId }: { productId: string }) {
  const productReviews = getReviewsByProductId(productId);
  const avg = getProductAverageRating(productId);

  if (productReviews.length === 0) return null;

  return (
    <section className="mt-20 pt-16 border-t border-stone/15">

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">
          Customer Reviews
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
            What Customers Say
          </h2>
          <div className="flex items-center gap-2">
            <StarRating rating={avg} size={15} />
            <span className="text-sm text-stone">
              {avg} / 5 &middot; {productReviews.length} review{productReviews.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Review grid — 1 col mobile, 2 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {productReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
