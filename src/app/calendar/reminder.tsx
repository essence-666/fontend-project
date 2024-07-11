import styles from "../styles/calendar.module.css";

//TODO: узнать по повду того как будут добавляться напоминалки(параметры)
const reminderElement = (plantName:string, isToday: boolean) => { 
    if(isToday){
        return( 
            <div className={styles.reminderElement}>
                <div className={styles.reminderTextBox}> 
                    <p className={styles.reminderText}>{plantName}</p>
                </div>
                <input type="checkbox" className={styles.isDone}/>
            </div>
        );    
    }else{
        return( 
            <div className={styles.reminderElement}> 
                <p className={styles.reminderText}>{plantName}</p>
            </div>
        );
    }
};
  
export default reminderElement;  