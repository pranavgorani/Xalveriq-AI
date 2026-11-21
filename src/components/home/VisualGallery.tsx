"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Maximize2, X, Sparkles } from "lucide-react";
import { SITE_DATA, GalleryPhoto } from "@/content/site";

export function VisualGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const filterTabs = [
    "All",
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Bathroom",
    "Renovation",
    "Villa",
  ];

  const photos = SITE_DATA.visualGallery;

  const filteredPhotos =
    activeFilter === "All"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E0D7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
              <span className="w-6 h-px bg-bronze" />
              <span>Architectural Lookbook</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
              Curated Visual Gallery
            </h2>
            <p className="mt-3 text-base text-[#645F58] leading-relaxed">
              Explore authentic high-resolution architectural interior details photographed across our residences in Nashik, Mumbai, and Pune.
            </p>
          </div>

          <div className="text-xs text-[#9C958B] font-mono self-start md:self-auto">
            SHOWING {filteredPhotos.length} OF {photos.length} RESIDENTIAL CAPTURES
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-6 mb-8">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-bronze ${
                  isActive
                    ? "bg-[#18181B] text-white shadow-card"
                    : "bg-white border border-[#E0D7C9] text-[#645F58] hover:text-[#18181B] hover:border-bronze"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => setActivePhoto(photo)}
                className="group relative rounded-2xl overflow-hidden border border-[#E0D7C9] bg-ivory-200 shadow-card cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with Consistent Aspect */}
                <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-[#18181B] tracking-wide uppercase">
                    {photo.category}
                  </span>

                  {/* Hover Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Image Overlay Description */}
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-white/80">
                      <MapPin className="w-3 h-3 text-bronze" />
                      <span>{photo.location}</span>
                    </div>
                    <h3 className="font-serif text-lg font-normal text-white line-clamp-1 group-hover:text-bronze transition-colors">
                      {photo.title}
                    </h3>
                  </div>
                </div>

                {/* Card Sub-caption */}
                <div className="p-4 bg-white border-t border-[#ECE5DA]">
                  <p className="text-xs text-[#645F58] line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-luxury border border-[#E0D7C9] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[360px] sm:h-[500px] bg-black">
                <Image
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-white space-y-2 border-t border-[#E0D7C9]">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-ivory-100 border border-[#E0D7C9] text-xs font-semibold text-bronze uppercase">
                    {activePhoto.category} • {activePhoto.location}
                  </span>
                  <span className="text-xs font-mono text-[#9C958B]">
                    XALVERIQ RESIDENTIAL ARCHIVE
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#18181B]">
                  {activePhoto.title}
                </h3>

                <p className="text-sm text-[#645F58] leading-relaxed">
                  {activePhoto.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
