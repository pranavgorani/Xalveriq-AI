import { HeroSlider } from "@/components/home/HeroSlider";
import { TrustBar } from "@/components/home/TrustBar";
import { DesignPhilosophy } from "@/components/home/DesignPhilosophy";
import { CategorySlider } from "@/components/home/CategorySlider";
import { SignatureServices } from "@/components/home/SignatureServices";
import { VisualGallery } from "@/components/home/VisualGallery";
import { MaterialShowcase } from "@/components/home/MaterialShowcase";
import { AIDesignSection } from "@/components/home/AIDesignSection";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { StudioOffices } from "@/components/home/StudioOffices";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { FinalConversion } from "@/components/home/FinalConversion";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. Cinematic Hero Slider with Auto-Playing Slides & Ken Burns Zoom */}
      <HeroSlider />

      {/* 2. Trust & Credibility Strip with Animated Counters */}
      <TrustBar />

      {/* 3. Guiding Design Philosophy (4 Pillars of Architectural Quiet Luxury) */}
      <DesignPhilosophy />

      {/* 4. "Design Your Space" Horizontally Draggable Category Slider (10 Zones) */}
      <CategorySlider />

      {/* 5. Signature Services Section (Short, Customer-Focused, INR Pricing, Materials) */}
      <SignatureServices />

      {/* 6. Visual Interior Gallery (Filtered by Living Room, Kitchen, Bedroom, Bathroom, Renovation, Villa) */}
      <VisualGallery />

      {/* 7. Architectural Material Showcase (Italian Marble, Teak, Quartz, Microcement, Fluted Glass, FENIX) */}
      <MaterialShowcase />

      {/* 8. AI Spatial Design Studio (Dark Contrast Section with Interactive Blueprint) */}
      <AIDesignSection />

      {/* 9. Multi-Room Before / After Transformation Slider (Living, Kitchen, Bedroom, Renovation) */}
      <BeforeAfterSlider />

      {/* 10. Portfolio / Featured Projects Grid with Filters & Detail Modal */}
      <ProjectGrid />

      {/* 11. Six-Stage 45-Day Architecture Process Timeline */}
      <ProcessTimeline />

      {/* 12. Why Choose Xalveriq (Architectural Rigor, Fixed Budget, 10-Yr Warranty, Dedicated PM) */}
      <WhyChooseUs />

      {/* 13. Verified Client Testimonials Slider */}
      <TestimonialSlider />

      {/* 14. Studio Office Information (Nashik Flagship Studio & Mumbai/Pune Client Desks) */}
      <StudioOffices />

      {/* 15. FAQ Accordion (Key Inquiries with Smooth Expand/Collapse) */}
      <FAQAccordion />

      {/* 16. Redesigned Initial Consultation Section with 8-Field Clean Form & WhatsApp Deep Link */}
      <FinalConversion />
    </div>
  );
}
