"use client";

import styles from "@/app/pages/EarlyCareer/EarlyCareer.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/Button/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

const artworks = [
    {
        name: "Mes Rêves",
        year: 1924,
        image: "/mes-reves-2.png",
        description: [
            "By <strong>1916</strong>, Magritte began studying at the <strong>Académie Royale des Beaux-Arts in Brussels</strong>. His early jobs pushed him to think about <strong>bold forms, strong lines, and clear visual communication.</strong>",
            "You can see these early graphic influences in <strong>Mes Rêves (1924)</strong>, where simplified <strong>forms, strong outlines,</strong> and theatrical staging reflect his transition from commercial art toward a more personal <strong>visual language.</strong>",
        ],
    },
    {
        name: "Marche des Snobs",
        year: 1924,
        image: "/Marche des Snobs-4.png",
        description: [
            "In the <strong>early 1920s</strong>, Magritte was navigating the <strong>Belgian art world</strong> while still doing commercial work to make a living. He spent these years experimenting with style, absorbing the visual energy of the Parisian avant-garde from afar.",
            "These stylistic explorations appear clearly in <strong>Marché des Amants (1924)</strong>, where fragmented figures and graphic shapes show Magritte moving toward abstraction and learning how to blur the boundary between <strong>representation and imagination.</strong>",
        ],
    },
    {
        name: "Le tango des aveux",
        year: 1925,
        image: "/Le tango des aveux-2.png",
        description: [
            "By the <strong>mid-1920s</strong>, Magritte was producing <strong>illustrations and poster designs</strong> while continuing to develop his fine-art practice. He used these years to test new ideas, particularly how movement, gesture, and emotion could be expressed through simplified forms.",
            "In <strong>Le Tango des Aveux (1925)</strong>, the elegantly <strong>elongated figures</strong> and rhythmic lines show Magritte experimenting with theatricality and visual harmony, hinting at the expressive language he would soon transform into something far more <strong>mysterious.</strong>",
        ],
    },
    {
        name: "Landscape",
        year: 1920,
        image: "/Landscape.jpg",
        description: [
            "Before Magritte embraced surrealism, he explored <strong>Cubism and Futurism</strong>, inspired by artists like <strong>Léger and De Chirico.</strong> These early explorations allowed him to <strong>break down natural forms into shapes and planes</strong>, helping him understand how images could be constructed — and later, how they could be subverted.",
            "<strong>Landscape (1920)</strong> reflects this developmental stage, with its <strong>geometric forms, dynamic angles, and bright palette.</strong> The painting shows Magritte learning how to distill the world into structure and color before abandoning realism altogether.",
        ],
    },
];

export default function EarlyCareer() {
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
            router.push("/pages/Seducer");
        }, 600);
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/Surrealism");
        }, 800);
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
                            initialYear={1916}
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
                                        <h1>Early Career</h1>
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
