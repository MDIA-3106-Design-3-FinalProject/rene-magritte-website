"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Button from "./components/Button/Button";

//-----PAGES---------//
import Credits from "./pages/Credits/page";

export default function Home() {
    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleStart = () => {
        console.log("Start button clicked");
        setIsTransitioning(true);
        // Wait for fade out animation to complete before navigating
        setTimeout(() => {
            router.push("/pages/Home");
        }, 600); // Wait for fade out
    };

    return (
        <div className={styles.page}>
            {/* Transition overlay */}
            {isTransitioning && (
                <div className={styles.transitionOverlay}></div>
            )}
            <div
                className={`${styles.loadingContainer} ${
                    isTransitioning ? styles.fadeOut : ""
                }`}>
                <Image
                    src='/loading-page.png'
                    alt='Loading background'
                    fill
                    className={styles.backgroundImage}
                    priority
                />

                {/* Bowler Hat */}
                <div className={styles.bowlerHat}>
                    <Image
                        src='/bowler_hat.png'
                        alt='Bowler Hat'
                        width={400}
                        height={400}
                        className={styles.hatImage}
                    />
                </div>

                {/* Apple */}
                <div className={styles.apple}>
                    <Image
                        src='/apple.png'
                        alt='Apple'
                        width={300}
                        height={300}
                        className={styles.appleImage}
                    />
                </div>

                {/* Logo */}
                <div className={styles.logoContainer}>
                    <Image
                        src='/logo.svg'
                        alt='Magritte Logo'
                        width={600}
                        height={580}
                        className={styles.logo}
                    />
                </div>

                {/* Start Button */}
                <div className={styles.buttonContainer}>
                    <Button
                        type='regular'
                        onClick={handleStart}>
                        START
                    </Button>
                </div>
            </div>
        </div>
    );
}
