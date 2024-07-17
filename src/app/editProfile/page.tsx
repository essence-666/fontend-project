import styles from "../styles/editProfile.module.css";
import editPhoto from "../../../public/assets/editSecond.png"
import photoPhoto from "../../../public/assets/photo.png";
import emailPhoto from "../../../public/assets/emailSign.png";
import homePhoto from "../../../public/assets/home.png";
import Image from "next/image";

const editProfilePage = () => {
    return (
        <div className={styles.container}>
            <p className={styles.path}> Home {">"} Edit profile </p>
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
                <div className={styles.emailAndLocation}>
                    <div className={styles.email}>
                        <div className={styles.nameAndIcon}>
                            <div className={styles.head}>Email</div>
                            <Image
                                className={styles.image}
                                src={emailPhoto}
                                alt={"personInitPage"}
                                width={23}
                                height={23}
                            />
                        </div>
                        <input className={styles.labelContainer} placeholder="Email..."></input>
                    </div>
                    <div className={styles.location}>
                        <div className={styles.nameAndIcon}>
                            <div className={styles.head}>Location</div>
                            <Image
                                className={styles.image}
                                src={homePhoto}
                                alt={"personInitPage"}
                                width={23}
                                height={23}
                            />
                        </div>
                        <input className={styles.labelContainer} placeholder="Your location..."></input>
                    </div>
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.head}>Tell about yourself!</div>
                    <textarea className={styles.labelAboutContainer} placeholder="Write about yourself..."></textarea>
                    <button className={styles.saveButton}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default editProfilePage;