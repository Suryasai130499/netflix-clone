/* eslint-disable @next/next/no-img-element */
import { useAppSelector } from '@/redux/hooks';
import { truncateString } from '@/lib/utils';

import styles from './index.module.css';

const Banner = () => {
  const banner = useAppSelector((state) => state.home.banner);

  return (
    <div className={styles.banner}>
      <div className={styles.bannerWrapper}>
        <img
          src={'https://image.tmdb.org/t/p/original' + banner.backdrop_path}
          alt="banner"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className={styles.bannerShade}></div>
      <div className={styles.details}>
        <p className={styles.title}>{banner.name}</p>
        <p className={styles.description}>
          {truncateString(banner.overview, 150)}
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.play} ${styles.button}`}>
            <img
              src="/images/play.svg"
              alt="Play"
            />
            Play
          </button>
          <button className={`${styles.info} ${styles.button}`}>
            <img
              src="/images/info.svg"
              alt="Info"
            />
            More Info
          </button>
        </div>
      </div>
      <div className={styles.bottomshade} />
    </div>
  );
};

export default Banner;
