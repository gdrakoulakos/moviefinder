import styles from "./Pagination.module.css";

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  return (
    <div className={styles.pageButtonsContainer}>
      {pages.map((page) => (
        <div
          key={page}
          className={`${styles.pageButton} ${
            currentPage === page ? styles.clicked : ""
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
}
