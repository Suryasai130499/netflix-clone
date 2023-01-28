import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <Image src="/images/logo.svg" alt="LOGO" className={styles.icon} fill />
      </div>
      <Link href="/login">
        <button className={styles.signIn}>Sign In</button>
      </Link>
    </div>
  );
};

export default Header;
