'use client';

import styles from '../styles/editFlowers.module.css';
import editPhoto from '../../../public/assets/editSecond.png';
import photoPhoto from '../../../public/assets/photo.png';
import lupaPhoto from '../../../public/assets/lupa.png';
import homePhoto from '../../../public/assets/home.png';
import dropPhoto from '../../../public/assets/drop.png';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { URL } from '@/app/config';

const AddFlowerPage = () => {
  const [name, setName] = useState<string>('');
  const [scientificName, setScientificName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [frequencyWatering, setFrequencyWatering] = useState<string>('');
  const [wateringChanges, setWateringChanges] = useState<string>('');

  const router = useRouter();

  // Измените тип события на более конкретный
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !location || !frequencyWatering || !wateringChanges) {
      alert('All required fields are required');
      return;
    }

    try {
      const res = await fetch(`${URL}/api/flowersApi`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name,
          scientificName,
          location,
          frequencyWatering,
          wateringChanges,
        }),
      });

      if (res.ok) {
        router.push('/profile');
      } else {
        throw new Error('Failed to create a flower');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <p className={styles.path}>Home {'>'} Add flower</p>
        <div className={styles.editContainer}>
          <div className={styles.nameAndPhoto}>
            <div className={styles.name}>
              <div className={styles.nameAndIcon}>
                <div className={styles.head}>Name</div>
                <Image
                  className={styles.image}
                  src={editPhoto}
                  alt={'Edit icon'}
                  width={23}
                  height={23}
                />
              </div>
              <input
                onChange={(e) => setName(e.target.value)}
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
                  alt={'Photo icon'}
                  width={23}
                  height={23}
                />
              </div>
            </div>
          </div>
          <div className={styles.scientificName}>
            <div className={styles.nameAndIconAndName}>
              <div className={styles.head}>Scientific name</div>
              <Image
                className={styles.image}
                src={lupaPhoto}
                alt={'Scientific name icon'}
                width={23}
                height={23}
              />
              <div className={styles.head}>(optional)</div>
            </div>
            <input
              onChange={(e) => setScientificName(e.target.value)}
              className={styles.labelContainerLong}
              placeholder="Scientific name..."
            />
          </div>
          <div className={styles.location}>
            <div className={styles.nameAndIconLong}>
              <div className={styles.head}>Location / Room</div>
              <Image
                className={styles.image}
                src={homePhoto}
                alt={'Location icon'}
                width={23}
                height={23}
              />
            </div>
            <input
              onChange={(e) => setLocation(e.target.value)}
              className={styles.labelContainerLong}
              placeholder="Location..."
            />
          </div>
          <div className={styles.watering}>
            <div className={styles.nameAndIcon}>
              <div className={styles.head}>Watering</div>
              <Image
                className={styles.image}
                src={dropPhoto}
                alt={'Watering icon'}
                width={23}
                height={23}
              />
            </div>
            <div className={styles.wateringContainer}>
              <div className={styles.head}>Every</div>
              <input
                onChange={(e) => setFrequencyWatering(e.target.value)}
                className={styles.labelContainerSmall}
                placeholder="Number..."
              />
              <input
                onChange={(e) => setWateringChanges(e.target.value)}
                className={styles.labelContainerMiddle}
                placeholder="Days/Weeks/Months..."
              />
              <div className={styles.buttonContainer}>
                <button className={styles.saveButton}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddFlowerPage;
