import styles from "../styles/search.module.css";
import Search from "../components/Search";

const searchPage = () => {
  return (
    <div>
      <Search />
      <div className={styles.categoriesContainer}>
        <h1> Popular categories </h1>
        <div className={styles.flowersContainer}> Pet friendly </div>
        <div className={styles.flowersContainer}> Fruit bearing</div>
        <div className={styles.flowersContainer}> Large</div>
        <div className={styles.flowersContainer}> Shade tolerant</div>
        <div className={styles.flowersContainer}> Easy care</div>
        <div className={styles.flowersContainer}> Palms</div>
      </div>
    </div>
  );
};

export default searchPage;
