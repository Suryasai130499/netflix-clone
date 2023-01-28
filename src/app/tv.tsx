import Image from 'next/image';
import styles from './tv.module.css';

const TV = () => {
  return (
    <div className={styles.image}>
      <div className={styles.tvImage}>
        <Image
          src="/images/tv.png"
          alt="TV"
          fill
        />
      </div>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/tv.m4v" />
      </video>
    </div>
  );
};

export default TV;
