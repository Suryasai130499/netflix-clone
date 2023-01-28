import Image from 'next/image';
import styles from './watch.module.css';

const Watch = () => {
  return (
    <div className={styles.image}>
      <div className={styles.tvImage}>
        <Image
          src="/images/device-pile-in.png"
          alt="TV"
          fill
        />
      </div>
      <video
        className={styles.video}
        autoPlay
        muted
        playsInline
      >
        <source src="/videos/video-devices-in.m4v" />
      </video>
    </div>
  );
};

export default Watch;
