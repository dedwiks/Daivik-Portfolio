"use client";

import { useEffect, useRef } from "react";

const STRENGTH = 0.35;
const MAX_OFFSET = 14;

/**
 * Nudges an element toward the cursor while hovered, via CSS custom
 * properties (--magnet-x/--magnet-y) rather than the `transform` property
 * directly, so it composes with any CSS-driven transform (e.g. the
 * :active scale on buttons) instead of clobbering it.
 */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = clamp((e.clientX - (rect.left + rect.width / 2)) * STRENGTH, -MAX_OFFSET, MAX_OFFSET);
      const dy = clamp((e.clientY - (rect.top + rect.height / 2)) * STRENGTH, -MAX_OFFSET, MAX_OFFSET);
      el.style.setProperty("--magnet-x", `${dx}px`);
      el.style.setProperty("--magnet-y", `${dy}px`);
    };

    const onMouseLeave = () => {
      el.style.setProperty("--magnet-x", "0px");
      el.style.setProperty("--magnet-y", "0px");
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return ref;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
