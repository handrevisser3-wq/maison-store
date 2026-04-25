const items = [
  { icon: "🇿🇦", text: "Proudly South African" },
  { icon: "✦", text: "Curated Lifestyle Pieces" },
  { icon: "🚚", text: "Free Delivery in SA" },
  { icon: "✦", text: "Premium Quality Guaranteed" },
];

const Divider = () => (
  <span className="text-cream/20 text-base select-none" aria-hidden="true">
    |
  </span>
);

const Item = ({ icon, text }: { icon: string; text: string }) => (
  <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-cream/65 whitespace-nowrap px-5">
    <span className="text-sm">{icon}</span>
    <span>{text}</span>
  </span>
);

export default function BrandBar({ sidebar = false }: { sidebar?: boolean }) {

  // ── Sidebar mode: vertical stack, no dark background, dark text ──
  if (sidebar) {
    return (
      <div className="flex flex-col gap-6">
        {items.map(({ icon, text }, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-base">{icon}</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal/60">
              {text}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // ── Original full-width bar mode ──
  // Duplicate items so the marquee loop is seamless (translate -50% lands on the duplicate)
  const doubled = [...items, ...items];

  return (
    <div className="bg-charcoal border-t border-cream/5 py-3.5 overflow-hidden">

      {/* ── Desktop: static centered row ── */}
      <div className="hidden md:flex items-center justify-center">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <Item {...item} />
            {i < items.length - 1 && <Divider />}
          </span>
        ))}
      </div>

      {/* ── Mobile: infinite marquee ── */}
      <div className="flex md:hidden">
        <div className="animate-marquee flex items-center">
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center">
              <Item {...item} />
              <Divider />
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
