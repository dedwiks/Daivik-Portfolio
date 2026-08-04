import type { ExperienceEntry } from "@/lib/data";
import styles from "./ExperienceRow.module.css";

export default function ExperienceRow({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className={styles.row}>
      <div className={styles.dates}>{entry.dates}</div>
      <div>
        <div className={styles.role}>{entry.role}</div>
        <div className={styles.company}>{entry.company}</div>
        <div className={styles.desc}>{entry.desc}</div>
      </div>
    </div>
  );
}
