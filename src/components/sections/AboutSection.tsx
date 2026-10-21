import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-neutral-50/50 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="01 / OVERVIEW"
          title="About"
          description="Background, development methodology, and engineering focus."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Reserved Biography Area */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-neutral-200 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-800 font-mono">
                Biography Reservation
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                Status: Pending Submission
              </span>
            </div>

            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>
                This space is reserved for Musthafa&apos;s verified personal narrative, education,
                and technical trajectory.
              </p>
              <p className="text-neutral-500 text-xs sm:text-sm">
                To maintain authentic professional integrity, no placeholder biographical facts
                or unverified achievements have been generated. The verified bio will be displayed
                here upon content delivery.
              </p>
            </div>

            {/* Clean unboxed metadata with typographic separators (zero pill discipline) */}
            <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-600 font-mono">
              <span className="text-neutral-900 font-medium">Targeting Software Roles &amp; Internships</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-neutral-900 font-medium">Client Projects</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-neutral-500">Bangalore / Remote</span>
            </div>
          </div>

          {/* Technical Specializations: 2 authentic disciplines without cliché cards or sparkles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <div className="text-xs font-mono font-semibold text-[#0245EC] mb-1">
                01. SPECIALIZATION
              </div>
              <h3 className="text-base font-bold text-black mb-2">
                Full-Stack Web Architecture
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Modern frontend systems paired with structured backend APIs, database design, and responsive web performance.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <div className="text-xs font-mono font-semibold text-[#0245EC] mb-1">
                02. SPECIALIZATION
              </div>
              <h3 className="text-base font-bold text-black mb-2">
                Native Android Engineering
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Mobile application engineering focusing on native platform capabilities, smooth UI performance, and clean architectural patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
