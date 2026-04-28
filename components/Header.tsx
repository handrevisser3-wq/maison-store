"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/app/providers";
import { cartCount } from "@/lib/cart";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { state, dispatch } = useCart();
  const count = cartCount(state.items);

  return (
    <header className="relative sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone/20">

      {/* LEOPARD WALKING ANIMATION */}
      <div className="leopard-track" aria-hidden="true">
        <img
          src="/images/leopard.svg"
          alt=""
          className="leopard-walking"
          width={120}
          height={50}
          style={{ objectFit: "contain", display: "block" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.25em] text-charcoal hover:text-gold transition-colors duration-300"
          >
            MAISON
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            {/* Cart button with live badge */}
            <button
              aria-label={`Shopping cart — ${count} item${count !== 1 ? "s" : ""}`}
              onClick={() => dispatch({ type: "OPEN_CART" })}
              className="relative text-charcoal hover:text-gold transition-colors duration-300"
            >
              <ShoppingBag size={21} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center rounded-full bg-gold text-charcoal text-[9px] font-bold leading-none">
                  {count > 9 ? "9+" : count}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle navigation menu"
              className="md:hidden text-charcoal hover:text-gold transition-colors duration-300"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X size={21} strokeWidth={1.5} />
              ) : (
                <Menu size={21} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-stone/20">
          <nav className="px-4 py-8 flex flex-col gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors duration-300"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
