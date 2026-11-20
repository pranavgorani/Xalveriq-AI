import { Calendar, BrainCircuit, Box, Hammer, KeyRound, Clock, ShieldCheck } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "LiDAR Spatial Audit & Consultation",
      duration: "Day 1 - 3",
      icon: Calendar,
      desc: "Our Pune architectural team visits your apartment with digital 3D laser meters to capture exact millimeter dimensions, MEP line positions, and natural sunlight orientation.",
      badge: "In-Person at Pune Site",
    },
    {
      num: "02",
      title: "AI Concept & Aesthetic Modeling",
      duration: "Day 4 - 7",
      icon: BrainCircuit,
      desc: "Our proprietary AI engine synthesizes your lifestyle, family dynamics, and preferred style into multi-angle mood boards, lighting studies, and initial spatial allocations.",
      badge: "48-Hour AI Output",
    },
    {
      num: "03",
      title: "1:1 Virtual Reality & BOQ Finalization",
      duration: "Day 8 - 14",
      icon: Box,
      desc: "Experience your complete home in full 3D VR at our Koregaon Park experience center. Approve material samples, hardware fittings (Blum/Hafele), and lock the final no-escalation BOQ.",
      badge: "Zero-Surprise Pricing",
    },
    {
      num: "04",
      title: "German Factory Manufacturing & Civil Prep",
      duration: "Day 15 - 35",
      icon: Hammer,
      desc: "While civil modifications, concealed false ceiling ducts, and Italian marble laying proceed on-site, all modular joinery is precision cut and edge-banded in our automated plant.",
      badge: "Parallel Fast-Track",
    },
    {
      num: "05",
      title: "White-Glove Installation & Handover",
      duration: "Day 36 - 45",
      icon: KeyRound,
      desc: "Modular units assemble on-site in under 10 days. Following a 120-point quality audit and professional industrial deep cleaning, we hand over your keys with a 10-year warranty certificate.",
      badge: "₹2,500/Day Delay Penalty",
    },
  ];

  return (
    <section className="relative py-28 bg-[#12121A] overflow-hidden border-y border-[#252533]">
      {/* Dramatic Ink Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#6D4AFF]/12 via-[#14A8D6]/10 to-[#B08A57]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-[#58C8EB] text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>The 45-Day Handover Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#FAF7F2] tracking-tight">
            Predictable Perfection. <br />
            <span className="text-gold-gradient">From Day 1 to Day 45.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A9A49C] font-normal leading-relaxed">
            We eliminated contractor delays by synchronizing factory automation with on-site civil works. Backed by our written ₹2,500/day penalty clause.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B08A57]/40 to-transparent -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl p-6 bg-[#1A1A24]/90 border border-[#2A2A38] hover:border-[#B08A57]/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#DFBA87] group-hover:bg-[#B08A57] group-hover:text-[#12121A] transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-display font-bold text-2xl text-[#686877] group-hover:text-[#FAF7F2] transition-colors">
                        {step.num}
                      </span>
                    </div>

                    {/* Timeline Badge */}
                    <div className="inline-block px-2.5 py-1 rounded-md bg-[#6D4AFF]/20 border border-[#6D4AFF]/30 text-[#A992FF] text-[10px] font-mono font-bold mb-3">
                      {step.duration}
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-sm font-bold text-[#FAF7F2] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#A9A49C] leading-relaxed font-normal mb-4">
                      {step.desc}
                    </p>
                  </div>

                  {/* Guarantee Pill */}
                  <div className="pt-3 border-t border-[#2A2A38] flex items-center gap-1.5 text-[10px] text-[#DFBA87] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>{step.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
