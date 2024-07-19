import styles from "../styles/calendar.module.css";
import reminderElement from "./reminder";

class dayElement{
    reminders: string[] = Array()
    date: string;
    dayName: string;
    isToday: boolean;

    constructor(date: string, dayName: string, isToday: boolean){
        this.date = date
        this.dayName = dayName
        this.isToday = isToday
    }

    update() {
        if(this.isToday){
            return (
                <div className={styles.dayElementToday}>
                    <p className={styles.dateTextToday}>{this.dayName}</p>
                    <div className={styles.dateNumBoxToday}>
                        <p className={styles.dateNumToday}>{this.date}</p>
                    </div>
                    <div className={styles.remindersToday}>
                        {this.reminders.map((reminder: string) =>(
                            reminderElement(reminder, true)
                        ))}
                    </div>
                </div>
            ) 
        }
        else{
            return (
                <div className={styles.dayElement}>
                    <p className={styles.dateText}>{this.dayName}</p>
                    <div className={styles.dateNumBox}>
                        <p className={styles.dateNum}>{this.date}</p>
                    </div>
                    <div className={styles.reminders}>
                    {this.reminders.map((reminder: string) =>(
                            reminderElement(reminder, false)
                        ))}
                    </div>
                </div>
            ) 
        }
    }

    addReminder(name: string){
        this.reminders.push(name)
        this.update()
    }
}
  
export default dayElement;