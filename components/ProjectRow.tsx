import type { Project } from "@/lib/data";
import styles from "./ProjectRow.module.css";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.row}>
      <div className={styles.name}>{project.name}</div>
      <div className={styles.meta}>
        <div className={styles.tagsCol}>
          <div className={styles.tags}>{project.tags}</div>
          <div className={styles.year}>{project.year}</div>
        </div>
        <span className={styles.arrow}>VIEW →</span>
      </div>
    </a>
  );
}
