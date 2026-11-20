"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, Check } from "lucide-react";
import { SITE_DATA, ProjectItem } from "@/content/site";

export default function PortfolioPage() {
  const [bhkFilter, setBhkFilter] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<"after" | "before">("after");

  const bhkOptions = ["All", "2.5 BHK", "3 BHK", "4 BHK Penthouse"];

  const filtered = SITE_DATA.projects.filter((p) => {
    if (bhkFilter === "All") return true;
    return p.bhk.includes(bhkFilter);
  });

  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="plan-note">Project Index</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-ink">
            Completed projects in Pune.
          </h1>
          <p className="text-base text-text-muted leading-relaxed">
            Each flat has a different floor plan, daylight orientation, and storage requirement. Here is how we approached the brief and what we built.
          </p>
        </div>

        {/* Simple BHK Filter */}
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <span className="text-xs text-text-muted mr-2">Configuration:</span>
          {bhkOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setBhkFilter(opt)}
              className={`text-xs px-3 py-1.5 rounded-[2px] transition-colors ${
                bhkFilter === opt
                  ? "bg-ink text-white font-medium"
                  : "bg-white border border-border text-text-muted hover:text-ink"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Project Case Studies Grid */}
        <div className="space-y-16">
          {filtered.map((proj) => (
            <article
              key={proj.id}
              id={proj.slug}
              className="p-8 sm:p-12 bg-white border border-border rounded-[4px] scroll-mt-28 space-y-8"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border/60 pb-4">
                <div>
                  <span className="plan-note">{proj.location} • {proj.bhk} • {proj.carpetArea}</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-normal text-ink mt-1">
                    {proj.title}
                  </h2>
                </div>
                <span className="text-xs text-text-muted font-sans italic">
                  {proj.planNote}
                </span>
              </div>

              {/* Main Visual with Optional Before/After Switch */}
              <div className="space-y-3">
                <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[4px] overflow-hidden border border-border bg-[#EFE9DF]">
                  {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                  <Image
                    src={viewMode === "after" || !proj.beforeImage ? proj.mainImage : proj.beforeImage}
                    alt={proj.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />

                  {proj.hasBeforeAfter && proj.beforeImage && (
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 p-1 bg-white/95 border border-border rounded-[2px]">
                      <button
                        onClick={() => setViewMode("after")}
                        className={`text-xs px-2.5 py-1 rounded-[2px] transition-colors ${
                          viewMode === "after" ? "bg-ink text-white" : "text-text-muted hover:text-ink"
                        }`}
                      >
                        Handover Finish
                      </button>
                      <button
                        onClick={() => setViewMode("before")}
                        className={`text-xs px-2.5 py-1 rounded-[2px] transition-colors ${
                          viewMode === "before" ? "bg-ink text-white" : "text-text-muted hover:text-ink"
                        }`}
                      >
                        Raw Builder Site
                      </button>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-white/90 border border-border px-3 py-1 text-[11px] rounded-[2px]">
                    {proj.planNote}
                  </div>
                </div>
              </div>

              {/* Architectural Story: The Brief, The Challenge, What We Did */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 text-xs leading-relaxed">
                <div className="space-y-2">
                  <h3 className="font-sans font-semibold uppercase tracking-wider text-ink">
                    1. The Client Brief
                  </h3>
                  <p className="text-text-muted">{proj.brief}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-semibold uppercase tracking-wider text-ink">
                    2. The Spatial Challenge
                  </h3>
                  <p className="text-text-muted">{proj.challenge}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-semibold uppercase tracking-wider text-ink">
                    3. What We Built
                  </h3>
                  <p className="text-text-muted">{proj.solution}</p>
                </div>
              </div>

              {/* Materials Used */}
              <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-text-muted">Materials:</span>
                  {proj.materials.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-paper border border-border rounded-[2px] text-ink font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="btn-outline text-xs py-2 px-4 rounded-[4px] self-start sm:self-auto"
                >
                  Discuss similar flat in Pune →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
