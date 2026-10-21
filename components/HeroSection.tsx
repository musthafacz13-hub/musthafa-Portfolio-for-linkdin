import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const { personal } = PORTFOLIO_CONFIG;

  return (
    <section
      className="relative overflow-hidden border-b border-[#E5E5E5] bg-white py-16 sm:py-24 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow with Neon Lime accent */}
          <div className="mb-6 flex items-center gap-2.5">
            <span
              className="h-2 w-2 bg-[#D9FF3A] border border-[#111111]/20 inline-block shrink-0"
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">
              DEVELOPER · KERALA, INDIA
            </p>
          </div>

          {/* Headline with fluid, responsive typography */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#111111] leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            I build digital
            <br />
            experiences with
            <br />
            <span className="font-medium text-[#111111] underline decoration-[#D9FF3A] decoration-wavy decoration-2 underline-offset-8">
              curiosity and code.
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#666666]">
            {personal.heroParagraph}
          </p>

          {/* Action buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] rounded-sm min-h-[44px]"
            >
              <span>View projects</span>
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-[#E5E5E5] bg-[#F6F6F4] px-5 py-3 text-sm font-medium text-[#111111] transition-colors hover:border-[#111111] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] rounded-sm min-h-[44px]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-4 w-4 text-[#0245EC]" aria-hidden="true" />
            </a>
          </div>

          {/* Detail Line */}
          <div className="mt-12 sm:mt-16 pt-6 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#666666]">
            <span className="font-mono text-neutral-400">01 / OVERVIEW</span>
            <span className="font-medium text-[#111111]">
              Web · Mobile · AI-assisted development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
