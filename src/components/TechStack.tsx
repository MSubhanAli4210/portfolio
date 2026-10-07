const stackGroups = [
  {
    number: "01",
    title: "Frontend",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    number: "02",
    title: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Data",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    number: "04",
    title: "Tools",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "VS Code",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="bg-[#11182B] py-28 text-white md:py-40"
    >
      <div className="container-custom">
        <div className="mb-20 flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.18em] text-white/40">
              04 / Technology
            </p>

            <h2 className="text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              TECH STACK.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/55">
            Technologies I use to build responsive interfaces, full-stack
            applications, APIs, and production-ready digital products.
          </p>
        </div>

        <div className="border-t border-white/10">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[100px_250px_1fr] md:items-start md:py-14"
            >
              <span className="mono text-xs uppercase tracking-[0.16em] text-white/30">
                {group.number}
              </span>

              <h3 className="text-3xl font-medium tracking-[-0.04em]">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-[#0B1020] px-4 py-2 text-sm text-white/60 transition-all duration-300 hover:border-blue-400/40 hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}