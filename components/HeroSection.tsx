import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const { personal } = PORTFOLIO_CONFIG;

  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-[#0a0a0a] py-20 sm:py-28 lg:py-36 min-h-[85vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Ambient Glow Orbs */}
      <div
        className="pointer-events-none absolute -top-24 right-0 sm:right-12 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-gradient-to-tr from-[#00d2ff] to-[#0245EC] opacity-20 blur-[90px] animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-[#0245EC] opacity-15 blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Subtitle Kicker: Exactly 'Full-Stack AI Developer' without location */}
          <div className="mb-4 inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"
              aria-hidden="true"
            />
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-[#00d2ff]">
              Full-Stack AI Developer
            </p>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            I build digital
            <br />
            experiences with
            <br />
            <span className="bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#0245EC] bg-clip-text text-transparent">
              curiosity and code.
            </span>
          </h1>

          {/* Secondary Title Kicker */}
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-[#a0a0a0]">
            Web & Mobile Development
          </p>

          {/* Supporting paragraph */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#a0a0a0] max-w-2xl">
            {personal.heroParagraph}
          </p>

          {/* Pill Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#00d2ff] to-[#0245EC] shadow-[0_4px_15px_rgba(0,210,255,0.3)] hover:shadow-[0_8px_25px_rgba(0,210,255,0.5)] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] min-h-[44px]"
            >
              <span>Explore projects</span>
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold text-[#00d2ff] border-2 border-[#00d2ff] hover:bg-[#00d2ff]/10 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] min-h-[44px]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
