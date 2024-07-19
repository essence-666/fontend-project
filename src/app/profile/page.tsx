import Link from "next/link";
import styles from "../styles/profile.module.css";
import Image from "next/image";
import emailIcon from "../../../public/assets/emailSign.png";
import locationIcon from "../../../public/assets/locationSign.png";
import profilePhoto from "../../../public/assets/person.jpeg";
import romashiPhoto from "../../../public/assets/romashki.png";
import editPhoto from "../../../public/assets/edit.png";
import addPhoto from "../../../public/assets/add.png";
import { URL } from "../config";

interface Profile {
  _id: string;
  place: string;
  email: string;
  description: string;
  name: string;
}

interface Flower {
  name: string;
  scientificName: string;
  location: string;
  frequencyWatering: number;
  wateringChanges: string;
}

const getProfile = async (): Promise<Profile[]> => {
  try {
    const res = await fetch(`${URL}/api/profileApi`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get profile editions");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};

const getFlowers = async (): Promise<Flower[]> => {
  try {
    const res = await fetch(`${URL}/api/flowersApi`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get flowers");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};

const ProfilePage = async () => {
  const profile = await getProfile();
  const flowers = await getFlowers();

  return (
    <div className={styles.container}>
      <div className={styles.containerInfoCalendar}>
        <div className={styles.infoContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={profilePhoto}
              alt="personInitPage"
              width={200}
              height={200}
            />
          </div>
          {Array.isArray(profile) && profile.length > 0 ? (
            profile.map((prof, index) => (
              <div key={index} className={styles.textContainer}>
                <h1>{prof.name}</h1>
                <div className={styles.location}>
                  <Image
                    className={styles.miniImage}
                    src={locationIcon}
                    alt="personInitPage"
                    width={20}
                    height={15}
                  />
                  {prof.place}
                </div>
                <div className={styles.email}>
                  <Image
                    className={styles.miniImage}
                    src={emailIcon}
                    alt="personInitPage"
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
                    alt="personInitPage"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            ))
          ) : (
            <p>No profile information available.</p>
          )}
        </div>
        <div className={styles.calendarContainer}>
          <h1 className={styles.calendarHead}>Calendar preview</h1>
          <div className={styles.calendarPreview}>
            <div className={styles.Day}>
              <div className={styles.dayLeftPart}>
                <p className={styles.textDay}>Mon</p>
                <p className={styles.circle}>8</p>
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
                <p className={styles.circle}>8</p>
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
              alt="personInitPage"
              width={50}
              height={50}
            />
          </Link>
        </h1>
        <div className={styles.collection}>
          {Array.isArray(flowers) && flowers.length > 0 ? (
            flowers.map((flow, index) => (
              <div key={index} className={styles.plant}>
                <div className={styles.plantInfo}>
                  <Image
                    className={styles.plantImage}
                    src={romashiPhoto}
                    alt="personInitPage"
                    width={166}
                    height={134}
                  />
                  <p className={styles.plantName}>{flow.name}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No flowers available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
