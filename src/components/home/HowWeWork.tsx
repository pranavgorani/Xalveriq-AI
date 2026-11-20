import { SITE_DATA } from "@/content/site";

export function HowWeWork() {
  return (
    <section className="py-24 border-t border-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="plan-note">Process</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-ink">
            How we work.
          </h2>
          <p className="text-sm text-text-muted">
            From first conversation to handing over your keys, four predictable stages.
          </p>
        </div>

        {/* 4 Steps in a Balanced 4-Column Grid with Thin Architectural Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_DATA.processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-white border border-border rounded-[4px] space-y-4 hover:border-ink transition-colors duration-200"
            >
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <span className="font-mono text-sm text-terracotta font-medium">
                  {step.step}
                </span>
                <span className="plan-note">{step.duration}</span>
              </div>

              <h3 className="text-lg font-serif font-normal text-ink">
                {step.title}
              </h3>

              <p className="text-xs text-text-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
