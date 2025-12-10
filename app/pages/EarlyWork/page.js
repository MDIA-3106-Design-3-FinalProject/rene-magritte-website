"use client";

import styles from "@/app/pages/EarlyWork/EarlyWork.module.css";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/Button/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

const artworks = [
    {
        name: "The False Mirror",
        year: 1928,
        image: null,
        isEyeComposition: true,
        description: [
            "In his <strong>early Paris years</strong>, Magritte focused on <strong>quiet, precise images</strong> that created mystery without exaggeration. He preferred <strong>clarity over chaos</strong>, building tension through subtle shifts rather than dramatic effects.",
            "<strong>The False Mirror (1928)</strong> reflects this approach. By replacing the eye’s pupil with an open sky, Magritte turns vision into a <strong>paradox</strong>—suggesting that seeing is shaped as much by <strong>imagination</strong> as by reality.",
        ],
    },
    {
        name: "The Treachery of Images",
        year: 1929,
        image: "/The Treachery of Images.webp",
        isEyeComposition: false,
        description: [
            "During this period, Magritte began exploring how <strong>images and words</strong> influence what we believe to be true. He used ordinary objects but presented them in ways that <strong>challenged viewers’ assumptions.</strong>",
            "<strong>The Treachery of Images (1929)</strong> is a perfect example. The painted pipe paired with “<strong>This is not a pipe</strong>” reminds us that an image <strong>represents</strong>, but never becomes, the real thing.",
        ],
    },
    {
        name: "The Lovers I",
        year: 1928,
        image: "/The Lovers I-2.png",
        isEyeComposition: false,
        description: [
            "Magritte used his early Paris period to explore themes of <strong>intimacy and distance.</strong> He created scenes that felt <strong>familiar yet emotionally unreachable</strong>, revealing the quiet tensions within everyday life.",
            "<strong>The Lovers (1928)</strong> shows this clearly. Two people kiss, but their faces are veiled, turning a simple embrace into a reflection on <strong>desire</strong>, <strong>separation</strong>, and the limits of knowing one another.",
        ],
    },
];

export default function EarlyWork() {
    const router = useRouter();
    const [isMinimized, setIsMinimized] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
    const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0);
    const [prevArtworkIndex, setPrevArtworkIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(null);
    const [isSliding, setIsSliding] = useState(false);
    const eyeRef = useRef(null);

    const handleYearChange = (year) => {
        // Year change handler
    };

    const handleBack = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/Surrealism");
        }, 600);
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/ReturnToBelgium");
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

    useEffect(() => {
        // Show content after fade transforms to pupil
        setTimeout(() => {
            setContentVisible(true);
        }, 1500);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!eyeRef.current) return;

            const eyeRect = eyeRef.current.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;

            // Calculate relative position from center
            const relativeX = e.clientX - eyeCenterX;
            const relativeY = e.clientY - eyeCenterY;

            // Limit pupil movement to stay within eye bounds
            // Calculate maxDistance based on viewport size (smaller dimension / 8)
            const maxDistance =
                Math.min(window.innerWidth, window.innerHeight) / 8;
            const distance = Math.sqrt(
                relativeX * relativeX + relativeY * relativeY
            );

            let finalX = relativeX;
            let finalY = relativeY;

            if (distance > maxDistance) {
                finalX = (relativeX / distance) * maxDistance;
                finalY = (relativeY / distance) * maxDistance;
            }

            setPupilPosition({ x: finalX, y: finalY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <div
                className={`${styles.page} ${
                    isTransitioning ? styles.fadeOut : ""
                }`}>
                {/* Artwork images wrapper */}
                <div className={styles.imageWrapper}>
                    {isSliding && artworks[prevArtworkIndex].image && (
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
                    {currentArtwork.image && (
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
                    )}
                </div>

                {/* Sky background with horizontal looping animation - only show for eye composition */}
                {currentArtwork.isEyeComposition && (
                    <div className={styles.skyContainer}>
                        <div className={styles.skyWrapper}>
                            <Image
                                src='/sky-2.png'
                                alt='Sky background'
                                fill
                                className={styles.skyImage}
                                priority
                            />
                            <Image
                                src='/sky-2.png'
                                alt='Sky background duplicate'
                                fill
                                className={styles.skyImage}
                                priority
                            />
                        </div>
                    </div>
                )}

                {/* Eye with pupil that follows mouse - only show for eye composition */}
                {currentArtwork.isEyeComposition && (
                    <div className={styles.eyeContainer}>
                        <div
                            ref={eyeRef}
                            className={styles.eyeWrapper}>
                            <Image
                                src='/eye-3.png'
                                alt='Eye'
                                fill
                                className={styles.eyeImage}
                                priority
                            />
                            <div
                                className={styles.pupil}
                                style={{
                                    transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                                }}></div>
                        </div>
                    </div>
                )}

                {/* Content - appears after fade transforms */}
                <div
                    className={`${styles.loadingContainer} ${
                        contentVisible ? styles.contentVisible : ""
                    }`}>
                    <div className={styles.Timeline}>
                        <TimelineBar
                            onYearChange={handleYearChange}
                            initialYear={1928}
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
                                        <h1>Early Work (Paris)</h1>
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
