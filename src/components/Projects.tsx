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

    const panels = gsap.utils.toArray<HTMLElement>(
      ".project-panel",
      wrapper
    );

    const context = gsap.context(() => {
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
          end: `+=${window.innerHeight * (panels.length - 1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
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
            scale: 0.94,
            opacity: 0.18,
            filter: "blur(4px)",
            duration: 1,
            ease: "none",
          },
          index - 1
        );
      });
    }, section);

    ScrollTrigger.refresh();

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative h-screen overflow-hidden bg-[#0B1020]"
    >
      <div ref={wrapperRef} className="relative h-full w-full">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-panel absolute inset-0 bg-[#0B1020]"
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
  );
}