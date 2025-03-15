"use client";

import { useState } from "react";
import styles from "./Work.module.css";

type Job = {
  company: string;
  title: string;
  date: string;
  points: string[];
};

const jobs: Job[] = [
  {
    company: "Little Star Media",
    title: "Senior Developer",
    date: "May 2014 - March 2025",
    points: [
      "Deliver high-quality, robust production code for a diverse array of projects for fast paced affiliate marketing company",
    ],
  },
  {
    company: "JH Web Design",
    title: "Freelance Web Designer",
    date: "Jan 2012 - March 2024",
    points: [
      "Deliver high-quality, robust production code for a diverse array of projects for fast paced affiliate marketing company",
    ],
  },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.number}>02.</span>
        <h2 className={styles.title}>Where I&apos;ve Worked</h2>
        <div className={styles.line} />
      </div>

      <div className={styles.content}>
        <div className={styles.tabList} role="tablist" aria-label="Job tabs">
          {jobs.map((job, index) => (
            <button
              key={job.company}
              className={`${styles.tabButton} ${
                activeTab === index ? styles.activeTab : ""
              }`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`panel-${index}`}
              id={`tab-${index}`}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </button>
          ))}
          <div
            className={styles.highlight}
            style={{ transform: `translateY(${activeTab * 42}px)` }}
          />
        </div>

        <div className={styles.tabPanels}>
          {jobs.map((job, index) => (
            <div
              key={job.company}
              role="tabpanel"
              id={`panel-${index}`}
              aria-labelledby={`tab-${index}`}
              hidden={activeTab !== index}
              className={styles.tabPanel}
            >
              <h3 className={styles.jobTitle}>
                {job.title.split(" @ ")[0]}
                {job.title.includes(" @ ") && (
                  <>
                    {" @ "}
                    <a
                      href={job.url}
                      className={styles.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.title.split(" @ ")[1]}
                    </a>
                  </>
                )}
              </h3>
              <p className={styles.jobDate}>{job.date}</p>
              <ul className={styles.jobDuties}>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
