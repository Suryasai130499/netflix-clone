'use client';

import styles from './page.module.css';
import { use } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import * as actions from '@/redux/actions/homeActions';

import Banner from '../../components/HomePage/Banner';

const getBanner = async () => {
  const response = await fetch('http://localhost:3000/api/banner').then((r) =>
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
  const data = use(getBanner());

  if (!data) return null;

  dispatch(
    actions.setBanner(data.netflix[(Math.random() * data.netflix.length) | 0])
  );

  dispatch(actions.setNetflixOriginals(data.netflix));

  return (
    <div className={styles.wrapper}>
      <Banner />
    </div>
  );
};

export default HomePage;
