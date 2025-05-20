import Image from "next/image";
import styles from "./MovieCard.module.css";

export default function MovieCard({id, title, category, year }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <h1>{title}</h1>
      </div>
      <Image
        src="/movieIcon.png"
        width={200}
        height={200}
        alt="Picture of the movie"
      />
      <div className={styles.cardInfo}>
        <h3>{category}</h3>
        <h3>{year}</h3>
      </div>
    </div>
  );
}
