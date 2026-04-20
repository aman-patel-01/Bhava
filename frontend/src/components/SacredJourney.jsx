import React from "react";
import styles from "./SacredJourney.module.css";

function SacredJourney() {
  return (
    <section className={styles.sacredJourneySection}>
      <div className={styles.sacredContent}>
        <h1 className={styles.sacredTitle}>
          <span className={styles.titleBegin}>Most days pass without pause.</span>
          <span className={styles.titleBegin}>A simple ritual creates clarity.</span>
          <span className={styles.titleSacred}>Begin with Bhava.</span>
        </h1>

        <p className={styles.sacredDescription}>
          A simple, structured daily ritual.
        </p>

        <div className={styles.sacredButtons}>
          <button className={styles.btnPreorder}>Begin with Bhava</button>
        </div>
      </div>
    </section>
  );
}

export default SacredJourney;
