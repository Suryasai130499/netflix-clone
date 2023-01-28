import styles from "./cards.module.css";
import Card from "./card";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <Card
        heading="Enjoy on your TV."
        description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        type="tv"
      />
      <Card
        heading="Download your shows to watch offline."
        description="Save your favourites easily and always have something to watch."
        type="download"
      />
      <Card
        heading="Watch everywhere."
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        type="watch"
      />
      <Card
        heading="Create profiles for children."
        description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        type="kids"
      />
    </div>
  );
};

export default Cards;
