"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        {
          y: 160,
          borderRadius: "40px 40px 0 0",
        },
        {
          y: 0,
          borderRadius: "0px 0px 0px 0px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 15%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-[120vh] bg-[#0B1020]"
    >
      <div
        ref={panelRef}
        className="relative z-10 min-h-screen bg-[#11182B] text-white"
      >
        <div className="container-custom flex min-h-screen flex-col justify-between py-24 md:py-32">
          <div className="flex justify-between border-b border-white/10 pb-5">
            <p className="mono text-xs uppercase tracking-[0.16em] text-[#98A2B3]">
              01 / About
            </p>

            <p className="mono text-xs uppercase tracking-[0.16em] text-[#98A2B3]">
              Software Engineer
            </p>
          </div>

          <div ref={textRef} className="py-20">
            <p className="mb-8 max-w-xl text-lg leading-8 text-[#98A2B3]">
              I care about more than making software look good.
            </p>

            <h2 className="max-w-[1200px] text-[10vw] font-medium leading-[0.9] tracking-[-0.07em] text-[#F4F7FB] md:text-[6.5vw]">
              I TURN COMPLEX
              <br />
              REQUIREMENTS INTO
              <br />
              SIMPLE SYSTEMS.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-10 border-t border-white/10 pt-8 md:flex-row">
            <p className="max-w-lg text-base leading-7 text-white/60">
              My work focuses on building maintainable applications,
              thoughtful user experiences, reliable APIs, and systems designed
              around real problems.
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <span className="mono text-xs text-[#98A2B3]">
                Frontend
              </span>
              <span className="text-sm text-white/80">
                Next.js / React
              </span>

              <span className="mono text-xs text-[#98A2B3]">
                Backend
              </span>
              <span className="text-sm text-white/80">
                Python / Node
              </span>

              <span className="mono text-xs text-[#98A2B3]">
                Data
              </span>
              <span className="text-sm text-white/80">
                PostgreSQL / MongoDB
              </span>

              <span className="mono text-xs text-[#98A2B3]">
                Infrastructure
              </span>
              <span className="text-sm text-white/80">
                Docker / Cloud
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}