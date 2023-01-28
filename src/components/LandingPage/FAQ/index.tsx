import FAQBox from "./FAQBox";
import styles from "./index.module.css";

interface FAQ {
  title: string;
  description1: string;
  description2: string | null;
}

interface PropTypes {
  faqs: FAQ[];
}

const FAQ = (props: PropTypes) => {
  const { faqs } = props;

  return (
    <div className={styles.wrapper}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqlist}>
        {faqs.map((faq, index) => (
          <FAQBox key={index} fa={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
