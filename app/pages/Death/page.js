"use client";

import styles from "@/app/pages/Death/Death.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/Button/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

export default function Death() {
    const router = useRouter();
    const [isMinimized, setIsMinimized] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [reneVisible, setReneVisible] = useState(false);
    const [grayscaleActive, setGrayscaleActive] = useState(false);
    const [rainStopped, setRainStopped] = useState(false);

    const handleYearChange = (year) => {
        // Year change handler
    };

    const handleBack = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/RecognitionAndLegacy");
        }, 600);
    };

    const handleRoom = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/Room");
        }, 600);
    };

    const handleMinimize = () => {
        setIsMinimized(true);
    };

    const handleMaximize = () => {
        setIsMinimized(false);
    };

    useEffect(() => {
        // Apply grayscale and stop rain after 15 seconds
        const grayscaleTimer = setTimeout(() => {
            setGrayscaleActive(true);
            setRainStopped(true);
            // Show Rene image at the end
            setReneVisible(true);
        }, 15000);

        return () => {
            clearTimeout(grayscaleTimer);
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
        <>
            <div className={`${styles.page} ${isTransitioning ? styles.fadeOut : ''}`}>
                <div className={styles.loadingContainer}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src='/Golconda - no men.jpg'
                            alt='Golconda background'
                            fill
                            className={`${styles.backgroundImage} ${grayscaleActive ? styles.grayscale : ''}`}
                            priority
                        />
                        {/* Raining men */}
                        <div className={`${styles.rainingMen} ${rainStopped ? styles.rainStopped : ''}`}>
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
                        {/* René Magritte portrait with fade */}
                        <div className={`${styles.renePortrait} ${reneVisible ? styles.reneVisible : ''}`}>
                            <Image
                                src='/Rene.png'
                                alt='René Magritte'
                                width={400}
                                height={600}
                                className={styles.reneImage}
                                priority
                            />
                        </div>
                    </div>

                    <div className={styles.Timeline}>
                        <TimelineBar
                            onYearChange={handleYearChange}
                            initialYear={1967}
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
                                        <h1>Death</h1>
                                        <p>
                                            René Magritte passed away on August 15,
                                            1967, in Brussels, leaving behind a
                                            legacy that continues to inspire and
                                            challenge our perception of reality.
                                        </p>
                                        <p>
                                            His surrealist vision remains one of the
                                            most influential in modern art, forever
                                            changing how we see the world around us.
                                        </p>
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
                            type='regular'
                            onClick={handleRoom}>
                            ROOM
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

