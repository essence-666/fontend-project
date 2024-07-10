import React, { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";
import styles from "./styles/layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
              <button className={styles.button3}>Home Page</button>
            </Link>
            <Link href="/about" passHref>
              <button className={styles.button3}>About</button>
            </Link>
            <Link href="/profile" passHref>
              <button className={styles.button3}>Profile</button>
            </Link>
            <Link href="/search" passHref>
              <button className={styles.button3}>Search </button>
            </Link>
            <Link href="/calendar" passHref>
              <button className={styles.button3}>Calendar</button>
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
