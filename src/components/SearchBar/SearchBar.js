"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./SearchBar.module.css";
import MovieList from "../MovieList/MovieList";

export default function SearchBar() {
  const [typedTitle, setTypedTitle] = useState("");

  const handleTypedTitle = (e) => {
    setTypedTitle(e.target.value);
  };

  return (
    <>
      <Image
        src="/movies-posters/avengers-endgame.jpeg"
        width={90}
        height={90}
        alt="Picture of the movie"
      />
      <div>
        <input
          className={styles.searchBar}
          placeholder="Search a movie..."
          value={typedTitle}
          onChange={handleTypedTitle}
        ></input>
        <MovieList typedTitle={typedTitle} />
      </div>
    </>
  );
}
