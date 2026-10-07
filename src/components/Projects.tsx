"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;

    if (!section || !wrapper) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(
        ".desktop-project-panel",
        wrapper
      );

      panels.forEach((panel, index) => {
        if (index === 0) return;

        gsap.set(panel, {
          yPercent: 100,
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
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div id="work" className="bg-[#0B1020]">
      {/* MOBILE */}
      <section className="py-20 text-white md:hidden">
        <div className="container-custom">
          <div className="mb-12 border-b border-white/10 pb-7">
            <p className="mono mb-4 text-xs uppercase tracking-[0.18em] text-blue-400">
              02 / Selected Work
            </p>

            <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl">
              FEATURED
              <br />
              PROJECTS.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
              Selected applications built across frontend, backend, APIs,
              databases, and full-stack development.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP */}
      <section
        ref={sectionRef}
        className="relative hidden h-screen overflow-hidden md:block"
      >
        <div
          ref={wrapperRef}
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