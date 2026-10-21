import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { EmptyState } from '../ui/EmptyState';
import { Briefcase } from 'lucide-react';
import { ExperienceRecord } from '../../types';

interface ExperienceSectionProps {
  /**
   * Ready for real verified experience entries in a future phase.
   * Strictly empty initially per specification.
   */
  records?: ExperienceRecord[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ records = [] }) => {
  const hasRecords = records.length > 0;

  return (
    <section id="experience" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="04 / BACKGROUND"
          title="Experience"
          description="Professional roles, engineering internships, and commercial client engagements."
        />

        {hasRecords ? (
          <div className="space-y-6 max-w-3xl">
            {records.map((rec) => (
              <div
                key={rec.id}
                className="p-6 rounded-lg border border-neutral-200 bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold text-black">{rec.role}</h3>
                  <span className="text-xs font-mono text-neutral-500">
                    {rec.period}
                  </span>
                </div>
                <div className="text-sm font-medium text-neutral-700 mb-3">
                  {rec.organization} {rec.location && `· ${rec.location}`}
                </div>
                <p className="text-sm text-neutral-600 mb-3">{rec.summary}</p>
                <ul className="list-disc list-inside text-xs text-neutral-600 space-y-1">
                  {rec.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <EmptyState
              icon={Briefcase}
              phaseLabel="Phase 1: Structure Ready"
              title="Professional experience will be added soon."
              description="Chronological career milestones, company contributions, and technical deliverables will be documented here once verified by Musthafa."
            />
          </div>
        )}
      </div>
    </section>
  );
};
