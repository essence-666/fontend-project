import styles from "../styles/profile.module.css";
import Image from "next/image";
import romashiPhoto from "../../../public/assets/romashki.png";

export default function FlowerContainer() {
  return (
    <div className={styles.plant}>
      <div className={styles.plantInfo}>
        <Image
          className={styles.plantImage}
          src={romashiPhoto}
          alt={"personInitPage"}
          width={166}
          height={134}
        />
        <p className={styles.plantName}> Romashka </p>
      </div>
    </div>
  );
}
