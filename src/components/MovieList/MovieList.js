"use client";
import MovieCard from "../MovieCard/MovieCard";
import movies from "../../data/movies.json";
import styles from "./MovieList.module.css";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

export default function MovieList({ typedTitle }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;

  useEffect(() => {
    const pagesCounter = Math.ceil(movies.length / moviesPerPage);
    let pagesArray = [];
    for (let i = 1; i <= pagesCounter; i++) {
      pagesArray = [...pagesArray, i];
    }
    setPages(pagesArray);
  }, [movies]);

  useEffect(() => {
    if (!movies) return;
    if (typedTitle.length < 3) {
      if (currentPage) {
        let filteredOnPage = movies.slice(
          (currentPage - 1) * moviesPerPage,
          currentPage * moviesPerPage
        );
        console.log("filteredOnPage", filteredOnPage);

        setFilteredMovies(filteredOnPage);
      }
    }
    if (typedTitle.length >= 3) {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(typedTitle.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [typedTitle, currentPage]);

  return (
    <>
      {filteredMovies && (
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
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ))}
        </div>
      )}
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
