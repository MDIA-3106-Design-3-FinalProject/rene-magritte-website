"use client";

import { AudioProvider } from "../contexts/AudioContext";

export default function AudioWrapper({ children }) {
    return <AudioProvider>{children}</AudioProvider>;
}

