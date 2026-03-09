import React, { useState } from "react";
import styles from "./GitaSlider.module.css";

const shlokas = [
  {
    text: "You have the right to work, but never to the fruit of work. You should never engage in action for the sake of reward, nor should you long for inaction.",
    ref: "BHAGAVAD GITA 2:47",
  },
  {
    text: "For the soul there is never birth nor death at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing and primeval.",
    ref: "BHAGAVAD GITA 2:20",
  },
  {
    text: "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.",
    ref: "BHAGAVAD GITA 3:35",
  },
  {
    text: "The mind is restless and difficult to restrain, but it is subdued by practice. For one who has conquered the mind, the mind is the best of friends.",
    ref: "BHAGAVAD GITA 6:35",
  },
  {
    text: "Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest Myself on earth.",
    ref: "BHAGAVAD GITA 4:7",
  },
  {
    text: "Let right deeds be thy motive, not the fruit which comes from them. And live in the action, labour well the act, worship God in thine heart by doing right.",
    ref: "BHAGAVAD GITA 12:10",
  },
];

function GitaSlider() {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    if (current < shlokas.length - 1) setCurrent(current + 1);
  };

  const goPrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <section className={styles.gitaSection}>
      <div className={styles.gitaBg} />

      {/* Header */}
      <div className={styles.gitaHeader}>
        <h2 className={styles.gitaHeading}>Daily Wisdom</h2>
        <p className={styles.gitaSubheading}>
          Timeless guidance from the Bhagavad Gita
        </p>
      </div>

      {/* Full-width row: arrow | card | arrow */}
      <div className={styles.sliderWrapper}>

        {/* Quote card — full width */}
        <div className={styles.quoteCard}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>{shlokas[current].text}</p>
          <div className={styles.quoteDivider} />
          <span className={styles.quoteRef}>{shlokas[current].ref}</span>
        </div>

        {/* Left arrow — absolute at left edge */}
        <button
          className={`${styles.arrow} ${styles.arrowLeft} ${current === 0 ? styles.arrowHidden : ""}`}
          onClick={goPrev}
          aria-label="Previous quote"
        >
          ‹
        </button>

        {/* Right arrow — absolute at right edge */}
        <button
          className={`${styles.arrow} ${styles.arrowRight} ${current === shlokas.length - 1 ? styles.arrowHidden : ""}`}
          onClick={goNext}
          aria-label="Next quote"
        >
          ›
        </button>

      </div>
    </section>
  );
}

export default GitaSlider;