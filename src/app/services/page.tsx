import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export const metadata = {
  title: "Services & Scope | Xalveriq Interior Studio Pune",
  description:
    "Full-home interiors, modular kitchens, custom wardrobes, and boutique workspaces in Pune. Clear scopes, typical timelines, and honest pricing.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="plan-note">Studio Offerings</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-ink">
            What we design & build.
          </h1>
          <p className="text-base text-text-muted leading-relaxed">
            We handle four core interior scopes for homeowners and businesses in Pune. Each service includes planning, drawings, material selection, and site execution under one studio.
          </p>
        </div>

        {/* 4 Clean Services */}
        <div className="space-y-16">
          {SITE_DATA.services.map((service, index) => (
            <section
              key={service.id}
              id={service.slug}
              className="p-8 sm:p-12 bg-white border border-border rounded-[4px] scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Visual Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden border border-border bg-[#EFE9DF]">
                    {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>

                  <div className="p-4 bg-paper border border-border rounded-[2px] space-y-2 text-xs">
                    <div className="flex items-center justify-between text-text-muted">
                      <span>Typical Timeline:</span>
                      <strong className="text-ink">{service.typicalTimeline}</strong>
                    </div>
                    <div className="flex items-center justify-between text-text-muted">
                      <span>Budget Guidance:</span>
                      <strong className="text-ink">{service.typicalBudget}</strong>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-terracotta">
                      Service 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-normal text-ink">
                      {service.title}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* What is Included */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs uppercase tracking-wider font-sans font-semibold text-ink">
                      What is Included:
                    </h3>
                    <ul className="space-y-2 text-xs text-text-muted">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-terracotta mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Material Swatch Palette */}
                  <div className="pt-2 border-t border-border/60">
                    <span className="plan-note block mb-2">Common Materials Specified:</span>
                    <div className="flex flex-wrap gap-2">
                      {service.materials.map((m, i) => (
                        <span key={i} className="swatch-chip">
                          <span className="swatch-dot" style={{ backgroundColor: m.hex }} />
                          <span>{m.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link to relevant project */}
                  <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={`/portfolio#${service.featuredProjectSlug}`}
                      className="text-xs font-medium text-terracotta hover:underline inline-flex items-center gap-1"
                    >
                      <span>See a completed flat with this scope</span>
                      <span>→</span>
                    </Link>

                    <Link
                      href="/contact"
                      className="btn-outline text-xs py-2 px-4 rounded-[4px]"
                    >
                      Inquire about this scope
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Dedicated Warranty & Service Terms Section (Stated Honestly Once) */}
        <section className="p-8 sm:p-12 bg-paper-alt border border-border rounded-[4px] space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="plan-note">Warranty & Terms</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-ink">
              {SITE_DATA.warranty.title}
            </h2>
            <p className="text-sm text-text-muted">
              {SITE_DATA.warranty.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {SITE_DATA.warranty.terms.map((term, i) => (
              <div
                key={i}
                className="p-5 bg-white border border-border rounded-[2px] text-xs text-text-muted leading-relaxed"
              >
                <span className="font-mono text-terracotta font-medium block mb-1">
                  Clause 0{i + 1}
                </span>
                <p className="text-ink">{term}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
