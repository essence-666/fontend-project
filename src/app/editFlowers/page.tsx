import styles from "../styles/editFlowers.module.css";
import editPhoto from "../../../public/assets/editSecond.png"
import photoPhoto from "../../../public/assets/photo.png";
import lupaPhoto from "../../../public/assets/lupa.png";
import homePhoto from "../../../public/assets/home.png";
import dropPhoto from "../../../public/assets/drop.png"
import Image from "next/image";

const editFlowerPage = () => {
    return (
        <div className={styles.container}>
            <p className={styles.path}> Home {">"} Edit flower </p>
            <div className={styles.editContainer}>
                <div className={styles.nameAndPhoto}>
                    <div className={styles.name}>
                        <div className={styles.nameAndIcon}>
                            <div className={styles.head}>Name</div>
                            <Image
                                className={styles.image}
                                src={editPhoto}
                                alt={"personInitPage"}
                                width={23}
                                height={23}
                            />
                        </div>
                        <input className={styles.labelContainer} placeholder="Name..."></input>
                    </div>
                    <div className={styles.photo}>
                        <div className={styles.head}>Photo</div>
                        <div className={styles.placeForPhoto}>
                            <Image
                                className={styles.image}
                                src={photoPhoto}
                                alt={"personInitPage"}
                                width={23}
                                height={23}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.scientificName}>
                    <div className={styles.nameAndIconAndName}>
                        <div className={styles.head}>Scientific name</div>
                        <Image
                            className={styles.image}
                            src={lupaPhoto}
                            alt={"lupa"}
                            width={23}
                            height={23}
                        />
                        <div className={styles.head}>(optional)</div>
                    </div>
                    <input className={styles.labelContainerLong} placeholder="Scientific name..."></input>
                </div>
                <div className={styles.location}>
                    <div className={styles.nameAndIconLong}>
                        <div className={styles.head}>Location / Room</div>
                        <Image
                            className={styles.image}
                            src={homePhoto}
                            alt={"personInitPage"}
                            width={23}
                            height={23}
                        />
                    </div>
                    <input className={styles.labelContainerLong} placeholder="Location..."></input>
                </div>
                <div className={styles.watering}>
                    <div className={styles.nameAndIcon}>
                        <div className={styles.head}>Watering</div>
                        <Image 
                            className={styles.image}
                            src={dropPhoto}
                            alt={"drop"}
                            width={23}
                            height={23}
                        />
                    </div>
                    <div className={styles.wateringContainer}>
                        <div className={styles.head}>Every</div>
                        <input className={styles.labelContainerSmall} placeholder="Number..."></input>
                        <input className={styles.labelContainerMiddle} placeholder="Days/Weeks/Months..."></input>
                        <div className={styles.buttonContainer}>
                            <button className={styles.saveButton}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default editFlowerPage;