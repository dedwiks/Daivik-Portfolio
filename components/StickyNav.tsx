"use client";

import { useStickyNav } from "@/hooks/useStickyNav";
import { navItems } from "@/lib/data";
import styles from "./StickyNav.module.css";

export default function StickyNav() {
  const { navVisible, activeSection } = useStickyNav();

  return (
    <div className={[styles.nav, navVisible ? styles.visible : ""].filter(Boolean).join(" ")}>
      <span className={styles.logo}>DAIVIK S GOKHALE</span>
      <div className={styles.links}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={[styles.link, activeSection === item.id ? styles.linkActive : ""].filter(Boolean).join(" ")}
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          className={styles.paletteTrigger}
          onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
          aria-label="Open command palette"
        >
          ⌘K
        </button>
      </div>
    </div>
  );
}
