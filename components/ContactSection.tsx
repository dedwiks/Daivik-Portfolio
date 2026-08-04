import Section from "./Section";
import Button from "./Button";
import { contactLinks } from "@/lib/data";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      gradient="var(--grad-contact)"
      noBorder
      contentClassName={styles.content}
      rail={[
        { text: "CONTACT:", muted: true },
        { text: "DAIVIKSG9@GMAIL.COM", strong: true },
        { text: "SOCIAL:", muted: true },
        { text: "@DAIVIKSG", strong: true },
      ]}
    >
      <div className={styles.eyebrow}>
        <span>✦</span>
        <span>CONTACT</span>
      </div>

      <h2 className={styles.heading}>
        LET&apos;S BUILD
        <br />
        SOMETHING.
      </h2>

      <div className={styles.buttonRow}>
        {contactLinks.map((link) => (
          <Button
            key={link.label}
            variant={link.variant}
            size="large"
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </Button>
        ))}
      </div>

      <div className={styles.copyright}>© 2026 DAIVIK S GOKHALE</div>
    </Section>
  );
}
