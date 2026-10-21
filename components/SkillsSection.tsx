import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';

export default function SkillsSection() {
  const { skillCategories } = PORTFOLIO_CONFIG;

  return (
    <section
      id="skills"
      className="scroll-mt-16 border-b border-[#E7E7E4] bg-[#F7F7F5] py-20 sm:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E7E7E4]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">
              03 / CAPABILITIES
            </p>
            <h2
              id="skills-heading"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#111111]"
            >
              Tools I work with
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
            A practical overview of the technologies, languages, and tools I use to build modern applications.
          </p>
        </div>

        {/* 5 Categories in Clean Typographic Layout */}
        <div className="mt-12 divide-y divide-[#E7E7E4]">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
            >
              {/* Category Title & Order */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span aria-hidden="true">/</span>
                  <span className="uppercase">Category</span>
                </div>
                <h3 className="mt-2 text-lg sm:text-xl font-medium tracking-tight text-[#111111]">
                  {category.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#666666] max-w-xs leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills List in Pure Typography with Fine Separators */}
              <div className="md:col-span-8">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-3" role="list">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm sm:text-base font-normal text-[#111111] hover:text-[#0245EC] transition-colors flex items-center gap-2"
                    >
                      <span
                        className="h-1 w-1 rounded-full bg-[#111111]/40"
                        aria-hidden="true"
                      />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contextual Note on Practical Learning & Development */}
        <div className="mt-12 pt-8 border-t border-[#E7E7E4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#666666]">
          <p>
            Focused on clean architecture, continuous learning, and human-centered engineering principles.
          </p>
          <span className="font-mono text-[#111111]">
            Active learner · Building daily
          </span>
        </div>
      </div>
    </section>
  );
}
