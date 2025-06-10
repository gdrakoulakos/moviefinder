import MovieList from "@/components/MovieList/MovieList";
import styles from "./page.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Movie Finder!</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
}
