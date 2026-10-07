import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";

export default function MoreWork() {
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <section className="bg-[#11182B] py-28 text-white md:py-40">
      <div className="container-custom">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.18em] text-white/40">
              More Work
            </p>

            <h2 className="text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              OTHER PROJECTS.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/55">
            Additional projects exploring product interfaces, responsive
            layouts, and API-driven experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {moreProjects.map((project) => {
            const projectLink =
              project.href && project.href !== "#"
                ? project.href
                : project.github;

            return (
              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B1020] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              >
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-[16/10] overflow-hidden bg-white/[0.03]"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <p className="mono text-xs uppercase tracking-[0.16em] text-white/35">
                        Screenshot coming soon
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </a>

                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="mono mb-4 text-xs uppercase tracking-[0.16em] text-white/40">
                        {project.number} / {project.category}
                      </p>

                      <h3 className="text-4xl font-medium tracking-[-0.04em]">
                        {project.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                    />
                  </div>

                  <p className="mt-5 max-w-lg leading-7 text-white/55">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="mono rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-wider text-white/55"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex gap-6">
                    {project.href && project.href !== "#" && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mono flex items-center gap-2 text-xs uppercase tracking-wider text-white transition-colors hover:text-blue-400"
                      >
                        Live
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mono flex items-center gap-2 text-xs uppercase tracking-wider text-white/50 transition-colors hover:text-white"
                    >
                      GitHub
                      <FaGithub size={15} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}