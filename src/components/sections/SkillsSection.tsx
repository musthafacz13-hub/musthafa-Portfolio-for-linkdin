import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { EmptyState } from '../ui/EmptyState';
import { Cpu } from 'lucide-react';
import { SkillGroup } from '../../types';

interface SkillsSectionProps {
  /**
   * Ready for real verified skill groups in a future phase.
   * Strictly empty initially per specification.
   */
  skillGroups?: SkillGroup[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillGroups = [] }) => {
  const hasSkills = skillGroups.length > 0;

  return (
    <section id="skills" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-neutral-50/50 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="03 / CAPABILITIES"
          title="Skills &amp; Technologies"
          description="Technical stack across modern web engineering and native Android development."
        />

        {hasSkills ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.id}
                className="rounded-lg border border-neutral-200 bg-white p-6 hover:border-black transition-colors"
              >
                <h3 className="text-base font-bold text-black mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-neutral-600 font-mono">
                  {group.items.map((item, idx) => (
                    <React.Fragment key={item}>
                      <span>{item}</span>
                      {idx < group.items.length - 1 && (
                        <span aria-hidden="true" className="text-neutral-300">
                          /
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <EmptyState
              icon={Cpu}
              phaseLabel="Phase 1: Structure Ready"
              title="Skills and technologies will be added soon."
              description="A verified catalog of frameworks, languages, databases, and development tooling will be published here without arbitrary percentage bars or artificial ratings."
            />

            {/* Clean, quiet architectural scope without decorative dashed boxes */}
            <div className="mt-6 text-center">
              <p className="text-xs text-neutral-500 font-mono">
                Planned technical coverage: Web Frontend · Backend Systems · Android Native · Tooling &amp; Architecture
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
