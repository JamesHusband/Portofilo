"use client";

import Link from "next/link";
import styles from "./EmailLink.module.css";

export default function EmailLink() {
  return (
    <aside className={styles.emailContainer}>
      <Link
        href="mailto:jchusband@proton.me"
        className={styles.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        jchusband@proton.me
      </Link>
      <div className={styles.divider} />
    </aside>
  );
}
