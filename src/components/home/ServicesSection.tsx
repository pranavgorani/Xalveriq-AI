import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Home, CookingPot, Shirt, Tv, BedDouble, Building2 } from "lucide-react";
import { SERVICES } from "@/data/services";

const ICON_MAP: Record<string, any> = {
  Home,
  CookingPot,
  Shirt,
  Tv,
  BedDouble,
  Building2,
};

export function ServicesSection() {
  return (
    <section className="relative py-28 bg-[#FAF7F2] overflow-hidden">
      {/* Pastel Glow Backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6D4AFF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#B08A57]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
              <span>Architectural Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#16161D] tracking-tight">
              Weightless Engineering. <br />
              <span className="text-gold-gradient">Mastercrafted for Pune.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5E5A55] font-normal leading-relaxed">
              Every element is engineered with cantilever structural integrity, German PUR edge sealing, and smart automation to create spaces that feel expansive, quiet, and serene.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6D4AFF] hover:text-[#14A8D6] transition-colors group pb-1"
          >
            <span>Explore All 7 Architectural Tiers</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Services Grid with Unique Visual Media & Levitation Physics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Home;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl overflow-hidden bg-white/90 border border-[#E4DCCF] hover:border-[#B08A57] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_20px_48px_rgba(109,74,255,0.12),0_0_24px_rgba(20,168,214,0.1)] flex flex-col justify-between shadow-[0_10px_35px_rgba(22,22,29,0.06)]"
              >
                {/* Visual Header Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F1EBE1]">
                  {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} - Xalveriq Pune`}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />

                  {/* Top floating HUD tags */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-white/90 border border-[#E4DCCF] backdrop-blur-md flex items-center justify-center text-[#8E6835] shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#16161D] px-2.5 py-1 rounded-full bg-white/90 border border-[#E4DCCF] backdrop-blur-md shadow-xs">
                      TIER 0{index + 1}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-full bg-white/90 border border-[#B08A57]/30 text-[10px] font-bold text-[#8E6835] backdrop-blur-md shadow-xs">
                    {service.warranty}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#16161D] mb-1.5 group-hover:text-[#6D4AFF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#8E6835] font-semibold mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-[#5E5A55] leading-relaxed font-normal line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-3 border-t border-[#E4DCCF]">
                    {service.keyHighlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-[#5E5A55]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14A8D6] mt-1 shrink-0" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Bottom Meta Bar */}
                  <div className="pt-4 border-t border-[#E4DCCF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#5E5A55] uppercase tracking-wider block font-medium">
                        Turnkey Investment
                      </span>
                      <span className="text-sm font-bold text-[#16161D]">
                        {service.startingPrice}
                      </span>
                    </div>

                    <Link
                      href={`/services#${service.slug}`}
                      className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E4DCCF] flex items-center justify-center text-[#16161D] group-hover:bg-gradient-to-r group-hover:from-[#6D4AFF] group-hover:to-[#14A8D6] group-hover:text-white group-hover:border-transparent transition-all shadow-xs"
                      aria-label={`View details for ${service.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
