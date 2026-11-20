import { CheckCircle2, Building } from "lucide-react";

export function TrustBar() {
  const societies = [
    "Panchshil Towers (Kharadi)",
    "Trump Towers (Koregaon Park)",
    "Castel Royale (Baner)",
    "Yoo Pune by Starck (Kalyani Nagar)",
    "Amanora Gateway Towers (Hadapsar)",
    "Kolte Patil Life Republic (Hinjawadi)",
    "Godrej Infinity (Keshav Nagar)",
    "Rohan Viti (Balewadi)",
    "Marvel Edge (Viman Nagar)",
    "Sobha Nesara (Kothrud)",
  ];

  return (
    <section className="relative py-7 bg-[#F1EBE1] border-y border-[#E4DCCF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Trust Metric Pill */}
          <div className="flex items-center gap-3.5 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E4DCCF] flex items-center justify-center text-[#8E6835] shadow-xs">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#8E6835] font-bold">
                Pune Landmark Societies
              </p>
              <p className="text-sm font-semibold text-[#16161D]">
                Trusted by 450+ Homeowners & Builders
              </p>
            </div>
          </div>

          {/* Marquee with Soft Fade Edges */}
          <div className="w-full md:max-w-3xl overflow-hidden relative">
            {/* Soft edge masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F1EBE1] via-[#F1EBE1]/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F1EBE1] via-[#F1EBE1]/90 to-transparent z-10 pointer-events-none" />

            {/* Seamless Double Ticker */}
            <div className="flex items-center gap-3.5 py-1 animate-[marquee_30s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
              {[...societies, ...societies].map((society, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#E4DCCF] text-xs font-medium text-[#16161D] whitespace-nowrap hover:border-[#B08A57] hover:shadow-xs transition-all cursor-default"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08A57]" />
                  <span>{society}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
