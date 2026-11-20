import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function SelectedProjects() {
  return (
    <section className="py-24 border-t border-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="plan-note">Selected Work</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-ink">
              Recent Pune homes.
            </h2>
            <p className="text-sm text-text-muted">
              A look at three apartments planned, detailed, and finished by our team.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="text-sm font-medium text-ink hover:text-terracotta transition-colors flex items-center gap-1.5 self-start md:self-end"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Project List */}
        <div className="space-y-20">
          {SITE_DATA.projects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative aspect-[3/2] rounded-[4px] overflow-hidden border border-border bg-[#EFE9DF] group shadow-soft">
                    {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                    <Image
                      src={project.mainImage}
                      alt={`${project.title} - ${project.location}`}
                      fill
                      className="object-cover hover-zoom-restrained"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 border border-border rounded-[2px] flex items-center justify-between text-xs backdrop-blur-xs">
                      <span className="font-medium text-ink">{project.location}</span>
                      <span className="plan-note">{project.planNote}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-5 space-y-4 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span className="font-mono text-terracotta font-medium">0{idx + 1}</span>
                    <span>•</span>
                    <span className="font-medium text-ink">{project.bhk}</span>
                    <span>•</span>
                    <span>{project.carpetArea}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-ink">
                    {project.title}
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Materials specified in this home */}
                  <div className="pt-2">
                    <span className="plan-note block mb-2">Key Materials:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.materials.map((mat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs bg-white border border-border rounded-[2px] text-ink"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link
                      href={`/portfolio#${project.slug}`}
                      className="text-xs font-medium text-terracotta hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read project notes & layout brief</span>
                      <span>→</span>
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
