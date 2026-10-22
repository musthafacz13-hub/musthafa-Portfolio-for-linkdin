export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-white/10 bg-[#0a0a0a] py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Centered Section Title with Gradient Text */}
        <div className="text-center mb-12">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#0245EC] bg-clip-text text-transparent inline-block"
          >
            About Me
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#0245EC]" />
        </div>

        {/* Styled Card & Who I Am Heading */}
        <div className="mx-auto max-w-3xl bg-[#111111] border border-white/10 rounded-[20px] p-8 sm:p-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#00d2ff]/50 transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#00d2ff] mb-4">
            Who I Am
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#a0a0a0]">
            <p>
              I'm a degree student based in <strong className="text-white font-semibold">Kerala, India</strong>, focusing on web and mobile application development.
            </p>
            <p>
              I enjoy turning ideas into functional, user-friendly software and continuously learning new technologies. I'm actively seeking internship opportunities where I can contribute to real projects and learn from experienced developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
