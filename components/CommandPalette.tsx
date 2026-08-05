"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { navItems, contactLinks } from "@/lib/data";
import styles from "./CommandPalette.module.css";

type Command = {
  id: string;
  label: string;
  hint: string;
  group: "NAVIGATE" | "ACTIONS";
  keywords: string;
  keepOpen?: boolean;
  run: () => void;
};

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const email = (contactLinks.find((c) => c.label === "E-MAIL")?.href ?? "mailto:").replace("mailto:", "");

  const commands = useMemo<Command[]>(() => {
    const nav: Command[] = navItems.map((item) => ({
      id: `nav-${item.id}`,
      label: item.label,
      hint: item.href,
      group: "NAVIGATE",
      keywords: item.label.toLowerCase(),
      run: () => {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView();
        else router.push(`/#${item.id}`);
      },
    }));

    const external: Command[] = contactLinks
      .filter((c) => c.external)
      .map((c) => ({
        id: `open-${c.label}`,
        label: `OPEN ${c.label}`,
        hint: c.href.replace(/^https?:\/\//, ""),
        group: "ACTIONS",
        keywords: c.label.toLowerCase(),
        run: () => window.open(c.href, "_blank", "noopener,noreferrer"),
      }));

    const actions: Command[] = [
      {
        id: "copy-email",
        label: copied ? "COPIED ✓" : "COPY EMAIL",
        hint: email,
        group: "ACTIONS",
        keywords: "email contact copy",
        keepOpen: true,
        run: () => {
          navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          });
        },
      },
      ...external,
      {
        id: "download-resume",
        label: "DOWNLOAD RESUME",
        hint: "resume_mesa.pdf",
        group: "ACTIONS",
        keywords: "resume cv download pdf",
        run: () => {
          const a = document.createElement("a");
          a.href = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume_mesa.pdf`;
          a.download = "resume_mesa.pdf";
          a.click();
        },
      },
    ];

    return [...nav, ...actions];
  }, [router, email, copied]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q) || c.keywords.includes(q));
  }, [commands, query]);

  const close = () => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  const runCommand = (cmd: Command) => {
    cmd.run();
    if (!cmd.keepOpen) close();
  };

  useEffect(() => {
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onExternalOpen = () => setOpen(true);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onExternalOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onExternalOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = filtered[activeIndex];
      if (cmd) runCommand(cmd);
    }
  };

  if (!open) return null;

  let lastGroup: Command["group"] | null = null;

  return (
    <div className={styles.backdrop} onMouseDown={close}>
      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="TYPE A COMMAND..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleInputKeyDown}
          aria-label="Search commands"
        />
        <div className={styles.list} role="listbox">
          {filtered.length === 0 && <div className={styles.empty}>NO MATCHES</div>}
          {filtered.map((cmd, i) => {
            const showGroup = cmd.group !== lastGroup;
            lastGroup = cmd.group;
            return (
              <div key={cmd.id}>
                {showGroup && <div className={styles.groupLabel}>{cmd.group}</div>}
                <button
                  type="button"
                  role="option"
                  aria-selected={i === activeIndex}
                  className={[styles.item, i === activeIndex ? styles.itemActive : ""].filter(Boolean).join(" ")}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => runCommand(cmd)}
                >
                  <span>{cmd.label}</span>
                  <span className={styles.itemHint}>{cmd.hint}</span>
                </button>
              </div>
            );
          })}
        </div>
        <div className={styles.footer}>
          <span>↑↓ NAVIGATE</span>
          <span>↵ SELECT</span>
          <span>ESC CLOSE</span>
        </div>
      </div>
    </div>
  );
}
