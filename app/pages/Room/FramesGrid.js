import Image from "next/image";
import styles from "./FramesGrid.module.css";

export default function FramesGrid() {
    return (
        <div className={styles.framesGrid}>
            {/* Top Row - 5 frames */}
            <div
                className={styles.frame}
                style={{ top: "10%", left: "8%" }}>
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
                style={{ top: "10%", left: "22%" }}>
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
                style={{ top: "10%", left: "36%" }}>
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
                style={{ top: "10%", left: "50%" }}>
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
                style={{ top: "10%", left: "64%" }}>
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
                style={{ top: "38%", left: "8%" }}>
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
                style={{ top: "38%", left: "22%" }}>
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
                style={{ top: "32%", left: "38%" }}>
                <Image
                    src='/frame.png'
                    alt='Frame'
                    width={220}
                    height={280}
                    className={styles.frameImage}
                />
            </div>
            <div
                className={styles.frame}
                style={{ top: "38%", left: "56%" }}>
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

            {/* Bottom Row - 3 frames */}
            <div
                className={styles.frame}
                style={{ top: "66%", left: "8%" }}>
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
                style={{ top: "66%", left: "22%" }}>
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
                style={{ top: "66%", left: "36%" }}>
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

