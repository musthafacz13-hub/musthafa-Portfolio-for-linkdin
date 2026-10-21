import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { MapPin, GraduationCap, Laptop, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const { personal } = PORTFOLIO_CONFIG;

  const quickFacts = [
    {
      label: 'Location',
      value: personal.location,
      icon: MapPin,
    },
    {
      label: 'Status',
      value: personal.status,
      icon: GraduationCap,
    },
    {
      label: 'Primary Role',
      value: personal.role,
      icon: Laptop,
    },
    {
      label: 'Focus',
      value: personal.specialization,
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-[#E7E7E4] bg-white py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Quick Facts */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">
              04 / BACKGROUND
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#111111]"
            >
              A little about me
            </h2>

            {/* Quick Facts Grid */}
            <div className="mt-8 pt-8 border-t border-[#E7E7E4] space-y-4">
              {quickFacts.map((fact) => {
                const IconComponent = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between text-xs py-2 border-b border-[#E7E7E4]/60"
                  >
                    <span className="text-[#666666] flex items-center gap-2">
                      <IconComponent className="w-3.5 h-3.5 text-[#111111]" aria-hidden="true" />
                      <span>{fact.label}</span>
                    </span>
                    <span className="font-medium text-[#111111] text-right">
                      {fact.value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Understated note */}
            <div className="mt-8 p-4 bg-[#F7F7F5] border border-[#E7E7E4] rounded-sm">
              <p className="text-xs text-[#666666] leading-relaxed">
                Currently open to internship roles and junior developer positions where I can contribute to real software and collaborate with experienced engineering teams.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#666666]">
            {personal.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-neutral-700 font-normal">
                {paragraph}
              </p>
            ))}

            {/* Editorial Highlight Quote */}
            <div className="mt-10 pl-6 border-l-2 border-[#111111] py-2 bg-transparent">
              <blockquote className="text-base sm:text-lg font-medium text-[#111111] italic">
                “Building software isn't just about writing syntax—it's about understanding real user problems and engineering clear, reliable solutions.”
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#E7E7E4]">
              <p className="text-xs font-mono text-[#666666]">
                KERALA, INDIA · OPEN TO REMOTE & HYBRID ROLES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
