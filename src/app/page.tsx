"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Hero from "./components/Hero";
import About from "./pages/about/About";
import Work from "./pages/work/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/contact/Contact";
import SocialLinks from "./components/SocialLinks";
import EmailLink from "./components/EmailLink";
import styles from "./page.module.css";

export default function Home() {
  const pathname = usePathname();
  const isInitialScrollRef = useRef<boolean>(true);

  useEffect(() => {
    if (!isInitialScrollRef.current) return;
    const section = pathname === "/" ? "home" : pathname.slice(1);
    requestAnimationFrame(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      isInitialScrollRef.current = false;
    });
  }, [pathname]);

  return (
    <main className={styles.main}>
      <SocialLinks />
      <EmailLink />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Work />
      </section>
      <section id="work">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
