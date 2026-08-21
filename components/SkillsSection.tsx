import Section from "./Section";
import { skillGroups } from "@/lib/data";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      gradient="var(--grad-skills)"
      rail={[
        { text: "STACK:", muted: true },
        { text: "FULL / ML", strong: true },
        { text: "GROUPS:", muted: true },
        { text: "06", strong: true },
      ]}
    >
      <div className={styles.eyebrow}>
        <span>✦</span>
        <span>CORE STACK</span>
      </div>
      <div className={styles.grid}>
        {skillGroups.map((group, i) => (
          <div className={styles.group} key={group.title} style={{ transitionDelay: `${i * 40}ms` }}>
            <div className={styles.groupTitle}>{group.title}</div>
            <div className={styles.groupItems}>{group.items}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
