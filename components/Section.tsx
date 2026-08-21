"use client";

import type { CSSProperties, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SpecRail, { type RailItem } from "./SpecRail";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  gradient: string;
  noBorder?: boolean;
  rail: RailItem[];
  contentClassName?: string;
  children: ReactNode;
};

export default function Section({ id, gradient, noBorder, rail, contentClassName, children }: SectionProps) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();
  const sectionStyle: CSSProperties = { background: gradient };

  return (
    <section
      id={id}
      className={[styles.section, noBorder ? styles.noBorder : ""].filter(Boolean).join(" ")}
      style={sectionStyle}
    >
      <div
        ref={ref}
        data-revealed={revealed}
        className={[styles.content, revealed ? styles.revealed : "", contentClassName || ""]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
      <SpecRail items={rail} />
    </section>
  );
}
