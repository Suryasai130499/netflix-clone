'use client';

import { useState, useLayoutEffect } from 'react';
import useWindowSize from '@/lib/hooks/useWindowSize';
import styles from './index.module.css';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const Footer = () => {
  const dimens = useWindowSize();

  const ItemsDesk = [
    ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test'],
    ['HelpCenter', 'Jobs', 'Cookie Preferences', 'Legal Notices'],
    ['Account', 'Ways to Watch', 'Corporate Information', 'Only On Netflix'],
    ['Media Centre', 'Terms of Use', 'Contact Us'],
  ];

  const ItemsMob = [
    [
      'FAQ',
      'Investor Relations',
      'Privacy',
      'Speed Test',
      'HelpCenter',
      'Jobs',
      'Cookie Preferences',
      'Legal Notices',
    ],
    [
      'Account',
      'Ways to Watch',
      'Corporate Information',
      'Only On Netflix',
      'Media Centre',
      'Terms of Use',
      'Contact Us',
    ],
  ];

  let Items;
  if (dimens.width) {
    Items = dimens.width > 950 ? ItemsDesk : ItemsMob;
  }

  return (
    <div className={styles.footer}>
      <p className={styles.topWord}>
        Questions? Call <span className={styles.number}>000-800-919-1694</span>
      </p>
      <ul className={styles.list}>
        {Items &&
          Items.map((item, index) => (
            <li key={index}>
              <ul className={styles.sublist}>
                {item.map((it, index) => (
                  <li
                    className={styles.listItem}
                    key={index}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
      <p className={styles.bottomWord}>Netflix</p>
    </div>
  );
};

export default Footer;
