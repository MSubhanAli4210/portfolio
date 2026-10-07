"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const items = [
  {
    number: "01",
    title: "Think",
    text: "Understand the problem before writing the solution.",
  },
  {
    number: "02",
    title: "Build",
    text: "Turn requirements into maintainable, production-ready systems.",
  },
  {
    number: "03",
    title: "Refine",
    text: "Improve performance, usability, architecture, and reliability.",
  },
];

export default function InteractiveSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const blob = blobRef.current;

    if (!section || !blob) return;

    const moveX = gsap.quickTo(blob, "x", {
      duration: 0.7,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(blob, "y", {
      duration: 0.7,
      ease: "power3.out",
    });

    const handleMouseMove = (event: MouseEvent) => {
      const bounds = section.getBoundingClientRect();

      moveX(event.clientX - bounds.left - 160);
      moveY(event.clientY - bounds.top - 160);
    };

    const handleMouseEnter = () => {
      gsap.to(blob, {
        scale: 1,
        opacity: 0.65,
        duration: 0.4,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(blob, {
        scale: 0.75,
        opacity: 0.25,
        duration: 0.5,
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1020] py-28 text-white md:py-40"
    >
      {/* Cursor blob */}
      <div
        ref={blobRef}
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          hidden
          h-80
          w-80
          rounded-full
          bg-blue-500/20
          opacity-25
          blur-[90px]
          md:block
        "
      />

      {/* Mobile ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] md:hidden" />

      <div className="container-custom relative z-10">
        <div className="mb-20 border-b border-white/10 pb-8">
          <p className="mono mb-5 text-xs uppercase tracking-[0.2em] text-blue-400">
            05 / Process
          </p>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-8xl">
              HOW I TURN
              <br />
              IDEAS INTO SYSTEMS.
            </h2>

            <p className="max-w-md text-base leading-7 text-white/50">
              Good software starts with understanding the problem, not choosing
              the framework.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          {items.map((item) => (
            <div
              key={item.number}
              className="
                group
                grid
                gap-6
                border-b
                border-white/10
                py-10
                transition-all
                duration-300
                md:grid-cols-[100px_0.8fr_1fr]
                md:items-center
                md:py-14
              "
            >
              <span className="mono text-xs tracking-[0.16em] text-white/30">
                {item.number}
              </span>

              <h3 className="text-4xl font-medium tracking-[-0.04em] transition-colors duration-300 group-hover:text-blue-400 md:text-5xl">
                {item.title}
              </h3>

              <p className="max-w-lg text-base leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
          </span>

          <p className="mono text-[10px] uppercase tracking-[0.18em] text-white/35">
            Move your cursor around
          </p>
        </div>
      </div>
    </section>
  );
}