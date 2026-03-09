import styles from "./AppSection.module.css";

function AppSection() {
  const features = [
    "Daily Horoscope & Vedic Astrology Readings",
    "Personalized Ritual Recommendations",
    "Sacred Temple Directory & Virtual Darshan",
    "Subscription Boxes & Curated Collections",
    "Community Forum & Spiritual Coaching",
    "Pilgrimage Planning & Guided Tours",
  ];

  const stats = [
    { number: "500+", label: "Temple Partnerships Verified" },
    { number: "10K+", label: "Satisfied Devotees (30-day retention: 68%)" },
    { number: "₹45L+", label: "Revenue Generated (3-month pilot)" },
    { number: "⭐4.9/5", label: "Average Rating Across Channels" },
  ];

  return (
    <section className={styles.appSection}>
      {/* Hero Section */}
      <div className={styles.appHero}>
        <div className={styles.appHeroContent}>
          <h1 className={styles.appTitle}>
            Bhava: <span className={styles.appTitleAccent}>Wellness App</span>
          </h1>

          <h2 className={styles.appTagline}>Spirituality In Your Pocket</h2>

          <p className={styles.appDescription}>
            Our comprehensive wellness app brings temple wisdom, personalized
            rituals, and community connection to your fingertips. Available on
            iOS and Android.
          </p>

          <ul className={styles.appFeatures}>
            {features.map((feature, index) => (
              <li key={index}>
                <span className={styles.featureIcon}>✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className={styles.downloadBtn}>Download App</button>
        </div>

        <div className={styles.appHeroVisual}>
          <div className={styles.phoneMockup}>
            <img
              src="/appimage.jpeg"
              alt="Bhava Wellness App"
              className={styles.appMockupImage}
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.appStats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AppSection;
