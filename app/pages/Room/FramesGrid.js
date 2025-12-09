"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./FramesGrid.module.css";

export default function FramesGrid() {
    const router = useRouter();

    const handleChildFrameClick = () => {
        router.push("/pages/Birth");
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
                className={`${styles.frame} ${styles.clickableFrame}`}
                style={{ top: "10%", left: "17%" }}>
                <Image
                    src='/The Seducer.jpg'
                    alt='The Seducer'
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
                style={{ top: "10%", left: "30%" }}>
                <Image
                    src='/The False Mirror.jpg'
                    alt='The False Mirror'
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
                style={{ top: "10%", left: "60%" }}>
                <Image
                    src='/The Rape.jpg'
                    alt='The Rape'
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
                className={`${styles.frame} ${styles.clickableFrame}`}
                style={{ top: "38%", left: "70%" }}>
                <Image
                    src='/Golconda.webp'
                    alt='Golconda'
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
