"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "maison_welcome_popup_seen";

type PopupState = "hidden" | "entering" | "visible" | "leaving";

export default function DiscountPopup() {
  const [state, setState] = useState<PopupState>("hidden");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Don't show if user has already seen it
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      // Mount the element first (starts at opacity-0 / scale-[0.92])
      setState("entering");
      // Then on the next two frames, switch to the "visible" state to trigger CSS transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setState("visible"));
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setState("leaving");
    localStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => setState("hidden"), 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, "1");
    // Auto-dismiss after showing success message
    setTimeout(dismiss, 3500);
  };

  if (state === "hidden") return null;

  const isVisible = state === "visible";

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal wrapper — centres the card */}
      <div
        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
      >
        <div
          className={`bg-cream max-w-[480px] w-full relative shadow-2xl transition-all duration-[400ms] ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.92]"
          }`}
        >
          {/* Close button */}
          <button
            onClick={dismiss}
            aria-label="Close welcome offer"
            className="absolute top-4 right-4 text-stone/60 hover:text-charcoal transition-colors z-10"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          {/* Card body */}
          <div className="px-8 pt-12 pb-10 sm:px-12 sm:pt-14 sm:pb-12 text-center">
            {!submitted ? (
              <>
                {/* Label */}
                <p className="text-xs tracking-[0.5em] uppercase text-gold mb-5">
                  Welcome Offer
                </p>

                {/* Headline */}
                <h2
                  id="popup-heading"
                  className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight mb-4"
                >
                  Get 10% Off
                  <br />
                  Your First Order
                </h2>

                {/* Subtext */}
                <p className="text-stone text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                  Sign up with your email and we&apos;ll send your discount code
                  straight to your inbox.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate className="mb-5">
                  <div className="mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="your@email.com"
                      className={`w-full border px-4 py-3 text-sm text-charcoal bg-cream placeholder:text-stone/40 focus:outline-none transition-colors ${
                        error
                          ? "border-red-400 focus:border-red-400"
                          : "border-stone/30 focus:border-charcoal"
                      }`}
                      aria-label="Email address"
                      aria-describedby={error ? "email-error" : undefined}
                    />
                    {error && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-xs text-red-500 text-left"
                      >
                        {error}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-charcoal hover:bg-charcoal/85 text-cream text-xs tracking-widest uppercase rounded-none py-4 h-auto transition-all duration-300"
                  >
                    Claim My Discount
                  </Button>
                </form>

                {/* Soft dismiss */}
                <button
                  onClick={dismiss}
                  className="text-xs text-stone/40 hover:text-stone transition-colors underline underline-offset-2"
                >
                  No thanks, I&apos;ll pay full price
                </button>
              </>
            ) : (
              /* ── Success state ── */
              <div className="py-6">
                <p className="text-5xl mb-6">🎉</p>
                <h2 className="font-serif text-2xl text-charcoal mb-3">
                  Your code is on its way!
                </h2>
                <p className="text-stone text-sm leading-relaxed max-w-xs mx-auto">
                  Check your inbox — your 10% discount code will arrive
                  shortly. Happy shopping.
                </p>
              </div>
            )}
          </div>

          {/* Gold accent line at bottom of card */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        </div>
      </div>
    </>
  );
}
