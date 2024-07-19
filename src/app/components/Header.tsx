"use clinet";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import styles from "../styles/header.module.css"
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const currentPath = usePathname();

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <header>
          <nav className={styles.nav}>
            <p id="title">PlantCARE</p>
            <button className={styles.menuButton} onClick={toggleMenu}>
              ☰
            </button>
            <div
              className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
            >
              <Link href="/" passHref>
                <button
                  className={`${styles.button3} ${currentPath === "/" ? styles.activeButton : ""}`}
                  onClick={toggleMenu}
                >
                  Home Page
                </button>
              </Link>
              <Link href="/about" passHref>
                <button
                  className={`${styles.button3} ${currentPath === "/about" ? styles.activeButton : ""}`}
                  onClick={toggleMenu}
                >
                  About
                </button>
              </Link>
              <Link href="/profile" passHref>
                <button
                  className={`${styles.button3} ${currentPath === "/profile" ? styles.activeButton : ""}`}
                  onClick={toggleMenu}
                >
                  Profile
                </button>
              </Link>
              <Link href="/search" passHref>
                <button
                  className={`${styles.button3} ${currentPath === "/search" ? styles.activeButton : ""}`}
                  onClick={toggleMenu}
                >
                  Search
                </button>
              </Link>
              <Link href="/calendar" passHref>
                <button
                  className={`${styles.button3} ${currentPath === "/calendar" ? styles.activeButton : ""}`}
                  onClick={toggleMenu}
                >
                  Calendar
                </button>
              </Link>
            </div>
          </nav>
        </header>
  )
}

export default Header
