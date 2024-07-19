// src/app/layout.tsx
"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";
import "@uploadthing/react/styles.css";
import Header from "./components/Header"
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

  return (
    <html>
      <head>
        <title>PlantCARE</title>
      </head>
      <body>
        <Header/>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
};

export default Layout;
