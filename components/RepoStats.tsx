"use client";

import { useGithubRepoStats, formatRelativeTime } from "@/hooks/useGithubRepoStats";
import styles from "./RepoStats.module.css";

export default function RepoStats({ owner, repo }: { owner: string; repo: string }) {
  const state = useGithubRepoStats(owner, repo);

  if (state.status !== "ready") return null;

  return (
    <div className={styles.stats}>
      ★ {state.stats.stars} · updated {formatRelativeTime(state.stats.updatedAt)}
    </div>
  );
}
