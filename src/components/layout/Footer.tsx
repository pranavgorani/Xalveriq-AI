import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, Award } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#12121A] border-t border-[#252533] text-[#A9A49C] overflow-hidden pt-16 pb-12">
      {/* Background subtle ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6D4AFF]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B08A57]/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-[#252533]">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
            <div className="p-2.5 rounded-xl bg-[#B08A57]/15 text-[#DFBA87]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#FAF7F2]">10-Year Warranty</h4>
              <p className="text-xs text-[#A9A49C]">On all modular woodwork & hardware</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
            <div className="p-2.5 rounded-xl bg-[#6D4AFF]/15 text-[#A992FF]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#FAF7F2]">45-Day Handover</h4>
              <p className="text-xs text-[#A9A49C]">With written ₹2,500/day penalty clause</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
            <div className="p-2.5 rounded-xl bg-[#14A8D6]/15 text-[#58C8EB]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#FAF7F2]">AI-Driven Precision</h4>
              <p className="text-xs text-[#A9A49C]">Instant 3D concepts before execution</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
            <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#FAF7F2]">450+ Homes in Pune</h4>
              <p className="text-xs text-[#A9A49C]">Panchshil, Trump Towers, Amanora</p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6D4AFF] via-[#14A8D6] to-[#B08A57] p-[1.5px]">
                <div className="w-full h-full bg-[#1A1A26] rounded-[9px] flex items-center justify-center">
                  <span className="font-display font-bold text-white text-base">X</span>
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-[0.2em] text-[#FAF7F2]">
                XALVERIQ
              </span>
            </Link>

            <p className="text-sm text-[#A9A49C] leading-relaxed max-w-sm">
              Spaces, Intelligently Designed. Pune’s premier interior architecture practice fusing weightless contemporary aesthetics with generative AI spatial intelligence.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-[#D5D0C7]">
                <MapPin className="w-4 h-4 text-[#B08A57] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#FAF7F2]">Flagship Experience Centre:</strong> Lane 7, Koregaon Park, Pune, Maharashtra 411001
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#D5D0C7]">
                <MapPin className="w-4 h-4 text-[#A992FF] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#FAF7F2]">Design Lab:</strong> High Street Balewadi / Baner, Pune 411045
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#D5D0C7]">
                <Phone className="w-4 h-4 text-[#58C8EB] shrink-0" />
                <a href="tel:+919823092587" className="hover:text-white transition-colors">
                  +91 98230 XALV (9258)
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#D5D0C7]">
                <Mail className="w-4 h-4 text-[#B08A57] shrink-0" />
                <a href="mailto:design@xalveriq.com" className="hover:text-white transition-colors">
                  design@xalveriq.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF7F2] uppercase tracking-wider">
              Studio & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/studio" className="hover:text-[#58C8EB] transition-colors flex items-center gap-1 text-[#A9A49C]">
                  AI Redesign Studio
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#6D4AFF]/40 text-[#58C8EB] font-semibold">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/studio#estimator" className="hover:text-white transition-colors text-[#A9A49C]">
                  Pune Budget Estimator
                </Link>
              </li>
              <li>
                <Link href="/studio#style-quiz" className="hover:text-white transition-colors text-[#A9A49C]">
                  AI Style Quiz
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors text-[#A9A49C]">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/portfolio?beforeAfter=true" className="hover:text-white transition-colors text-[#A9A49C]">
                  Before & After Transformations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-[#A9A49C]">
                  Our Philosophy & Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF7F2] uppercase tracking-wider">
              Specializations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#turnkey" className="hover:text-white transition-colors text-[#A9A49C]">
                  Turnkey Luxury Interiors
                </Link>
              </li>
              <li>
                <Link href="/services#modular-kitchens" className="hover:text-white transition-colors text-[#A9A49C]">
                  Modular Kitchen Architecture
                </Link>
              </li>
              <li>
                <Link href="/services#wardrobes" className="hover:text-white transition-colors text-[#A9A49C]">
                  Weightless Walk-in Wardrobes
                </Link>
              </li>
              <li>
                <Link href="/services#living" className="hover:text-white transition-colors text-[#A9A49C]">
                  Living & Media Sanctuaries
                </Link>
              </li>
              <li>
                <Link href="/services#master" className="hover:text-white transition-colors text-[#A9A49C]">
                  Master Bedroom Suites
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-white transition-colors text-[#A9A49C]">
                  Executive Studios & Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Pune Neighborhoods Served */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF7F2] uppercase tracking-wider">
              Pune Neighborhoods
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {[
                "Koregaon Park",
                "Baner",
                "Kalyani Nagar",
                "Kharadi",
                "Viman Nagar",
                "Kothrud",
                "Balewadi",
                "Amanora Park Town",
                "Hinjawadi",
                "Model Colony",
                "Wakad",
                "Bavdhan",
              ].map((locality) => (
                <span
                  key={locality}
                  className="px-2 py-1 rounded-md bg-white/[0.06] text-[#D5D0C7] border border-white/[0.08]"
                >
                  {locality}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-[#A9A49C] pt-2">
              Serving premium housing societies across Pune & Pimpri-Chinchwad.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#252533] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9A49C]">
          <p>© {currentYear} Xalveriq Interiors Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Pune Experience Center Visit
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD LocalBusiness Schema for Pune SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InteriorDesigner",
            "name": "Xalveriq Interiors",
            "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
            "url": "https://xalveriq.com",
            "telephone": "+91-98230-92587",
            "priceRange": "₹₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Lane 7, Koregaon Park",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 18.5362,
              "longitude": 73.8938
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "10:00",
              "closes": "20:00"
            },
            "sameAs": [
              "https://instagram.com/xalveriq",
              "https://linkedin.com/company/xalveriq"
            ]
          }),
        }}
      />
    </footer>
  );
}
