import styles from "./SpecRail.module.css";

export type RailItem = {
  text: string;
  muted?: boolean;
  strong?: boolean;
};

export default function SpecRail({ items }: { items: RailItem[] }) {
  return (
    <div className={styles.rail}>
      {items.map((item, i) => (
        <span
          key={i}
          className={[item.muted ? styles.muted : "", item.strong ? styles.strong : ""].filter(Boolean).join(" ")}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}
