import styles from "../styles/calendar.module.css";
import reminderElement from "./reminder";

const dayElement = (date: string, dayName: string, isToday: boolean) => {
    const exampleRose = reminderElement("Rose", isToday)
    const exampleCactus = reminderElement("Cactus", isToday)
    const exampleAbutilon = reminderElement("Abutilon", isToday)
    return (
        <div className={styles.dayElement}>
            <div className={styles.dateText}>{dayName}</div>
            <div className={styles.dateNumBox}>
                <div className={styles.dateNum}>{date}</div>
            </div>
            <div className={styles.reminders}>
                <div>{exampleRose}</div>
                <div>{exampleCactus}</div>
                <div>{exampleAbutilon}</div>
            </div>
        </div>
    ) 
};
  
export default dayElement;