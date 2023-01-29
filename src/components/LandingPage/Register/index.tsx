'use client';

import { FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.css';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/actions/authActions';

interface PropTypes {
  bottom?: boolean;
}

const Register = (props: PropTypes) => {
  const { bottom } = props;

  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.trim();
    dispatch(setUser(value));
  };

  return (
    <div className={`${styles.textSection} ${bottom ? styles.bottom : ''}`}>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className={styles.emailForm}>
        <input
          type="email"
          name="email"
          id="email"
          value={user}
          className={styles.emailfield}
          placeholder={'Email address'}
          onInput={(e) => handleInput(e)}
        />
        <Link href={'/signup/registration'}>
          <button className={styles.submit}>
            Get Started{' '}
            <span className={styles.arrow}>
              <Image
                src="/images/right.svg"
                alt=">"
                fill
              />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
