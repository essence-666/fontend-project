import styles from "../styles/calendar.module.css";
import reminderElement from "./reminder";

const dayElement = (date: string, dayName: string, isToday: boolean) => {
    const exampleRose = reminderElement("Rose", isToday)
    const exampleCactus = reminderElement("Cactus", isToday)
    const exampleAbutilon = reminderElement("Abutilon", isToday)

    if(isToday){
        return (
            <div className={styles.dayElementToday}>
                <p className={styles.dateTextToday}>{dayName}</p>
                <div className={styles.dateNumBoxToday}>
                    <p className={styles.dateNumToday}>{date}</p>
                </div>
                <div className={styles.remindersToday}>
                    <p>{exampleRose}</p>
                    <p>{exampleCactus}</p>
                    <p>{exampleAbutilon}</p>
                </div>
            </div>
        ) 
    }
    else{
        return (
            <div className={styles.dayElement}>
                <p className={styles.dateText}>{dayName}</p>
                <div className={styles.dateNumBox}>
                    <p className={styles.dateNum}>{date}</p>
                </div>
                <div className={styles.reminders}>
                    <p>{exampleRose}</p>
                    <p>{exampleCactus}</p>
                    <p>{exampleAbutilon}</p>
                </div>
            </div>
        ) 
    }
    
};
  
export default dayElement;