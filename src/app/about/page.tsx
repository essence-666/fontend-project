import styles from "../styles/about.module.css";
import Image from "next/image";
import manAboutFlowers from "../../../public/assets/manAboutFlowers.png";
import womanAboutFlowers from "../../../public/assets/womanAboutFlowers.png";
import wateringCalendar from "../../../public/assets/wateringCalendarAbout.png";
import plantSearch from "../../../public/assets/plantSearchAbout.png";

const aboutPage = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className={styles.headText}>
                        PlantCARE <span>App</span>
                    </h1>
                    <h2 className={styles.subHeadText}>A plant care calendar</h2>
                    <div className={styles.descriptionText}>
                        PlantCARE helps you keep track of your plants' watering schedule
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image

                        src={manAboutFlowers}
                        alt={"aboutInitImage"}
                        width={650}
                        height={506}
                        className={styles.aboutPageImage}
                    />
                </div>
            </div>
            <div className={styles.sticker}>
                <Image
                    src={womanAboutFlowers}
                    alt={"womanAboutFlowers"}
                    className={styles.stickerImage}
                />

                <div className={styles.stickerText}>
                    <h2>Watering reminders done right</h2>
                    <p>
                        We often forget to take care of our little leafy friends, and they
                        get upset!
                    </p>
                    <p>
                        We believe that establishing a clear and concise watering schedule
                        is very easy!
                    </p>
                    <p>
                        Tell PlantCARE how you want your plants watered, and it will remind
                        you with a notification if you forget.
                    </p>
                </div>
            </div>

            <div className={styles.stickerContainer}>
                <div className={styles.smallLeftSticker}>
                    <Image
                        src={wateringCalendar}
                        alt="wateringCalendarAbout"
                        className={styles.smallLeftStickerImage}
                    />

                    <div className={styles.stickerText}>
                        <h2>Watering Calendar</h2>
                        <p>Organize and plan your plant care schedule for the future!</p>
                    </div>
                </div>

                <div className={styles.smallRightSticker}>
                    <Image
                        src={plantSearch}
                        alt="plantSearchAbout"
                        className={styles.smallRightStickerImage}
                    />

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
