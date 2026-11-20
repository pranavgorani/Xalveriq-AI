import Link from "next/link";
import { SITE_DATA } from "@/content/site";

export const metadata = {
  title: "Privacy Policy | Xalveriq Interior Studio Pune",
  description: "Privacy policy for clients and website visitors of Xalveriq Interior Studio, Pune.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6">
      <div className="space-y-3 mb-10">
        <span className="plan-note">Legal & Privacy</span>
        <h1 className="text-3xl sm:text-4xl">Privacy Policy</h1>
        <p className="text-sm text-text-muted">
          Last updated: November 2026 • {SITE_DATA.legalName}
        </p>
      </div>

      <div className="arch-divider" />

      <div className="space-y-8 text-sm text-ink leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl">1. Information We Collect</h2>
          <p className="text-text-muted">
            When you contact us, book a consultation, or use our AI room preview tool, we may collect your name, phone number, email address, apartment location in Pune, and room configuration details. If you upload a room photo to the AI studio, it is processed temporarily to generate your design preview and is not shared with third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl">2. How We Use Your Details</h2>
          <p className="text-text-muted">
            We use your contact information solely to respond to your inquiry, schedule site visits, prepare spatial estimates, and coordinate ongoing interior projects. We do not sell or rent client data to third-party telemarketers or advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl">3. Communication via WhatsApp & Phone</h2>
          <p className="text-text-muted">
            If you provide your WhatsApp number or phone number, our design team communicates directly with you regarding drawings, site photographs, quotation line items, and schedule coordination. You may opt out of updates at any time by messaging us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl">4. Questions & Studio Contact</h2>
          <p className="text-text-muted">
            If you have questions about how your information is handled, you can reach our Pune studio directly at{" "}
            <a href={`tel:${SITE_DATA.contact.phone.split(" ")[0]}`} className="link-terracotta">
              {SITE_DATA.contact.phone}
            </a>{" "}
            or write to us at{" "}
            <a href={`mailto:${SITE_DATA.contact.email.split(" ")[0]}`} className="link-terracotta">
              {SITE_DATA.contact.email}
            </a>.
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
