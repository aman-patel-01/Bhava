import styles from "./AppPage.module.css";

const features = [
  {
    icon: "🔮",
    title: "Daily Vedic Horoscope",
    desc: "Personalised Jyotish readings based on your natal chart — daily, weekly and monthly forecasts.",
  },
  {
    icon: "🪔",
    title: "Ritual Recommendations",
    desc: "AI-powered suggestions for daily pujas, mantras and remedies tailored to your goals and nakshatra.",
  },
  {
    icon: "🛕",
    title: "Virtual Temple Darshan",
    desc: "Live and on-demand darshan from 200+ sacred temples. Receive prasad delivery after every visit.",
  },
  {
    icon: "📦",
    title: "Curated Spiritual Boxes",
    desc: "Monthly subscription boxes with temple-sourced incense, malas, oils and sacred items.",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Devotee Community",
    desc: "Join 50,000+ seekers, share experiences, attend satsangs and get guidance from teachers.",
  },
  {
    icon: "🗺️",
    title: "Pilgrimage Planner",
    desc: "Plan and book guided spiritual journeys to Char Dham, Kashi, Vrindavan and beyond.",
  },
];

const stats = [
  { number: "500+",   label: "Temple Partnerships" },
  { number: "50K+",   label: "Active Devotees" },
  { number: "₹45L+",  label: "Offerings Facilitated" },
  { number: "⭐ 4.9", label: "Average App Rating" },
];

const screenshots = [
  { label: "Home Feed",       img: "/appimage.jpeg" },
  { label: "Daily Practice",  img: "/Daily Practices/Meditation.png" },
  { label: "Temple Darshan",  img: "/templeBlessed.png" },
];

function AppPage() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>BHAVA WELLNESS APP</p>
          <h1 className={styles.heroTitle}>
            Spirituality<br />
            <span className={styles.accent}>In Your Pocket</span>
          </h1>
          <p className={styles.heroSub}>
            Temple wisdom, daily rituals, live darshan and a thriving community
            — all in one beautifully designed app. Available on iOS & Android.
          </p>
          <div className={styles.heroBtns}>
            <button className={styles.downloadBtn}>
              <span className={styles.btnIcon}>⬇</span> App Store
            </button>
            <button className={styles.downloadBtn}>
              <span className={styles.btnIcon}>⬇</span> Google Play
            </button>
          </div>
          <p className={styles.heroNote}>Free to download · 14-day premium trial</p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.phoneMockup}>
            <img src="/appimage.jpeg" alt="Bhava App" className={styles.phoneImg} />
          </div>
          <div className={styles.glowOrb} />
        </div>
      </div>

      {/* ── Stats ── */}
      <div className={styles.statsStrip}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statNum}>{s.number}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Features ── */}
      <div className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Everything You Need</h2>
            <p className={styles.sectionSub}>Six powerful features for your daily spiritual life</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Screenshots ── */}
      <div className={styles.screensSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>See It In Action</h2>
            <p className={styles.sectionSub}>A beautiful experience designed for devotion</p>
          </div>
          <div className={styles.screensRow}>
            {screenshots.map((s, i) => (
              <div key={i} className={styles.screenCard}>
                <div className={styles.screenImgWrap}>
                  <img src={s.img} alt={s.label} />
                </div>
                <p className={styles.screenLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Download CTA ── */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaBg} />
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Start Your Free Trial Today</h2>
          <p className={styles.ctaSub}>
            Join 50,000+ devotees deepening their practice with Bhava.
            No credit card required for the first 14 days.
          </p>
          <div className={styles.ctaBtns}>
            <button className={styles.ctaPrimary}>Download for iOS</button>
            <button className={styles.ctaSecondary}>Download for Android</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AppPage;
