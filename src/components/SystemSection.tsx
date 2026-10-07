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

const nodes = [
  {
    id: "frontend",
    label: "Frontend",
    sub: "React / Next.js",
    x: 14,
    y: 42,
    icon: Code2,
  },
  {
    id: "api",
    label: "API Layer",
    sub: "REST / Integrations",
    x: 39,
    y: 26,
    icon: Network,
  },
  {
    id: "backend",
    label: "Backend",
    sub: "Node.js / Python",
    x: 62,
    y: 44,
    icon: Server,
  },
  {
    id: "database",
    label: "Database",
    sub: "PostgreSQL / MongoDB",
    x: 42,
    y: 72,
    icon: Database,
  },
  {
    id: "ai",
    label: "AI Layer",
    sub: "Models / Automation",
    x: 78,
    y: 19,
    icon: BrainCircuit,
  },
  {
    id: "cloud",
    label: "Cloud",
    sub: "Docker / Deployments",
    x: 82,
    y: 73,
    icon: Cloud,
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

  const getNode = (id: string) =>
    nodes.find((node) => node.id === id);

  const selectedNode =
    nodes.find((node) => node.id === activeNode) ?? nodes[0];

  const SelectedIcon = selectedNode.icon;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1020] py-24 text-white md:py-36"
    >
      {/* Cursor glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden h-[360px] w-[360px] rounded-full bg-blue-500/10 opacity-25 blur-[120px] will-change-transform md:block"
      />

      {/* Mobile ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] md:hidden"
      />

      <div className="container-custom relative z-10">
        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.18em] text-blue-400">
              05 / System
            </p>

            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
              FROM INTERFACE
              <br />
              TO INFRASTRUCTURE.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/50">
            A visual look at how the different layers of a modern application
            connect and work together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          {/* Left content */}
          <div>
            <p className="max-w-md text-lg leading-8 text-white/60">
              I work across the full stack, connecting interfaces, APIs,
              services, data, AI, and infrastructure into one working system.
            </p>

            <div className="mt-10">
              <p className="mono mb-3 text-xs uppercase tracking-[0.18em] text-white/30">
                Selected Layer
              </p>

              <div
                className="rounded-2xl border border-white/10 bg-[#11182B] p-6"
                aria-live="polite"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
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
                  </div>
                </div>
              </div>
            </div>

            <p className="mono mt-5 text-[10px] uppercase tracking-[0.18em] text-white/25">
              Move your cursor · Click or focus a node
            </p>
          </div>

          {/* Interactive system */}
          <div className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-white/10 bg-[#11182B]/60 md:min-h-[620px]">
            {/* Background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,140,255,0.08),transparent_65%)]"
            />

            {/* Grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* Connections */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {connections.map(([fromId, toId]) => {
                const from = getNode(fromId);
                const to = getNode(toId);

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

            {/* Pulses */}
            {connections.map(([fromId, toId], index) => {
              const from = getNode(fromId);
              const to = getNode(toId);

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

            {/* Nodes */}
            {nodes.map((node, index) => {
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
                  className={`
                    absolute
                    flex
                    min-w-[130px]
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    px-4
                    py-3
                    text-left
                    backdrop-blur-md
                    transition-colors
                    duration-300
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400/70
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#11182B]
                    ${
                      active
                        ? "border-blue-400/60 bg-blue-400/10"
                        : "border-white/10 bg-[#0B1020]/80 hover:border-white/25"
                    }
                  `}
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