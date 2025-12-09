"use client";

import styles from "@/app/pages/Death/Death.module.css";
import { useState } from "react";
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

    const handleYearChange = (year) => {
        console.log("Selected year:", year);
    };

    const handleBack = () => {
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

    return (
        <>
            <div className={`${styles.page} ${isTransitioning ? styles.fadeOut : ''}`}>
                <div className={styles.loadingContainer}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src='/Golconda.webp'
                            alt='Magritte Legacy'
                            fill
                            className={styles.backgroundImage}
                            priority
                        />
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
                    </div>
                </div>
            </div>
        </>
    );
}

