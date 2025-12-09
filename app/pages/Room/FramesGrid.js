"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./FramesGrid.module.css";

export default function FramesGrid() {
    const router = useRouter();

    const handleChildFrameClick = () => {
        router.push("/pages/Birth");
    };

    const handleSeducerFrameClick = () => {
        router.push("/pages/Seducer");
    };

    return (
        <div className={styles.framesGrid}>
            {/* Top Row - 5 frames */}
            <div
                className={`${styles.frame} ${styles.clickableFrame}`}
                style={{ top: "10%", left: "5%" }}
                onClick={handleChildFrameClick}>
                <Image
                    src='/Rene Magritte - Child.jpg'
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
                    src='/The Seducer.jpg'
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
                className={`${styles.frame} ${styles.clickableFrame} ${styles.falseMirrorFrame}`}
                style={{ top: "10%", left: "30%" }}>
                <div className={styles.falseMirrorContent}>
                    <div className={styles.skyWrapper}>
                        <Image
                            src='/sky.jpg'
                            alt='Sky background'
                            width={180}
                            height={220}
                            className={styles.skyImage}
                        />
                        <Image
                            src='/sky.jpg'
                            alt='Sky background duplicate'
                            width={180}
                            height={220}
                            className={styles.skyImage}
                        />
                    </div>
                    <Image
                        src='/eye.png'
                        alt='Eye'
                        width={180}
                        height={220}
                        className={styles.eyeImage}
                    />
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
                    src='/The Human Condition.webp'
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
                    src='/Forethought.png'
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
                    src='/Mes Reves.jpg'
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
                    src='/The lost jobey.webp'
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
                    src='/The art of living.jpg'
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
