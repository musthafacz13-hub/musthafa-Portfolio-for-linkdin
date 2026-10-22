'use client';

import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { personal } = PORTFOLIO_CONFIG;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] py-10 border-t border-white/10 text-center">
      <div className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Left: Copyright text */}
        <p className="text-sm font-normal text-[#a0a0a0]">
          © {currentYear} {personal.name}. All rights reserved.
        </p>

        {/* Right: Functional Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#a0a0a0] hover:text-[#00d2ff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] py-1.5 px-2 rounded-sm min-h-[44px] cursor-pointer"
          aria-label="Scroll back to top of page"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
