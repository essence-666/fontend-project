"use client"

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import "./globals.css";
import styles from "./styles/layout.module.css";
import "@uploadthing/react/styles.css";

type LayoutProps = {
    children: ReactNode;
    currentPath: string;
};

const Layout = ({ children, currentPath }: LayoutProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <html>
        <head>
            <title>plantCare</title>
        </head>
        <body>
        <header>
            <nav className={styles.nav}>
                <p id="title">PlantCARE</p>
                <button className={styles.menuButton} onClick={toggleMenu}>
                    {'☰'}
                </button>
                <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
                    <Link href="/" passHref>
                        <button className={`${styles.button3} ${currentPath === "/" ? styles.activeButton : ""}`} onClick={toggleMenu}>
                            Home Page
                        </button>
                    </Link>
                    <Link href="/about" passHref>
                        <button className={`${styles.button3} ${currentPath === "/about" ? styles.activeButton : ""}`} onClick={toggleMenu}>
                            About
                        </button>
                    </Link>
                    <Link href="/profile" passHref>
                        <button className={`${styles.button3} ${currentPath === "/profile" ? styles.activeButton : ""}`} onClick={toggleMenu}>
                            Profile
                        </button>
                    </Link>
                    <Link href="/search" passHref>
                        <button className={`${styles.button3} ${currentPath === "/search" ? styles.activeButton : ""}`} onClick={toggleMenu}>
                            Search
                        </button>
                    </Link>
                    <Link href="/calendar" passHref>
                        <button className={`${styles.button3} ${currentPath === "/calendar" ? styles.activeButton : ""}`} onClick={toggleMenu}>
                            Calendar
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
        <main>{children}</main>
        <footer></footer>
        </body>
        </html>
    );
};

export default Layout;
