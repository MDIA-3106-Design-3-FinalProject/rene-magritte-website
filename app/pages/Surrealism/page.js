"use client";

import styles from "@/app/pages/Surrealism/Surrealism.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/Button/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

export default function Surrealism() {
    const router = useRouter();
    const [isMinimized, setIsMinimized] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    const handleYearChange = (year) => {
        // Year change handler
    };

    const handleBack = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/EarlyCareer");
        }, 600);
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/EarlyWork");
        }, 600);
    };

    const handleMinimize = () => {
        setIsMinimized(true);
    };

    const handleMaximize = () => {
        setIsMinimized(false);
    };

    useEffect(() => {
        // Show content after curtains start opening
        setTimeout(() => {
            setContentVisible(true);
        }, 800);
    }, []);

    return (
        <>
            <div
                className={`${styles.page} ${
                    isTransitioning ? styles.fadeOut : ""
                }`}>
                {/* Dark fade overlay - curtain effect */}
                <div className={styles.curtainLeft}></div>
                <div className={styles.curtainRight}></div>

                {/* Content - appears after fade */}
                <div
                    className={`${styles.loadingContainer} ${
                        contentVisible ? styles.contentVisible : ""
                    }`}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src='/The lost jobey-2.png'
                            alt='The lost jobey'
                            fill
                            className={styles.backgroundImage}
                            priority
                        />
                    </div>

                    <div className={styles.Timeline}>
                        <TimelineBar
                            onYearChange={handleYearChange}
                            initialYear={1926}
                        />
                    </div>

                    <div
                        className={`${styles.TextContainer} ${
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
                        <TextBox transparent={isMinimized}>
                            <div className={styles.TextItems}>
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
                                        <h1>Surrealism</h1>
                                        <p>
                                            In <strong>1926</strong>, Magritte
                                            created{" "}
                                            <strong>
                                                The Lost Jockey (1926)
                                            </strong>
                                            , a work that foreshadowed his shift
                                            into <strong>surrealism.</strong>
                                            During the mid-to-late 1920s, he
                                            began moving away from commercial
                                            illustration toward a personal
                                            visual language focused on mystery
                                            and unexpected juxtapositions.
                                        </p>
                                        <p>
                                            Through works like this, Magritte
                                            blurred the boundaries between dream
                                            and reason. He
                                            <strong>
                                                {" "}
                                                transformed ordinary elements
                                                into strange tableaux
                                            </strong>
                                            , hinting at hidden layers beyond
                                            the visible — a theme that would
                                            define much of his later work.
                                        </p>

                                        <button
                                            className={styles.artworkButton}>
                                            The Lost Jockey — 1926
                                        </button>
                                    </>
                                )}
                            </div>
                        </TextBox>
                    </div>

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
        </>
    );
}
