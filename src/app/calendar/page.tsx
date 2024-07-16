import styles from "../styles/calendar.module.css";
import dayElement from "./day";
import leftButton from "../../../public/keyboard_arrow_down (1).png";
import rightButton from "../../../public/keyboard_arrow_down.png";
import Image from "next/image"

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
            <Image
            src={leftButton}
            alt="<"
            />
          </button>
          <button className={styles.button}>
            <Image 
              src={rightButton}
              alt=">"
            />
          </button>
          <p className={styles.month}>July/August 2024</p>
        </div>
        <div className={styles.calendarDates}>
          <div className="dates" id="today">{exampleDay1}</div>
          <div className="dates">{exampleDay2}</div>
          <div className="dates">{exampleDay3}</div>
          <div className="dates">{exampleDay4}</div>
          <div className="dates">{exampleDay5}</div>
          <div className="dates">{exampleDay6}</div>
          <div className="dates">{exampleDay7}</div>
        </div>
      </div>
    </div>
  )

};

export default calendarPage;
