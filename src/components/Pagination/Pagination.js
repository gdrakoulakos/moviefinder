import styles from "./Pagination.module.css";

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  console.log("currentPage", currentPage);

  return (
    <div className={styles.pageButtonsContainer}>
      {pages.map((page) => (
        <div
          key={page}
          className={styles.pageButton}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
}
