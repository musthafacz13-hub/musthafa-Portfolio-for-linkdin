import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { EmptyState } from '../ui/EmptyState';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectsSectionProps {
  /**
   * Dedicated array ready for real project objects in the next phase.
   * Strictly empty initially per specification.
   */
  projects?: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects = [] }) => {
  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="02 / PORTFOLIO"
          title="Selected Projects"
          description="A curated catalog of full-stack web platforms and native Android applications."
        />

        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <EmptyState
              icon={FolderGit2}
              phaseLabel="Phase 1: Structure Ready"
              title="Projects will appear here soon."
              description="Detailed project case studies, source repositories, and live deployment demonstrations are currently being compiled for presentation."
            />
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * Reusable ProjectCard component ready for future project entries.
 * Adheres to zero-pill discipline and domain-native minimalism.
 */
export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article className="group rounded-xl border border-neutral-200/80 bg-white p-6 sm:p-7 hover:border-black transition-colors flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-3">
          <span className="uppercase tracking-wider font-semibold text-neutral-700">
            {project.platform}
          </span>
          {project.featured && (
            <span className="text-[#0245EC] font-semibold tracking-wider uppercase text-[11px]">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-black mb-2 group-hover:text-[#0245EC] transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-600 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Unboxed tech stack metadata with clean separators */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 font-mono mb-6">
          {project.technologies.map((tech, index) => (
            <React.Fragment key={tech}>
              <span className="text-neutral-700">{tech}</span>
              {index < project.technologies.length - 1 && (
                <span aria-hidden="true" className="text-neutral-300">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-black hover:text-[#0245EC] transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-neutral-600 hover:text-black transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </article>
  );
};
