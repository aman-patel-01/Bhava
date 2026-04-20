import React from "react";
import styles from "./HomeMain.module.css";
import ScrollDown from "./ScrollDown";

function HomeMain() {
  return (
    <div className={styles.homeMainHero}>

      <img
        src="./temple(4).png"
        id="hero-temple-img"
        alt="Temple Background"
        className={styles.homeMainHeroBgImage}
      />

      <div className={styles.homeMainContainer}>
        <div className={styles.homeMainTextLeft}>

          <h1 className={styles.homeMainHeroTitle}>
            <span className={styles.homeMainElevateText}>The day often begins in rush.</span>
            <span className={styles.homeMainElevateText}>A simple ritual brings order.</span>
            <span className={styles.homeMainHighlight}>Begin with Bhava.</span>
          </h1>

          <p className={styles.homeMainHeroDescription}>
            A simple, structured daily ritual for modern homes.
          </p>

          <div className={styles.homeMainHeroButtons}>
            <button className={styles.homeMainBtnPrimary}>Begin with Bhava</button>
            <button className={styles.homeMainBtnSecondary}>Explore the System</button>
          </div>

            <ScrollDown />

        </div>
      </div>

    </div>
  );
}

export default HomeMain;
