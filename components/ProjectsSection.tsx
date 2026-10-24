import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { KeyRound, Globe, ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_CONFIG;

  const renderIcon = (icon: 'key' | 'globe') => {
    switch (icon) {
      case 'key':
        return <KeyRound className="h-6 w-6 text-[#00d2ff]" aria-hidden="true" />;
      case 'globe':
      default:
        return <Globe className="h-6 w-6 text-[#00d2ff]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-white/10 bg-[#0a0a0a] py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Section Title with Reference Gradient Text */}
        <div className="text-center mb-14">
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#0245EC] bg-clip-text text-transparent inline-block"
          >
            Projects
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#0245EC]" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-[20px] bg-[#111111] border border-white/10 p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#00d2ff]/50 hover:shadow-[0_10px_30px_rgba(0,210,255,0.15)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Project Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00d2ff]/10 border border-[#00d2ff]/20 group-hover:scale-105 transition-transform duration-300">
                  {renderIcon(project.icon)}
                </div>

                {/* Project Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="mt-2.5 text-sm sm:text-base text-[#a0a0a0] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons: Live Demo & GitHub */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#00d2ff] to-[#0245EC] hover:shadow-[0_4px_15px_rgba(0,210,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff]"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} repository on GitHub`}
                  className="inline-flex items-center justify-center rounded-full p-2.5 text-white/90 hover:text-[#00d2ff] bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00d2ff]/40 transition-all duration-300 min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff]"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
