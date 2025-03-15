"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.intro}>>> Hello World, my name is</p>
        <h1 className={styles.title}>{"<James Charles />"}</h1>
        <h2 className={styles.subtitle}>// I write code & develop apps.</h2>
        <p className={styles.description}>
          Drawn to shiny code and complex systems. I love building tools and
          simplifying the messy into the manageable. Always learning, always
          tinkering.
        </p>
        <Link href="#work" className={styles.ctaButton}>
          Check out my work!
        </Link>
      </div>
    </section>
  );
}
