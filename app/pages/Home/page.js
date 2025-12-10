"use client";

import { useState, useEffect } from "react";
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
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [reneVisible, setReneVisible] = useState(false);

    const handleYearChange = (year) => {
        // Year change handler
    };

    const handleBack = () => {
        router.push("/");
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/Room");
        }, 600);
    };

    const handleGolcondaClick = () => {
        // Golconda button handler
    };

    const handleMinimize = () => {
        setIsMinimized(true);
    };

    const handleMaximize = () => {
        setIsMinimized(false);
    };

    useEffect(() => {
        // Show Rene image after 3 seconds
        const reneTimer = setTimeout(() => {
            setReneVisible(true);
        }, 3000);

        return () => {
            clearTimeout(reneTimer);
        };
    }, []);

    // Generate multiple men for raining effect
    const menPositions = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${(i * 3.33) % 100}%`,
        delay: `${(i * 0.2) % 5}s`,
        duration: `${3 + (i % 3)}s`,
    }));

    return (
        <div className={styles.page}>
            {/* Transition overlay */}
            {isTransitioning && (
                <div className={styles.transitionOverlay}></div>
            )}
            <div
                className={`${styles.container} ${
                    isTransitioning ? styles.fadeOut : ""
                }`}>
                {/* Background Image - Golconda */}
                <Image
                    src='/Golconda - no men.jpg'
                    alt='Golconda background'
                    fill
                    className={styles.backgroundImage}
                    priority
                />

                {/* Raining men */}
                <div className={styles.rainingMen}>
                    {menPositions.map((man) => (
                        <div
                            key={man.id}
                            className={styles.man}
                            style={{
                                left: man.left,
                                animationDelay: man.delay,
                                animationDuration: man.duration,
                            }}>
                            <Image
                                src='/man.png'
                                alt='Falling man'
                                width={60}
                                height={80}
                                className={styles.manImage}
                                priority
                            />
                        </div>
                    ))}
                </div>

                {/* Timeline Bar */}
                <div className={styles.timelineWrapper}>
                    <TimelineBar onYearChange={handleYearChange} />
                </div>

                {/* René Magritte Portrait */}
                <div
                    className={`${styles.renePortrait} ${
                        reneVisible ? styles.reneVisible : ""
                    }`}>
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
                                            René Magritte was a{" "}
                                            <strong>
                                                Belgian surrealist painter
                                            </strong>{" "}
                                            whose calm demeanor hid a restless
                                            mind. He believed that art should{" "}
                                            <strong>
                                                challenge perception
                                            </strong>
                                            — not just decorate walls.
                                        </p>
                                        <p>
                                            To him, painting was like telling a
                                            riddle without words. Every
                                            brushstroke was a clue.
                                        </p>
                                        <p>
                                            Through{" "}
                                            <strong>
                                                surreal juxtapositions
                                            </strong>{" "}
                                            — bowler hats, clouds, doors, and
                                            eyes — Magritte reminded us that{" "}
                                            <strong>
                                                mystery lies in the ordinary
                                            </strong>
                                            .
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
