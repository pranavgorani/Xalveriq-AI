import { RoomRedesign } from "@/components/studio/RoomRedesign";
import { StyleQuiz } from "@/components/studio/StyleQuiz";
import { BudgetEstimator } from "@/components/studio/BudgetEstimator";

export const metadata = {
  title: "AI Room Designer & Budget Estimator | Xalveriq Pune",
  description:
    "Upload a room photo to preview style directions in seconds, take our 4-question aesthetic quiz, and estimate approximate Pune flat interior budgets.",
};

export default function StudioPage() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Studio Header */}
        <div className="max-w-3xl space-y-3">
          <span className="plan-note">Studio Digital Tools</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-ink">
            AI Room Designer & Estimator.
          </h1>
          <p className="text-base text-text-muted leading-relaxed">
            Upload a photo of your room and preview a few style directions in seconds. Our designers then refine the one you like into practical architectural drawings.
          </p>

          {/* Quick jump navigation */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="#redesign"
              className="text-xs px-3.5 py-1.5 rounded-[4px] bg-white border border-border text-ink hover:border-ink transition-colors"
            >
              1. Room Redesign Preview
            </a>
            <a
              href="#style-quiz"
              className="text-xs px-3.5 py-1.5 rounded-[4px] bg-white border border-border text-ink hover:border-ink transition-colors"
            >
              2. Design Style Quiz
            </a>
            <a
              href="#estimator"
              className="text-xs px-3.5 py-1.5 rounded-[4px] bg-white border border-border text-ink hover:border-ink transition-colors"
            >
              3. Pune Budget Estimator
            </a>
          </div>
        </div>

        {/* Feature 1: Room Photo Redesign */}
        <section id="redesign" className="scroll-mt-28 space-y-4">
          <div className="flex items-center gap-2">
            <span className="plan-note">Tool 01</span>
            <span className="text-xs text-text-muted">— Instant Style Preview</span>
          </div>
          <RoomRedesign />
        </section>

        {/* Feature 2: Style Quiz */}
        <section id="style-quiz" className="scroll-mt-28 space-y-4">
          <div className="flex items-center gap-2">
            <span className="plan-note">Tool 02</span>
            <span className="text-xs text-text-muted">— 4-Step Aesthetic Diagnostic</span>
          </div>
          <StyleQuiz />
        </section>

        {/* Feature 3: Pune Budget Estimator */}
        <section id="estimator" className="scroll-mt-28 space-y-4">
          <div className="flex items-center gap-2">
            <span className="plan-note">Tool 03</span>
            <span className="text-xs text-text-muted">— Itemized Budget Estimator</span>
          </div>
          <BudgetEstimator />
        </section>
      </div>
    </div>
  );
}
