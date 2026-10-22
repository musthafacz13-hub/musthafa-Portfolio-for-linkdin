'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { personal } = PORTFOLIO_CONFIG;

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
  ];

  // Track scroll for subtle height transition like reference navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-white/10 ${
          scrolled
            ? 'h-16 bg-[#0a0a0a]/90 backdrop-blur-md shadow-[0_5px_20px_rgba(0,0,0,0.5)]'
            : 'h-20 bg-[#0a0a0a]/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Left: Brand Name with Reference Gradient Text */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-lg sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#0245EC] bg-clip-text text-transparent hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] rounded-sm"
            aria-label={`${personal.name} home`}
          >
            {personal.name}
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-[#00d2ff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] rounded-sm py-1"
              >
                {link.label}
              </a>
            ))}

            {/* Primary Action Button (Reference Pill Button) */}
            <a
              href="#contact"
              className="rounded-full px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#00d2ff] to-[#0245EC] hover:shadow-[0_4px_15px_rgba(0,210,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff]"
            >
              Contact
            </a>
          </nav>

          {/* Mobile: Hamburger toggle */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 text-white hover:text-[#00d2ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] rounded-md transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Accessible Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav"
            className="relative z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md px-5 py-4 md:hidden animate-in fade-in slide-in-from-top-1 duration-200"
          >
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center min-h-[44px] text-base font-medium text-white/90 hover:text-[#00d2ff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] rounded-sm px-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center min-h-[44px] w-full rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00d2ff] to-[#0245EC] hover:shadow-[0_4px_15px_rgba(0,210,255,0.4)] transition-all"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}
    </>
  );
}
