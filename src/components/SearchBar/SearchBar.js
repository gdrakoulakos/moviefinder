"use client";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import MovieList from "../MovieList/MovieList";

export default function SearchBar() {
  const [typedTitle, setTypedTitle] = useState("");

  const handleTypedTitle = (e) => {
    setTypedTitle(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.searchBar}
        placeholder="Search a movie..."
        value={typedTitle}
        onChange={handleTypedTitle}
      ></input>
      <MovieList typedTitle={typedTitle} />
    </div>
  );
}
