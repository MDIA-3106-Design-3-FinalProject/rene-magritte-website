"use client";

import styles from "@/app/pages/Seducer/Seducer.module.css";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/Button/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

export default function Seducer() {
    const router = useRouter();
    const [isMinimized, setIsMinimized] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showSea, setShowSea] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleYearChange = (year) => {
        console.log("Selected year:", year);
    };

    const handleBack = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/Birth");
        }, 600);
    };

    const handleNext = () => {
        setShowSea(true);
        setTimeout(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                router.push("/pages/EarlyCareer");
            }, 600);
        }, 2000); // Sea slides for 2 seconds before transitioning
    };

    const handleMinimize = () => {
        setIsMinimized(true);
    };

    const handleMaximize = () => {
        setIsMinimized(false);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
                setMousePosition({ x, y });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    const imageStyle = {
        transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px) rotate(${mousePosition.x * 0.3}deg)`,
        transition: 'transform 0.1s ease-out',
    };

    return (
        <>
            <div className={`${styles.page} ${isTransitioning ? styles.fadeOut : ''}`} ref={containerRef}>
                <div className={styles.loadingContainer}>
                    <div className={styles.imageWrapper}>
                        {!showSea ? (
                            <Image
                                src='/The Seducer.jpg'
                                alt='The Seducer'
                                fill
                                className={styles.backgroundImage}
                                style={imageStyle}
                                priority
                            />
                        ) : (
                            <>
                                <Image
                                    src='/The Seducer.jpg'
                                    alt='The Seducer'
                                    fill
                                    className={styles.backgroundImage}
                                    style={imageStyle}
                                    priority
                                />
                                <Image
                                    src='/sea.png'
                                    alt='Sea'
                                    fill
                                    className={`${styles.backgroundImage} ${styles.seaImage}`}
                                    priority
                                />
                            </>
                        )}
                    </div>

                    {!showSea && (
                        <>
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
                                        <h1>The Seducer</h1>
                                        <p>
                                            In 1908, Magritte's family moved to
                                            Châtelet, where his artistic
                                            curiosity deepened. The landscape
                                            around him began to shape his
                                            perception of reality.
                                        </p>
                                        <p>
                                            This period marked the beginning of
                                            his fascination with the mysterious
                                            and the surreal, elements that would
                                            define his later work.
                                        </p>
                                        <button
                                            className={styles.seducerButton}>
                                            The Seducer — 1908
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
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

