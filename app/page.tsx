import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <StickyNav />
      <div className={styles.page}>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
}
