import Section from "./Section";
import ExperienceRow from "./ExperienceRow";
import { experience, education } from "@/lib/data";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      gradient="var(--grad-experience)"
      rail={[
        { text: "TIMELINE:", muted: true },
        { text: "2022—2026", strong: true },
        { text: "ROLES:", muted: true },
        { text: "03", strong: true },
      ]}
    >
      <div className={styles.eyebrow}>
        <span>✦</span>
        <span>EXPERIENCE &amp; EDUCATION</span>
      </div>

      <div className={styles.subLabel}>WORK</div>
      {experience.map((entry, i) => (
        <ExperienceRow key={entry.company} entry={entry} index={i} />
      ))}
      <div className={styles.closingBorder} />

      <div className={styles.subLabelSpaced}>EDUCATION</div>
      <div className={styles.eduRow} style={{ transitionDelay: `${experience.length * 60}ms` }}>
        <div className={styles.eduDates}>{education.dates}</div>
        <div>
          <div className={styles.eduRole}>{education.role}</div>
          <div className={styles.eduInstitution}>{education.institution}</div>
        </div>
      </div>
      <div className={styles.closingBorder} />
    </Section>
  );
}
