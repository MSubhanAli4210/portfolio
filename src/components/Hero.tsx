"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: -60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: 60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          delay: 0.15,
          ease: "power4.out",
        }
      );

      gsap.to(sectionRef.current, {
        opacity: 0.4,
        scale: 0.97,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B1020] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[20%] top-[25%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="mx-auto grid min-h-screen w-[90%] max-w-[1500px] items-center gap-8 pb-16 pt-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* IMAGE SIDE */}
        <div
          ref={imageRef}
          className="relative flex min-h-[430px] items-end justify-center sm:min-h-[520px] lg:min-h-[620px]"
        >
          {/* Glow behind portrait */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[110px] sm:h-[420px] sm:w-[420px]" />

          {/* Subtle frame */}
          <div className="pointer-events-none absolute bottom-8 left-1/2 h-[80%] w-[82%] -translate-x-1/2 rounded-[32px] border border-white/10 bg-white/[0.02] sm:w-[78%]" />

          {/* Portrait */}
          <div
            className="
              relative
              h-[420px]
              w-full
              max-w-[520px]
              sm:h-[520px]
              lg:h-[620px]
              lg:max-w-[580px]
              [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
            "
          >
            <div
              className="
                absolute
                inset-0
                [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_90%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_90%,transparent_100%)]
              "
            >
              <Image
                src="/portfolio.png"
                alt="Subhan Ali"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* ROTATING HIRE ME BADGE */}
          <div
            className="
              absolute
              bottom-2
              right-0
              z-30
              h-[125px]
              w-[125px]

              sm:bottom-4
              sm:right-4
              sm:h-[145px]
              sm:w-[145px]

              lg:bottom-4
              lg:left-0
              lg:right-auto
              lg:h-44
              lg:w-44
            "
          >
            {/* Rotating text */}
            <div className="absolute inset-0 animate-[spin_18s_linear_infinite]">
              <svg
                viewBox="0 0 200 200"
                className="h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="heroHireCircle"
                    d="
                      M 100,100
                      m -72,0
                      a 72,72 0 1,1 144,0
                      a 72,72 0 1,1 -144,0
                    "
                  />
                </defs>

                <text
                  fill="rgba(244,247,251,0.9)"
                  fontSize="14"
                  letterSpacing="2.6"
                >
                  <textPath href="#heroHireCircle" startOffset="0%">
                    AVAILABLE · FULL STACK AI · SOFTWARE ENGINEER ·
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Center */}
            <a
              href="#contact"
              className="
                group
                absolute
                left-1/2
                top-1/2
                flex
                h-[72px]
                w-[72px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-[#11182B]/95
                text-center
                shadow-[0_0_35px_rgba(79,140,255,0.15)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-blue-400
                hover:bg-blue-400

                sm:h-[84px]
                sm:w-[84px]

                lg:h-24
                lg:w-24
              "
            >
              <div>
                <p className="text-[11px] font-semibold text-white transition-colors duration-300 group-hover:text-[#0B1020] sm:text-xs lg:text-sm">
                  Hire Me
                </p>

                <span className="mt-1 block text-xs text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0B1020]">
                  ↗
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div ref={contentRef} className="relative z-10 pb-6 lg:pb-0">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Full Stack AI Engineer
          </p>

          <h1 className="max-w-[780px] text-[clamp(3.2rem,12vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] lg:text-[clamp(3.5rem,5.8vw,6.8rem)]">
            Turning ideas
            <br />
            into real
            <br />
            software.
          </h1>

          <p className="mt-7 max-w-[640px] text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            I build modern full-stack applications, intelligent systems, and
            responsive digital products using React, Next.js, Node.js,
            databases, APIs, and AI technologies.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#0B1020" }}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold transition-all duration-300 hover:bg-blue-400"
            >
              Resume

              <ArrowUpRight
                size={17}
                style={{ color: "#0B1020" }}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="border-b border-white/50 pb-1 text-sm font-medium text-white transition-all duration-300 hover:border-blue-400 hover:text-blue-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}