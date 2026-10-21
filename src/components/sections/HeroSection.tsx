import React from 'react';
import { ArrowDownRight, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      try {
        window.history.replaceState(null, '', `#${targetId}`);
      } catch {
        // Fallback for sandboxed or cross-origin iframe environments
      }
    }
  };

  return (
    <section
      id="home"
      className="relative scroll-mt-20 sm:scroll-mt-24 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36 bg-white overflow-hidden border-b border-neutral-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Introductory Label: PORTFOLIO with restrained neon-lime badge */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase bg-[#D9FF3A] text-black px-2.5 py-1 rounded font-mono">
              PORTFOLIO
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.08] text-balance mb-6">
            Hi, I&apos;m Musthafa<span className="text-[#0245EC]">.</span>
          </h1>

          {/* Professional Title */}
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-800 leading-snug mb-8">
            Full-Stack Web Developer
            <span className="block text-neutral-500 font-medium">
              &amp; Android App Developer
            </span>
          </div>

          {/* Supporting Text: Clean typographic presentation (no colored left stripe) */}
          <div className="mb-10 max-w-2xl">
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed text-balance">
              Specializing in scalable web architecture and native Android engineering.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-mono">
              [Personal introduction and developer background reserved for final phase]
            </p>
          </div>

          {/* Action Area */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="gap-2"
            >
              <span>Explore My Work</span>
              <ArrowDownRight className="w-4 h-4" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="gap-2"
            >
              <Mail className="w-4 h-4 text-neutral-600" />
              <span>Contact Me</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
