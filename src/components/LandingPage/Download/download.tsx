/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from './download.module.css';

const Download = () => {
  return (
    <div className={styles.image}>
      <div className={styles.downloadImage}>
        <Image
          src="/images/mobile-image.jpg"
          alt="Mobile"
          fill
        />
      </div>
      <div className={styles.section}>
        <div className={styles.firstSection}>
          <div className={styles.thumbnail}>
            <Image
              src="/images/boxshot.png"
              alt="Thumbnail"
              fill
            />
          </div>
          <div className={styles.name}>
            <h3>Stranger Things</h3>
            <p>Downloading...</p>
          </div>
        </div>
        <div className={styles.gif}>
          <img
            src="/gifs/download-icon.gif"
            alt="download"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
