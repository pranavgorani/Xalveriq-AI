import { HeroSlider } from "@/components/home/HeroSlider";
import { TrustBar } from "@/components/home/TrustBar";
import { CategorySlider } from "@/components/home/CategorySlider";
import { SignatureServices } from "@/components/home/SignatureServices";
import { AIDesignSection } from "@/components/home/AIDesignSection";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { FinalConversion } from "@/components/home/FinalConversion";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 2. Cinematic Hero Slider with 5 Auto-Playing Slides & Ken Burns Zoom */}
      <HeroSlider />

      {/* 3. Trust & Credibility Strip with 4 Animated Counters */}
      <TrustBar />

      {/* 4. "Design Your Space" Horizontally Draggable Category Slider (10 Zones) */}
      <CategorySlider />

      {/* 5. Signature Services Section (6 Alternating Image & Text Blocks) */}
      <SignatureServices />

      {/* 6. AI Spatial Design Section (Dark Futuristic Blueprint & 5-Step Workflow) */}
      <AIDesignSection />

      {/* 7. Interactive Before / After Handover Transformation Slider */}
      <BeforeAfterSlider />

      {/* 8. Portfolio / Featured Projects Grid with Filters & Detail Modal */}
      <ProjectGrid />

      {/* 9. Six-Stage 45-Day Architecture Process Timeline */}
      <ProcessTimeline />

      {/* 10. Verified Nashik Client Testimonials Slider */}
      <TestimonialSlider />

      {/* 11. FAQ Accordion (6 Key Questions with Smooth Expand/Collapse) */}
      <FAQAccordion />

      {/* 12. Final Dark Conversion Section with Lead Capture Form & WhatsApp Deep Link */}
      <FinalConversion />
    </div>
  );
}
