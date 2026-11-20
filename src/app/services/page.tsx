import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck, Clock, ArrowRight, Home, CookingPot, Shirt, Tv, BedDouble, Building2 } from "lucide-react";
import { SERVICES } from "@/data/services";

export const metadata = {
  title: "Interior Architecture Services in Pune | Xalveriq",
  description:
    "Explore Xalveriq's 7 architectural service tiers in Pune: Full Turnkey Interiors, Aerospace-Grade Modular Kitchens, Weightless Wardrobes, Living Sanctuaries & Master Suites. 45-day handover with 10-year warranty.",
};

const ICON_MAP: Record<string, any> = {
  Home,
  CookingPot,
  Shirt,
  Tv,
  BedDouble,
  Building2,
};

export default function ServicesPage() {
  return (
    <div className="relative pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#6D4AFF] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#14A8D6]" />
            <span>German Precision • Pune Execution</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-[#16161D] tracking-tight">
            Architectural <span className="text-gold-gradient">Specializations.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5E5A55] font-normal leading-relaxed">
            Every millimeter is pre-engineered in our automated facility to eliminate on-site carpentry delays. Choose an individual room module or our complete 45-day turnkey solution.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-16">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Home;
            const isEven = index % 2 === 0;

            return (
              <section
                key={service.id}
                id={service.slug}
                className="scroll-mt-32 rounded-3xl bg-white/95 border border-[#E4DCCF] p-6 sm:p-10 backdrop-blur-xl shadow-[0_12px_40px_rgba(22,22,29,0.06)] relative overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  {/* Visual Column */}
                  <div className={`lg:col-span-5 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#E4DCCF] shadow-sm bg-[#F1EBE1]">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 border border-[#E4DCCF] text-[11px] font-mono font-bold text-[#16161D] backdrop-blur-md shadow-xs">
                        {service.warranty}
                      </div>
                      <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-[#B08A57] text-white font-bold text-xs shadow-md">
                        {service.startingPrice}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] flex items-center justify-center text-[#8E6835] shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#5E5A55] font-bold">
                          Tier 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#16161D]">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#8E6835] font-bold">
                      {service.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#5E5A55] font-normal leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Guarantees Row */}
                    <div className="flex flex-wrap items-center gap-4 text-xs pt-1">
                      <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>{service.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#14A8D6] font-bold">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span>{service.warranty}</span>
                      </div>
                    </div>

                    {/* Materials & Inclusions Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#E4DCCF]">
                      <div className="space-y-2">
                        <h4 className="text-[11px] font-bold text-[#16161D] uppercase tracking-wider">
                          Key Engineering Highlights:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#5E5A55]">
                          {service.keyHighlights.map((kh, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#B08A57] mt-1 shrink-0" />
                              <span>{kh}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-[11px] font-bold text-[#16161D] uppercase tracking-wider">
                          Core Materials:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#5E5A55]">
                          {service.materialsIncluded.map((mat, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF] mt-1 shrink-0" />
                              <span>{mat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/contact?service=${service.slug}`}
                        className="px-6 py-3 rounded-full btn-primary-gradient text-white text-xs font-bold flex items-center gap-2"
                      >
                        <span>Book Site Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/studio#estimator"
                        className="px-5 py-3 rounded-full btn-secondary-light text-xs font-semibold"
                      >
                        Calculate Price
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
