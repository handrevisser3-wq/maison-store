"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/app/providers";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage() {
  const { dispatch } = useCart();

  // Clear the cart once payment is confirmed
  useEffect(() => {
    dispatch({ type: "CLEAR_CART" });
  }, [dispatch]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="w-14 h-14 flex items-center justify-center text-gold mb-8">
        <CheckCircle size={48} strokeWidth={1} />
      </div>

      <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5">
        Payment Received
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
        Thank You
      </h1>
      <p className="text-stone max-w-sm leading-relaxed mb-3">
        Your payment was successful. A confirmation email will be sent to you
        shortly and your order will be processed within 1–2 business days.
      </p>
      <p className="text-stone/60 text-sm mb-12">
        Questions? Email{" "}
        <a
          href="mailto:hello@maisonstore.co.za"
          className="underline underline-offset-2 hover:text-charcoal transition-colors"
        >
          hello@maisonstore.co.za
        </a>
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/shop">
          <Button className="bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal/85 transition-all duration-300">
            Continue Shopping
          </Button>
        </Link>
        <Link href="/">
          <Button
            variant="outline"
            className="border-charcoal/40 text-charcoal text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
