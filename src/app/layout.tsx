import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { AiConcierge } from "@/components/chat/AiConcierge";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { SITE_DATA } from "@/content/site";

export const metadata: Metadata = {
  title: "Xalveriq | AI-Powered Luxury Interior Architecture | Nashik",
  description:
    "Futuristic AI-powered interior architecture. We transform raw builder handovers into bespoke, weightless luxury sanctuaries delivered in 45 days across Nashik, Mumbai, and Pune.",
  metadataBase: new URL(SITE_DATA.productionUrl),
  authors: [{ name: "Xalveriq Architecture & Design Studio" }],
  creator: "Xalveriq",
  openGraph: {
    title: "Xalveriq | Futuristic Luxury Interior Architecture | Nashik",
    description:
      "Transforming raw builder handovers into bespoke luxury sanctuaries in 45 days. AI spatial design, modular kitchens, wardrobes & turnkey execution.",
    url: SITE_DATA.productionUrl,
    siteName: "Xalveriq",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Xalveriq Luxury Interior Architecture Nashik",
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
      <body className="bg-ivory text-charcoal antialiased selection:bg-bronze/20 selection:text-charcoal relative">
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
