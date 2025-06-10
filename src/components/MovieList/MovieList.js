import MovieCard from "../MovieCard/MovieCard";
import movies from "../../data/movies.json";
import styles from "./MovieList.module.css"

export default function MovieList() {
  return (
    <div className={styles.result}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          category={movie.category}
          year={movie.year}
        />
      ))}
    </div>
  );
}
