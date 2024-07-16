import styles from "../styles/editProfile.module.css";

const editProfilePage = () => {
    return (
        <div className={styles.container}>
            <p className={styles.path}> Home {">"} Edit profile </p>
            <div className={styles.editContainer}>
                <div className={styles.nameAndPhoto}>
                    <div className={styles.name}>
                        
                    </div>
                    <div className={styles.photo}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default editProfilePage;