import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSansSemiCondensed = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["normal", "italic"],
    display: "swap",
});

export const metadata = {
    title: "René Magritte - Interactive Website",
    description:
        "An interactive digital publication exploring the life, work, and artistic legacy of the Belgian surrealist painter René Magritte",
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={openSansSemiCondensed.variable}>
            <body>{children}</body>
        </html>
    );
}
