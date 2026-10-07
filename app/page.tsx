import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import MoreWork from "@/components/MoreWork";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

const SystemSection = dynamic(
  () => import("@/components/SystemSection")
);

const GlobeSection = dynamic(
  () => import("@/components/GlobeSection")
);

const NowSection = dynamic(
  () => import("@/components/NowSection")
);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <MoreWork />
      <Experience />
      <TechStack />

      <SystemSection />
      <GlobeSection />
      <NowSection />

      <Contact />
    </main>
  );
}