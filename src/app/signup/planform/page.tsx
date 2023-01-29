'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Plan from './plan';
import { setPlan } from '@/redux/actions/planActions';
import { useAppSelector } from '@/redux/hooks';
import { useAppDispatch } from '@/redux/hooks';
import Link from 'next/link';

const PlanForm = () => {
  const plan = useAppSelector((state) => state.plan.plan);
  const dispatch = useAppDispatch();

  const keys = [
    'Monthly Price',
    'Video quality',
    'Resolution',
    'Devices you can use to watch',
  ];

  const policies = [
    'No commitments, cancel anytime.',
    'Everything on Netflix for one low price.',
    'No ads and no extra fees. Ever.',
  ];

  const planDetails = [
    {
      name: 'Mobile',
      price: 149,
      VQ: 'Good',
      res: '480p',
      devices: ['phone', 'tablet'],
    },
    {
      name: 'Basic',
      price: 199,
      VQ: 'Good',
      res: '720p',
      devices: ['phone', 'tablet', 'computer', 'TV'],
    },
    {
      name: 'Standard',
      price: 499,
      VQ: 'Better',
      res: '1080p',
      devices: ['phone', 'tablet', 'computer', 'TV'],
    },
    {
      name: 'Premium',
      price: 649,
      VQ: 'Best',
      res: '4K+HDR',
      devices: ['phone', 'tablet', 'computer', 'TV'],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <p className={styles.stepSection}>
        step <span className={styles.bold}>2</span> of{' '}
        <span className={styles.bold}>3</span>
      </p>
      <h1 className={styles.title}>
        Choose the plan that&apos;s right for you
      </h1>
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
      <div className={styles.planSection}>
        <div className={styles.keys}>
          {keys.map((key, index) => (
            <p
              key={index}
              className={styles.key}
            >
              {key}
            </p>
          ))}
        </div>
        <div className={styles.plans}>
          {planDetails.map((planner, index) => (
            <Plan
              key={index}
              plan={planner}
              active={index === plan}
              onClick={() => dispatch(setPlan(index))}
            />
          ))}
        </div>
      </div>
      <p className={styles.terms}>
        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
        to your internet service and device capabilities. Not all content is
        available in all resolutions. See our Terms of Use for more details.
      </p>
      <p className={styles.terms}>
        Only people who live with you may use your account. Watch on 4 different
        devices at the same time with Premium, 2 with Standard, and 1 with Basic
        and Mobile.
      </p>
      <div className={styles.nextButton}>Next</div>
    </div>
  );
};

export default PlanForm;
