"use client";

import type { AnchorHTMLAttributes } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import styles from "./Button.module.css";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: "filled" | "outline";
  size?: "default" | "large";
};

export default function Button({ variant, size = "default", className, children, ...rest }: ButtonProps) {
  const ref = useMagnetic<HTMLAnchorElement>();
  const classes = [styles.btn, styles[variant], size === "large" ? styles.large : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a ref={ref} className={classes} {...rest}>
      {children}
    </a>
  );
}
