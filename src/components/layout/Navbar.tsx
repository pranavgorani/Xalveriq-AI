"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About Studio", href: "/about" },
    { name: "AI Designer", href: "/studio" },
    { name: "Journal", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#F6F2EA]/95 border-b border-border py-3.5 backdrop-blur-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Studio Wordmark Lockup */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl tracking-tight text-ink font-normal group-hover:text-terracotta transition-colors">
              {SITE_DATA.name}
            </span>
            <span className="text-[10px] tracking-[0.14em] uppercase text-text-muted font-sans font-medium">
              {SITE_DATA.tagline} • Pune
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-150 relative py-1 ${
                    isActive
                      ? "text-ink font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-terracotta"
                      : "text-text-muted hover:text-ink"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/studio"
              className="text-xs text-text-muted hover:text-ink transition-colors font-medium"
            >
              Try AI Designer →
            </Link>
            <Link
              href="/contact"
              className="btn-terracotta text-xs py-2 px-4 rounded-[4px]"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contact"
              className="btn-terracotta text-xs py-1.5 px-3 rounded-[4px]"
            >
              Consult
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-border rounded-[4px] bg-white text-ink"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper border-b border-border px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-medium border-b border-border/50 flex items-center justify-between ${
                  pathname === link.href ? "text-terracotta font-semibold" : "text-ink"
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs text-text-muted font-sans">→</span>
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                href="/studio"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-outline text-xs text-center py-2.5 rounded-[4px]"
              >
                Try AI Room Designer
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-terracotta text-xs text-center py-2.5 rounded-[4px]"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
