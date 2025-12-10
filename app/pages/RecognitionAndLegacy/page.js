"use client";

import styles from "@/app/pages/RecognitionAndLegacy/RecognitionAndLegacy.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/Button/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

const artworks = [
    {
        name: "The Empire of Light",
        year: 1954,
        image: "/The empire of light-2.png",
        description: [
            "In the <strong>1950s</strong>, Magritte’s work became <strong>widely celebrated</strong> for its quiet contradictions and deliberate clarity. His paintings offered mystery without chaos, allowing <strong>audiences to engage with surreal ideas</strong> through calm, familiar imagery.",
            "<strong>The Empire of Light (1954)</strong> is one of his most iconic achievements. The impossible combination of a daylight sky over a night-lit street creates a serene yet uncanny world, perfectly capturing Magritte’s mature vision.",
        ],
    },
    {
        name: "The Pilgrim",
        year: 1966,
        image: "/The Pilgrim.jpg",
        description: [
            "As his career progressed, Magritte’s <strong>anonymous bowler-hatted figure</strong> became a central symbol of his artistic identity. This recurring silhouette <strong>reflected the ordinary citizen</strong>—familiar, understated, and quietly mysterious.",
            "<strong>The Pilgrim (1966)</strong> reveals this late-career confidence. The figure’s faceless, stone-like surface transforms a simple suit-wearing man into an enigmatic presence, embodying Magritte’s lifelong fascination with the unknown.",
        ],
    },
    {
        name: "The Art of Living",
        year: 1967,
        image: "/The art of living-2.png",
        description: [
            "In his later years, Magritte often returned to <strong>familiar motifs</strong>, giving them <strong>new clarity and symbolic richness.</strong> This period was marked by a mature, confident simplicity that allowed each image to speak with precision.",
            "<strong>The Art of Living (1967)</strong> reflects this refined approach. The placement of familiar elements within an open, luminous space creates a poetic tension that invites viewers to look beyond the surface.",
        ],
    },
    {
        name: "Man in a Bowler Hat",
        year: 1964,
        image: "/Man in a Bowler Hat-2.png",
        description: [
            "By the <strong>1960s</strong>, Magritte’s bowler-hatted figure had become one of the <strong>most recognizable icons in modern art.</strong> It symbolized the ordinary man placed in extraordinary circumstances—an image both accessible and philosophical.",
            "<strong>Man in a Bowler Hat (1964)</strong> demonstrates this perfectly. The bird obscuring the man’s face turns a normal scene into a quiet riddle, encouraging the viewer to question what remains hidden in plain sight.",
        ],
    },
    {
        name: "The Big Family",
        year: 1963,
        image: "/The Big Family.jpg",
        description: [
            "In his late career, Magritte became increasingly <strong>interested in balancing serenity with impossibility.</strong> His compositions grew cleaner and more symbolic, allowing everyday imagery to take on universal meaning.",
            "<strong>The Big Family (1963)</strong> embodies this balance. The bird-shaped window onto a bright sky set against stormy seas creates a striking, hopeful contrast, reflecting Magritte’s ability to express emotion through illusion.",
        ],
    },
    {
        name: "The Son of Man",
        year: 1946,
        image: "/The Son of Men-2.png",
        description: [
            "Late in his life, Magritte’s work reached a global audience. <strong>Exhibitions, films, album covers, and popular media</strong> embraced his imagery, making him one of <strong>the most influential artists of the 20th century.</strong>",
            "<strong>The Son of Man (1964)</strong> stands as his most famous work. The hovering apple hides the man’s face, turning a straightforward portrait into a lasting symbol of mystery, curiosity, and the limits of what we can see.",
        ],
    },
];

export default function RecognitionAndLegacy() {
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
            router.push("/pages/RenoirAndVachePeriods");
        }, 600);
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/Death");
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
                            initialYear={1950}
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
                                        <h1>Recognition and Legacy</h1>
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
