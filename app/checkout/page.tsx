import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your MAISON order securely.",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="w-12 h-12 flex items-center justify-center border border-gold/40 text-gold mb-8">
        <Lock size={20} strokeWidth={1.5} />
      </div>
      <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5">
        Coming Soon
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
        Secure Checkout
      </h1>
      <p className="text-stone max-w-md leading-relaxed mb-4">
        Our secure checkout is being set up. In the meantime, please contact us
        directly to place your order — we&apos;ll be happy to assist.
      </p>
      <p className="text-stone/60 text-sm mb-10">
        WhatsApp us or email{" "}
        <a
          href="mailto:hello@maisonstore.co.za"
          className="underline underline-offset-2 hover:text-charcoal transition-colors"
        >
          hello@maisonstore.co.za
        </a>
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/contact">
          <Button className="bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal/85 transition-all duration-300">
            Contact Us to Order
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
