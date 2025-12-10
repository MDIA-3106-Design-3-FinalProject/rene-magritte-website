"use client";

import { createContext, useContext, useState, useRef, useEffect } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(0.5);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume;
            if (isPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch((error) => {
                        console.log("Audio play failed:", error);
                        setIsPlaying(false);
                    });
                }
            } else {
                audio.pause();
            }
        }
    }, [isPlaying, volume]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const handleEnded = () => {
                if (isPlaying) {
                    audio.play();
                }
            };
            audio.addEventListener("ended", handleEnded);
            return () => {
                audio.removeEventListener("ended", handleEnded);
            };
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const handleVolumeChange = (newVolume) => {
        const clampedVolume = Math.max(0, Math.min(1, newVolume));
        setVolume(clampedVolume);
    };

    return (
        <AudioContext.Provider value={{ isPlaying, volume, togglePlayPause, handleVolumeChange }}>
            {children}
            <audio
                ref={audioRef}
                src="/Erik Satie - Gnossiennes 1-6.mp4"
                loop
                preload="auto"
                style={{ display: "none" }}
            />
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within AudioProvider");
    }
    return context;
}

