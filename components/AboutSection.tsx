import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { User, MapPin, GraduationCap, Laptop, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const { personal } = PORTFOLIO_CONFIG;

  const details = [
    { label: 'Name', value: personal.name, icon: User },
    { label: 'Role', value: personal.role, icon: Laptop },
    { label: 'Location', value: personal.location, icon: MapPin },
    { label: 'Status', value: personal.status, icon: GraduationCap },
    { label: 'Availability', value: personal.availabilityNotice, icon: Sparkles },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-[#E5E5E5] bg-white py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E5E5E5]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">
            04 / BACKGROUND
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-2xl sm:text-4xl font-normal tracking-tight text-[#111111]"
          >
            About
          </h2>
        </div>

        {/* Minimal Details Grid */}
        <div className="mt-8 max-w-3xl">
          <div className="divide-y divide-[#E5E5E5] border border-[#E5E5E5] bg-white rounded-sm">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 sm:py-4 gap-1 sm:gap-4 text-sm"
                >
                  <span className="text-[#666666] flex items-center gap-2.5 font-normal">
                    <Icon className="w-4 h-4 text-[#111111] shrink-0" aria-hidden="true" />
                    <span>{item.label}</span>
                  </span>
                  <span className="font-medium text-[#111111] sm:text-right">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-xs text-[#666666] leading-relaxed">
            Personal biography and educational background will be updated as this portfolio develops.
          </p>
        </div>
      </div>
    </section>
  );
}
