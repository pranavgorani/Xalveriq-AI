import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Clock, MapPin, PhoneCall } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AiTeaser } from "@/components/home/AiTeaser";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. 3D Antigravity Hero (Light Porcelain Base) */}
      <Hero />

      {/* 2. Pune Trust Bar & Societies Ticker (Warm Stone Alt) */}
      <TrustBar />

      {/* 3. Architectural Services with Levitation Cards (Light Porcelain Base) */}
      <ServicesSection />

      {/* 4. AI Studio Teaser & Neural Renderer (Warm Stone Alt) */}
      <AiTeaser />

      {/* 5. Interactive Before/After Transformation Slider (Light Porcelain Base) */}
      <BeforeAfterSlider />

      {/* 6. 45-Day Process Timeline (ONE Dramatic Ink Section for Architectural Contrast) */}
      <ProcessTimeline />

      {/* 7. Homeowner Testimonials from Pune (Light Porcelain Base) */}
      <Testimonials />

      {/* 8. FAQ Accordion (Warm Stone Alt) */}
      <FaqSection />

      {/* 9. Bottom High-Conversion Banner (Warm Porcelain Base with Soft Radiant Glow) */}
      <section className="relative py-28 bg-[#FAF7F2] overflow-hidden border-t border-[#E4DCCF]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#6D4AFF]/10 via-[#14A8D6]/10 to-[#B08A57]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
            <span>Ready for Handover in 45 Days?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#16161D] tracking-tight leading-tight">
            Step Into the Future of <br />
            <span className="text-ai-gradient">Your Pune Home.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5E5A55] max-w-2xl mx-auto font-normal leading-relaxed">
            Whether you hold keys to a bare flat in Panchshil Towers, Amanora, Castel Royale, or a private bungalow in Koregaon Park, let Xalveriq engineer your dream space.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/studio"
              className="w-full sm:w-auto px-8 py-4 rounded-full btn-primary-gradient font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#DFBA87]" />
              <span>Launch AI Design Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full btn-secondary-light font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#8E6835]" />
              <span>Book In-Person Consultation</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-[#E4DCCF] flex flex-wrap items-center justify-center gap-6 text-xs text-[#5E5A55]">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#8E6835]" /> 45-Day Handover Guarantee
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6D4AFF]" /> 10-Year Comprehensive Warranty
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#14A8D6]" /> Koregaon Park & Baner Studios
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
