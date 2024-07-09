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
        <title>plantsCare</title>
      </head>
      <body>
        <header>
          <nav>
            <Link href="/" passHref>
              <button>Home Page</button>
            </Link>
            <Link href="/about" passHref>
              <button>About</button>
            </Link>
            <Link href="/items" passHref>
              <button>Items</button>
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
