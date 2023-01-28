import { ReactElement } from "react";
import styles from "./card.module.css";
import TV from "./tv";
import Download from "./download";
import Watch from "./watch";
import Kids from "./kids";

interface PropsType {
  heading: string;
  description: string;
  type: string;
}

const Card = (props: PropsType) => {
  const { heading, description, type } = props;

  const getElement = (): ReactElement => {
    switch (type) {
      case "tv":
        return <TV />;
      case "download":
        return <Download />;
      case "watch":
        return <Watch />;
      case "kids":
        return <Kids />;
      default:
        return <></>;
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
      {}
    </div>
  );
};

export default Card;