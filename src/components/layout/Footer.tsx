import Link from "next/link";
import { SITE_DATA } from "@/content/site";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E0D7C9] pt-20 pb-12 text-[#18181B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E0D7C9]">
          {/* Studio Profile & Brand */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-3xl tracking-[0.06em] font-normal text-[#18181B]">
                {SITE_DATA.name.toUpperCase()}
              </span>
              <span className="w-2 h-2 rounded-full bg-bronze mb-1" />
            </div>

            <p className="text-sm font-medium text-bronze uppercase tracking-widest font-sans">
              {SITE_DATA.tagline}
            </p>

            <p className="text-sm text-[#645F58] leading-relaxed max-w-md">
              {SITE_DATA.positioning}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E0D7C9] bg-white text-[#18181B] hover:border-bronze hover:text-bronze flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E0D7C9] bg-white text-[#18181B] hover:border-bronze hover:text-bronze flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E0D7C9] bg-white text-[#18181B] hover:border-bronze hover:text-bronze flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Signature Services */}
          <div className="lg:col-span-3 space-y-4 text-xs sm:text-sm">
            <h4 className="text-xs font-semibold text-[#18181B] uppercase tracking-widest">
              Signature Services
            </h4>
            <ul className="space-y-2.5 text-[#645F58]">
              {SITE_DATA.signatureServices.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="hover:text-bronze transition-colors flex items-center gap-1 group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm">
            <h4 className="text-xs font-semibold text-[#18181B] uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[#645F58]">
              <li>
                <Link href="/" className="hover:text-bronze transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-bronze transition-colors">
                  Delivered Projects
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-bronze transition-colors">
                  AI Spatial Studio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-bronze transition-colors">
                  Studio Philosophy
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-bronze transition-colors">
                  Design Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-bronze transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Location & Contact */}
          <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm">
            <h4 className="text-xs font-semibold text-[#18181B] uppercase tracking-widest">
              Nashik Studio
            </h4>
            <div className="space-y-3 text-[#645F58]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-bronze flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Near Gangapur Road, Nashik 422013, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-bronze flex-shrink-0" />
                <a
                  href={`tel:${SITE_DATA.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-bronze transition-colors"
                >
                  {SITE_DATA.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-bronze flex-shrink-0" />
                <a
                  href={`mailto:${SITE_DATA.contact.email}`}
                  className="hover:text-bronze transition-colors"
                >
                  {SITE_DATA.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#645F58]">
          <p>© {currentYear} {SITE_DATA.name} Interior Architecture. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#18181B] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#18181B] transition-colors">
              Terms & BOQ Conditions
            </Link>
            <span className="text-[#9C958B]">Nashik • Mumbai • Pune</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
