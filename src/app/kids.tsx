import Image from 'next/image';
import styles from './kids.module.css';

const Kids = () => {
  return (
    <div className={styles.image}>
      <div className={styles.downloadImage}>
        <Image
          src="/images/kids.png"
          alt="Kids"
          fill
        />
      </div>
    </div>
  );
};

export default Kids;
