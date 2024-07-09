import styles from "../styles/about.module.css";
import Image from "next/image"


const aboutPage = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className={styles.headText}>
                        PlantCARE <span>App</span>
                    </h1>
                    <h2 className={styles.subHeadText}>
                        A watering calendar
                    </h2>
                    <div className={styles.descriptionText}>
                        PlantCARE helps you keep track of
                    </div>
                    <div className={styles.descriptionText}>
                        your plants’ watering schedule
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={'/manAboutFlowers.png'}
                        alt={'aboutInitImage'}
                        width={650}
                        height={506}
                        className={styles.aboutPageImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default aboutPage;
