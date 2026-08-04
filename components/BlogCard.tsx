import styles from "./BlogCard.module.css";

export default function BlogCard({ tag }: { tag: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.tag}>{tag}</div>
      <div className={styles.title}>Coming soon</div>
    </div>
  );
}
