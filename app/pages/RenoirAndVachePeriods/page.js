"use client";

import styles from "@/app/pages/RenoirAndVachePeriods/RenoirAndVachePeriods.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/Button/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

const artworks = [
    { name: "Forethought", year: 1943, image: "/Forethought-2.png" },
    { name: "The Clearing", year: 1943, image: "/The Clearing.jpeg" },
    { name: "Lyricism", year: 1943, image: "/Lyricism-2.png" },
];

export default function RenoirAndVachePeriods() {
    const router = useRouter();
    const [isMinimized, setIsMinimized] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0);
    const [prevArtworkIndex, setPrevArtworkIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(null);
    const [isSliding, setIsSliding] = useState(false);

    const handleYearChange = (year) => {
        // Year change handler
    };

    const handleBack = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/ReturnToBelgium");
        }, 600);
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/RecognitionAndLegacy");
        }, 600);
    };

    const handleMinimize = () => {
        setIsMinimized(true);
    };

    const handleMaximize = () => {
        setIsMinimized(false);
    };

    const handlePreviousArtwork = () => {
        if (isSliding) return;
        setIsSliding(true);
        setSlideDirection("right");
        setPrevArtworkIndex(currentArtworkIndex);
        setTimeout(() => {
            setCurrentArtworkIndex((prev) =>
                prev === 0 ? artworks.length - 1 : prev - 1
            );
            setTimeout(() => {
                setIsSliding(false);
                setSlideDirection(null);
            }, 500);
        }, 50);
    };

    const handleNextArtwork = () => {
        if (isSliding) return;
        setIsSliding(true);
        setSlideDirection("left");
        setPrevArtworkIndex(currentArtworkIndex);
        setTimeout(() => {
            setCurrentArtworkIndex((prev) =>
                prev === artworks.length - 1 ? 0 : prev + 1
            );
            setTimeout(() => {
                setIsSliding(false);
                setSlideDirection(null);
            }, 500);
        }, 50);
    };

    const currentArtwork = artworks[currentArtworkIndex];

    return (
        <>
            <div className={`${styles.page} ${isTransitioning ? styles.fadeOut : ''}`}>
                <div className={styles.loadingContainer}>
                    <div className={styles.imageWrapper}>
                        {isSliding && (
                            <Image
                                src={artworks[prevArtworkIndex].image}
                                alt={artworks[prevArtworkIndex].name}
                                fill
                                className={`${styles.backgroundImage} ${
                                    slideDirection === "left"
                                        ? styles.slideOutLeft
                                        : styles.slideOutRight
                                }`}
                                priority
                            />
                        )}
                        <Image
                            src={currentArtwork.image}
                            alt={currentArtwork.name}
                            fill
                            className={`${styles.backgroundImage} ${
                                isSliding
                                    ? slideDirection === "left"
                                        ? styles.slideInLeft
                                        : styles.slideInRight
                                    : styles.currentImage
                            }`}
                            priority
                            key={currentArtworkIndex}
                        />
                    </div>

                    <div className={styles.Timeline}>
                        <TimelineBar
                            onYearChange={handleYearChange}
                            initialYear={1943}
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
                                        <h1>Renoir and Vache Periods</h1>
                                        <p>
                                            During the 1940s, Magritte experimented
                                            with different styles, including his
                                            "Renoir Period" and "Vache Period,"
                                            exploring new artistic directions.
                                        </p>
                                        <p>
                                            These periods showcased his versatility
                                            and willingness to challenge his own
                                            artistic conventions.
                                        </p>
                                        <div className={styles.artworkCarousel}>
                                            <button
                                                className={styles.carouselArrow}
                                                onClick={handlePreviousArtwork}
                                                aria-label='Previous artwork'>
                                                <svg
                                                    width='20'
                                                    height='20'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M15 18L9 12L15 6'
                                                        stroke='var(--background)'
                                                        strokeWidth='2.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                            <span
                                                className={styles.artworkName}>
                                                {currentArtwork.name} —{" "}
                                                {currentArtwork.year}
                                            </span>
                                            <button
                                                className={styles.carouselArrow}
                                                onClick={handleNextArtwork}
                                                aria-label='Next artwork'>
                                                <svg
                                                    width='20'
                                                    height='20'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M9 18L15 12L9 6'
                                                        stroke='var(--background)'
                                                        strokeWidth='2.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
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

