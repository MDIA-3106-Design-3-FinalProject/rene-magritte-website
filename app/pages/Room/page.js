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
    const containerRef = useRef(null);
    const startXRef = useRef(0);
    const translateXRef = useRef(0);

    const handleYearChange = (year) => {
        console.log("Selected year:", year);
    };

    useEffect(() => {
        translateXRef.current = translateX;
    }, [translateX]);

    // image width
    useEffect(() => {
        const calculateImageWidth = () => {
            const viewportHeight = window.innerHeight;
            const aspectRatio = 2.5;
            const calculatedWidth = viewportHeight * aspectRatio;
            setImageWidth(calculatedWidth);
        };

        calculateImageWidth();
        window.addEventListener("resize", calculateImageWidth);
        return () => window.removeEventListener("resize", calculateImageWidth);
    }, []);

    useEffect(() => {
        const img = new window.Image();
        img.src = "/room.png";
        img.onload = () => {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            const viewportHeight = window.innerHeight;
            const calculatedWidth = viewportHeight * aspectRatio;
            setImageWidth(calculatedWidth);
        };
    }, []);

    const handleBack = () => {
        router.push("/");
    };

    const handleNext = () => {
        console.log("Next button clicked");
    };

    const handleMouseDown = useCallback((e) => {
        setIsDragging(true);
        startXRef.current = e.clientX - translateXRef.current;
        e.preventDefault();
    }, []);

    const handleMouseMove = useCallback(
        (e) => {
            const x = e.clientX - startXRef.current;
            // Limit movement: 0 (start) to the end of the image
            const maxTranslate = 0;
            const viewportWidth = window.innerWidth;
            // Calculate minimum limit based on the actual image width
            const minTranslate =
                imageWidth > 0 ? -(imageWidth - viewportWidth) : -viewportWidth;

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
            className={styles.roomContainer}
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
                <Button type="back" onClick={handleBack}>BACK</Button>
            </div>
            <div className={styles.nextButton}>
                <Button type="next" onClick={handleNext}>NEXT</Button>
            </div>
        </div>
    );
}

