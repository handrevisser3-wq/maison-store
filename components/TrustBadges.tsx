import { Truck, ShieldCheck } from "lucide-react";

const badges = [
  {
    Icon: Truck,
    title: "Free Delivery in SA",
    description: "Complimentary delivery on all orders over R1,500.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure Checkout",
    description: "256-bit SSL encryption on every transaction.",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-parchment py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-2xl mx-auto">
          {badges.map(({ Icon, title, description }) => (
            <div key={title} className="flex items-start gap-5">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-gold/40 text-gold">
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-base text-charcoal mb-1">{title}</h3>
                <p className="text-sm text-stone leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
