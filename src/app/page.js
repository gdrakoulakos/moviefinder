import MovieList from "@/components/MovieList/MovieList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Movie Finder!</h1>
      <MovieList />
    </div>
  );
}
