"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Button from "@/app/components/Button/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import FramesGrid from "./FramesGrid";

export default function Room() {
    const router = useRouter();
    const [isDragging, setIsDragging] = useState(false);
    const [translateX, setTranslateX] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const containerRef = useRef(null);
    const startXRef = useRef(0);
    const translateXRef = useRef(0);

    const handleYearChange = (year) => {
        console.log("Selected year:", year);
    };

    useEffect(() => {
        translateXRef.current = translateX;
    }, [translateX]);

    // Calculate image width and set initial position
    useEffect(() => {
        const calculateImageWidthAndCenter = () => {
            const img = new window.Image();
            img.src = "/room.png";
            img.onload = () => {
                const aspectRatio = img.naturalWidth / img.naturalHeight;
                const viewportHeight = window.innerHeight;
                const viewportWidth = window.innerWidth;
                const calculatedWidth = viewportHeight * aspectRatio;
                setImageWidth(calculatedWidth);

                // Center the image horizontally initially
                if (calculatedWidth > viewportWidth) {
                    const initialTranslateX =
                        -(calculatedWidth - viewportWidth) / 2;
                    setTranslateX(initialTranslateX);
                } else {
                    setTranslateX(0);
                }
            };
        };

        calculateImageWidthAndCenter();
        const handleResize = () => calculateImageWidthAndCenter();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleBack = () => {
        router.push("/");
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/pages/Birth");
        }, 600);
    };

    const handleMouseDown = useCallback((e) => {
        setIsDragging(true);
        startXRef.current = e.clientX - translateXRef.current;
        e.preventDefault();
    }, []);

    const handleMouseMove = useCallback(
        (e) => {
            const x = e.clientX - startXRef.current;
            const viewportWidth = window.innerWidth;
            // Calculate limits based on the actual image width
            // maxTranslate: left edge of image aligns with left edge of viewport (no white space on left)
            // minTranslate: right edge of image aligns with right edge of viewport (no white space on right)
            const maxTranslate = 0;
            const minTranslate =
                imageWidth > 0 ? -(imageWidth - viewportWidth) : -viewportWidth;

            // Ensure we don't go beyond limits to prevent white space
            const newTranslateX = Math.max(
                minTranslate,
                Math.min(maxTranslate, x)
            );
            setTranslateX(newTranslateX);
        },
        [imageWidth]
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);

            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    return (
        <div
            className={`${styles.roomContainer} ${isTransitioning ? styles.fadeOut : ''}`}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}>
            {/* Timeline Bar */}
            <div className={styles.timelineBarWrapper}>
                <TimelineBar onYearChange={handleYearChange} />
            </div>

            {/* Background Image Container */}
            <div
                className={styles.backgroundWrapper}
                style={{
                    transform: `translateX(${translateX}px)`,
                    width: imageWidth > 0 ? `${imageWidth}px` : "auto",
                }}>
                <Image
                    src='/room.png'
                    alt='Room background'
                    width={4000}
                    height={1600}
                    className={styles.backgroundImage}
                    priority
                    unoptimized
                />
            </div>

            {/* Content */}
            <div
                className={styles.contentWrapper}
                style={{
                    transform: `translateX(${translateX}px)`,
                    width: imageWidth > 0 ? `${imageWidth}px` : "100%",
                }}>
                <FramesGrid />
            </div>

            {/* Navigation Buttons */}
            <div className={styles.backButton}>
                <Button
                    type='back'
                    onClick={handleBack}>
                    BACK
                </Button>
            </div>
            <div className={styles.nextButton}>
                <Button
                    type='next'
                    onClick={handleNext}>
                    NEXT
                </Button>
            </div>
        </div>
    );
}
