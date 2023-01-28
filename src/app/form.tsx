import Image from "next/image";
import styles from "./form.module.css";

const SignInForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgImage}>
        <Image src="/images/bg.jpg" alt="Background" fill />
      </div>
      <div className={styles.bgGradient} />
      <div className={styles.bottomGrad} />
      <div className={styles.textSection}>
        <h1>Ultimate movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <div className={styles.emailform}>
          <h2>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.emailfield}
            placeholder={"Email address"}
          />
          <input
            type="button"
            value="Get Started >"
            className={styles.submit}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
