import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Failed — MAISON",
};

export default function PaymentFailurePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="w-14 h-14 flex items-center justify-center text-red-400 mb-8">
        <AlertCircle size={48} strokeWidth={1} />
      </div>

      <p className="text-xs tracking-[0.4em] uppercase text-red-400 mb-5">
        Payment Failed
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
        Something Went Wrong
      </h1>
      <p className="text-stone max-w-sm leading-relaxed mb-3">
        Your payment could not be processed. No charge was made to your account.
        Please try again or use a different payment method.
      </p>
      <p className="text-stone/60 text-sm mb-12">
        Need help? Email{" "}
        <a
          href="mailto:hello@maisonstore.co.za"
          className="underline underline-offset-2 hover:text-charcoal transition-colors"
        >
          hello@maisonstore.co.za
        </a>
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/checkout">
          <Button className="bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal/85 transition-all duration-300">
            Try Again
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
