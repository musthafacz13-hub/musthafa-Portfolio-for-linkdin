export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-white/10 bg-[#0a0a0a] py-20 sm:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Centered Section Title with Gradient Text */}
        <div className="text-center mb-12">
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#0245EC] bg-clip-text text-transparent inline-block"
          >
            Skills
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#0245EC]" />
        </div>

        {/* Styled Card for Coming Soon Content */}
        <div className="mx-auto max-w-2xl bg-[#111111] border border-white/10 rounded-[20px] p-8 sm:p-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#00d2ff]/50 hover:shadow-[0_10px_30px_rgba(0,210,255,0.15)] transition-all duration-300">
          <p className="text-xl sm:text-2xl font-bold text-white mb-2">
            Coming soon.
          </p>
          <p className="text-sm sm:text-base text-[#a0a0a0]">
            I'm putting together a clean breakdown of the programming languages, frameworks, and tools I work with daily.
          </p>
        </div>
      </div>
    </section>
  );
}
