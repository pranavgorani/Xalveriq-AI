import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Copy: 7 Cols */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-2">
              <span className="plan-note">
                Interior Design Studio • Pune, Maharashtra
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-serif font-normal text-ink leading-[1.08] tracking-tight">
                Homes designed around how you live.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-text-muted max-w-xl font-normal leading-relaxed">
              We are a Pune interior design studio. Tell us about your flat and we will show you what it can become.
            </p>

            {/* CTAs: 1 primary terracotta button + 1 text link */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link
                href="/contact"
                className="btn-terracotta text-sm py-3 px-6 rounded-[4px]"
              >
                <span>Book a consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/studio"
                className="text-sm font-medium text-ink hover:text-terracotta transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-border hover:decoration-terracotta"
              >
                <span>Try the AI room designer</span>
                <span>→</span>
              </Link>
            </div>

            {/* Plan Note Caption */}
            <div className="pt-6 border-t border-border flex items-center gap-6 text-xs text-text-muted">
              <span>Full-home interiors</span>
              <span>•</span>
              <span>Modular kitchens</span>
              <span>•</span>
              <span>Turnkey handover</span>
            </div>
          </div>

          {/* Right Visual: 5 Cols Quiet Lived-In Photography */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden border border-border bg-[#EFE9DF] group shadow-soft">
              {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO: hero-living.jpg */}
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="Living room interior designed with natural light, smoked oak cabinetry, and warm 3000K lighting in Pune"
                fill
                priority
                className="object-cover hover-zoom-restrained"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 border border-border text-[11px] rounded-[2px] backdrop-blur-xs flex items-center justify-between">
                <span className="font-sans text-ink font-medium">Koregaon Park Residence</span>
                <span className="plan-note">Living room • 3000K lighting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
