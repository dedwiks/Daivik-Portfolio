"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import { useMagnetic } from "@/hooks/useMagnetic";
import RepoStats from "./RepoStats";
import styles from "./ProjectRow.module.css";

export default function ProjectRow({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const viewLinkRef = useMagnetic<HTMLAnchorElement>();

  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.row} aria-expanded={expanded} onClick={() => setExpanded((v) => !v)}>
        <div className={styles.name}>{project.name}</div>
        <div className={styles.meta}>
          <div className={styles.tagsCol}>
            <div className={styles.tags}>{project.tags}</div>
            <div className={styles.year}>{project.year}</div>
          </div>
          <span className={[styles.indicator, expanded ? styles.indicatorOpen : ""].filter(Boolean).join(" ")}>
            +
          </span>
        </div>
      </button>

      <div className={[styles.expandOuter, expanded ? styles.expandOuterOpen : ""].filter(Boolean).join(" ")}>
        <div className={styles.expandInner}>
          <div className={styles.expandContent}>
            <p className={styles.blurb}>{project.blurb}</p>
            <div className={styles.techRow}>
              {project.stack.map((tag) => (
                <span key={tag} className={styles.techChip}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.expandFooter}>
              <RepoStats owner={project.owner} repo={project.repo} />
              <a
                ref={viewLinkRef}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewLink}
              >
                VIEW ON GITHUB →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
