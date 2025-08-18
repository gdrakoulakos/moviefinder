"use client";
import MovieCard from "../../Molecules/MovieCard/MovieCard";
import movies from "../../../data/movies.json";
import styles from "./MovieList.module.css";
import { useEffect, useState } from "react";
import Pagination from "../../Molecules/Pagination/Pagination";

export default function MovieList({ typedTitle }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noMovieFoundMsg, setNoMovieFoundMsg] = useState("");
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
    let filteredOnPage = [];

    if (typedTitle.length < 3) {
      filteredOnPage = movies.slice(
        (currentPage - 1) * moviesPerPage,
        currentPage * moviesPerPage
      );

      setFilteredMovies(filteredOnPage);
    }

    if (typedTitle.length >= 3) {
      filteredOnPage = movies.filter((movie) =>
        movie.title.toLowerCase().includes(typedTitle.toLowerCase())
      );
      if (filteredOnPage.length > 0) {
        setFilteredMovies(filteredOnPage);
      } else {
        setNoMovieFoundMsg("No Movie found");
        setFilteredMovies([]);
      }
    }
  }, [typedTitle, currentPage]);

  return (
    <>
      {noMovieFoundMsg && filteredMovies.length === 0 ? (
        <span>{noMovieFoundMsg}</span>
      ) : filteredMovies.length === 0 ? (
        <span className={styles.loadingSpinner}></span>
      ) : (
        <>
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

          {typedTitle.length < 3 && (
            <Pagination
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  );
}
