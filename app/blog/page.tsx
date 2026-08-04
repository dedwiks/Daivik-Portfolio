import type { Metadata } from "next";
import Link from "next/link";
import SpecRail from "@/components/SpecRail";
import BlogCard from "@/components/BlogCard";
import { blogPlaceholders } from "@/lib/data";
import buttonStyles from "@/components/Button.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog — Daivik S Gokhale",
  description: "Notes on machine learning, full-stack engineering, and things learned while building.",
};

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.eyebrow}>
            <span>✦</span>
            <span>BLOG</span>
          </div>
          <Link href="/" className={`${buttonStyles.btn} ${buttonStyles.outline}`}>
            ← BACK TO PORTFOLIO
          </Link>
        </div>
        <SpecRail items={[{ text: "POSTS:", muted: true }, { text: "00", strong: true }]} />
      </div>

      <div className={styles.main}>
        <h1 className={styles.heading}>WRITING, SOON.</h1>
        <p className={styles.intro}>
          Notes on machine learning, full-stack engineering, and things learned while building. First posts are on
          the way.
        </p>
        <div className={styles.grid}>
          {blogPlaceholders.map((placeholder) => (
            <BlogCard key={placeholder.tag} tag={placeholder.tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
