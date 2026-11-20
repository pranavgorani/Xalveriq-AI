import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { AiConcierge } from "@/components/chat/AiConcierge";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { FloatingDecor } from "@/components/motion/FloatingDecor";

export const metadata: Metadata = {
  title: "Xalveriq | Futuristic AI-Powered Interior Architecture in Pune",
  description:
    "Spaces, Intelligently Designed. Experience weightless antigravity luxury interiors for 2, 3, 4 BHK apartments & penthouses across Pune (Koregaon Park, Baner, Kharadi). 45-day handover guarantee with 10-year warranty.",
  keywords: [
    "interior designers in Pune",
    "luxury interior designers Pune",
    "AI interior design Pune",
    "turnkey interiors Pune",
    "modular kitchen Pune",
    "interior designers Baner",
    "interior designers Koregaon Park",
    "interior designers Kharadi",
    "Panchshil Towers interiors",
    "Amanora interiors",
    "45 day interior handover Pune",
  ],
  authors: [{ name: "Xalveriq Architectural Studio" }],
  creator: "Xalveriq",
  openGraph: {
    title: "Xalveriq | Spaces, Intelligently Designed (Pune)",
    description:
      "Transforming raw builder handovers into bespoke, weightless luxury sanctuaries in 45 days. Powered by proprietary AI spatial intelligence.",
    url: "https://xalveriq.com",
    siteName: "Xalveriq Pune",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Xalveriq Luxury Interior Architecture Pune",
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
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--gold)]/20 selection:text-[var(--text)] relative">
        <SmoothScroll>
          <FloatingDecor />
          <Navbar />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <AiConcierge />
        </SmoothScroll>
      </body>
    </html>
  );
}
