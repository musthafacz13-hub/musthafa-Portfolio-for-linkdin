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
    <footer className="w-full bg-white py-10 sm:py-12 border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          {/* Identity & Location */}
          <div>
            <p className="text-sm font-medium text-[#111111]">
              {personal.name}
            </p>
            <p className="text-xs text-[#666666] mt-0.5">
              {personal.location} · {personal.role}
            </p>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs text-[#666666]">
            <span>© {currentYear} {personal.name}</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-medium text-[#111111] hover:text-[#0245EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] py-2 px-1 rounded-sm"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
