"use client";

import styles from "../../styles/editProfile.module.css";
import editPhoto from "../../../public/assets/editSecond.png"
import photoPhoto from "../../../public/assets/photo.png";
import emailPhoto from "../../../public/assets/emailSign.png";
import homePhoto from "../../../public/assets/home.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const getProfileById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3001/api/profileApi?id=${id}`, {
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

const EditProfilePage = ({ params }: { params: { id: any } }) => {
  const { id } = params;
  const [profile, setProfile] = useState(null);
  const [newName, setNewName] = useState("");
  const [newPlace, setNewPlace] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const { profile } = await getProfileById(id);
      setProfile(profile);
      setNewName(profile.name);
      setNewPlace(profile.place);
      setNewEmail(profile.email);
      setNewDescription(profile.description);
    };

    fetchProfile();
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/profileApi?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ newName, newEmail, newPlace, newDescription })
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <p className={styles.path}> Home {">"} Edit profile </p>
        <div className={styles.editContainer}>
          <div className={styles.nameAndPhoto}>
            <div className={styles.name}>
              <div className={styles.nameAndIcon}>
                <div className={styles.head}>Name</div>
                <Image
                  className={styles.image}
                  src={editPhoto}
                  alt={"personInitPage"}
                  width={23}
                  height={23}
                />
              </div>
              <input
                onChange={e => setNewName(e.target.value)}
                value={newName}
                className={styles.labelContainer}
                placeholder="Name..."
              />
            </div>
            <div className={styles.photo}>
              <div className={styles.head}>Photo</div>
              <div className={styles.placeForPhoto}>
                <Image
                  className={styles.image}
                  src={photoPhoto}
                  alt={"personInitPage"}
                  width={23}
                  height={23}
                />
              </div>
            </div>
          </div>
          <div className={styles.emailAndLocation}>
            <div className={styles.email}>
              <div className={styles.nameAndIcon}>
                <div className={styles.head}>Email</div>
                <Image
                  className={styles.image}
                  src={emailPhoto}
                  alt={"personInitPage"}
                  width={23}
                  height={23}
                />
              </div>
              <input
                onChange={e => setNewEmail(e.target.value)}
                value={newEmail}
                className={styles.labelContainer}
                placeholder="Email..."
              />
            </div>
            <div className={styles.location}>
              <div className={styles.nameAndIcon}>
                <div className={styles.head}>Location</div>
                <Image
                  className={styles.image}
                  src={homePhoto}
                  alt={"personInitPage"}
                  width={23}
                  height={23}
                />
              </div>
              <input
                onChange={e => setNewPlace(e.target.value)}
                value={newPlace}
                className={styles.labelContainer}
                placeholder="Your location..."
              />
            </div>
          </div>
          <div className={styles.aboutContainer}>
            <div className={styles.head}>Tell about yourself!</div>
            <textarea
              onChange={e => setNewDescription(e.target.value)}
              value={newDescription}
              className={styles.labelAboutContainer}
              placeholder="Write about yourself..."
            />
            <button className={styles.saveButton}>Save</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProfilePage;
