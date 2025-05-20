import MovieCard from "../MovieCard/MovieCard";
import movies from "../../data/movies.json";


export default function MovieList() {
  return (
    <div>
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
