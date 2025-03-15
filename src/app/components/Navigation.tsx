"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const isScrollingRef = useRef(false);
  const isHistoryNavRef = useRef(false);

  // Update active section based on pathname and handle browser navigation
  useEffect(() => {
    const section = pathname === "/" ? "home" : pathname.slice(1);
    setActiveSection(section);

    // If this is a history navigation (back/forward), scroll to the section
    if (isHistoryNavRef.current) {
      const element = document.getElementById(section);
      if (element) {
        isScrollingRef.current = true;
        element.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1200);
      }
      isHistoryNavRef.current = false;
    }
  }, [pathname]);

  // Listen for popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      isHistoryNavRef.current = true;
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle scroll with throttle to avoid excessive updates
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Don't handle scroll events while programmatically scrolling
      // or during history navigation
      if (isScrollingRef.current || isHistoryNavRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ["home", "about", "experience", "work", "contact"];

          // Find the section that is most visible in the viewport
          let maxVisibleSection = null;
          let maxVisibleArea = 0;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              const visibleHeight =
                Math.min(rect.bottom, window.innerHeight) -
                Math.max(rect.top, 0);

              if (visibleHeight > maxVisibleArea) {
                maxVisibleArea = visibleHeight;
                maxVisibleSection = section;
              }
            }
          }

          // Only update if we found a section and it's different from current
          if (maxVisibleSection && maxVisibleSection !== activeSection) {
            setActiveSection(maxVisibleSection);
            const newPath =
              maxVisibleSection === "home" ? "/" : `/${maxVisibleSection}`;
            if (pathname !== newPath) {
              router.push(newPath, { scroll: false });
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router, pathname, activeSection]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      // Set scrolling flag before starting scroll
      isScrollingRef.current = true;

      // Update state and URL immediately
      setActiveSection(section);
      const newPath = section === "home" ? "/" : `/${section}`;
      router.push(newPath, { scroll: false });

      // Scroll to the section
      element.scrollIntoView({ behavior: "smooth" });

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1200);
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          href="/"
          className={styles.logo}
          onClick={(e) => handleClick(e, "home")}
        >
          James Charles
        </Link>
        <div className={styles.links}>
          <Link
            href="/about"
            className={`${styles.link} ${
              activeSection === "about" ? styles.active : ""
            }`}
            onClick={(e) => handleClick(e, "about")}
          >
            <span className={styles.number}>01.</span>About
          </Link>
          <Link
            href="/experience"
            className={`${styles.link} ${
              activeSection === "experience" ? styles.active : ""
            }`}
            onClick={(e) => handleClick(e, "experience")}
          >
            <span className={styles.number}>02.</span>Experience
          </Link>
          <Link
            href="/work"
            className={`${styles.link} ${
              activeSection === "work" ? styles.active : ""
            }`}
            onClick={(e) => handleClick(e, "work")}
          >
            <span className={styles.number}>03.</span>Work
          </Link>
          <Link
            href="/contact"
            className={`${styles.link} ${
              activeSection === "contact" ? styles.active : ""
            }`}
            onClick={(e) => handleClick(e, "contact")}
          >
            <span className={styles.number}>04.</span>Contact
          </Link>
          <Link
            href="/resume.pdf"
            className={styles.resumeButton}
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
