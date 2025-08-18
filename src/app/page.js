import styles from "./page.module.css";
import Movies from "@/components/Templates/Movies/Movies";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Movie Finder!</h1>
      <Movies />
    </div>
  );
}
