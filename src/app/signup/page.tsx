import React from 'react';
import Image from 'next/image';
import { useAppDispatch } from '@/redux/hooks';

import styles from './page.module.css';

const Registration = () => {
  const policies = [
    'No commitments, cancel anytime.',
    'Everything on Netflix for one low price.',
    'No ads and no extra fees. Ever.',
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkmark}>
        <Image
          src="/images/checkmark.png"
          alt="Check"
          fill
        />
      </div>
      <p className={styles.stepSection}>
        step <span className={styles.bold}>2</span> of{' '}
        <span className={styles.bold}>3</span>
      </p>
      <h1 className={styles.title}>Choose your plan.</h1>
      <div className={styles.commitments}>
        {policies.map((policy, index) => (
          <div
            key={index}
            className={styles.commitment}
          >
            <div className={styles.check}>
              <Image
                src="/images/checkmark.svg"
                alt="Check"
                fill
              />
            </div>
            <div className={styles.desc}>{policy}</div>
          </div>
        ))}
      </div>
      <button
        className={styles.submit}
        type="submit"
      >
        Next
      </button>
    </div>
  );
};

export default Registration;
