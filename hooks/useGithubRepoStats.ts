"use client";

import { useEffect, useState } from "react";

type RepoStats = {
  stars: number;
  updatedAt: string;
};

type State = { status: "loading" } | { status: "error" } | { status: "ready"; stats: RepoStats };

// Module-level so switching tabs/routes within one session doesn't refetch.
const cache = new Map<string, RepoStats>();

export function useGithubRepoStats(owner: string, repo: string): State {
  const key = `${owner}/${repo}`;
  const cached = cache.get(key);
  const [state, setState] = useState<State>(cached ? { status: "ready", stats: cached } : { status: "loading" });

  useEffect(() => {
    const existing = cache.get(key);
    if (existing) {
      setState({ status: "ready", stats: existing });
      return;
    }

    let cancelled = false;
    fetch(`https://api.github.com/repos/${key}`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data) => {
        if (cancelled) return;
        const stats: RepoStats = { stars: data.stargazers_count, updatedAt: data.pushed_at };
        cache.set(key, stats);
        setState({ status: "ready", stats });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });

    return () => {
      cancelled = true;
    };
  }, [key]);

  return state;
}

export function formatRelativeTime(iso: string): string {
  const diffMs = Math.max(0, Date.now() - new Date(iso).getTime());
  const hour = 3_600_000;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (diffMs < hour) return "just now";
  if (diffMs < day) return `${Math.floor(diffMs / hour)}h ago`;
  if (diffMs < month) return `${Math.floor(diffMs / day)}d ago`;
  if (diffMs < year) return `${Math.floor(diffMs / month)}mo ago`;
  return `${Math.floor(diffMs / year)}y ago`;
}
