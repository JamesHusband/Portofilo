"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          James Charles
        </Link>
        <div className={styles.links}>
          <Link href="#about" className={styles.link}>
            <span className={styles.number}>01.</span>About
          </Link>
          <Link href="#experience" className={styles.link}>
            <span className={styles.number}>02.</span>Experience
          </Link>
          <Link href="#work" className={styles.link}>
            <span className={styles.number}>03.</span>Work
          </Link>
          <Link href="#contact" className={styles.link}>
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
