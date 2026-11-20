"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, MapPin, Building, ArrowUpRight, X, Check, Layers } from "lucide-react";
import { FEATURED_PROJECTS, Project } from "@/data/projects";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStyle, setSelectedStyle] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [modalTab, setModalTab] = useState<"after" | "before">("after");

  const categories = ["All", "Turnkey Residence", "Living Sanctuary", "Modular Kitchen", "Master Suite", "Commercial & Studio"];
  const styles = ["All", "Modern Haute Luxury", "Japandi Minimal", "Indian Contemporary", "Scandinavian Serenity", "Neo-Industrial"];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchStyle = selectedStyle === "All" || p.style === selectedStyle;
    return matchCategory && matchStyle;
  });

  return (
    <div className="relative pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
            <span>Delivered Pune Residences</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-[#16161D] tracking-tight">
            Curated <span className="text-gold-gradient">Masterpieces.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5E5A55] font-normal leading-relaxed">
            Explore 450+ delivered transformations across Panchshil Towers, Trump Towers, Castel Royale, Amanora, and beyond. Every home finished on time with our 45-day handover guarantee.
          </p>
        </div>

        {/* 1. Horizontal Pinned-Scroll Showcase Rail */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#14A8D6]" />
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#16161D]">
                HORIZONTAL PINNED SHOWCASE • SWIPE TO EXPLORE
              </span>
            </div>
            <span className="text-xs text-[#5E5A55] font-medium hidden sm:inline">Scroll horizontally →</span>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar select-none">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={`pinned-${project.id}`}
                onClick={() => {
                  setActiveModalProject(project);
                  setModalTab("after");
                }}
                className="shrink-0 w-[85vw] sm:w-[420px] snap-center rounded-3xl overflow-hidden bg-white/95 border border-[#E4DCCF] hover:border-[#B08A57] transition-all duration-300 cursor-pointer group shadow-[0_10px_35px_rgba(22,22,29,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(109,74,255,0.12)]"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F1EBE1]">
                  {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                  <Image
                    src={project.afterImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 85vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 border border-[#E4DCCF] text-[10px] font-mono font-bold text-[#16161D] backdrop-blur-md shadow-xs">
                    {project.society}
                  </div>
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/90 border border-[#B08A57]/30 text-[10px] font-bold text-[#8E6835] backdrop-blur-md shadow-xs">
                    {project.budget}
                  </div>
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-[#16161D]">
                    <span className="text-sm font-bold truncate pr-2">{project.title}</span>
                    <span className="w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0 text-[#6D4AFF]">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Filter Controls */}
        <div className="space-y-4 p-6 rounded-2xl bg-white/90 border border-[#E4DCCF] shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <span className="font-bold text-[#16161D] uppercase tracking-wider">
              Filter by Space Type:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#B08A57] text-white shadow-sm"
                      : "bg-[#FAF7F2] text-[#5E5A55] border border-[#E4DCCF] hover:text-[#16161D] hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs pt-3 border-t border-[#E4DCCF]">
            <span className="font-bold text-[#16161D] uppercase tracking-wider">
              Filter by Style:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {styles.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStyle(st)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedStyle === st
                      ? "btn-primary-gradient text-white shadow-sm"
                      : "bg-[#FAF7F2] text-[#5E5A55] border border-[#E4DCCF] hover:text-[#16161D] hover:bg-white"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setActiveModalProject(project);
                setModalTab("after");
              }}
              className="group relative rounded-3xl overflow-hidden bg-white/95 border border-[#E4DCCF] hover:border-[#B08A57] transition-all duration-500 cursor-pointer flex flex-col justify-between hover:-translate-y-2 shadow-[0_10px_35px_rgba(22,22,29,0.06)] hover:shadow-[0_20px_48px_rgba(109,74,255,0.12)]"
            >
              <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#F1EBE1]">
                {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                <Image
                  src={project.afterImage}
                  alt={`${project.title} - ${project.society}, Pune`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlays */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 border border-[#E4DCCF] text-[10px] font-mono font-bold text-[#16161D] backdrop-blur-md shadow-xs">
                  {project.bhk}
                </div>

                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/90 border border-[#B08A57]/30 text-[10px] font-bold text-[#8E6835] backdrop-blur-md shadow-xs">
                  {project.budget}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-40" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-[#8E6835]">
                  <Building className="w-3.5 h-3.5" />
                  <span className="font-bold">{project.society}</span>
                  <span className="text-[#A9A49C]">•</span>
                  <span className="text-[#5E5A55]">{project.location}</span>
                </div>

                <h3 className="text-lg font-bold text-[#16161D] group-hover:text-[#6D4AFF] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-[#5E5A55] font-normal line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Materials Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.materials.slice(0, 2).map((m, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E4DCCF] text-[#16161D] font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-[#E4DCCF] flex items-center justify-between text-xs">
                  <span className="text-[#5E5A55] font-mono text-[11px] font-medium">
                    Handed over in {project.duration}
                  </span>
                  <span className="text-[#6D4AFF] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect Design</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal / Lightbox */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-white border border-[#E4DCCF] shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 z-20 p-2 rounded-full bg-[#FAF7F2] hover:bg-[#F1EBE1] border border-[#E4DCCF] text-[#16161D] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 text-xs text-[#8E6835] mb-1 font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeModalProject.society}, {activeModalProject.location}</span>
                <span className="text-[#A9A49C]">•</span>
                <span>{activeModalProject.style}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#16161D]">
                {activeModalProject.title}
              </h2>
            </div>

            {/* View Mode Toggle: Transformed vs Raw Handover */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setModalTab("after")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  modalTab === "after"
                    ? "btn-primary-gradient text-white shadow-sm"
                    : "bg-[#FAF7F2] border border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D]"
                }`}
              >
                Transformed Luxury Residence
              </button>
              <button
                onClick={() => setModalTab("before")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  modalTab === "before"
                    ? "bg-[#16161D] text-white shadow-sm"
                    : "bg-[#FAF7F2] border border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D]"
                }`}
              >
                Raw Builder Possession (Before)
              </button>
            </div>

            {/* Main Visual */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#16161D] border border-[#E4DCCF]">
              {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
              <Image
                src={modalTab === "after" ? activeModalProject.afterImage : activeModalProject.beforeImage}
                alt={activeModalProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Specs Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs">
              <div>
                <span className="text-[#5E5A55] block">Configuration</span>
                <span className="font-bold text-[#16161D]">{activeModalProject.bhk}</span>
              </div>
              <div>
                <span className="text-[#5E5A55] block">Carpet Area</span>
                <span className="font-bold text-[#16161D]">{activeModalProject.area}</span>
              </div>
              <div>
                <span className="text-[#5E5A55] block">Total Investment</span>
                <span className="font-bold text-[#8E6835]">{activeModalProject.budget}</span>
              </div>
              <div>
                <span className="text-[#5E5A55] block">Execution Timeline</span>
                <span className="font-bold text-emerald-600">{activeModalProject.duration}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[#16161D]">Architectural Narrative</h4>
              <p className="text-xs sm:text-sm text-[#5E5A55] font-normal leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            {/* Materials & Automation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-[#8E6835] uppercase tracking-wider">
                  Materials Specified
                </h5>
                <ul className="space-y-1.5 text-xs text-[#5E5A55]">
                  {activeModalProject.materials.map((m, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#8E6835] shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs font-bold text-[#14A8D6] uppercase tracking-wider">
                  Smart Home Features
                </h5>
                <ul className="space-y-1.5 text-xs text-[#5E5A55]">
                  {activeModalProject.smartFeatures.map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#14A8D6] shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Client Testimonial if present */}
            {activeModalProject.testimonial && (
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs space-y-2">
                <p className="text-[#16161D] italic">
                  &ldquo;{activeModalProject.testimonial.quote}&rdquo;
                </p>
                <p className="font-bold text-[#8E6835]">
                  — {activeModalProject.testimonial.author} ({activeModalProject.testimonial.designation})
                </p>
              </div>
            )}

            {/* WhatsApp CTA button */}
            <div className="pt-2 flex items-center justify-end">
              <a
                href={`https://wa.me/919823092587?text=${encodeURIComponent(
                  `Hi Xalveriq, I love your project '${activeModalProject.title}' at ${activeModalProject.society}. I'd like to explore a similar design for my home.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform shadow-sm"
              >
                <span>Discuss Similar Space on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
