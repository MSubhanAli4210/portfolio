import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import MoreWork from "@/components/MoreWork";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import SystemSection from "@/components/SystemSection";
import GlobeSection from "@/components/GlobeSection";
import NowSection from "@/components/NowSection";
import Contact from "@/components/Contact";

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