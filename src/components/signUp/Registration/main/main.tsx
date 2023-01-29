import Link from "next/link";
import Image from "next/image";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.devices}>
        <Image src="/images/devices.png" alt="Devices" fill />
      </div>
      <p className={styles.stepInfo}>
        step <span className={styles.bold}>1</span> of{" "}
        <span className={styles.bold}>3</span>
      </p>
      <h1 className={styles.setup}>Finish setting up your account</h1>
      <div className={styles.paragraph}>
        <p>Netflix is personalised for you.</p>
        <p>Create a password to watch on any device at any time.</p>
      </div>
      <Link href="/signup/regform" role="button" className={styles.nextButton}>
        Next
      </Link>
    </div>
  );
};

export default Main;
