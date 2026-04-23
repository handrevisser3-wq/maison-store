import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">404</p>
      <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">Page not found</h1>
      <p className="text-stone mb-12 max-w-sm leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s take
        you somewhere beautiful instead.
      </p>
      <Link href="/">
        <Button className="bg-charcoal text-cream text-xs tracking-widest uppercase rounded-none px-10 py-5 h-auto hover:bg-charcoal/85 transition-all duration-300">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
