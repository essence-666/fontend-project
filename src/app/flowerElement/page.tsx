"use client";

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import styles from "../styles/flowerElement.module.css";
import romashkiPhoto from "../../../public/assets/romashki.png";
import editPhoto from "../../../public/assets/editSecond.png";
import delPhoto from "../../../public/assets/trashCan.png";
import Link from 'next/link';
import { URL } from "../config";



const FlowerElement = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('_id');
    const name = searchParams.get('name');
    const scientificName = searchParams.get('scientificName');
    const location = searchParams.get('location');
    const frequencyWatering = searchParams.get('frequencyWatering');
    const wateringChanges = searchParams.get('wateringChanges');

    const removeFlower = async () => {
        const confirmed = confirm("Are you sure?");
    
        if (confirmed) {
            await fetch(`${URL}/api/flowersApi?id=${id}`, {
                method: "DELETE",
            });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerFlower}>
                <Image 
                    className={styles.image}
                    src={romashkiPhoto}
                    alt={"flowerImage"}
                    width={250}
                    height={250}
                />               
                <div className={styles.textContainer}>
                    <div className={styles.infoElements}>
                        <div className={styles.infoTitle}>Name:</div>
                        <div className={styles.infocontent}>{name}</div>
                    </div>
                    <div className={styles.infoElements}>
                        <div className={styles.infoTitle}>Scientific name:</div>
                        <div className={styles.infocontent}>{scientificName}</div>
                    </div>
                    <div className={styles.infoElements}>
                        <div className={styles.infoTitle}>Location:</div>
                        <div className={styles.infocontent}>{location}</div>
                    </div>
                    <div className={styles.infoElements}>
                        <div className={styles.infoTitle}>Watering frequency:</div>
                        <div className={styles.infocontent}>{frequencyWatering}  {wateringChanges}</div>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link className={styles.button} href={`/editFlowers/${id}`}>
                        <Image 
                            className={styles.buttonImage}
                            src={editPhoto}
                            alt={"editBtnImg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link onClick={removeFlower} className={styles.button} href={"/profile"}>
                        <Image 
                            className={styles.buttonImage}
                            src={delPhoto}
                            alt={"delBtnImg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FlowerElement;
