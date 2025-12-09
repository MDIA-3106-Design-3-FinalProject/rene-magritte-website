"use client";

import styles from "./ProgressIndicator.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProgressIndicator({ total, current, onChange }) {
    const goNext = () => {
        if (current < total - 1) onChange(current + 1);
    };

    const goPrev = () => {
        if (current > 0) onChange(current - 1);
    };

    return (
        <div className={styles.wrapper}>
            {/* Navigation Buttons */}
            <button
                onClick={goPrev}
                className={styles.button}>
                <ChevronLeft size={20} />
            </button>

            {/* Middle Section */}
            <div className={styles.center}>
                <div className={styles.indicator}>
                    {current + 1}{" "}
                    <span className={styles.total}>/ {total}</span>
                </div>

                <div className={styles.dots}>
                    {Array.from({ length: total }, (_, i) => (
                        <span
                            key={i}
                            className={`${styles.dot} ${
                                i === current ? styles.active : ""
                            }`}
                            onClick={() => onChange(i)}
                        />
                    ))}
                </div>
            </div>

            {/* Next Button */}
            <button
                onClick={goNext}
                className={styles.button}>
                <ChevronRight size={20} />
            </button>
        </div>
    );
}
