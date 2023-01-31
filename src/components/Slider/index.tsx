'use client';

import { MouseEvent as Mouse, useState } from 'react';
import Image from 'next/image';
import { Movie } from 'interfaces';
import { useAppSelector } from '@/redux/hooks';
import styles from './index.module.css';
import { imageUrl } from 'baseUrls';

interface PropsType {
  item: string;
  large: boolean;
}

const Slider = ({ item, large }: PropsType) => {
  let data: Movie[];
  const netflixOriginals = useAppSelector(
    (state) => state.home.netflixOriginals
  );
  const topRated = useAppSelector((state) => state.home.topRated);
  const actionMovies = useAppSelector((state) => state.home.actionMovies);
  const comedy = useAppSelector((state) => state.home.comedy);
  const horror = useAppSelector((state) => state.home.horror);
  const romance = useAppSelector((state) => state.home.romance);
  const trending = useAppSelector((state) => state.home.trending);
  const documentaries = useAppSelector((state) => state.home.documentaries);

  switch (item) {
    case 'netflixOriginals':
      data = netflixOriginals;
      break;
    case 'topRated':
      data = topRated;
      break;
    case 'actionMovies':
      data = actionMovies;
      break;
    case 'comedy':
      data = comedy;
      break;
    case 'horror':
      data = horror;
      break;
    case 'romance':
      data = romance;
      break;
    case 'trending':
      data = trending;
      break;
    case 'documentaries':
      data = documentaries;
      break;
    default:
      data = [];
      break;
  }

  const handleMouseEnter = (e: Mouse<Element, MouseEvent>) => {
    console.log(e.target);
    console.log('Hello');
  };

  const handleMouseLeave = (e: Mouse<Element, MouseEvent>) => {
    console.log(e.target);
  };

  console.log(data);

  return (
    <div className={styles.scroller}>
      <div className={styles.slider}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${large ? styles.large : ''}`}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            <div className={styles.image}>
              <Image
                src={`${imageUrl}${
                  !large ? item.poster_path : item.backdrop_path
                }`}
                alt="Poster"
                fill
                style={{
                  display: 'block',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
