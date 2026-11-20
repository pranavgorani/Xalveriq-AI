import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export const metadata = {
  title: "About the Studio | Xalveriq Pune",
  description:
    "We are an interior design studio based in Pune. Learn about our story, our approach to flat interiors, and meet our design team.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="plan-note">The Studio</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-ink">
            About Xalveriq.
          </h1>
          <p className="text-base text-text-muted leading-relaxed">
            We are a Pune interior design studio. We started with a simple conviction: designing a home in Pune should be quiet, predictable, and honest.
          </p>
        </div>

        {/* First Person Narrative & Studio Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-sm text-ink leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal">
              We started Xalveriq because traditional contracting was broken.
            </h2>
            <p className="text-text-muted">
              We started Xalveriq because we saw friends and clients going through the same ordeal across Pune: moving into a newly handed-over flat in Baner or Kharadi, only to face months of contractor delays, vague handwritten quotes, and carpentry that warped within a monsoon.
            </p>
            <p className="text-text-muted">
              We believed a studio should operate differently. We produce detailed drawings before touching a single wall, specify honest materials with published manufacturer warranties, and coordinate the entire execution ourselves so clients have one point of contact.
            </p>
            <p className="text-text-muted">
              We also built our AI room tool to solve an early friction point: helping homeowners visualize spatial ideas and budget allocations in minutes instead of waiting weeks for an initial sketch.
            </p>

            <div className="pt-2">
              <Link href="/contact" className="btn-terracotta text-xs py-2.5 px-5 rounded-[4px]">
                <span>Visit our Koregaon Park studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden border border-border bg-[#EFE9DF] shadow-soft">
              {/* REPLACE WITH REAL XALVERIQ STUDIO PHOTO: studio-office.jpg */}
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Xalveriq design office and material discussion table in Pune"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 border border-border p-2.5 text-xs rounded-[2px]">
                <span className="font-medium text-ink">Design Studio & Material Library</span>
                <span className="plan-note block text-[10px]">Lane 7, Koregaon Park, Pune</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="plan-note">The People</span>
            <h2 className="text-3xl font-serif font-normal text-ink">
              Our design & site team.
            </h2>
            <p className="text-sm text-text-muted max-w-xl">
              Architects, space planners, and site coordinators who work directly on your flat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_DATA.team.map((member, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-border rounded-[4px] space-y-4"
              >
                <div className="relative aspect-square rounded-[2px] overflow-hidden bg-paper-alt border border-border">
                  {/* REPLACE WITH REAL TEAM PHOTO */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {member.isFounder && (
                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-white border border-border text-[10px] font-mono text-terracotta rounded-[2px]">
                      Founder
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-serif font-normal text-ink">
                    {member.name}
                  </h3>
                  <p className="text-xs text-terracotta font-medium">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-text-muted leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Summary */}
        <section className="p-8 sm:p-12 bg-paper-alt border border-border rounded-[4px] space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="plan-note">Studio Standards</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-ink">
              What you can hold us to.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-text-muted leading-relaxed">
            <div className="p-5 bg-white border border-border rounded-[2px] space-y-2">
              <strong className="text-ink text-sm font-sans block">Itemized BOQ Pricing</strong>
              <p>Every bolt, board of plywood, and switch point is itemized in a line-item quotation before you pay a deposit.</p>
            </div>
            <div className="p-5 bg-white border border-border rounded-[2px] space-y-2">
              <strong className="text-ink text-sm font-sans block">Weekly Photo Updates</strong>
              <p>You receive scheduled weekly photo logs from site with milestone verification, so you never have to guess what is happening.</p>
            </div>
            <div className="p-5 bg-white border border-border rounded-[2px] space-y-2">
              <strong className="text-ink text-sm font-sans block">Direct Manufacturer Papers</strong>
              <p>All manufacturer warranties (Hafele, Blum, Saint-Gobain, marine plywood) are registered under your name at handover.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
