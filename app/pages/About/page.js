"use client";

import styles from "./About.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";
import TextBox from "@/app/components/TextBox/TextBox";

export default function About() {
    const router = useRouter();

    const handleStart = () => {
        // Start button handler
    };
    const handleYearChange = (year) => {
        // Year change handler
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
                            src='/apple-4.png'
                            alt='Apple'
                            width={300}
                            height={300}
                            className={styles.appleImage}
                        />
                    </div>

                    <div className={styles.TextContainer}>
                        <TextBox>
                            <div className={styles.TextItems}>
                                <h1>ABOUT US</h1>
                                <p>
                                    This digital exhibition was created to
                                    celebrate René Magritte’s art and philosophy
                                    — a journey through mystery, memory, and
                                    imagination.
                                </p>
                                <p>
                                    It reflects how one artist used thought as
                                    his medium and perception as his subject.
                                </p>
                                <p>
                                    Like Magritte himself, this project invites
                                    you to look — and then look again.
                                </p>
                            </div>
                        </TextBox>
                    </div>

                </div>
            </div>
        </>
    );
}
