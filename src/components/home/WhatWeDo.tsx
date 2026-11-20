import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function WhatWeDo() {
  return (
    <section className="py-24 border-t border-border bg-paper-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="plan-note">Studio Services</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-ink">
              What we do.
            </h2>
            <p className="text-sm text-text-muted">
              We design and execute complete residential and boutique commercial interiors across Pune.
            </p>
          </div>

          <Link
            href="/services"
            className="text-sm font-medium text-ink hover:text-terracotta transition-colors flex items-center gap-1.5 self-start md:self-end"
          >
            <span>View service inclusions & pricing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Services in an Asymmetric, Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE_DATA.services.map((service, idx) => (
            <div
              key={service.id}
              className="p-8 bg-white border border-border rounded-[4px] space-y-6 hover:border-ink transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-terracotta">0{idx + 1}</span>
                <span className="plan-note">{service.typicalTimeline}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-normal text-ink">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Material Swatch Chips */}
              <div className="pt-2 border-t border-border/60">
                <span className="plan-note block mb-2">Sample Material Palette:</span>
                <div className="flex flex-wrap gap-2">
                  {service.materials.map((m, i) => (
                    <span key={i} className="swatch-chip">
                      <span
                        className="swatch-dot"
                        style={{ backgroundColor: m.hex }}
                      />
                      <span>{m.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Inclusions & Typical Cost */}
              <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-text-muted font-medium">
                  {service.typicalBudget}
                </span>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-ink hover:text-terracotta transition-colors font-medium flex items-center gap-1"
                >
                  <span>Inclusions</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
