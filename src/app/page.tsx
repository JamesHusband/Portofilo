import Hero from "./pages/Hero";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import SocialLinks from "./components/SocialLinks";
import EmailLink from "./components/EmailLink";
import Contact from "./pages/Contact";
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
