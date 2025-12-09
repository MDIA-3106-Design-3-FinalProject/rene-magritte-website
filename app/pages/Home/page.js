"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Home.module.css";

// COMPONENTS
import Button from "@/app/components/Button/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

export default function Home() {
    const router = useRouter();
    const [isMinimized, setIsMinimized] = useState(false);

    const handleYearChange = (year) => {
        console.log("Selected year:", year);
    };

    const handleBack = () => {
        router.push("/");
    };

    const handleNext = () => {
        router.push("/pages/Room");
    };

    const handleGolcondaClick = () => {
        console.log("Golconda button clicked");
    };

    const handleMinimize = () => {
        setIsMinimized(true);
    };

    const handleMaximize = () => {
        setIsMinimized(false);
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Background Image - Golconda */}
                <Image
                    src='/Golconda.webp'
                    alt='Golconda background'
                    fill
                    className={styles.backgroundImage}
                    priority
                />

                {/* Timeline Bar */}
                <div className={styles.timelineWrapper}>
                    <TimelineBar onYearChange={handleYearChange} />
                </div>

                {/* René Magritte Portrait */}
                <div className={styles.renePortrait}>
                    <Image
                        src='/Rene.png'
                        alt='René Magritte'
                        width={600}
                        height={800}
                        className={styles.portraitImage}
                        priority
                    />
                </div>

                {/* Text Box */}
                <div
                    className={`${styles.textContainer} ${
                        isMinimized ? styles.minimized : ""
                    }`}>
                    {!isMinimized && (
                        <button
                            className={styles.closeButton}
                            onClick={handleMinimize}
                            aria-label='Minimize'>
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M7 17L17 7M17 7H7M17 7V17'
                                    stroke='var(--dark-blue-500)'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>
                    )}
                    <div className={isMinimized ? styles.minimizedWrapper : ""}>
                        <TextBox transparent={isMinimized}>
                            <div className={styles.textItems}>
                                {isMinimized ? (
                                    <>
                                        <button
                                            className={styles.fullSizeButton}
                                            onClick={handleMaximize}>
                                            Learn more
                                            <svg
                                                width='16'
                                                height='16'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                                style={{ marginLeft: "8px" }}>
                                                <path
                                                    d='M6 9L12 15L18 9'
                                                    stroke='currentColor'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <h1>Meet René Magritte</h1>
                                        <p>
                                            René Magritte was a Belgian painter
                                            born in 1898, whose calm demeanor
                                            hid a restless mind. He believed
                                            that art should challenge perception
                                            — not just decorate walls.
                                        </p>
                                        <p>
                                            To him, painting was like telling a
                                            riddle without words. Every
                                            brushstroke was a clue.
                                        </p>
                                        <p>
                                            Through surreal juxtapositions —
                                            bowler hats, clouds, doors, and eyes
                                            — Magritte reminded us that mystery
                                            lies in the ordinary.
                                        </p>
                                        <button
                                            className={styles.golcondaButton}
                                            onClick={handleGolcondaClick}>
                                            Golconda — 1953
                                        </button>
                                    </>
                                )}
                            </div>
                        </TextBox>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className={styles.buttonContainer}>
                    <Button
                        type='back'
                        onClick={handleBack}>
                        BACK
                    </Button>
                    <Button
                        type='next'
                        onClick={handleNext}>
                        NEXT
                    </Button>
                </div>
            </div>
        </div>
    );
}
