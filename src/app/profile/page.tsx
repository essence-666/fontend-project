import Link from "next/link";
import styles from "../styles/profile.module.css";
import Image from "next/image";
import emailIcon from "../../../public/assets/emailSign.png";
import locationIcon from "../../../public/assets/locationSign.png";
import profilePhoto from "../../../public/assets/person.jpeg";
import romashiPhoto from "../../../public/assets/romashki.png";
import editPhoto from "../../../public/assets/edit.png";
import addPhoto from "../../../public/assets/add.png";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";
import { error } from "console";


const getProfile = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/profileApi", {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error('Failed to get profile editions');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const getFlowers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/flowersApi", {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error('Failed to get flowers');
    }
    return res.json();
  } catch (Error) {
    console.log(error);
  }
}


const profilePage = async () => {
  const { profile } = await getProfile();
  const { flowers } = await getFlowers();

  return (
    <div className={styles.container}>
      <div className={styles.containerInfoCalendar}>
        <div className={styles.infoContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={profilePhoto}
              alt={"personInitPage"}
              width={200}
              height={200}
            />
          </div>
          {profile.map(
            (
              prof: {
                _id: string;
                place: String;
                email: String;
                description: String;
                name: String;
              },
              index: Key | null | undefined,
            ) => (
              <div key={index} className={styles.textContainer}>
                <h1>{prof.name}</h1>
                <div className={styles.location}>
                  <Image
                    className={styles.miniImage}
                    src={locationIcon}
                    alt={"personInitPage"}
                    width={20}
                    height={15}
                  />
                  {prof.place}
                </div>
                <div className={styles.email}>
                  <Image
                    className={styles.miniImage}
                    src={emailIcon}
                    alt={"personInitPage"}
                    width={20}
                    height={15}
                  />
                  {prof.email}
                </div>
                <div className={styles.descriptionText}>{prof.description}</div>
                <Link className="editButton" href={`/editProfile/${prof._id}`}>
                  <Image
                    className={styles.editImage}
                    src={editPhoto}
                    alt={"personInitPage"}
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            )
          )}
        </div>
        <div className={styles.calendarContainer}>
          <h1 className={styles.calendarHead}>Calendar preview</h1>
          <div className={styles.calendarPreview}>
            <div className={styles.Day}>
              <div className={styles.dayLeftPart}>
                <p className={styles.textDay}>Mon</p>
                <p className={styles.circle}> 8 </p>
              </div>
              <div className={styles.dayRightPart}>
                <div className={styles.plantOne}>
                  <p className={styles.plantName}>Rose</p>
                </div>
                <div className={styles.plantOne}>
                  <p className={styles.plantName}>Cactus</p>
                </div>
                <div className={styles.plantOne}>
                  <p className={styles.plantName}>Tomato</p>
                </div>
              </div>
            </div>
            <div className={styles.Day}>
              <div className={styles.dayLeftPart}>
                <p className={styles.textDay}>Mon</p>
                <p className={styles.circle}> 8 </p>
              </div>
              <div className={styles.dayRightPart}>
                <div className={styles.plantOne}>
                  <p className={styles.plantName}>Rose</p>
                </div>
                <div className={styles.plantOne}>
                  <p className={styles.plantName}>Cactus</p>
                </div>
                <div className={styles.plantOne}>
                  <p className={styles.plantName}>Tomato</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.toCalendarButtonContainer}>
            <Link href="/calendar" passHref>
              <button className={styles.toCalendarButton}>
                Go to calendar
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.containerCollection}>
        <h1 className={styles.collectionPreview}> 
          Plant collection
          <Link className="editButton" href={`/editFlowers/`}>
            <Image
              className={styles.editImage}
              src={addPhoto}
              alt={"personInitPage"}
              width={50}
              height={50}
            />
          </Link>
        </h1>
        <div className={styles.collection}>
        {flowers && flowers.length > 0 ? ( 
          flowers.map(
            (
              flow: {
                name: string;
                scientificName: string;
                location: string;
                frequencyWatering: number;
                wateringChanges: string;
              },
              index: Key | null | undefined,
            ) => (
          <div key={index} className={styles.plant}>
            <div className={styles.plantInfo}>
              <Image
                className={styles.plantImage}
                src={romashiPhoto}
                alt={"personInitPage"}
                width={166}
                height={134}
              />
              <p className={styles.plantName}> {flow.name}, {flow.scientificName}, {flow.location}, {flow.frequencyWatering}, {flow.wateringChanges} </p>
            </div>
          </div>
          )
        )
      ) : (
        <p>No flowers available.</p>
      )}
        </div>
      </div>  
    </div>
  );
};

export default profilePage;
