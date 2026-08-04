"use client";

import { useEffect, useState } from "react";
import { navObservedSectionIds } from "@/lib/data";

/**
 * navVisible flips on past 480px of scroll; activeSection is whichever
 * observed section's bounding rect currently straddles y=140 (viewport
 * space, matches the sticky nav's own height/offset).
 */
export function useStickyNav() {
  const [navVisible, setNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const visible = window.scrollY > 480;
      let active: string | null = null;
      for (const id of navObservedSectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) {
          active = id;
          break;
        }
      }
      setNavVisible((prev) => (prev === visible ? prev : visible));
      setActiveSection((prev) => (prev === active ? prev : active));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { navVisible, activeSection };
}
