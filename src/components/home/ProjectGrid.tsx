"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, MapPin, Maximize, Check } from "lucide-react";
import { SITE_DATA, PortfolioProject } from "@/content/site";

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    "All",
    "Villa",
    "3BHK",
    "2BHK",
    "Modular Kitchen",
    "Master Bedroom",
    "Living Room",
  ];

  const projects = SITE_DATA.portfolioProjects;

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E0D7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
              <span className="w-6 h-px bg-bronze" />
              <span>Delivered Sanctuaries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
              Featured Residential Projects
            </h2>
            <p className="mt-3 text-base text-[#645F58] leading-relaxed">
              Explore recent architectural interior transformations executed across Nashik’s premier residential addresses.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="btn-outline text-xs sm:text-sm py-3 px-6 rounded-lg self-start md:self-auto inline-flex items-center gap-2"
          >
            <span>View Full Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-6 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-bronze ${
                  isActive
                    ? "bg-[#18181B] text-white shadow-sm"
                    : "bg-white border border-[#E0D7C9] text-[#645F58] hover:text-[#18181B] hover:border-bronze"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric / Responsive Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((proj, idx) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="luxury-card overflow-hidden group cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedProject(proj)}
              >
                {/* Image Frame */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-ivory-200">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-[#18181B] tracking-wide uppercase">
                    {proj.category}
                  </span>

                  {/* Carpet Area Pill */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-medium text-white">
                    {proj.carpetArea}
                  </span>
                </div>

                {/* Card Information */}
                <div className="p-6 bg-white flex flex-col flex-grow justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#645F58]">
                      <MapPin className="w-3.5 h-3.5 text-bronze" />
                      <span>{proj.location}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#18181B] group-hover:text-bronze transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#645F58] leading-relaxed line-clamp-2">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#ECE5DA] flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-bronze uppercase tracking-wider">
                      {proj.styleTag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#18181B] group-hover:text-bronze transition-colors">
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-luxury border border-[#E0D7C9] p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory-100 hover:bg-ivory-200 border border-[#E0D7C9] text-[#18181B] flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden bg-ivory-200">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded bg-black/70 backdrop-blur-sm text-xs font-medium text-white">
                    {selectedProject.carpetArea} • {selectedProject.location}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-ivory-100 border border-[#E0D7C9] text-xs font-semibold text-bronze uppercase">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-[#645F58]">
                      {selectedProject.styleTag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B]">
                    {selectedProject.title}
                  </h3>

                  <p className="text-sm text-[#645F58] leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                {/* Key Materials Used */}
                <div className="pt-4 border-t border-[#ECE5DA]">
                  <span className="text-xs font-semibold text-[#18181B] uppercase tracking-wider block mb-2">
                    Key Materials & Finishes:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.materials.map((m) => (
                      <span
                        key={m}
                        className="px-3 py-1.5 rounded-md bg-ivory-100 border border-[#E0D7C9] text-xs text-[#18181B] font-medium"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#645F58]">
                    Want a similar architecture for your flat?
                  </span>
                  <Link
                    href="#contact"
                    onClick={() => {
                      setSelectedProject(null);
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-bronze text-xs py-3 px-6 rounded-lg w-full sm:w-auto text-center"
                  >
                    Request Similar Concept
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
