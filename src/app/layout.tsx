import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { AiConcierge } from "@/components/chat/AiConcierge";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { SITE_DATA } from "@/content/site";

export const metadata: Metadata = {
  title: "Xalveriq | Interior Design Studio in Pune",
  description:
    "Homes designed around how you live. We are a Pune interior design studio planning, detailing, and building full-home interiors, modular kitchens, and custom wardrobes.",
  metadataBase: new URL(SITE_DATA.productionUrl),
  authors: [{ name: "Xalveriq Interior Studio" }],
  creator: "Xalveriq",
  openGraph: {
    title: "Xalveriq | Interior Design Studio, Pune",
    description:
      "Homes designed around how you live. Full-home interiors, modular kitchens, and custom wardrobes in Pune.",
    url: SITE_DATA.productionUrl,
    siteName: "Xalveriq",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Xalveriq Interior Design Studio Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-paper text-ink antialiased selection:bg-terracotta/20 selection:text-ink relative">
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen relative">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <AiConcierge />
        </SmoothScroll>
      </body>
    </html>
  );
}
