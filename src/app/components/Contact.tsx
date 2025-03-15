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
          My inbox is always open. Whether you have a question or just want to
          say hi, I&apos;ll try my best to get back to you!
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
        <div className={styles.stats}>
          <span>⭐ 7,777</span>
          <span>🍴 3,914</span>
        </div>
      </footer>
    </section>
  );
}
