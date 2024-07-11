import styles from "../styles/search.module.css";
import Search from "../components/Search";
import flower from "../../../public/assets/romashki.png";
import Image from "next/image";
import Link from "next/link";

const searchPage = () => {
  return (
    <div>
      <Search />

      <h1 style={{ marginLeft: "5%" }}> Popular categories: </h1>
      <div className={styles.categoriesContainer}>
        <div className={styles.flowersContainer}>
          <Link href="/" passHref className={styles.Links}>
            <Image src={flower} alt="not supported" width={300} height={134} />
            <h3 className={styles.textInsideFlow}>Pet friendly</h3>
          </Link>
        </div>
        <div className={styles.flowersContainer}>
          <Link href="/" passHref className={styles.Links}>
            <Image src={flower} alt="not supported" width={300} height={134} />
            <h3 className={styles.textInsideFlow}>Fruit bearing</h3>
          </Link>
        </div>
        <div className={styles.flowersContainer}>
          <Link href="/" passHref className={styles.Links}>
            <Image src={flower} alt="not supported" width={300} height={134} />
            <h3 className={styles.textInsideFlow}>Large</h3>
          </Link>
        </div>
        <div className={styles.flowersContainer}>
          <Link href="/" passHref className={styles.Links}>
            <Image src={flower} alt="not supported" width={300} height={134} />
            <h3 className={styles.textInsideFlow}>Shade tolerant</h3>
          </Link>
        </div>
        <div className={styles.flowersContainer}>
          <Link href="/" passHref className={styles.Links}>
            <Image src={flower} alt="not supported" width={300} height={134} />
            <h3 className={styles.textInsideFlow}>Easy care</h3>
          </Link>
        </div>
        <div className={styles.flowersContainer}>
          <Link href="/" passHref className={styles.Links}>
            <Image src={flower} alt="not supported" width={300} height={134} />
            <h3 className={styles.textInsideFlow}>Palms</h3>
          </Link>
        </div>
        <div className={styles.flowersContainer}>
          <Link href="/" passHref className={styles.Links}>
            <Image src={flower} alt="not supported" width={300} height={134} />
            <h3 className={styles.textInsideFlow}>Hangling</h3>
          </Link>
        </div>
        <div className={styles.flowersContainer}>
          <Link href="/" passHref className={styles.Links}>
            <Image src={flower} alt="not supported" width={300} height={134} />
            <h3 className={styles.textInsideFlow}>Office</h3>
          </Link>
        </div>
        <div className={styles.flowersContainer}>
          <Link href="/" passHref className={styles.Links}>
            <Image src={flower} alt="not supported" width={300} height={134} />
            <h3 className={styles.textInsideFlow}>Bedroom</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default searchPage;
