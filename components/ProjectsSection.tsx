import { PORTFOLIO_CONFIG, Project } from '@/lib/portfolio-data';
import { ArrowUpRight, Code, Sparkles, FolderPlus } from 'lucide-react';

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isCompleted = project.status === 'completed';

  return (
    <article className="group relative border-b border-[#E7E7E4] py-8 sm:py-10 transition-colors hover:bg-[#F7F7F5]/60 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Project Meta Column */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span aria-hidden="true">/</span>
            <span>{project.category}</span>
            {project.year && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </>
            )}
          </div>
          <h3 className="mt-2 text-xl font-medium tracking-tight text-[#111111] group-hover:text-[#0245EC] transition-colors">
            {project.name}
          </h3>
        </div>

        {/* Project Description & Tech Stack */}
        <div className="lg:col-span-6">
          <p className="text-sm sm:text-base leading-relaxed text-[#666666]">
            {project.shortDescription}
          </p>

          {/* Unboxed Technologies List (Zero-Pill Discipline) */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#111111] font-mono">
            {project.technologies.map((tech, i) => (
              <span key={tech} className="inline-flex items-center gap-3">
                <span className="text-[#111111]">{tech}</span>
                {i < project.technologies.length - 1 && (
                  <span className="text-[#E7E7E4]" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>

          {project.note && (
            <p className="mt-3 text-xs text-[#666666] italic">
              Note: {project.note}
            </p>
          )}
        </div>

        {/* Project Action Links */}
        <div className="lg:col-span-3 flex lg:justify-end items-center gap-4 text-xs font-medium">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#0245EC] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] py-1"
            >
              <span>Live demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#111111] hover:text-[#0245EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] py-1"
            >
              <Code className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Repository</span>
            </a>
          )}

          {!project.liveUrl && !project.codeUrl && (
            <span className="text-xs text-[#666666]">
              {isCompleted ? 'Completed' : 'Repository available soon'}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function InProgressCard({ project }: { project: Project }) {
  return (
    <div className="border border-[#E7E7E4] bg-white p-6 sm:p-8 rounded-sm hover:border-neutral-400 transition-colors">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-mono text-[#666666]">
          {project.category}
        </span>
        {/* Subtle Lime Highlight indicating active development */}
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#D9FF3A]/40 border border-[#D9FF3A] text-[#111111] text-[11px] font-mono uppercase tracking-wider">
          <span className="h-1.5 w-1.5 bg-[#111111] inline-block" aria-hidden="true" />
          <span>{project.status === 'in-progress' ? 'In progress' : 'Coming soon'}</span>
        </div>
      </div>

      <h3 className="mt-4 text-lg font-medium text-[#111111]">
        {project.name}
      </h3>
      <p className="mt-2 text-sm text-[#666666] leading-relaxed">
        {project.shortDescription}
      </p>

      {/* Unboxed Tech List */}
      <div className="mt-5 pt-4 border-t border-[#E7E7E4] flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#111111] font-mono">
        {project.technologies.map((tech, i) => (
          <span key={tech} className="inline-flex items-center gap-2.5">
            <span>{tech}</span>
            {i < project.technologies.length - 1 && (
              <span className="text-[#E7E7E4]" aria-hidden="true">
                ·
              </span>
            )}
          </span>
        ))}
      </div>

      {project.note && (
        <p className="mt-3 text-xs text-[#666666] font-sans">
          Phase: {project.note}
        </p>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const { projects, inProgressProjects } = PORTFOLIO_CONFIG;

  return (
    <section
      id="projects"
      className="scroll-mt-16 border-b border-[#E7E7E4] bg-white py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E7E7E4]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">
              02 / WORK
            </p>
            <h2
              id="projects-heading"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#111111]"
            >
              Selected work
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
            A collection of projects, experiments, and ideas I've been building.
          </p>
        </div>

        {/* Completed Projects List */}
        <div className="divide-y divide-transparent">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Clean intentional empty state / slot helper */}
        <div className="mt-12 p-6 sm:p-8 border border-dashed border-[#E7E7E4] bg-[#F7F7F5] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <FolderPlus className="w-5 h-5 text-[#666666] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-medium text-[#111111]">
                Have a new project or repository to showcase?
              </h3>
              <p className="text-xs text-[#666666] mt-0.5">
                Add entries directly to <code className="text-xs font-mono bg-white px-1.5 py-0.5 border border-[#E7E7E4]">lib/portfolio-data.ts</code> without altering component styles.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-[#666666] shrink-0">
            Self-updating layout
          </span>
        </div>

        {/* Subsection: Currently in progress */}
        <div className="mt-20 pt-12 border-t border-[#E7E7E4]">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-[#D9FF3A] border border-[#111111]/30 inline-block" aria-hidden="true" />
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
                Currently in progress
              </h3>
            </div>
            <p className="mt-2 text-sm text-[#666666]">
              Early-stage prototypes, active experiments, and concepts under active engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressProjects.map((project) => (
              <InProgressCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
