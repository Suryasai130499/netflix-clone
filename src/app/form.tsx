import Image from 'next/image';
import styles from './form.module.css';

const SignInForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgImage}>
        <Image
          src="/images/bg.jpg"
          alt="Background"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.bgGradient} />
      <div className={styles.bottomGrad} />
      <div className={styles.textSection}>
        <h1>Ultimate movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className={styles.emailForm}>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.emailfield}
            placeholder={'Email address'}
          />
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
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
