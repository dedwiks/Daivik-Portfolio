import Section from "./Section";
import ProjectRow from "./ProjectRow";
import { projects } from "@/lib/data";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      gradient="var(--grad-projects)"
      rail={[
        { text: "CATALOGUE:", muted: true },
        { text: `${String(projects.length).padStart(2, "0")} SELECTED`, strong: true },
        { text: "YEAR:", muted: true },
        { text: "2024—2026", strong: true },
      ]}
    >
      <div className={styles.eyebrow}>
        <span>✦</span>
        <span>SELECTED WORKS</span>
      </div>
      {projects.map((project, i) => (
        <ProjectRow key={project.name} project={project} index={i} />
      ))}
      <div className={styles.closingBorder} />
    </Section>
  );
}
