"use client";

import styles from "@/app/pages/ReturnToBelgium/ReturnToBelgium.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/Button/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

const artworks = [
    {
        name: "The Human Condition",
        year: 1933,
        image: "/The Human Condition-2.png",
        description: [
            "After returning to <strong>Brussels</strong>, Magritte focused on clarity and carefully staged scenes that <strong>probe perception</strong>. His paintings from this time favor calm compositions with a quietly puzzling logic.",
            "<strong>The Human Condition (1933)</strong> shows this directly: a painted canvas placed before a window aligns perfectly with the view beyond, suggesting that what we call “reality” is always framed and interpreted.",
        ],
    },
    {
        name: "The Rape",
        year: 1934,
        image: "/The Rape-2.png",
        description: [
            "In the <strong>mid-1930s Magritte balanced narrative suggestion</strong> with formal restraint. His Belgian works from this time often imply tension or transgression through carefully composed, everyday scenes.",
            "<strong>The Rape (1934)</strong> composes a quiet exterior scene that hints at violence and intrusion through suggestion rather than depiction; the painting’s restraint makes the implied act more disturbing by leaving it mostly unseen.",
        ],
    },
    {
        name: "The Therapist",
        year: 1937,
        image: "/The therapist-2.png",
        description: [
            "Magritte’s Belgian works often probe inner states through restrained imagery. He favored simple, symbolic objects that hint at hidden emotions rather than spelling them out.",
            "<strong>The Therapist (1937)</strong> uses a wrapped head and a caged bird to suggest protection, silence, and constraint—a quiet study of concealment and the limits of understanding another mind.",
        ],
    },
    {
        name: "Time Transfixed",
        year: 1938,
        image: "/Time Transfixed-2.png",
        description: [
            "In Belgium, Magritte developed an <strong>architectural approach to composition</strong>—clean interiors where a single unexpected element quietly unsettles the scene. The controlled setting lets the <strong>oddity speak without spectacle.</strong>",
            "<strong>Time Transfixed (1938)</strong> places a locomotive in a living room fireplace, turning a familiar interior into a deliberate visual paradox that asks the viewer to accept the impossible as matter-of-fact.",
        ],
    },
    {
        name: "Not to Be Reproduced",
        year: 1937,
        image: "/Not to Be Reproduced.jpg",
        description: [
            "During this period Magritte frequently questioned identity and reflection. He staged scenes that used mirrors and doubles to unsettle expectations about <strong>likeness and self-image.</strong>",
            "<strong>Not to Be Reproduced (1937)</strong> depicts a man facing a mirror while the reflection shows only the back of his head—a calm but powerful riddle about recognition and the impossibility of perfect reproduction.",
        ],
    },
];

export default function ReturnToBelgium() {
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
            router.push("/pages/EarlyWork");
        }, 600);
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/RenoirAndVachePeriods");
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
            <div
                className={`${styles.page} ${
                    isTransitioning ? styles.fadeOut : ""
                }`}>
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
                            initialYear={1930}
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
                                        <h1>Return to Belgium</h1>
                                        {currentArtwork.description.map(
                                            (text, index) => (
                                                <p
                                                    key={index}
                                                    dangerouslySetInnerHTML={{
                                                        __html: text,
                                                    }}
                                                />
                                            )
                                        )}
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
