import Image from "next/image";
import styles from "../styles/flowerElement.module.css";
import romashkiPhoto from "../../../public/assets/romashki.png"
import editPhoto from "../../../public/assets/editSecond.png"
import delPhoto from "../../../public/assets/trashCan.png"

interface Flower {
    name: string;
    scientificName: string;
    location: string;
    frequencyWatering: number;
    wateringChanges: string;
}

// class FlowerElement implements Flower{
//     name: string;
//     scientificName: string;
//     location: string;
//     frequencyWatering: number;
//     wateringChanges: string;

//     constructor (name: string, scientificName: string, location: string, frequencyWatering: number, wateringChanges: string){
//         this.name = name;
//         this.scientificName = scientificName;
//         this.location = location;
//         this.frequencyWatering = frequencyWatering;
//         this.wateringChanges = wateringChanges;
//         this.display()
//     }

//     display = () => {
//         return (
//             <div className={styles.container}>
                
//             </div>
//         )
//     }
// }

const flowerElement = (name: string, scientificName: string, location: string, frequencyWatering: number, wateringChanges: string) =>{
    return(
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
                        <div className={styles.infoTitle}>
                            Name:
                        </div>
                        <div className={styles.infocontent}>
                            {name}
                        </div>
                    </div>
                    <div className={styles.infoElements}>
                        <div className={styles.infoTitle}>
                            Scientific name:
                        </div>
                        <div className={styles.infocontent}>
                            {scientificName}
                        </div>
                    </div>
                    <div className={styles.infoElements}>
                        <div className={styles.infoTitle}>
                            Location:
                        </div>
                        <div className={styles.infocontent}>
                            {location}
                        </div>
                    </div>
                    <div className={styles.infoElements}>
                        <div className={styles.infoTitle}>
                            Watering frequency:
                        </div>
                        <div className={styles.infocontent}>
                            {frequencyWatering}
                        </div>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>
                        <Image 
                            className={styles.buttonImage}
                            src={editPhoto}
                            alt={"editBtnImg"}
                            width={50}
                            height={50}
                        />
                    </button>
                    <button className={styles.button}>
                        <Image 
                            className={styles.buttonImage}
                            src={delPhoto}
                            alt={"delBtnImg"}
                            width={50}
                            height={50}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default flowerElement;