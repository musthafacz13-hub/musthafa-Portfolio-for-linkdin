export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-[#E5E5E5] bg-[#F6F6F4] py-16 sm:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E5E5E5]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">
            03 / CAPABILITIES
          </p>
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
            <h2
              id="skills-heading"
              className="text-2xl sm:text-4xl font-normal tracking-tight text-[#111111]"
            >
              Skills
            </h2>
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666] bg-white px-2.5 py-1 border border-[#E5E5E5] rounded-sm">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Clean, intentional empty state without assumed technologies */}
        <div className="mt-8 p-8 sm:p-12 border border-[#E5E5E5] bg-white rounded-sm text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className="h-2 w-2 bg-[#D9FF3A] border border-[#111111]/30 inline-block"
              aria-hidden="true"
            />
            <p className="text-xs font-mono uppercase tracking-wider text-[#111111] font-medium">
              Technical Skill Inventory
            </p>
          </div>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Detailed breakdown of confirmed languages, frameworks, and developer tooling will be added soon.
          </p>
        </div>
      </div>
    </section>
  );
}
