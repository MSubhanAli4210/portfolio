import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectLink =
    project.href && project.href !== "#" ? project.href : project.github;

  return (
    <article className="grid min-h-screen grid-cols-1 gap-12 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <p className="mono text-xs uppercase tracking-[0.18em] text-[#98A2B3]">
            {project.number} / Selected Work
          </p>

          <span className="h-px w-10 bg-white/10" />

          <p className="mono text-xs uppercase tracking-[0.18em] text-white/40">
            {project.category}
          </p>
        </div>

        <h3 className="text-[14vw] font-medium leading-[0.82] tracking-[-0.07em] text-white sm:text-[10vw] lg:text-[6vw]">
          {project.title}
        </h3>

        <p className="mt-7 max-w-xl text-xl leading-8 text-white/80">
          {project.subtitle}
        </p>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#98A2B3]">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="mono rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-wider text-white/60"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-6">
          {project.href && project.href !== "#" && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mono group flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:text-blue-400"
            >
              Live Project

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mono flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#98A2B3] transition-colors duration-300 hover:text-white"
          >
            GitHub
            <FaGithub size={16} />
          </a>
        </div>
      </div>

      <div className="relative">
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#11182B] transition-all duration-300 hover:border-blue-400/40"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority={project.number === "01"}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#11182B]">
                <div className="text-center">
                  <p className="mono text-xs uppercase tracking-[0.16em] text-white/35">
                    Project Preview
                  </p>

                  <p className="mt-3 text-xl font-medium text-white/60">
                    Screenshot coming soon
                  </p>
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

            <div className="pointer-events-none absolute right-5 top-5">
              <span className="mono rounded-full border border-white/10 bg-[#0B1020]/70 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
                {project.number}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                View Project
              </p>

              <p className="mt-1 text-sm text-white/75">
                {project.title}
              </p>
            </div>

            <ArrowUpRight
              size={18}
              className="text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
            />
          </div>
        </a>

        <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-white/5" />
      </div>
    </article>
  );
}