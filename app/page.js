"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Button from "./components/Button";
import { useRouter } from "next/navigation";

//-----PAGES---------//
import Credits from "./pages/Credits/page";

export default function Home() {
    const router = useRouter();

    const handleStart = () => {
        console.log("Start button clicked");
        router.push("/pages/Credits"); //navigate to credits
    };

    return (
        <div className={styles.page}>
            <div className={styles.loadingContainer}>
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
