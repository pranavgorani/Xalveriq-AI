import Link from "next/link";
import { SITE_DATA } from "@/content/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper border-t border-border pt-16 pb-12 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Studio Profile */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl tracking-tight text-ink font-normal block">
                {SITE_DATA.name}
              </span>
              <span className="plan-note mt-1 block">
                {SITE_DATA.tagline}
              </span>
            </div>

            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              {SITE_DATA.studioSummary}
            </p>

            <div className="pt-2 text-xs text-text-muted space-y-1">
              <p>
                <strong className="text-ink font-medium">Hours:</strong> {SITE_DATA.contact.workingHours}
              </p>
              <p>
                <strong className="text-ink font-medium">Direct Line:</strong>{" "}
                <a href={`tel:${SITE_DATA.contact.phone.split(" ")[0]}`} className="hover:text-terracotta transition-colors">
                  {SITE_DATA.contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Studio Locations in Pune */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <span className="plan-note block">Pune Offices</span>
            <div className="space-y-4">
              {SITE_DATA.contact.studios.map((studio, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-medium text-ink">{studio.name}</p>
                  <p className="text-text-muted leading-relaxed">{studio.address}</p>
                  <p className="text-[11px] text-text-muted italic">{studio.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="plan-note block">Navigation</span>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-text-muted hover:text-ink transition-colors">
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-muted hover:text-ink transition-colors">
                  Services & Inclusions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-muted hover:text-ink transition-colors">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-text-muted hover:text-ink transition-colors">
                  AI Room Designer
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-muted hover:text-ink transition-colors">
                  Interior Notes & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-ink transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} {SITE_DATA.name} Interiors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink transition-colors">
              Terms of Service
            </Link>
            <a
              href={`https://wa.me/919823092587`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:underline"
            >
              WhatsApp Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
