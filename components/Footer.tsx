import Link from "next/link";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Shop: [
    { label: "All Products", href: "/shop" },
    { label: "Textiles", href: "/shop?category=Textiles" },
    { label: "Kitchen", href: "/shop?category=Kitchen" },
    { label: "Decor", href: "/shop?category=Decor" },
    { label: "Home Fragrance", href: "/shop?category=Home+Fragrance" },
    { label: "Ceramics", href: "/shop?category=Ceramics" },
    { label: "Self Care", href: "/shop?category=Self+Care" },
    { label: "New Arrivals", href: "/shop" },
  ],
  Help: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/contact#faq" },
    { label: "Shipping Info", href: "/contact#shipping" },
    { label: "Track Your Order", href: "/contact#track" },
  ],
  Company: [
    { label: "Our Story", href: "/about" },
    { label: "Our Values", href: "/about#sustainability" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.25em] text-cream hover:text-gold transition-colors duration-300 block mb-5"
            >
              MAISON
            </Link>
            <p className="text-sm text-cream/50 leading-relaxed max-w-xs">
              Curated home goods and lifestyle objects, crafted for the South
              African home.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs tracking-widest uppercase text-cream/30 mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/30">
          <p>© {new Date().getFullYear()} MAISON. All rights reserved.</p>
          <p>Free delivery in SA over R1,500 · Secure payments</p>
        </div>
      </div>
    </footer>
  );
}
