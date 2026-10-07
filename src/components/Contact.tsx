"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1020] py-24 text-white md:py-36"
    >
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="border-b border-white/10 pb-12">
          <p className="mono mb-5 text-xs uppercase tracking-[0.18em] text-blue-400">
            08 / Contact
          </p>

          <h2 className="max-w-6xl text-[13vw] font-medium leading-[0.86] tracking-[-0.07em] sm:text-[10vw] md:text-[7vw]">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            USEFUL.
          </h2>
        </div>

        <div className="grid gap-12 py-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              I&apos;m open to software engineering opportunities,
              collaborations, and interesting projects where I can contribute
              across frontend, backend, full-stack, and AI-focused work.
            </p>

            <a
              href="mailto:subhanali4219@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-lg text-white transition-all duration-300 hover:border-blue-400 hover:text-blue-400"
            >
              <Mail size={18} />

              subhanali4219@gmail.com

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/MSubhanAli4210"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-[#11182B] px-5 py-3 transition-all duration-300 hover:border-blue-400/40 hover:bg-[#151D33]"
            >
              <FaGithub size={17} />

              <span className="mono text-xs uppercase tracking-wider">
                GitHub
              </span>

              <ArrowUpRight
                size={14}
                className="text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-subhan-ali-421747369/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-[#11182B] px-5 py-3 transition-all duration-300 hover:border-blue-400/40 hover:bg-[#151D33]"
            >
              <FaLinkedin size={17} />

              <span className="mono text-xs uppercase tracking-wider">
                LinkedIn
              </span>

              <ArrowUpRight
                size={14}
                className="text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
              />
            </a>
          </div>
        </div>

        <footer className="flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-white/25 md:flex-row md:items-center">
          <p className="mono text-[10px] uppercase tracking-[0.16em] sm:text-xs">
            Full Stack AI Engineer
          </p>

          <p className="mono text-[10px] uppercase tracking-[0.16em] sm:text-xs">
            Built with Next.js · React · GSAP
          </p>
        </footer>
      </div>
    </section>
  );
}