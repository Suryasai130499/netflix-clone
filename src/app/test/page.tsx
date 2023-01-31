/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './page.module.css';

const page = () => {
  return (
    <>
      <div className={styles.previewModal}>
        <div className={styles.image}></div>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.buttonWrapper}>
              <div className={`${styles.button} ${styles.play}`}>
                <img
                  src="/images/play.svg"
                  alt="Play Icon"
                />
              </div>
              <div className={styles.button}>
                <img
                  src="/images/plus.svg"
                  alt="Plus"
                />
              </div>
              <div className={styles.button}>
                <img
                  src="/images/like.svg"
                  alt="Like"
                />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.arrow}></div>
            </div>
          </div>
          <p className={styles.title}>Title</p>
        </div>
      </div>
    </>
  );
};

export default page;
