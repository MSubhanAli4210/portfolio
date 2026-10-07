"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

export default function GlobeSection() {
  const globeRef = useRef<any>(null);
  const globeContainerRef = useRef<HTMLDivElement | null>(null);

  const [globeSize, setGlobeSize] = useState(320);

  // Responsive globe sizing
  useEffect(() => {
    const container = globeContainerRef.current;

    if (!container) return;

    const updateSize = () => {
      const availableWidth = container.clientWidth;

      // Phone
      if (window.innerWidth < 640) {
        setGlobeSize(Math.min(availableWidth, 310));
        return;
      }

      // Tablet
      if (window.innerWidth < 1024) {
        setGlobeSize(Math.min(availableWidth, 440));
        return;
      }

      // Desktop
      setGlobeSize(Math.min(availableWidth, 560));
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);

    observer.observe(container);

    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Globe controls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!globeRef.current) return;

      const controls = globeRef.current.controls();

      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.45;

      controls.enableZoom = false;

      controls.enablePan = false;
    }, 500);

    return () => clearTimeout(timer);
  }, [globeSize]);

  return (
    <section className="relative overflow-hidden bg-[#11182B] py-20 text-white sm:py-24 md:py-32 lg:py-40">
      <div className="container-custom">
        {/* HEADER */}
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/10 pb-7 lg:mb-16 lg:flex-row lg:items-end lg:gap-8">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.18em] text-blue-400">
              06 / Global
            </p>

            <h2 className="max-w-4xl text-4xl font-medium leading-[0.96] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
              BUILDING FOR A
              <br />
              CONNECTED WORLD.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
            Software should work beyond one device, one user, or one location.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
          {/* LEFT SIDE */}
          <div>
            <p className="max-w-lg text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              I enjoy building systems that connect interfaces, APIs, data,
              infrastructure, and intelligent services into reliable digital
              products.
            </p>

            <div className="mt-8 border-t border-white/10 sm:mt-10">
              <div className="border-b border-white/10 py-4 sm:py-5">
                <p className="mono text-[10px] uppercase tracking-[0.16em] text-white/30 sm:text-xs">
                  Location
                </p>

                <p className="mt-2 text-lg text-white sm:text-xl">
                  Open to remote opportunities
                </p>
              </div>

              <div className="border-b border-white/10 py-4 sm:py-5">
                <p className="mono text-[10px] uppercase tracking-[0.16em] text-white/30 sm:text-xs">
                  Focus
                </p>

                <p className="mt-2 text-lg text-white sm:text-xl">
                  Full Stack / AI Engineering
                </p>
              </div>

              <div className="border-b border-white/10 py-4 sm:py-5">
                <p className="mono text-[10px] uppercase tracking-[0.16em] text-white/30 sm:text-xs">
                  Approach
                </p>

                <p className="mt-2 text-lg text-white sm:text-xl">
                  Build · Integrate · Scale
                </p>
              </div>
            </div>

            <p className="mono mt-5 text-[9px] uppercase tracking-[0.18em] text-white/25 sm:text-[10px]">
              Drag the globe to rotate
            </p>
          </div>

          {/* GLOBE SIDE */}
          <div
            ref={globeContainerRef}
            className="relative flex w-full items-center justify-center py-4 sm:py-8 lg:min-h-[580px]"
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[260px]
                w-[260px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-500/10
                blur-[80px]

                sm:h-[360px]
                sm:w-[360px]
                sm:blur-[100px]

                lg:h-[470px]
                lg:w-[470px]
              "
            />

            {/* Globe */}
            <div className="relative z-10 flex items-center justify-center">
              <Globe
                ref={globeRef}
                width={globeSize}
                height={globeSize}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                showAtmosphere={true}
                atmosphereColor="#4F8CFF"
                atmosphereAltitude={0.16}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}