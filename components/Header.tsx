'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = PORTFOLIO_CONFIG;

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E7E7E4] bg-white/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-[#111111] transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC]"
            aria-label={`${personal.name} home`}
          >
            {personal.name}
          </Link>
          <span
            className="hidden text-xs text-[#666666] sm:inline-block"
            aria-hidden="true"
          >
            /
          </span>
          <span className="hidden text-xs text-[#666666] md:inline-block">
            {personal.availabilityNotice}
          </span>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#666666] transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] rounded-sm py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action / Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-[#111111] hover:text-[#0245EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] py-1"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0245EC]" aria-hidden="true" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 text-[#111111] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#E7E7E4] bg-[#FFFFFF] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            <p className="text-xs text-[#666666] mb-1">
              {personal.availabilityNotice}
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#111111] py-1 transition-colors hover:text-[#0245EC]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E7E7E4] mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0245EC]"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
