import styles from "../styles/profile.module.css";
import Image from "next/image"

const profilePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfoCalendar}> 
          <div className={styles.infoContainer}>
              <div className={styles.imageContainer}>
                <Image className={styles.image}
                    src={'/person.jpeg'}
                    alt={'personInitPage'}
                    width={200}
                    height={200}
                />
              </div>
              <div className={styles.textContainer}>
                <h1>Boris Griforievich</h1>
                <div className={styles.location}>
                  <Image className={styles.miniImage}
                      src={'/locationSign.png'}
                      alt={'personInitPage'}
                      width={15}
                      height={15}
                  />
                  Innopolis, Russia
                </div>
                <div className={styles.email}>
                  <Image className={styles.miniImage}
                      src={'/emailSign.png'}
                      alt={'personInitPage'}
                      width={15}
                      height={15}
                  />
                  b.grigorievich@example.com
                </div>
                <div className={styles.descriptionText}>
                Hello everyone! I am a young plant enthusiast!
                </div>
              </div>
          </div>
          <div className={styles.calendarContainer}>
              
          </div>
      </div>
      <div className={styles.containerCollection}>
        
      </div>
    </div>
  );
};

export default profilePage;
