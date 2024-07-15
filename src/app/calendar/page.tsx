import styles from "../styles/calendar.module.css";
import dayElement from "./day";


const calendarPage = () => {
  const exampleDay1 = dayElement("28", "Tue", true)
  const exampleDay2 = dayElement("29", "Wed", false)
  const exampleDay3 = dayElement("30", "Thu", false)
  const exampleDay4 = dayElement("31", "Fri", false)
  const exampleDay5 = dayElement("1", "Sat", false)
  const exampleDay6 = dayElement("2", "Sun", false)
  const exampleDay7 = dayElement("3", "Mon", false)
  return (
    <div className="page">
      <h1 className={styles.calendarName}>Watering calendar</h1>
      <div className={styles.calendar}>
        <div className={styles.monthSelector}>
          <button className={styles.button}>
            <img src="/assets/keyboard_arrow_down (1).png" alt=">" />    
          </button>
          <button className={styles.button}>
            <img src="/assets/keyboard_arrow_down.png" alt=">" />
          </button>
          <p className={styles.month}>July/August 2024</p>
        </div>
        <div className={styles.calendarDates}>
          <p className="dates" id="today">{exampleDay1}</p>
          <p className="dates">{exampleDay2}</p>
          <p className="dates">{exampleDay3}</p>
          <p className="dates">{exampleDay4}</p>
          <p className="dates">{exampleDay5}</p>
          <p className="dates">{exampleDay6}</p>
          <p className="dates">{exampleDay7}</p>
        </div>
      </div>
    </div>
  )

};

export default calendarPage;
