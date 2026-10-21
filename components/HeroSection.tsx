import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const { personal } = PORTFOLIO_CONFIG;

  return (
    <section
      className="relative overflow-hidden border-b border-[#E7E7E4] bg-white py-20 sm:py-28 lg:py-36"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow Label with subtle Neon Lime touch */}
          <div className="mb-6 flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-none bg-[#D9FF3A] border border-[#111111]/20 inline-block"
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">
              DEVELOPER · KERALA, INDIA
            </p>
          </div>

          {/* Headline with Apple/Swiss typographic scale */}
          <h1
            id="hero-heading"
            className="text-4xl font-normal tracking-tight text-[#111111] sm:text-6xl md:text-7xl lg:text-[5rem] lg:leading-[1.06]"
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

          {/* Supporting Paragraph */}
          <p className="mt-8 max-w-2xl text-lg sm:text-xl font-normal leading-relaxed text-[#666666]">
            {personal.heroParagraph}
          </p>

          {/* Actions & Key Touchpoint */}
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] rounded-sm"
            >
              <span>Explore my projects</span>
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-[#E7E7E4] bg-[#F7F7F5] px-6 py-3.5 text-sm font-medium text-[#111111] transition-all hover:border-[#111111] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] rounded-sm"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-4 w-4 text-[#0245EC]" aria-hidden="true" />
            </a>
          </div>

          {/* Subtle Discipline Detail */}
          <div className="mt-16 pt-8 border-t border-[#E7E7E4] flex flex-wrap items-center justify-between gap-4 text-xs tracking-wider text-[#666666]">
            <span className="font-mono text-neutral-400">01 / OVERVIEW</span>
            <span className="font-medium text-[#111111]">
              {personal.heroSubDetail}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
