import Image from "next/image";
import styles from "./MovieCard.module.css";

export default function MovieCard({
  title,
  category,
  year,
  rating,
  length_minutes,
  age_restriction,
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardLeft}>
        <Image
          src="/movieIcon.png"
          width={90}
          height={90}
          alt="Picture of the movie"
          className={styles.movieImage}
        />
      </div>
      <div className={styles.cardRight}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardSubInfo}>
          <div>{category}</div>
          <div>{year}</div>
        </div>
        <div className={styles.cardDetails}>
          <div>⭐{rating}</div>
          <div>⏱︎{length_minutes}'</div>
          <div>{age_restriction}</div>
        </div>
      </div>
    </div>
  );
}
