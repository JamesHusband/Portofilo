"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.number}>01.</span>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.line} />
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Hello! I'm a Full Stack Developer passionate about crafting clean,
            scalable web applications.
          </p>

          <p>
            Here to leverage the latest in web tech to solve real-world problems
            and create something truly awesome. Let us build something amazing
            together!
          </p>

          <p>Here are a few technologies I've been working with recently:</p>
          <ul className={styles.skills}>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>PHP</li>
            <li>Python</li>
            <li>WordPress</li>
          </ul>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/me.webp"
              alt="James Charles"
              width={300}
              height={300}
              className={styles.image}
            />
            <div className={styles.imageBorder} />
          </div>
        </div>
      </div>
    </section>
  );
}
