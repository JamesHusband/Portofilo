import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import EmailLink from "./components/EmailLink";
import Contact from "./components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SocialLinks />
      <EmailLink />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  );
}
