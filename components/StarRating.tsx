import { Star } from "lucide-react";

interface Props {
  rating: number;
  size?: number;
}

export default function StarRating({ rating, size = 14 }: Props) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.max(0, Math.min(1, rating - (star - 1)));
        const fillPct = Math.round(fill * 100);
        return (
          <span
            key={star}
            className="relative inline-block flex-shrink-0"
            style={{ width: size, height: size }}
          >
            {/* Empty star base */}
            <Star
              size={size}
              fill="currentColor"
              strokeWidth={0}
              className="absolute top-0 left-0 text-stone/20"
            />
            {/* Filled portion — clipped to fillPct% width */}
            {fillPct > 0 && (
              <span
                aria-hidden
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${fillPct}%` }}
              >
                <Star
                  size={size}
                  fill="currentColor"
                  strokeWidth={0}
                  className="absolute top-0 left-0 text-gold"
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
