import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StarRating from "@/components/StarRating";
import type { Review } from "@/lib/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-stone/10 p-6 flex flex-col gap-4 h-full transition-transform duration-200 hover:-translate-y-1 shadow-sm">
      {/* Stars + verified */}
      <div className="flex items-center justify-between">
        <StarRating rating={review.stars} size={15} />
        {review.verified && (
          <span className="flex items-center gap-1 text-[10px] tracking-wide text-stone/60 uppercase">
            <CheckCircle2 size={11} className="text-gold/80" />
            Verified
          </span>
        )}
      </div>

      {/* Headline */}
      <h3 className="font-serif text-charcoal text-base leading-snug">
        &ldquo;{review.headline}&rdquo;
      </h3>

      {/* Body */}
      <p className="text-sm text-stone leading-relaxed flex-1">
        {review.body}
      </p>

      {/* Product link */}
      <Link
        href={`/shop/${review.productId}`}
        className="text-xs text-gold hover:text-charcoal transition-colors duration-200 tracking-wide underline underline-offset-2 decoration-gold/40 self-start"
      >
        {review.productName}
      </Link>

      {/* Footer: reviewer info */}
      <div className="pt-3 border-t border-stone/10">
        <p className="text-xs font-medium text-charcoal">{review.name}</p>
        <p className="text-xs text-stone/60 mt-0.5">{review.location}</p>
        <p className="text-xs text-stone/40 mt-0.5">{review.date}</p>
      </div>
    </div>
  );
}
