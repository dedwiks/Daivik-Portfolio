import type { AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: "filled" | "outline";
  size?: "default" | "large";
};

export default function Button({ variant, size = "default", className, children, ...rest }: ButtonProps) {
  const classes = [styles.btn, styles[variant], size === "large" ? styles.large : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
