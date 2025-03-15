"use client";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.content}>
        <span className={styles.number}>04.</span>
        <h2 className={styles.title}>What&apos;s Next?</h2>
        <h3 className={styles.bigTitle}>Get In Touch</h3>
        <p className={styles.description}>
          I&apos;m currently looking for new opportunities. Interest in hybrid /
          remote positions
        </p>
        <a
          href="mailto:hello@jameshdev.com"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
      </div>
      <footer className={styles.footer}>
        <div>Designed & Built by James Charles</div>
      </footer>
    </section>
  );
}
