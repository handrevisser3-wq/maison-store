"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/providers";
import { cartTotal } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Lock, ShoppingBag, ArrowLeft, Loader2 } from "lucide-react";

export default function CheckoutPage() {
  const { state } = useCart();
  const { items } = state;
  const total = cartTotal(items);

  const [nameFirst, setNameFirst] = useState("");
  const [nameLast,  setNameLast]  = useState("");
  const [email,     setEmail]     = useState("");
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/payfast/create-payment", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart:     items,
          customer: { name: `${nameFirst} ${nameLast}`.trim(), email },
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { error?: string }).error || "Payment setup failed");
      }

      const { url, fields } = await res.json() as { url: string; fields: Record<string, string> };

      // Build a hidden form and auto-submit to PayFast
      const pfForm = document.createElement("form");
      pfForm.method = "POST";
      pfForm.action = url;
      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type  = "hidden";
        input.name  = key;
        input.value = value;
        pfForm.appendChild(input);
      });
      document.body.appendChild(pfForm);
      pfForm.submit();

    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  // ── Empty cart ─────────────────────────────────────────────────────────────
  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
        <div className="w-12 h-12 flex items-center justify-center border border-stone/30 text-stone mb-8">
          <ShoppingBag size={20} strokeWidth={1.5} />
        </div>
        <h1 className="font-serif text-3xl text-charcoal mb-4">Your cart is empty</h1>
        <p className="text-stone max-w-xs leading-relaxed mb-10">
          Add some pieces to your cart before heading to checkout.
        </p>
        <Link href="/shop">
          <Button className="bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal/85 transition-all duration-300">
            Browse the Collection
          </Button>
        </Link>
      </div>
    );
  }

  // ── Checkout form ──────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors mb-10"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Continue Shopping
        </Link>

        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.35em] uppercase text-gold mb-3">Checkout</p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">Secure Payment</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* ── Left col: Order summary ──────────────────────────────────── */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <h2 className="text-xs tracking-[0.3em] uppercase text-stone mb-6">Your Order</h2>

            <div className="divide-y divide-stone/10">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant ?? ""}`} className="flex gap-4 py-5">
                  <div
                    className="relative w-20 h-20 flex-shrink-0 overflow-hidden"
                    style={{ backgroundColor: "#F0EDE6" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-charcoal leading-snug">{item.name}</p>
                    {item.variant && (
                      <p className="text-xs text-stone mt-0.5">{item.variant}</p>
                    )}
                    <p className="text-xs text-stone mt-1">Qty {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium text-charcoal whitespace-nowrap">
                    R{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-stone/20 pt-5 mt-2 space-y-3">
              <div className="flex justify-between text-sm text-stone">
                <span>Subtotal</span>
                <span>R{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-stone">
                <span>Shipping</span>
                <span className="text-charcoal">Calculated at fulfilment</span>
              </div>
              <div className="flex justify-between text-base font-medium text-charcoal border-t border-stone/20 pt-4">
                <span>Total</span>
                <span>R{total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* ── Right col: Customer form ─────────────────────────────────── */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <h2 className="text-xs tracking-[0.3em] uppercase text-stone mb-6">Your Details</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-wider uppercase text-stone mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={nameFirst}
                    onChange={(e) => setNameFirst(e.target.value)}
                    placeholder="Thandi"
                    className="w-full border border-stone/30 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-stone mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={nameLast}
                    onChange={(e) => setNameLast(e.target.value)}
                    placeholder="Dlamini"
                    className="w-full border border-stone/30 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-wider uppercase text-stone mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.co.za"
                  className="w-full border border-stone/30 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-charcoal transition-colors"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 border border-red-200 bg-red-50 px-4 py-3">
                  {error}
                </p>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-6 py-5 h-auto hover:bg-charcoal/85 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={14} className="animate-spin" />
                      Redirecting to PayFast…
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Lock size={13} strokeWidth={1.5} />
                      Pay R{total.toLocaleString()} with PayFast
                    </span>
                  )}
                </Button>
              </div>

              <div className="pt-3 border-t border-stone/10">
                <p className="text-xs text-stone/60 text-center leading-relaxed">
                  You&apos;ll be redirected to PayFast&apos;s secure payment page.
                  <br />
                  We accept all major SA cards, instant EFT, and SnapScan.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
