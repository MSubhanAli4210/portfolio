"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Network,
  Server,
} from "lucide-react";

const desktopNodes = [
  {
    id: "frontend",
    label: "Frontend",
    sub: "React / Next.js",
    description:
      "Interfaces, component architecture, responsive layouts, and polished user experiences.",
    x: 14,
    y: 42,
    icon: Code2,
  },
  {
    id: "api",
    label: "API Layer",
    sub: "REST / Integrations",
    description:
      "Application communication, external services, integrations, and structured data flow.",
    x: 39,
    y: 26,
    icon: Network,
  },
  {
    id: "backend",
    label: "Backend",
    sub: "Node.js / Python",
    description:
      "Server-side logic, authentication, business rules, and application services.",
    x: 62,
    y: 44,
    icon: Server,
  },
  {
    id: "database",
    label: "Database",
    sub: "PostgreSQL / MongoDB",
    description:
      "Structured data storage, application state, queries, and persistent system data.",
    x: 42,
    y: 72,
    icon: Database,
  },
  {
    id: "ai",
    label: "AI Layer",
    sub: "Models / Automation",
    description:
      "AI features, model integrations, intelligent workflows, and practical automation.",
    x: 78,
    y: 19,
    icon: BrainCircuit,
  },
  {
    id: "cloud",
    label: "Cloud",
    sub: "Docker / Deployments",
    description:
      "Containerization, deployment workflows, hosting, and production infrastructure.",
    x: 82,
    y: 73,
    icon: Cloud,
  },
];

const mobileNodes = [
  {
    id: "frontend",
    label: "Frontend",
    shortSub: "React / Next.js",
    x: 18,
    y: 18,
  },
  {
    id: "api",
    label: "API Layer",
    shortSub: "REST / APIs",
    x: 50,
    y: 30,
  },
  {
    id: "backend",
    label: "Backend",
    shortSub: "Node / Python",
    x: 76,
    y: 47,
  },
  {
    id: "database",
    label: "Database",
    shortSub: "SQL / MongoDB",
    x: 34,
    y: 65,
  },
  {
    id: "ai",
    label: "AI Layer",
    shortSub: "Models / AI",
    x: 77,
    y: 17,
  },
  {
    id: "cloud",
    label: "Cloud",
    shortSub: "Docker / Deploy",
    x: 74,
    y: 78,
  },
];

const connections = [
  ["frontend", "api"],
  ["api", "backend"],
  ["backend", "database"],
  ["backend", "ai"],
  ["database", "cloud"],
  ["backend", "cloud"],
];

