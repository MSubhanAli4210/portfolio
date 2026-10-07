import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0B1020] py-28 text-white md:py-40"
    >
      <div className="container-custom">
        <div className="mb-20 flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.18em] text-white/40">
              03 / Experience
            </p>

            <h2 className="text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              EXPERIENCE.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/55">
            Practical experience across frontend development, full-stack AI
            engineering, project collaboration, and technical mentoring.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className="grid gap-8 py-10 md:grid-cols-[100px_1fr_1fr] md:gap-12 md:py-14"
            >
              <div>
                <span className="mono text-xs uppercase tracking-[0.16em] text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <p className="mono mb-3 text-xs uppercase tracking-[0.16em] text-blue-400">
                  {item.company}
                </p>

                <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  {item.role}
                </h3>

                <p className="mono mt-4 text-xs uppercase tracking-[0.14em] text-white/35">
                  {item.duration}
                </p>
              </div>

              <div>
                <p className="max-w-xl text-base leading-7 text-white/60">
                  {item.description}
                </p>

                {item.stack && item.stack.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.stack.map((technology) => (
                      <span
                        key={technology}
                        className="mono rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-wider text-white/50"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}