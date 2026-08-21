import Section from "./Section";
import Button from "./Button";
import { heroChips, heroLog, bio } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section
      gradient="var(--grad-hero)"
      contentClassName={styles.content}
      rail={[
        { text: "ROLE:" },
        { text: "SOFTWARE ENGINEER", strong: true },
        { text: "LOC:", muted: true },
        { text: "INDIA / REMOTE", strong: true },
      ]}
    >
      <div className={styles.topRow}>
        <div className={styles.eyebrow}>
          <span>✦</span>
          <span>SOFTWARE ENGINEER // ML &amp; DATA</span>
        </div>
        <div className={styles.buttonRow}>
          <Button variant="filled" href="#projects">
            WORK
          </Button>
          <Button variant="outline" href="#contact">
            CONTACT
          </Button>
          <Button variant="outline" href="resume_mesa.pdf" download>
            RESUME ↓
          </Button>
        </div>
      </div>

      <h1 className={styles.name}>
        DAIVIK S
        <br />
        GOKHALE.
      </h1>

      <div className={styles.chips}>
        {heroChips.map((chip, i) => (
          <div key={chip} className={styles.chip} style={{ transitionDelay: `${i * 50}ms` }}>
            {chip}
          </div>
        ))}
      </div>

      <p className={styles.bio}>{bio}</p>

      <div className={styles.log}>
        {heroLog.map((line, i) => (
          <div className={styles.logLine} key={line} style={{ transitionDelay: `${150 + i * 50}ms` }}>
            {line}
          </div>
        ))}
      </div>
    </Section>
  );
}
