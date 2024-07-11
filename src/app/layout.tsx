"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import "./globals.css";
import styles from "./styles/layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveButton(currentPath);
  }, []);

  const handleButtonClick = (path: string) => {
    setActiveButton(path);
  };

  return (
      <html>
      <head>
        <title>plantCare</title>
      </head>
      <body>
      <header>
        <nav>
          <p id="title">PlantCARE</p>
          <Link href="/" passHref>
            <button
                className={`${styles.button3} ${activeButton === "/" ? styles.activeButton : ""}`}
                onClick={() => handleButtonClick("/")}
            >
              Home Page
            </button>
          </Link>
          <Link href="/about" passHref>
            <button
                className={`${styles.button3} ${activeButton === "/about" ? styles.activeButton : ""}`}
                onClick={() => handleButtonClick("/about")}
            >
              About
            </button>
          </Link>
          <Link href="/profile" passHref>
            <button
                className={`${styles.button3} ${activeButton === "/profile" ? styles.activeButton : ""}`}
                onClick={() => handleButtonClick("/profile")}
            >
              Profile
            </button>
          </Link>
          <Link href="/search" passHref>
            <button
                className={`${styles.button3} ${activeButton === "/search" ? styles.activeButton : ""}`}
                onClick={() => handleButtonClick("/search")}
            >
              Search
            </button>
          </Link>
          <Link href="/calendar" passHref>
            <button
                className={`${styles.button3} ${activeButton === "/calendar" ? styles.activeButton : ""}`}
                onClick={() => handleButtonClick("/calendar")}
            >
              Calendar
            </button>
          </Link>
        </nav>
      </header>
      <main>{children}</main>

      <footer></footer>
      </body>
      </html>
  );
};

export default Layout;