export default function SystemSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const [activeNode, setActiveNode] = useState("backend");

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;

    if (!section || !glow) return;

    const handleMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      glow.style.transform = `translate3d(${x - 180}px, ${
        y - 180
      }px, 0)`;
    };

    const handleEnter = () => {
      glow.style.opacity = "1";
    };

    const handleLeave = () => {
      glow.style.opacity = "0.25";
    };

    section.addEventListener("pointermove", handleMove);
    section.addEventListener("pointerenter", handleEnter);
    section.addEventListener("pointerleave", handleLeave);

    return () => {
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerenter", handleEnter);
      section.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  const getDesktopNode = (id: string) =>
    desktopNodes.find((node) => node.id === id);

  const getMobileNode = (id: string) =>
    mobileNodes.find((node) => node.id === id);

  const selectedNode =
    desktopNodes.find((node) => node.id === activeNode) ??
    desktopNodes[0];

  const SelectedIcon = selectedNode.icon;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1020] py-24 text-white md:py-32 lg:py-36"
    >
      {/* Desktop cursor glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden h-[360px] w-[360px] rounded-full bg-blue-500/10 opacity-25 blur-[120px] will-change-transform lg:block"
      />

      {/* Mobile ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[52%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] lg:hidden"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.18em] text-blue-400">
              05 / System
            </p>

            <h2 className="max-w-4xl text-[13vw] font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.5vw]">
              FROM INTERFACE
              <br />
              TO INFRASTRUCTURE.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
            A visual look at how the different layers of a modern application
            connect and work together.
          </p>
        </div>

        {/* Mobile / tablet */}
        <div className="lg:hidden">
          <p className="mb-7 max-w-xl text-base leading-7 text-white/55">
            I work across the full stack, connecting interfaces, APIs,
            services, data, AI, and infrastructure into one working system.
          </p>

          {/* Selected layer */}
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-7 rounded-2xl border border-white/10 bg-[#11182B] p-5"
            aria-live="polite"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
                <SelectedIcon
                  size={19}
                  className="text-blue-400"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="mono mb-1 text-[10px] uppercase tracking-[0.16em] text-blue-400">
                  Selected Layer
                </p>

                <h3 className="text-lg font-medium text-white">
                  {selectedNode.label}
                </h3>

                <p className="mt-1 text-sm text-white/45">
                  {selectedNode.sub}
                </p>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {selectedNode.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile connected network */}
          <div className="relative min-h-[540px] overflow-hidden rounded-[24px] border border-white/10 bg-[#11182B]/60 sm:min-h-[600px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,140,255,0.1),transparent_68%)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            {/* Mobile connection lines */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {connections.map(([fromId, toId]) => {
                const from = getMobileNode(fromId);
                const to = getMobileNode(toId);

                if (!from || !to) return null;

                const active =
                  activeNode === fromId || activeNode === toId;

                return (
                  <line
                    key={`mobile-${fromId}-${toId}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={
                      active
                        ? "rgba(79,140,255,0.9)"
                        : "rgba(255,255,255,0.14)"
                    }
                    strokeWidth={active ? "0.7" : "0.4"}
                    strokeDasharray={active ? "2 1.4" : "0"}
                  />
                );
              })}
            </svg>

            {/* Mobile pulses */}
            {connections.map(([fromId, toId], index) => {
              const from = getMobileNode(fromId);
              const to = getMobileNode(toId);

              if (!from || !to) return null;

              const midX = (from.x + to.x) / 2;
              const midY = (from.y + to.y) / 2;

              return (
                <motion.div
                  key={`mobile-pulse-${fromId}-${toId}`}
                  aria-hidden="true"
                  className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(79,140,255,0.9)]"
                  style={{
                    left: `${midX}%`,
                    top: `${midY}%`,
                  }}
                  animate={{
                    opacity: [0.15, 1, 0.15],
                    scale: [0.7, 1.35, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              );
            })}

            {/* Mobile nodes */}
            {mobileNodes.map((node, index) => {
              const source = getDesktopNode(node.id);
              if (!source) return null;

              const Icon = source.icon;
              const active = activeNode === node.id;

              return (
                <motion.button
                  key={node.id}
                  type="button"
                  aria-pressed={active}
                  aria-label={`${source.label}: ${source.sub}`}
                  onClick={() => setActiveNode(node.id)}
                  onFocus={() => setActiveNode(node.id)}
                  className={`absolute flex w-[112px] -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border px-2.5 py-2.5 text-left backdrop-blur-md transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 sm:w-[130px] sm:px-3 sm:py-3 ${
                    active
                      ? "border-blue-400/60 bg-blue-400/10"
                      : "border-white/10 bg-[#0B1020]/85"
                  }`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                  }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                      active
                        ? "border-blue-400/30 bg-blue-400/10"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <Icon
                      size={14}
                      aria-hidden="true"
                      className={
                        active ? "text-blue-400" : "text-white/50"
                      }
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-medium text-white sm:text-xs">
                      {node.label}
                    </p>

                    <p className="mt-0.5 truncate text-[8px] text-white/35 sm:text-[9px]">
                      {node.shortSub}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <p className="mono mt-5 text-[10px] uppercase tracking-[0.16em] text-white/25">
            Tap a node to explore the system
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden gap-12 lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="max-w-md text-lg leading-8 text-white/60">
              I work across the full stack, connecting interfaces, APIs,
              services, data, AI, and infrastructure into one working system.
            </p>

            <div className="mt-10">
              <p className="mono mb-3 text-xs uppercase tracking-[0.18em] text-white/30">
                Selected Layer
              </p>

              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-white/10 bg-[#11182B] p-6"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
                    <SelectedIcon
                      size={18}
                      className="text-blue-400"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      {selectedNode.label}
                    </p>

                    <p className="mt-1 text-sm text-white/40">
                      {selectedNode.sub}
                    </p>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
                      {selectedNode.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <p className="mono mt-5 text-[10px] uppercase tracking-[0.18em] text-white/25">
              Move your cursor · Click or focus a node
            </p>
          </div>

          {/* Desktop network */}
          <div className="relative min-h-[620px] overflow-hidden rounded-[28px] border border-white/10 bg-[#11182B]/60">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,140,255,0.08),transparent_65%)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {connections.map(([fromId, toId]) => {
                const from = getDesktopNode(fromId);
                const to = getDesktopNode(toId);

                if (!from || !to) return null;

                const active =
                  activeNode === fromId || activeNode === toId;

                return (
                  <line
                    key={`${fromId}-${toId}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={
                      active
                        ? "rgba(79,140,255,0.75)"
                        : "rgba(255,255,255,0.13)"
                    }
                    strokeWidth={active ? "0.5" : "0.3"}
                    strokeDasharray={active ? "2 1.5" : "0"}
                  />
                );
              })}
            </svg>

            {connections.map(([fromId, toId], index) => {
              const from = getDesktopNode(fromId);
              const to = getDesktopNode(toId);

              if (!from || !to) return null;

              const midX = (from.x + to.x) / 2;
              const midY = (from.y + to.y) / 2;

              return (
                <motion.div
                  key={`pulse-${fromId}-${toId}`}
                  aria-hidden="true"
                  className="pointer-events-none absolute h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(79,140,255,0.8)]"
                  style={{
                    left: `${midX}%`,
                    top: `${midY}%`,
                  }}
                  animate={{
                    opacity: [0.15, 1, 0.15],
                    scale: [0.7, 1.4, 0.7],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: index * 0.35,
                  }}
                />
              );
            })}

            {desktopNodes.map((node, index) => {
              const Icon = node.icon;
              const active = activeNode === node.id;

              return (
                <motion.button
                  key={node.id}
                  type="button"
                  aria-pressed={active}
                  aria-label={`${node.label}: ${node.sub}`}
                  onClick={() => setActiveNode(node.id)}
                  onFocus={() => setActiveNode(node.id)}
                  className={`absolute flex min-w-[130px] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-2xl border px-4 py-3 text-left backdrop-blur-md transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#11182B] ${
                    active
                      ? "border-blue-400/60 bg-blue-400/10"
                      : "border-white/10 bg-[#0B1020]/80 hover:border-white/25"
                  }`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                      active
                        ? "border-blue-400/30 bg-blue-400/10"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <Icon
                      size={17}
                      aria-hidden="true"
                      className={
                        active ? "text-blue-400" : "text-white/50"
                      }
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {node.label}
                    </p>

                    <p className="mt-1 text-[10px] text-white/35">
                      {node.sub}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}