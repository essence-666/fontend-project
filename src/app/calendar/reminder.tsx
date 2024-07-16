import styles from "../styles/calendar.module.css";

//TODO: узнать по повду того как будут добавляться напоминалки(параметры)
const reminderElement = (plantName:string, isToday: boolean) => { 
    return( 
        <div className={styles.reminderElement}>
            <div className={styles.reminderTextBox}> 
                <p className={styles.reminderText}>{plantName}</p>
            </div>
            {isToday ? <input type="checkbox" className={styles.isDone}/> : null}
        </div>
    );    
};
  
export default reminderElement;  