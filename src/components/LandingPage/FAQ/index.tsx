import FAQBox from './FAQBox';
import styles from './index.module.css';

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
          <FAQBox
            key={index}
            fa={faq}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
