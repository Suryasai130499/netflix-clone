'use client';

import Header from '@/components/HomePage/Header';
import styles from './page.module.css';
import { use } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import * as actions from '@/redux/actions/homeActions';

import Banner from '../../components/HomePage/Banner';
import Slider from '@/components/Slider';

const getBanner = async () => {
  const response = await fetch(`http://localhost:3000/api/banner`, {
    cache: 'no-store',
  }).then((r) => r.json());
  if (response.success) {
    return {
      netflix: response.data,
    };
  }
};

const getTopRated = async () => {
  const response = await fetch(`${process.env.URL}/api/getTopRated`, {
    cache: 'no-store',
  }).then((r) => r.json());
  if (response.success) {
    return {
      netflix: response.data,
    };
  }
};

const getActionMovies = async () => {
  const response = await fetch(`${process.env.URL}/api/getActionMovies`, {
    cache: 'no-store',
  }).then((r) => r.json());
  if (response.success) {
    return {
      netflix: response.data,
    };
  }
};
const getComedyMovies = async () => {
  const response = await fetch(`${process.env.URL}/api/getComedyMovies`, {
    cache: 'no-store',
  }).then((r) => r.json());
  if (response.success) {
    return {
      netflix: response.data,
    };
  }
};
const getHorrorMovies = async () => {
  const response = await fetch(`${process.env.URL}/api/getHorrorMovies`, {
    cache: 'no-store',
  }).then((r) => r.json());
  if (response.success) {
    return {
      netflix: response.data,
    };
  }
};
const getRomanticMovies = async () => {
  const response = await fetch(`${process.env.URL}/api/getRomanticMovies`, {
    cache: 'no-store',
  }).then((r) => r.json());
  if (response.success) {
    return {
      netflix: response.data,
    };
  }
};
const getDocumentaries = async () => {
  const response = await fetch(`${process.env.URL}/api/fetchDocumentaries`, {
    cache: 'no-store',
  }).then((r) => r.json());
  if (response.success) {
    return {
      netflix: response.data,
    };
  }
};
const getTrending = async () => {
  const response = await fetch(`${process.env.URL}/api/getTrending`).then((r) =>
    r.json()
  );
  if (response.success) {
    return {
      netflix: response.data,
    };
  }
};

const HomePage = () => {
  const dispatch = useAppDispatch();

  const netflixOriginals = use(getBanner());
  const actionMovies = use(getActionMovies());
  const trending = use(getTrending());
  const horror = use(getHorrorMovies());
  const comedy = use(getComedyMovies());
  const topRated = use(getTopRated());
  const romantic = use(getRomanticMovies());
  const documentaries = use(getDocumentaries());

  console.log(netflixOriginals);

  dispatch(actions.setActionMovies(actionMovies?.netflix));
  dispatch(
    actions.setBanner(
      netflixOriginals?.netflix[
        Math.floor(Math.random() * netflixOriginals?.netflix.length)
      ]
    )
  );
  dispatch(actions.setComedy(comedy?.netflix));
  dispatch(actions.setTrending(trending?.netflix));
  dispatch(actions.setDocumentaries(documentaries?.netflix));
  dispatch(actions.setHorror(horror?.netflix));
  dispatch(actions.setNetflixOriginals(netflixOriginals?.netflix));
  dispatch(actions.setRomance(romantic?.netflix));
  dispatch(actions.setTopRated(topRated?.netflix));

  const Movies = [
    {
      title: 'Popular on Netflix',
      type: 'netflixOriginals',
    },
    {
      title: 'Action Movies',
      type: 'actionMovies',
    },
    {
      title: 'Comedy Movies',
      type: 'comedy',
    },
    {
      title: 'Horror Movies',
      type: 'horror',
    },
    {
      title: 'Romantic Movies',
      type: 'romance',
    },
    {
      title: 'Documentaries',
      type: 'documentaries',
    },
    {
      title: 'Trending Now',
      type: 'trending',
    },
    {
      title: 'Top Rated',
      type: 'topRated',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.videosList}>
        {Movies.map((item, index) => (
          <div
            className={styles.section}
            key={index}
          >
            <h3>{item.title}</h3>
            <div className={styles.sliderWrapper}>
              <div className={styles.leftHandle}>
                <div className={styles.text}>&#8249;</div>
              </div>
              <div className={styles.sliderWrapper}>
                <Slider
                  item={item.type}
                  large={index !== 0}
                />
              </div>
              <div className={styles.rightHandle}>
                <div className={styles.text}>&#8250;</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
