import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AiRoomTeaser() {
  return (
    <section className="py-24 border-t border-border bg-paper-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-white border border-border rounded-[4px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Copy Column: 5 Cols */}
            <div className="lg:col-span-5 space-y-5">
              <span className="plan-note">Digital Studio Tool</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-ink">
                Preview your space before we draw.
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Upload a photo of your room and preview a few style directions in seconds. Our designers then refine the one you like.
              </p>

              <div className="pt-2">
                <Link
                  href="/studio"
                  className="btn-terracotta text-sm py-3 px-6 rounded-[4px]"
                >
                  <span>Open the AI room designer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 border-t border-border/60 text-xs text-text-muted space-y-1">
                <p>• Free to test on any room photo or builder layout</p>
                <p>• Includes instant Pune budget estimation by BHK</p>
              </div>
            </div>

            {/* Screenshot Preview Column: 7 Cols */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-[4px] overflow-hidden border border-border bg-paper shadow-soft">
                {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO: ai-studio-preview.jpg */}
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="AI Room Designer preview showing Japandi and Modern wood material layouts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute top-3 left-3 bg-white/95 border border-border px-3 py-1.5 rounded-[2px] text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-terracotta" />
                  <span className="font-medium text-ink">AI Concept Preview</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 border border-border p-3 rounded-[2px] flex items-center justify-between text-xs">
                  <span className="text-ink font-medium">Baner 3 BHK — Japandi Minimal direction</span>
                  <span className="plan-note">Style 02 of 05</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
