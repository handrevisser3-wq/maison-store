import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import DiscountPopup from "@/components/DiscountPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MAISON — Premium Home & Lifestyle",
    template: "%s — MAISON",
  },
  description:
    "Curated home goods and lifestyle objects, crafted for the discerning eye. Free delivery in South Africa on orders over R1,500.",
  openGraph: {
    type: "website",
    siteName: "MAISON",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <DiscountPopup />
        </CartProvider>
      </body>
    </html>
  );
}
