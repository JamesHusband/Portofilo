"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    github?: string;
    external?: string;
  };
};

const projects: Project[] = [
  {
    title: "Fantakuchen",
    description: "A website for showcasing my open source games",
    image: "/fantakuchen.webp",
    tech: ["Javascript"],
    links: {
      github: "https://github.com/fantakuchen/fantakuchen",
      external: "#",
    },
  },
  {
    title: "Houston",
    description:
      "A CRM microservice application for managing affiliate marketing campaigns.",
    image: "/houston.webp",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    links: {
      github: "#",
      external: "#",
    },
  },
];

export default function Projects() {
  return (
    <section id="work" className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.number}>03.</span>
        <h2 className={styles.title}>Some Things I&apos;ve Built</h2>
        <div className={styles.line} />
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`${styles.project} ${index === 1 ? styles.reverse : ""}`}
          >
            <div className={styles.projectContent}>
              <p className={styles.featured}>Featured Project</p>
              <h3 className={styles.projectTitle}>
                <a
                  href={project.links.external}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <div className={styles.projectDescription}>
                <p>{project.description}</p>
              </div>
              <ul className={styles.techList}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className={styles.projectLinks}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <svg
                      className={styles.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                {project.links.external && (
                  <a
                    href={project.links.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External Link"
                  >
                    <svg
                      className={styles.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <div className={styles.projectImage}>
              <a
                href={project.links.external}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={580}
                  height={360}
                  className={styles.img}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
