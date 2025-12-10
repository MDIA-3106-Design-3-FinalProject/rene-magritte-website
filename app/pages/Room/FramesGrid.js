"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import styles from "./FramesGrid.module.css";

export default function FramesGrid() {
    const router = useRouter();
    const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
    const falseMirrorFrameRef = useRef(null);

    const handleChildFrameClick = () => {
        router.push("/pages/Birth");
    };

    const handleSeducerFrameClick = () => {
        router.push("/pages/Seducer");
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (falseMirrorFrameRef.current) {
                const rect = falseMirrorFrameRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = e.clientX - centerX;
                const deltaY = e.clientY - centerY;
                // Limit pupil movement to a smaller radius (about 8px)
                const maxDistance = 8;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const limitedDistance = Math.min(distance, maxDistance);
                const angle = Math.atan2(deltaY, deltaX);
                const limitedX = Math.cos(angle) * limitedDistance;
                const limitedY = Math.sin(angle) * limitedDistance;
                setPupilPosition({ x: limitedX, y: limitedY });
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className={styles.framesGrid}>
            {/* Top Row - 5 frames */}
            <div
                className={`${styles.frame} ${styles.clickableFrame}`}
                style={{ top: "10%", left: "5%" }}
                onClick={handleChildFrameClick}>
                <Image
                    src='/Rene-Magritte-Child-2.png'
                    alt='Rene Magritte - Child'
                    width={180}
                    height={220}
                    className={styles.framePicture}
                />
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={`${styles.frame} ${styles.clickableFrame} ${styles.seducerFrame}`}
                style={{ top: "10%", left: "17%" }}
                onClick={handleSeducerFrameClick}>
                <Image
                    src='/The Seducer-2.png'
                    alt='The Seducer'
                    width={180}
                    height={220}
                    className={`${styles.framePicture} ${styles.seducerPicture}`}
                />
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                ref={falseMirrorFrameRef}
                className={`${styles.frame} ${styles.clickableFrame} ${styles.falseMirrorFrame}`}
                style={{ top: "10%", left: "30%" }}>
                <div className={styles.falseMirrorContent}>
                    <div className={styles.skyWrapper}>
                        <Image
                            src='/sky-2.png'
                            alt='Sky background'
                            width={180}
                            height={220}
                            className={styles.skyImage}
                        />
                        <Image
                            src='/sky-2.png'
                            alt='Sky background duplicate'
                            width={180}
                            height={220}
                            className={styles.skyImage}
                        />
                    </div>
                    <div className={styles.eyeWrapper}>
                        <Image
                            src='/eye-3.png'
                            alt='Eye'
                            width={180}
                            height={220}
                            className={styles.eyeImage}
                        />
                        <div 
                            className={styles.pupil}
                            style={{
                                transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`
                            }}
                        ></div>
                    </div>
                </div>
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={`${styles.frame} ${styles.clickableFrame}`}
                style={{ top: "10%", left: "60%" }}>
                <Image
                    src='/The Human Condition-2.png'
                    alt='The Human Condition'
                    width={180}
                    height={220}
                    className={`${styles.framePicture} ${styles.framePictureCenter}`}
                />
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={`${styles.frame} ${styles.clickableFrame}`}
                style={{ top: "10%", left: "70%" }}>
                <Image
                    src='/Forethought-2.png'
                    alt='Forethought'
                    width={180}
                    height={220}
                    className={styles.framePicture}
                />
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={`${styles.frame} ${styles.clickableFrame}`}
                style={{ top: "10%", left: "80%" }}>
                <Image
                    src='/mes-reves-2.png'
                    alt='Mes Reves'
                    width={180}
                    height={220}
                    className={styles.framePicture}
                />
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>

            {/* Middle Row - 5 frames */}
            <div
                className={`${styles.frame} ${styles.clickableFrame}`}
                style={{ top: "38%", left: "5%" }}>
                <Image
                    src='/The lost jobey-2.png'
                    alt='The lost jobey'
                    width={180}
                    height={220}
                    className={styles.framePicture}
                />
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={`${styles.frame} ${styles.clickableFrame}`}
                style={{ top: "38%", left: "17%" }}>
                <Image
                    src='/The art of living-2.png'
                    alt='The art of living'
                    width={180}
                    height={220}
                    className={styles.framePicture}
                />
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={`${styles.frame} ${styles.clickableFrame} ${styles.golcondaFrame}`}
                style={{ top: "38%", left: "70%" }}>
                <div className={styles.golcondaContent}>
                    <Image
                        src='/Golconda - no men.jpg'
                        alt='Golconda background'
                        width={180}
                        height={220}
                        className={styles.golcondaBackground}
                    />
                    <div className={styles.rainingMenContainer}>
                        {Array.from({ length: 15 }, (_, i) => ({
                            id: i,
                            left: `${(i * 6.67) % 100}%`,
                            delay: `${(i * 0.2) % 3}s`,
                            duration: `${2 + (i % 2)}s`,
                        })).map((man) => (
                            <div
                                key={man.id}
                                className={styles.rainingMan}
                                style={{
                                    left: man.left,
                                    animationDelay: man.delay,
                                    animationDuration: man.duration,
                                }}>
                                <Image
                                    src='/man.png'
                                    alt='Falling man'
                                    width={20}
                                    height={26}
                                    className={styles.manImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={`${styles.frame} ${styles.clickableFrame}`}
                style={{ top: "38%", left: "80%" }}>
                <Image
                    src='/Rene.jpg'
                    alt='Rene'
                    width={180}
                    height={220}
                    className={`${styles.framePicture} ${styles.framePictureCenter}`}
                />
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
        </div>
    );
}
