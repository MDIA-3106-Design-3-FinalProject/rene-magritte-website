"use client";

import styles from "./Credits.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/Button";
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
                                <h1>About</h1>
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
                        <br />
                        <TextBox>
                            <div className={styles.TextItems}>
                                <p>Galconda — 1953 </p>
                            </div>
                        </TextBox>
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
