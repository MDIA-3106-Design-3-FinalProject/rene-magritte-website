// components/TimelineBar.js
import { useState } from "react";
import YearButton from "../YearButton/YearButton";
import styles from "./TimelineBar.module.css";
import Image from "next/image";

export default function TimelineBar({ onYearChange }) {
    const [activeYear, setActiveYear] = useState(1898);

    const years = [1898, 1908, 1912, 1916, 1920, 1927, 1930, 1943, 1967];

    const handleYearClick = (year) => {
        setActiveYear(year);
        if (onYearChange) {
            onYearChange(year);
        }
    };

    return (
        <div className={styles.timelineContainer}>
            <div className={styles.timelineBar}>
                <div className={styles.logo}>
                    <Image
                        src='/logo.svg'
                        alt='Magritte Logo'
                        width={100}
                        height={24}
                        className={styles.logo}
                    />
                </div>

                <div className={styles.yearContainer}>
                    {years.map((year) => (
                        <YearButton
                            key={year}
                            year={year}
                            isActive={activeYear === year}
                            onClick={handleYearClick}
                        />
                    ))}
                </div>

                <div className={styles.navLinks}>
                    <a
                        href='#about'
                        className={styles.navLink}>
                        About
                    </a>
                    <a
                        href='#credits'
                        className={styles.navLink}>
                        Credits
                    </a>
                </div>
            </div>
        </div>
    );
}
