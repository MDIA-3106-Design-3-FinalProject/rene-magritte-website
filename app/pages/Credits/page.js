"use client";

import styles from "./Credits.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

export default function Credits() {
    const router = useRouter();

    const handleStart = () => {
        console.log("Start button clicked");
    };
    const handleYearChange = (year) => {
        console.log("Selected year:", year);
        // optional: load different content based on year
    };
    return (
        <>
            <div className={styles.page}>
                {/* Logo */}
                <div className={styles.loadingContainer}>
                    <Image
                        src='/loading-page.png'
                        alt='Loading background'
                        fill
                        className={styles.backgroundImage}
                        priority
                    />

                    <div className={styles.Timeline}>
                        <TimelineBar onYearChange={handleYearChange} />
                    </div>
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

                    <div className={styles.TextContainer}>
                        <TextBox>
                            <div className={styles.TextItems}>
                                <h1>CREDITS</h1>
                                <p>
                                    Story and text inspired by the life and
                                    works of René Magritte (1898–1967).
                                </p>
                                <p>
                                    Information adapted from renemagritte.org
                                    and public museum archives for educational
                                    storytelling.
                                </p>
                                <p>
                                    This website was created by Bruna Guarizo
                                    and Cesaria Monforte
                                </p>
                            </div>
                        </TextBox>
                    </div>

                </div>
            </div>
        </>
    );
}
