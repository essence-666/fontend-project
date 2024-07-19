import React from "react";
import styles from "../styles/search.module.css";
import Image from "next/image";
import search from "../../../public/searchImage.png";

export default function Search() {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.searchDiv}>
        <input
          className={styles.inputBox}
          type="text"
          placeholder="Search query..."
        />
        <Image className={styles.searchImage} src={search} alt="123"></Image>
      </div>
    </div>
  );
}
