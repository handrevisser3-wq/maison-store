"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/app/providers";
import { cartTotal } from "@/lib/cart";
import { Button } from "@/components/ui/button";

const FREE_SHIPPING_THRESHOLD = 1500;

export default function CartDrawer() {
  const { state, dispatch } = useCart();
  const { items, isOpen } = state;
  const total = cartTotal(items);
  const remaining = FREE_SHIPPING_THRESHOLD - total;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-40"
          onClick={() => dispatch({ type: "CLOSE_CART" })}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className={`fixed right-0 top-0 h-full w-full sm:w-[420px] bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/20">
          <h2 className="font-serif text-xl text-charcoal">
            Your Cart
            {items.length > 0 && (
              <span className="ml-2 text-sm font-sans text-stone font-normal">
                ({items.length})
              </span>
            )}
          </h2>
          <button
            aria-label="Close cart"
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            className="text-stone hover:text-charcoal transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Empty state */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8 gap-4">
            <ShoppingBag size={44} strokeWidth={1} className="text-stone/30" />
            <p className="font-serif text-xl text-charcoal">Your cart is empty</p>
            <p className="text-sm text-stone">Add something beautiful to get started.</p>
            <Button
              onClick={() => dispatch({ type: "CLOSE_CART" })}
              className="mt-2 bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-8 py-4 h-auto hover:bg-charcoal/85"
              asChild
            >
              <Link href="/shop">Browse the Collection</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Shipping progress banner */}
            <div className={`px-6 py-3 text-xs text-center ${remaining > 0 ? "bg-parchment text-stone" : "bg-gold/15 text-charcoal"}`}>
              {remaining > 0 ? (
                <>
                  Add{" "}
                  <span className="font-medium text-charcoal">
                    R{remaining.toLocaleString()}
                  </span>{" "}
                  more for free delivery
                </>
              ) : (
                <span className="font-medium">You qualify for free delivery!</span>
              )}
            </div>

            {/* Items list */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <Link
                    href={`/shop/${item.id}`}
                    onClick={() => dispatch({ type: "CLOSE_CART" })}
                    className="relative w-20 h-24 flex-shrink-0 bg-parchment overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm text-charcoal leading-snug mb-0.5">
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="text-xs text-stone mb-2">{item.variant}</p>
                    )}
                    <p className="text-sm font-medium text-charcoal mb-3">
                      R{(item.price * item.quantity).toLocaleString()}
                    </p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-3">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QUANTITY",
                            payload: { id: item.id, quantity: item.quantity - 1 },
                          })
                        }
                        className="w-7 h-7 flex items-center justify-center border border-stone/30 text-stone hover:border-charcoal hover:text-charcoal transition-colors"
                      >
                        <Minus size={11} />
                      </button>
                      <span className="text-sm w-4 text-center tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QUANTITY",
                            payload: { id: item.id, quantity: item.quantity + 1 },
                          })
                        }
                        className="w-7 h-7 flex items-center justify-center border border-stone/30 text-stone hover:border-charcoal hover:text-charcoal transition-colors"
                      >
                        <Plus size={11} />
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_ITEM", payload: item.id })
                        }
                        className="ml-auto text-xs text-stone/50 hover:text-charcoal transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-stone/20 px-6 py-6 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs tracking-widest uppercase text-stone">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-charcoal">
                  R{total.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-stone/50">
                Shipping calculated at checkout
              </p>
              <Button
                className="w-full bg-charcoal hover:bg-charcoal/85 text-cream text-xs tracking-widest uppercase rounded-none py-5 h-auto transition-all duration-300"
                asChild
              >
                <Link href="/checkout" onClick={() => dispatch({ type: "CLOSE_CART" })}>
                  Proceed to Checkout
                </Link>
              </Button>
              <button
                onClick={() => dispatch({ type: "CLOSE_CART" })}
                className="w-full text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
