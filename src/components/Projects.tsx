"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects, type Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

function MobileProject({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  return (
    <article className="flex h-[100svh] w-screen shrink-0 items-center bg-[#0B1020]">
      <div className="mx-auto w-[90%] pt-16">
        {/* Top meta */}
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
          <p className="mono text-[9px] uppercase tracking-[0.18em] text-blue-400">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>

          <p className="mono text-[8px] uppercase tracking-[0.14em] text-white/30">
            {project.category}
          </p>
        </div>

        {/* Title */}
        <div className="mb-5">
          <h3 className="text-[13vw] font-medium leading-[0.88] tracking-[-0.065em] text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/55">
            {project.subtitle}
          </p>
        </div>

        {/* Main project image */}
        <a
          href={
            project.href && project.href !== "#"
              ? project.href
              : project.github
          }
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-[22px] border border-white/10 bg-[#11182B]"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              priority={index === 0}
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
              sizes="90vw"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1020]/45 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="mono text-[8px] uppercase tracking-[0.15em] text-white/50">
                  Featured Project
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  {project.title}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0B1020]/80 backdrop-blur-md">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </a>

        {/* Description */}
        <p className="mt-5 line-clamp-2 text-xs leading-5 text-white/45">
          {project.description}
        </p>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="mono rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1.5 text-[8px] uppercase tracking-wider text-white/45"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-6">
          {project.href && project.href !== "#" && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mono group flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-white"
            >
              Live Project
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mono flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-white/40"
          >
            GitHub
            <FaGithub size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const mobileSectionRef = useRef<HTMLElement | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  const desktopSectionRef = useRef<HTMLElement | null>(null);
  const desktopWrapperRef = useRef<HTMLDivElement | null>(null);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    []
  );

  useEffect(() => {
    const mm = gsap.matchMedia();

    // MOBILE
    mm.add("(max-width: 767px)", () => {
      const section = mobileSectionRef.current;
      const track = mobileTrackRef.current;

      if (!section || !track) return;

      const distance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.65,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          snap:
            featuredProjects.length > 1
              ? {
                  snapTo: 1 / (featuredProjects.length - 1),
                  duration: {
                    min: 0.18,
                    max: 0.35,
                  },
                  delay: 0.05,
                  ease: "power1.inOut",
                }
              : undefined,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    // DESKTOP
    mm.add("(min-width: 768px)", () => {
      const section = desktopSectionRef.current;
      const wrapper = desktopWrapperRef.current;

      if (!section || !wrapper) return;

      const panels = gsap.utils.toArray<HTMLElement>(
        ".desktop-project-panel",
        wrapper
      );

      panels.forEach((panel, index) => {
        gsap.set(panel, {
          yPercent: index === 0 ? 0 : 100,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () =>
            `+=${window.innerHeight * (panels.length - 1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((panel, index) => {
        if (index === 0) return;

        const previousPanel = panels[index - 1];

        timeline.to(
          panel,
          {
            yPercent: 0,
            duration: 1,
            ease: "none",
          },
          index - 1
        );

        timeline.to(
          previousPanel,
          {
            scale: 0.95,
            opacity: 0.2,
            filter: "blur(4px)",
            duration: 1,
            ease: "none",
          },
          index - 1
        );
      });

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    });

    ScrollTrigger.refresh();

    return () => mm.revert();
  }, [featuredProjects.length]);

  return (
    <div
      id="work"
      className="relative bg-[#0B1020]"
    >
      {/* MOBILE */}
      <section
        ref={mobileSectionRef}
        className="relative h-[100svh] overflow-hidden md:hidden"
      >
        {/* Fixed section label */}
        <div className="pointer-events-none absolute left-0 top-0 z-30 w-full bg-gradient-to-b from-[#0B1020] via-[#0B1020]/90 to-transparent pb-8 pt-5">
          <div className="container-custom flex items-center justify-between">
            <p className="mono text-[9px] uppercase tracking-[0.18em] text-blue-400">
              02 / Selected Work
            </p>

            <p className="mono text-[8px] uppercase tracking-[0.14em] text-white/25">
              Scroll →
            </p>
          </div>
        </div>

        {/* Horizontal track */}
        <div
          ref={mobileTrackRef}
          className="flex h-full w-max will-change-transform"
        >
          {featuredProjects.map((project, index) => (
            <MobileProject
              key={project.id}
              project={project}
              index={index}
              total={featuredProjects.length}
            />
          ))}
        </div>

        {/* Bottom progress */}
        <div className="pointer-events-none absolute bottom-5 left-1/2 z-30 flex w-[90%] -translate-x-1/2 gap-2">
          {featuredProjects.map((project) => (
            <span
              key={project.id}
              className="h-px flex-1 bg-white/15"
            />
          ))}
        </div>
      </section>

      {/* DESKTOP */}
      <section
        ref={desktopSectionRef}
        className="relative hidden h-screen overflow-hidden md:block"
      >
        <div
          ref={desktopWrapperRef}
          className="relative h-full w-full"
        >
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="desktop-project-panel absolute inset-0 bg-[#0B1020]"
              style={{
                zIndex: 10 + index,
              }}
            >
              <div className="container-custom h-full">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}