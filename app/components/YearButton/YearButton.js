// components/YearButton.js
import styles from "./YearButton.module.css";

export default function YearButton({ year, isActive, onClick }) {
    return (
        <button
            className={`${styles.yearButton} ${isActive ? styles.active : ""}`}
            onClick={() => onClick(year)}>
            {year}
        </button>
    );
}
