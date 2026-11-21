"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, CalendarCheck, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function StudioOffices() {
  const offices = SITE_DATA.contact.studios;

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#E0D7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
            <span className="w-6 h-px bg-bronze" />
            <span>Studio Locations & Material Galleries</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            Visit Our Studios & Client Desks
          </h2>

          <p className="mt-3 text-base text-[#645F58] leading-relaxed">
            Experience our tactile materials library, full-scale German hardware mockups, and private 3D VR spatial review lounges.
          </p>
        </div>

        {/* Balanced Two-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {offices.map((office, idx) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#E0D7C9] rounded-2xl p-7 sm:p-9 shadow-card hover:border-bronze transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Header Tag & Type */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory-100 border border-[#E0D7C9] text-[11px] font-semibold text-bronze uppercase tracking-wider mb-2">
                      <CalendarCheck className="w-3.5 h-3.5" />
                      <span>{office.appointmentLabel}</span>
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] group-hover:text-bronze transition-colors">
                      {office.title}
                    </h3>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-ivory-100 border border-[#E0D7C9] flex items-center justify-center text-bronze flex-shrink-0 group-hover:bg-bronze group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                {/* Subtitle / Type */}
                <p className="text-xs font-semibold text-[#18181B] tracking-wide uppercase">
                  {office.type}
                </p>

                {/* Full Address */}
                <div className="p-4 rounded-xl bg-[#FCFAF7] border border-[#ECE5DA] space-y-1">
                  <p className="text-sm font-medium text-[#18181B] leading-relaxed">
                    {office.address}
                  </p>
                  <p className="text-xs text-[#645F58]">
                    Landmark: {office.landmark}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#645F58] leading-relaxed">
                  {office.description}
                </p>

                {/* Timings */}
                <div className="flex items-center gap-2.5 text-xs text-[#645F58] pt-1">
                  <Clock className="w-4 h-4 text-bronze flex-shrink-0" />
                  <span>{office.hours}</span>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-8 pt-5 border-t border-[#ECE5DA] flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`tel:${office.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#18181B] hover:text-bronze transition-colors"
                >
                  <Phone className="w-4 h-4 text-bronze" />
                  <span>{office.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${office.whatsapp}?text=${encodeURIComponent(
                    `Hello Xalveriq Team, I would like to schedule a visit to the ${office.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs py-2.5 px-4 rounded-lg inline-flex items-center gap-2 hover:border-bronze"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Studio</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
