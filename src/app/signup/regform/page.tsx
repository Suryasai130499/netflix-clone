'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setUser, setPassword, setStep } from '@/redux/actions/authActions';
import styles from './page.module.css';
import { FormEvent } from 'react';

const RegForm = () => {
  const user = useAppSelector((state) => state.auth.user);
  const password = useAppSelector((state) => state.auth.password);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleUserInput = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch(setUser(target.value));
  };

  const handlePasswordInput = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch(setPassword(target.value));
  };

  const handleClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setStep(2));
    router.push('/signup');
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.stepSection}>
        step <span className={styles.bold}>1</span> of{' '}
        <span className={styles.bold}>3</span>
      </p>
      <h1 className={styles.title}>
        Create a password to start your membership
      </h1>
      <p className={styles.desc}>Just a few more steps and you&apos;re done!</p>
      <p className={styles.desc}>We hate paperwork, too.</p>
      <div className={styles.SignUpform}>
        <input
          type="text"
          name="username"
          value={user}
          onInput={(e) => handleUserInput(e)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onInput={(e) => handlePasswordInput(e)}
          placeholder="Add a password"
        />
      </div>
      <button
        onClick={handleClick}
        className={styles.submit}
      >
        Next
      </button>
    </div>
  );
};

export default RegForm;
