import StarRating from "@/components/StarRating";
import ReviewCard from "@/components/ReviewCard";
import { featuredReviews } from "@/lib/reviews";

export default function ReviewsSection() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            Loved Across South Africa
          </h2>
          <p className="text-stone mb-8">Real reviews from real homes.</p>

          {/* Overall rating badge */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 shadow-sm border border-stone/10">
            <span className="font-serif text-xl text-charcoal">4.8</span>
            <StarRating rating={4.8} size={16} />
            <span className="text-sm text-stone">from 127 reviews</span>
          </div>
        </div>

        {/* Cards — horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-7 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[83vw] sm:w-[340px] md:w-auto snap-start"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
