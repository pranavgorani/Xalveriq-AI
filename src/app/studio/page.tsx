import { Sparkles, Wand2, Calculator, HelpCircle } from "lucide-react";
import { RoomRedesign } from "@/components/studio/RoomRedesign";
import { StyleQuiz } from "@/components/studio/StyleQuiz";
import { BudgetEstimator } from "@/components/studio/BudgetEstimator";

export const metadata = {
  title: "AI Design Studio & Pune Budget Estimator | Xalveriq",
  description:
    "Generate instant photorealistic AI interior concepts for your Pune home. Take the AI style quiz and calculate exact BHK turnkey pricing in ₹ INR.",
};

export default function StudioPage() {
  return (
    <div className="relative pt-32 pb-24 bg-[#FAF7F2] overflow-hidden">
      {/* Background pastel radial glows */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-[#6D4AFF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#14A8D6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Studio Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#6D4AFF] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
            <span>Xalveriq Spatial Intelligence Lab</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-[#16161D] tracking-tight">
            The AI Design <span className="text-ai-gradient">Studio.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5E5A55] font-normal leading-relaxed">
            Harness proprietary neural spatial rendering to re-imagine your space, discover your signature aesthetic through our curated style quiz, and calculate instant transparent turnkey budgets in ₹ INR.
          </p>

          {/* Quick jump navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#redesign"
              className="px-4 py-2 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E4DCCF] text-xs font-semibold text-[#5E5A55] hover:text-[#16161D] transition-all flex items-center gap-1.5 shadow-xs"
            >
              <Wand2 className="w-3.5 h-3.5 text-[#6D4AFF]" />
              <span>Room Redesign Engine</span>
            </a>
            <a
              href="#style-quiz"
              className="px-4 py-2 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E4DCCF] text-xs font-semibold text-[#5E5A55] hover:text-[#16161D] transition-all flex items-center gap-1.5 shadow-xs"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#14A8D6]" />
              <span>AI Style Quiz</span>
            </a>
            <a
              href="#estimator"
              className="px-4 py-2 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E4DCCF] text-xs font-semibold text-[#5E5A55] hover:text-[#16161D] transition-all flex items-center gap-1.5 shadow-xs"
            >
              <Calculator className="w-3.5 h-3.5 text-[#8E6835]" />
              <span>Pune Budget Estimator</span>
            </a>
          </div>
        </div>

        {/* Feature 1: Room Photo Redesign */}
        <section id="redesign" className="scroll-mt-28 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8E6835] uppercase tracking-widest">
            <span>01 / NEURAL RE-IMAGINATION</span>
          </div>
          <RoomRedesign />
        </section>

        {/* Feature 2: Style Quiz */}
        <section id="style-quiz" className="scroll-mt-28 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#14A8D6] uppercase tracking-widest">
            <span>02 / AESTHETIC DIAGNOSTIC</span>
          </div>
          <StyleQuiz />
        </section>

        {/* Feature 3: Pune Budget Estimator */}
        <section id="estimator" className="scroll-mt-28 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6D4AFF] uppercase tracking-widest">
            <span>03 / TRANSPARENT PRICING</span>
          </div>
          <BudgetEstimator />
        </section>
      </div>
    </div>
  );
}
