import Link from "next/link";
import { SITE_DATA } from "@/content/site";

export const metadata = {
  title: "Terms of Service | Xalveriq Interior Studio Pune",
  description: "Terms and conditions for interior design and execution services by Xalveriq in Pune.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6">
      <div className="space-y-3 mb-10">
        <span className="plan-note">Legal & Client Terms</span>
        <h1 className="text-3xl sm:text-4xl">Terms of Service</h1>
        <p className="text-sm text-text-muted">
          Last updated: November 2026 • {SITE_DATA.legalName}
        </p>
      </div>

      <div className="arch-divider" />

      <div className="space-y-8 text-sm text-ink leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl">1. Scope of Work & Estimates</h2>
          <p className="text-text-muted">
            All estimates, budget ranges, and online tools provided on this website are indicative. Official project contracts are governed by an itemized Bill of Quantities (BOQ) with agreed specifications, site measurements, and fixed line-item pricing signed prior to site execution.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl">2. Project Timelines & Handover</h2>
          <p className="text-text-muted">
            Standard residential projects range between 6 to 10 weeks depending on flat size and civil scope. Timelines commence upon final architectural drawing sign-off, material finalization, and site readiness. Force majeure events and society-mandated work-hour restrictions in Pune may influence schedules, which are communicated proactively.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl">3. Payment Terms</h2>
          <p className="text-text-muted">
            Project payments are linked to verified milestone stages (design sign-off, carcass delivery, civil completion, and final handover inspection). Details are documented in each client agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl">4. Warranties & Materials</h2>
          <p className="text-text-muted">
            {SITE_DATA.warranty.summary} Official manufacturer warranty cards (plywood, hinges, hardware, appliances) are handed over in full at project completion.
          </p>
        </section>

        <div className="pt-6">
          <Link href="/" className="btn-outline">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
