// src/app/layout.tsx
import React, { ReactNode } from "react";
import Link from "next/link";
import type {Metadata} from "next";
import "./globals.css";
import "@uploadthing/react/styles.css";
import Header from "./components/Header"
type LayoutProps = {
  children: ReactNode;
};
export const metadata: Metadata = {
    title: 'Take care of your plants',
    description: 'Do not forget to water your favorite flowers!',
    keywords: "plants flowers watering health green dandelion orchid beauty",

}


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
