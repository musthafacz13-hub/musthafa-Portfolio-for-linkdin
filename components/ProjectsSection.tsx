export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-[#E5E5E5] bg-white py-16 sm:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E5E5E5]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">
            02 / WORK
          </p>
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
            <h2
              id="projects-heading"
              className="text-2xl sm:text-4xl font-normal tracking-tight text-[#111111]"
            >
              Projects
            </h2>
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666] bg-[#F6F6F4] px-2.5 py-1 border border-[#E5E5E5] rounded-sm">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Clean, intentional empty state */}
        <div className="mt-8 p-8 sm:p-12 border border-[#E5E5E5] bg-[#F6F6F4] rounded-sm text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className="h-2 w-2 bg-[#D9FF3A] border border-[#111111]/30 inline-block"
              aria-hidden="true"
            />
            <p className="text-xs font-mono uppercase tracking-wider text-[#111111] font-medium">
              Portfolio In Development
            </p>
          </div>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Real projects and technical case studies are currently being curated and will be published here.
          </p>
        </div>

        {/* Subsection: Currently in progress */}
        <div className="mt-16 pt-8 border-t border-[#E5E5E5]">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
            <h3 className="text-lg sm:text-xl font-normal tracking-tight text-[#111111]">
              Currently in progress
            </h3>
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666]">
              Coming Soon
            </span>
          </div>
          <div className="p-6 border border-dashed border-[#E5E5E5] bg-white rounded-sm text-left">
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              Active engineering experiments and mobile application prototypes will be added as they reach milestone releases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
