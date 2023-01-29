import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

interface PropTypes {
  step: number;
}

const Header = (props: PropTypes) => {
  const { step } = props;

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.svg"
          alt="Logo"
          fill
        />
      </div>
      <Link
        className={styles.login}
        href="/login"
      >
        {step > 1 ? 'Sign Out' : 'Sign In'}
      </Link>
    </div>
  );
};

export default Header;
