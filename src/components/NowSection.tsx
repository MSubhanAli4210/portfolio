"use client";

import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Layers3,
} from "lucide-react";

const nowItems = [
  {
    label: "Building",
    title: "Full-stack and AI-focused projects",
    description:
      "Working on practical applications that connect modern interfaces, backend systems, APIs, databases, and intelligent features.",
    icon: Code2,
  },
  {
    label: "Learning",
    title: "System design and AI engineering",
    description:
      "Going deeper into scalable backend architecture, AI workflows, application design, and production-focused engineering practices.",
    icon: BrainCircuit,
  },
  {
    label: "Open To",
    title: "Software engineering opportunities",
    description:
      "Interested in roles, collaborations, and projects where I can contribute across frontend, backend, full-stack, and AI-focused work.",
    icon: Layers3,
  },
];

export default function NowSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1020] py-24 text-white md:py-36">
      <div className="pointer-events-none absolute right-[5%] top-[15%] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="container-custom relative z-10">
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.18em] text-blue-400">
              07 / Now
            </p>

            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
              WHAT I&apos;M
              <br />
              FOCUSED ON NOW.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/50">
            A quick look at what I&apos;m building, learning, and looking for
            next.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {nowItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#11182B] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 md:p-8"
              >
                <div className="mb-10 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400/10">
                    <Icon
                      size={19}
                      className="text-white/55 transition-colors duration-300 group-hover:text-blue-400"
                    />
                  </div>

                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                    0{index + 1}
                  </span>
                </div>

                <p className="mono text-xs uppercase tracking-[0.18em] text-blue-400">
                  {item.label}
                </p>

                <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.035em] text-white md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-white/25 transition-colors duration-300 group-hover:text-blue-400">
                  <span className="mono text-[10px] uppercase tracking-[0.16em]">
                    Current focus
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}