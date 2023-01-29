import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.svg" alt="Logo" fill />
      </div>
      <Link className={styles.login} href="/login">
        Sign In
      </Link>
    </div>
  );
};

export default Header;
