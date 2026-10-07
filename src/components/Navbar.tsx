"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import { useLenis } from "@/components/SmoothScroll";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#work", id: "work" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const lenis = useLenis();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigatingRef = useRef(false);
  const navigationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navigatingRef.current) return;

      const currentPosition = window.scrollY + 120;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (currentPosition >= sectionTop) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (navigationTimerRef.current) {
        clearTimeout(navigationTimerRef.current);
      }
    };
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);
    setMenuOpen(false);

    navigatingRef.current = true;

    if (navigationTimerRef.current) {
      clearTimeout(navigationTimerRef.current);
    }

    if (lenis) {
      lenis.scrollTo(section, {
        offset: -80,
        duration: 1.05,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        80;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }

    navigationTimerRef.current = setTimeout(() => {
      navigatingRef.current = false;
    }, 1150);

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="fixed left-0 top-0 z-[100] w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-[90%] max-w-[1500px] items-center justify-between">
        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) =>
                  handleNavigation(event, item.id)
                }
                aria-current={active ? "page" : undefined}
                className={`relative rounded-sm py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B1020] ${
                  active
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {item.name}

                {active && (
                  <motion.span
                    layoutId="navbar-active-line"
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-blue-400"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                      mass: 0.55,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white transition-all duration-300 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Profile image */}
        <a
          href="#home"
          onClick={(event) =>
            handleNavigation(event, "home")
          }
          aria-label="Go to home section"
          className="relative h-12 w-12 overflow-hidden rounded-full border border-white/30 transition-all duration-300 hover:border-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
        >
          <Image
            src="/portfolio.png"
            alt="Subhan Ali"
            fill
            priority
            className="object-cover object-top"
            sizes="48px"
          />
        </a>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/MSubhanAli4210"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full text-xl text-white/60 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-subhan-ali-421747369/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-full text-xl text-white/60 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#0B1020]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[450px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex w-[90%] flex-col py-3"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => {
            const active = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) =>
                  handleNavigation(event, item.id)
                }
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between border-b border-white/10 py-4 text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:text-blue-400 ${
                  active
                    ? "text-blue-400"
                    : "text-white/65 hover:text-white"
                }`}
              >
                <span>{item.name}</span>

                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${
                    active
                      ? "scale-100 bg-blue-400"
                      : "scale-0 bg-transparent"
                  }`}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}