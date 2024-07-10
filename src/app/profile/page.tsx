import Link from "next/link";
import styles from "../styles/profile.module.css";
import Image from "next/image"

const profilePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfoCalendar}> 
          <div className={styles.infoContainer}>
              <div className={styles.imageContainer}>
                <Image className={styles.image}
                    src={'/assets/person.jpeg'}
                    alt={'personInitPage'}
                    width={200}
                    height={200}
                />
              </div>
              <div className={styles.textContainer}>
                <h1 className={styles.name}>Boris Griforievich</h1>
                <div className={styles.location}>
                  <Image className={styles.miniImage}
                      src={'/assets/locationSign.png'}
                      alt={'personInitPage'}
                      width={15}
                      height={15}
                  />
                  Innopolis, Russia
                </div>
                <div className={styles.email}>
                  <Image className={styles.miniImage}
                      src={'/assets/emailSign.png'}
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
              <h1 className={styles.calendarHead}>Calendar preview</h1>
              <div className={styles.calendarPreview}>
                
              </div>
              <div>
                <Link href="/calendar" passHref>
                  <button className={styles.toCalendarButton}>Go to calendar</button>
                </Link>
              </div>
          </div>
      </div>
      <div className={styles.containerCollection}>
        
      </div>
    </div>
  );
};

export default profilePage;
