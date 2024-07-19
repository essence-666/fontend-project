"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import "./globals.css";
import styles from "./styles/layout.module.css";
import "@uploadthing/react/styles.css";

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
            <Link
              href="/"
              passHref
              className={`${styles.button3} ${activeButton === "/" ? styles.activeButton : ""}`}
              onClick={() => handleButtonClick("/")}
            >
              Home Page
            </Link>
            <Link
              href="/about"
              passHref
              className={`${styles.button3} ${activeButton === "/about" ? styles.activeButton : ""}`}
              onClick={() => handleButtonClick("/about")}
            >
              About
            </Link>
            <Link
              href="/profile"
              passHref
              className={`${styles.button3} ${activeButton === "/profile" ? styles.activeButton : ""}`}
              onClick={() => handleButtonClick("/profile")}
            >
              Profile
            </Link>
            <Link
              href="/search"
              passHref
              className={`${styles.button3} ${activeButton === "/search" ? styles.activeButton : ""}`}
              onClick={() => handleButtonClick("/search")}
            >
              Search
            </Link>
            <Link
              href="/calendar"
              passHref
              className={`${styles.button3} ${activeButton === "/calendar" ? styles.activeButton : ""}`}
              onClick={() => handleButtonClick("/calendar")}
            >
              Calendar
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