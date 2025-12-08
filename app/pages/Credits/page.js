"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Credits.module.css";
import Button from "@/app/components/Button";
import TimelineBar from "@/app/components/TimelineBar/TimelineBar";

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

                    <div className={styles.buttonContainer}>
                        <Button onClick={handleStart}>BACK</Button>
                        <Button onClick={handleStart}>NEXT</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
