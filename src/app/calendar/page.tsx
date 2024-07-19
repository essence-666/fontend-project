import styles from "../styles/calendar.module.css";
import dayElement from "./day";
import leftButton from "../../../public/keyboard_arrow_down (1).png";
import rightButton from "../../../public/keyboard_arrow_down.png";
import Image from "next/image"

const calendarPage = () => {
  const exampleDay1 = new dayElement("20", "Sat", true)
  const exampleDay2 = new dayElement("21", "Sun", false)
  const exampleDay3 = new dayElement("22", "Mon", false)
  const exampleDay4 = new dayElement("23", "Tue", false)
  const exampleDay5 = new dayElement("24", "Wed", false)
  const exampleDay6 = new dayElement("25", "Thu", false)
  const exampleDay7 = new dayElement("26", "Fri", false)
  
  exampleDay1.addReminder("Rose")
  exampleDay1.addReminder("Lilac")
  exampleDay1.addReminder("Lily")
  exampleDay2.addReminder("Sunflower")
  exampleDay4.addReminder("Potato")
  exampleDay4.addReminder("Tomato")
  exampleDay5.addReminder("Strawberry")
  exampleDay7.addReminder("Pansy")
  exampleDay7.addReminder("Lilac")
  return (
    <div className="page">
      <h1 className={styles.calendarName}>Watering calendar</h1>
      <div className={styles.calendar}>
        <div className={styles.monthSelector}>
          <button className={styles.button}>
            <Image
            className={styles.button}
            src={leftButton}
            alt="<"
            />
          </button>
          <button className={styles.button}>
            <Image 
            className={styles.button}
              src={rightButton}
              alt=">"
            />
          </button>
          <p className={styles.month}>July 2024</p>
        </div>
        <div className={styles.calendarDates}>
          <div className="dates" id="today">{exampleDay1.update()}</div>
          <div className="dates">{exampleDay2.update()}</div>
          <div className="dates">{exampleDay3.update()}</div>
          <div className="dates">{exampleDay4.update()}</div>
          <div className="dates">{exampleDay5.update()}</div>
          <div className="dates">{exampleDay6.update()}</div>
          <div className="dates">{exampleDay7.update()}</div>
        </div>
      </div>
    </div>
  )

};

export default calendarPage;
