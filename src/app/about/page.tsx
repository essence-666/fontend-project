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
            <div className={styles.sticker}>
                <img src={'/womanAboutFlowers.png'} alt={"womanAboutFlowers"} className={styles.stickerImage}/>
                <div className={styles.stickerText}>
                    <h2>Watering reminders done right</h2>
                    <p>We often forget to take care of our little leafy friends, and they get upset!</p>
                    <p>We believe that establishing a clear and concise watering schedule is very easy!</p>
                    <p>Tell PlantCARE how you want your plants watered, and it will remind you with a notification if you forget.</p>
                </div>
            </div>

            <div className={styles.stickerContainer}>
                <div className={styles.smallLeftSticker}>
                    <img src={"/wateringCalendarAbout.png"} alt="wateringCalendarAbout" className={styles.smallLeftStickerImage}/>
                    <div className={styles.stickerText}>
                        <h2>Watering Calendar</h2>
                        <p>Organize and plan your plant care schedule for the future!</p>
                    </div>
                </div>

                <div className={styles.smallRightSticker}>
                    <img src={"/plantSearchAbout.png"} alt="plantSearchAbout" className={styles.smallRightStickerImage}/>
                    <div className={styles.stickerText}>
                        <h2>Plant search</h2>
                        <p>Search your plants by categories or by name!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default aboutPage;