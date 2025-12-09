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
                className={styles.frame}
                style={{ top: "10%", left: "17%" }}>
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={styles.frame}
                style={{ top: "10%", left: "30%" }}>
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={styles.frame}
                style={{ top: "10%", left: "60%" }}>
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={styles.frame}
                style={{ top: "10%", left: "70%" }}>
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={styles.frame}
                style={{ top: "10%", left: "80%" }}>
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
                className={styles.frame}
                style={{ top: "38%", left: "5%" }}>
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={styles.frame}
                style={{ top: "38%", left: "17%" }}>
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={styles.frame}
                style={{ top: "38%", left: "70%" }}>
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={180}
                    height={220}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={styles.frame}
                style={{ top: "38%", left: "80%" }}>
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
