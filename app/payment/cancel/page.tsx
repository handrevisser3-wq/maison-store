import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Cancelled — MAISON",
};

export default function PaymentCancelPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="w-14 h-14 flex items-center justify-center text-stone mb-8">
        <XCircle size={48} strokeWidth={1} />
      </div>

      <p className="text-xs tracking-[0.4em] uppercase text-stone mb-5">
        Payment Cancelled
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
        No Charge Made
      </h1>
      <p className="text-stone max-w-sm leading-relaxed mb-12">
        You cancelled the payment. Your cart is still saved — head back to checkout
        whenever you&apos;re ready.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/checkout">
          <Button className="bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal/85 transition-all duration-300">
            Return to Checkout
          </Button>
        </Link>
        <Link href="/shop">
          <Button
            variant="outline"
            className="border-charcoal/40 text-charcoal text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
