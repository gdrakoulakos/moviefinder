"use client";
import MovieCard from "../MovieCard/MovieCard";
import movies from "../../data/movies.json";
import styles from "./MovieList.module.css";
import { useEffect, useState } from "react";

export default function MovieList({ typedTitle }) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (!movies) return;
    if (typedTitle.length < 3) {
      setFilteredMovies(movies);
    }
    if (typedTitle.length >= 3) {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(typedTitle.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [typedTitle]);
  console.log("typedTitle.length", typedTitle.length);

  console.log("filteredMovie", filteredMovies);

  return (
    filteredMovies && (
      <div className={styles.result}>
        {filteredMovies.map((filteredMovie) => (
          <MovieCard
            key={filteredMovie.id}
            title={filteredMovie.title}
            category={filteredMovie.category}
            year={filteredMovie.year}
            rating={filteredMovie.rating}
            length_minutes={filteredMovie.length_minutes}
            age_restriction={filteredMovie.age_restriction}
            poster_name={filteredMovie.poster_name}

          />
        ))}
      </div>
    )
  );
}
