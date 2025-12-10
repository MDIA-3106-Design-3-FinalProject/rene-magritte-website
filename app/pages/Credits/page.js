"use client";

import styles from "./Credits.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

const artworks = [
    {
        name: "Rene Magritte - Child",
        year: 1898,
        image: "/Rene-Magritte-Child-2.png",
    },
    { name: "The Seducer", year: 1908, image: "/The Seducer-2.png" },
    { name: "Mes Reves", year: 1912, image: "/mes-reves-2.png" },
    { name: "Marche des Snobs", year: 1926, image: "/Marche des Snobs-4.png" },
    {
        name: "Le tango des aveux",
        year: 1925,
        image: "/Le tango des aveux-2.png",
    },
    { name: "Landscape", year: 1926, image: "/Landscape.jpg" },
    { name: "The Lost Jockey", year: 1925, image: "/The lost jobey-2.png" },
    { name: "The False Mirror", year: 1928, image: "/The-False-Mirror.png" },
    {
        name: "The Treachery of Images",
        year: 1929,
        image: "/The Treachery of Images.webp",
    },
    { name: "The Lovers I", year: 1928, image: "/The Lovers I-2.png" },
    {
        name: "The Human Condition",
        year: 1933,
        image: "/The Human Condition-2.png",
    },
    { name: "The Rape", year: 1934, image: "/The Rape-2.png" },
    { name: "The Therapist", year: 1937, image: "/The therapist-2.png" },
    { name: "Time Transfixed", year: 1938, image: "/Time Transfixed-2.png" },
    {
        name: "Not to Be Reproduced",
        year: 1937,
        image: "/Not to Be Reproduced.jpg",
    },
    { name: "Forethought", year: 1943, image: "/Forethought-2.png" },
    { name: "The Clearing", year: 1943, image: "/The Clearing.jpeg" },
    { name: "Lyricism", year: 1943, image: "/Lyricism-2.png" },
    {
        name: "The Empire of Light",
        year: 1954,
        image: "/The empire of light-2.png",
    },
    { name: "The Pilgrim", year: 1966, image: "/The Pilgrim.jpg" },
    {
        name: "The Art of Living",
        year: 1967,
        image: "/The art of living-2.png",
    },
    {
        name: "Man in a Bowler Hat",
        year: 1964,
        image: "/Man in a Bowler Hat-2.png",
    },
    { name: "The Big Family", year: 1963, image: "/The Big Family.jpg" },
    { name: "The Son of Man", year: 1964, image: "/The Son of Men-2.png" },
    { name: "Golconda", year: 1953, image: "/Golconda.webp" },
];

export default function Credits() {
    const router = useRouter();
    const [selectedArtworkIndex, setSelectedArtworkIndex] = useState(null);

    const handleYearChange = (year) => {
        // Year change handler
    };

    const handleArtworkClick = (index) => {
        setSelectedArtworkIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedArtworkIndex(null);
    };

    const handlePrevious = (e) => {
        e.stopPropagation();
        if (selectedArtworkIndex !== null) {
            const prevIndex =
                selectedArtworkIndex === 0
                    ? artworks.length - 1
                    : selectedArtworkIndex - 1;
            setSelectedArtworkIndex(prevIndex);
        }
    };

    const handleNext = (e) => {
        e.stopPropagation();
        if (selectedArtworkIndex !== null) {
            const nextIndex =
                selectedArtworkIndex === artworks.length - 1
                    ? 0
                    : selectedArtworkIndex + 1;
            setSelectedArtworkIndex(nextIndex);
        }
    };

    const currentArtwork =
        selectedArtworkIndex !== null ? artworks[selectedArtworkIndex] : null;

    return (
        <>
            <div className={styles.page}>
                <div className={styles.loadingContainer}>
                    <Image
                        src='/loading-page.png'
                        alt='Loading background'
                        fill
                        className={styles.backgroundImage}
                        priority
                    />

                    <div className={styles.Timeline}>
                        <TimelineBar onYearChange={handleYearChange} />
                    </div>

                    {/* Content Grid */}
                    <div className={styles.contentGrid}>
                        {/* Artworks Grid */}
                        <div className={styles.artworksGrid}>
                            {artworks.map((artwork, index) => (
                                <div
                                    key={index}
                                    className={styles.artworkThumbnail}
                                    onClick={() => handleArtworkClick(index)}>
                                    <Image
                                        src={artwork.image}
                                        alt={artwork.name}
                                        fill
                                        className={styles.thumbnailImage}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Text Container - Right Side */}
                        <div className={styles.TextContainer}>
                            <TextBox>
                                <div className={styles.TextItems}>
                                    <h1>Credits</h1>
                                    <p>
                                        Story and text inspired by the life and
                                        works of René Magritte (1898–1967).
                                    </p>
                                    <p>
                                        Information adapted from{" "}
                                        <a
                                            href="https://renemagritte.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}>
                                            renemagritte.org
                                        </a>{" "}
                                        and public museum archives for
                                        educational storytelling purposes.
                                    </p>
                                    <p>
                                        Music by Erik Satie – Gnossiennes Nos.
                                        1–6. Satie's minimalist, dreamlike, and
                                        subtly ironic style aligns closely with
                                        the surreal atmosphere often associated
                                        with Magritte, making his compositions a
                                        fitting musical counterpart to the
                                        narrative.
                                    </p>
                                    <p>
                                        Some images in this project have been
                                        enhanced with AI to improve clarity
                                        while preserving their original artistic
                                        qualities.
                                    </p>
                                    <p>
                                        This website was created by{" "}
                                        <a
                                            href="https://www.linkedin.com/in/brunaguarizo/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}>
                                            Bruna Guarizo
                                        </a>{" "}
                                        and{" "}
                                        <a
                                            href="https://www.linkedin.com/in/cesariamonforte/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}>
                                            Cesaria Monforte
                                        </a>
                                        .
                                    </p>
                                </div>
                            </TextBox>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Full Artwork */}
            {currentArtwork && (
                <div
                    className={styles.modal}
                    onClick={handleCloseModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.closeButton}
                            onClick={handleCloseModal}
                            aria-label='Close'>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M18 6L6 18M6 6L18 18'
                                    stroke='currentColor'
                                    strokeWidth='2.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>

                        {/* Previous Arrow */}
                        <button
                            className={styles.navArrow}
                            onClick={handlePrevious}
                            aria-label='Previous artwork'
                            style={{ left: "20px" }}>
                            <svg
                                width='32'
                                height='32'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M15 18L9 12L15 6'
                                    stroke='currentColor'
                                    strokeWidth='2.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>

                        {/* Next Arrow */}
                        <button
                            className={styles.navArrow}
                            onClick={handleNext}
                            aria-label='Next artwork'
                            style={{ right: "20px" }}>
                            <svg
                                width='32'
                                height='32'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M9 18L15 12L9 6'
                                    stroke='currentColor'
                                    strokeWidth='2.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>

                        <div className={styles.modalImageContainer}>
                            <Image
                                src={currentArtwork.image}
                                alt={currentArtwork.name}
                                fill
                                className={styles.modalImage}
                                sizes='90vw'
                            />
                        </div>
                        <p className={styles.modalTitle}>
                            {currentArtwork.name} — {currentArtwork.year}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
