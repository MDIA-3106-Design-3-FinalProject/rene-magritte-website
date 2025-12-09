// components/TimelineBar.js
import { useState, useEffect, useRef } from "react";
import YearButton from "../YearButton/YearButton";
import styles from "./TimelineBar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TimelineBar({ onYearChange }) {
    const router = useRouter();
    const [activeYear, setActiveYear] = useState(null);
    const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const yearDropdownRef = useRef(null);
    const hamburgerRef = useRef(null);

    const years = [1898, 1908, 1912, 1916, 1920, 1927, 1930, 1943, 1967];

    const handleYearClick = (year) => {
        setActiveYear(year);
        setIsYearDropdownOpen(false);
        if (onYearChange) {
            onYearChange(year);
        }
    };
    const handleAbout = () => {
        router.push("/pages/About");
        setIsHamburgerOpen(false);
    };
    const handleCredits = () => {
        router.push("/pages/Credits");
        setIsHamburgerOpen(false);
    };

    const handleLogoClick = () => {
        router.push("/pages/Home");
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                yearDropdownRef.current &&
                !yearDropdownRef.current.contains(event.target)
            ) {
                setIsYearDropdownOpen(false);
            }
            if (
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsHamburgerOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.timelineContainer}>
            <div className={styles.timelineBar}>
                <div 
                    className={styles.logo}
                    onClick={handleLogoClick}
                    style={{ cursor: 'pointer' }}>
                    <Image
                        src='/logo.svg'
                        alt='Magritte Logo'
                        width={100}
                        height={24}
                        className={styles.logo}
                    />
                </div>

                {/* Desktop Year Container */}
                <div className={styles.yearContainer}>
                    {years.map((year) => (
                        <YearButton
                            key={year}
                            year={year}
                            isActive={activeYear === year}
                            onClick={handleYearClick}
                        />
                    ))}
                </div>

                {/* Mobile/Tablet Year Dropdown */}
                <div
                    className={styles.yearDropdown}
                    ref={yearDropdownRef}>
                    <button
                        className={styles.yearDropdownButton}
                        onClick={() =>
                            setIsYearDropdownOpen(!isYearDropdownOpen)
                        }>
                        {activeYear || "Select Year"}
                        <svg
                            className={`${styles.dropdownArrow} ${
                                isYearDropdownOpen ? styles.open : ""
                            }`}
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M4 6L8 10L12 6'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>
                    {isYearDropdownOpen && (
                        <div className={styles.yearDropdownMenu}>
                            {years.map((year) => (
                                <button
                                    key={year}
                                    className={`${styles.yearDropdownItem} ${
                                        activeYear === year ? styles.active : ""
                                    }`}
                                    onClick={() => handleYearClick(year)}>
                                    {year}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Side Wrapper - Desktop Navigation Links & Mobile Hamburger */}
                <div className={styles.rightSideWrapper}>
                    {/* Desktop Navigation Links */}
                    <div className={styles.navLinks}>
                        <p
                            onClick={handleAbout}
                            className={styles.navLink}>
                            About
                        </p>
                        <p
                            onClick={handleCredits}
                            className={styles.navLink}>
                            Credits
                        </p>
                    </div>

                    {/* Mobile/Tablet Hamburger Menu */}
                    <div
                        className={styles.hamburgerMenu}
                        ref={hamburgerRef}>
                        <button
                            className={styles.hamburgerButton}
                            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                            aria-label='Menu'>
                            <span
                                className={`${styles.hamburgerLine} ${
                                    isHamburgerOpen ? styles.open : ""
                                }`}></span>
                            <span
                                className={`${styles.hamburgerLine} ${
                                    isHamburgerOpen ? styles.open : ""
                                }`}></span>
                            <span
                                className={`${styles.hamburgerLine} ${
                                    isHamburgerOpen ? styles.open : ""
                                }`}></span>
                        </button>
                        {isHamburgerOpen && (
                            <div className={styles.hamburgerDropdown}>
                                <button
                                    className={styles.hamburgerCloseButton}
                                    onClick={() => setIsHamburgerOpen(false)}
                                    aria-label='Close menu'>
                                    <svg
                                        className={styles.hamburgerCloseIcon}
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M18 6L6 18M6 6L18 18'
                                        strokeWidth='2.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    </svg>
                                </button>
                                <button
                                    className={styles.hamburgerItem}
                                    onClick={handleAbout}>
                                    About
                                </button>
                                <button
                                    className={styles.hamburgerItem}
                                    onClick={handleCredits}>
                                    Credits
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
