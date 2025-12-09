"use client";

import styles from "@/app/pages/ReturnToBelgium/ReturnToBelgium.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";
import ProgressIndicator from "@/app/components/ProgressIndicator/ProgressIndicator";

export default function ReturnToBelgium() {
    const router = useRouter();

    const handleStart = () => {
        console.log("Start button clicked");
    };
    const handleYearChange = (year) => {
        console.log("Selected year:", year);
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/The Human Condition.webp",
        "/Time Transfixed.jpg",
        "/The therapist.webp",
    ];

    const titles = [
        "The Human Condition — 1933",
        "Time Transfixed — 1938",
        "The Therapist — 1937",
    ];

    return (
        <>
            <div className={styles.page}>
                {/* Logo */}
                <div className={styles.loadingContainer}>
                    <Image
                        src={images[currentIndex]}
                        alt='Background artwork'
                        fill
                        className={styles.backgroundImage}
                        priority
                    />

                    <div className={styles.Timeline}>
                        <TimelineBar onYearChange={handleYearChange} />
                    </div>

                    <div className={styles.TextContainer}>
                        <TextBox>
                            <div className={styles.TextItems}>
                                <h1>The return to belgium</h1>
                                <p>
                                    By 1930, Magritte returned home to Brussels,
                                    disillusioned by artistic politics but
                                    grounded in his own vision.
                                </p>
                                <p>
                                    There, he continued painting quietly,
                                    developing works like The Human Condition
                                    and The Blank Signature.
                                </p>
                                <p>
                                    His art became a mirror — not of reality,
                                    but of how we misunderstand it.
                                </p>
                            </div>
                        </TextBox>
                        {/* Title of artwork */}
                        <TextBox>
                            <div className={styles.TextItems}>
                                <p>{titles[currentIndex]}</p>
                            </div>
                        </TextBox>
                        <ProgressIndicator
                            total={images.length}
                            current={currentIndex}
                            onChange={setCurrentIndex}
                        />
                    </div>

                    <div className={styles.buttonContainer}>
                        <Button
                            type='back'
                            onClick={handleStart}>
                            BACK
                        </Button>
                        <Button
                            type='next'
                            onClick={handleStart}>
                            NEXT
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
