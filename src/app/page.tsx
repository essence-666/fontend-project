import styles from './styles/mainpage.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className={styles.textContainer}>
        <h1 className={styles.mainText}> Take care of your plants</h1>
        <p className={styles.subText}>
          {' '}
          and we will help you with it <br />
        </p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.subText}>
          {' '}
          Lets know about{' '}
          <Link href="/about" passHref>
            {' '}
            us
          </Link>{' '}
          a little bit more
        </p>
      </div>
    </div>
  );
}
