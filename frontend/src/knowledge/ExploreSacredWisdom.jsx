import { useState, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import styles from "./ExploreSacredWisdom.module.css";
import PujaRituals from "./PujaRituals";
import VedicScriptures from "./VedicScriptures";
import TempleTraditions from "./TempleTraditions";
import MantrasPrayers from "./MantrasPrayers";
import MeditationPractices from "./MeditationPractices";
import FestivalCelebrations from "./FestivalCelebrations";

// eslint-disable-next-line react-refresh/only-export-components
export const wisdomRoutes = [
  { path: "puja-rituals",           element: <PujaRituals /> },
  { path: "vedic-scriptures",       element: <VedicScriptures /> },
  { path: "temple-traditions",      element: <TempleTraditions /> },
  { path: "mantras-prayers",        element: <MantrasPrayers /> },
  { path: "meditation-practices",   element: <MeditationPractices /> },
  { path: "festivals-celebrations", element: <FestivalCelebrations /> },
];

const WISDOM_VISIBLE = 4;
const WISDOM_STEP = 2;
const WISDOM_GAP = 20;

const knowledgeCategories = [
  {
    id: 1,
    title: "Puja Rituals",
    description: "Learn the sacred art of worship, traditional puja vidhi, and daily ritual practices.",
    route: "/knowledge/puja-rituals",
    image: "./Explore Sacred Wisdom/Puja Rituals.png",
  },
  {
    id: 2,
    title: "Vedic Scriptures",
    description: "Dive deep into the Vedas, Upanishads, and Puranas with expert commentary and translations.",
    route: "/knowledge/vedic-scriptures",
    image: "./Explore Sacred Wisdom/Vedic Scriptures.png",
  },
  {
    id: 3,
    title: "Temple Traditions",
    description: "Learn the sacred rituals, architectural significance, and spiritual practices of ancient temples.",
    route: "/knowledge/temple-traditions",
    image: "./Explore Sacred Wisdom/Temple Traditions.png",
  },
  {
    id: 4,
    title: "Mantras & Prayers",
    description: "Discover the power of sacred mantras with proper pronunciation, meanings, and benefits.",
    route: "/knowledge/mantras-prayers",
    image: "./Explore Sacred Wisdom/Mantras & Prayers.png",
  },
  {
    id: 5,
    title: "Meditation Practices",
    description: "Master ancient meditation techniques from yoga traditions and spiritual lineages.",
    route: "/knowledge/meditation-practices",
    image: "./Explore Sacred Wisdom/Meditation Practices.png",
  },
  {
    id: 6,
    title: "Festivals & Celebrations",
    description: "Understand the spiritual significance and traditional observances of Hindu festivals.",
    route: "/knowledge/festivals-celebrations",
    image: "./Explore Sacred Wisdom/Festivals & Celebrations.png",
  },
];

function WisdomFlipCard({ category, width, navigate }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={styles.wisdomCardOuter}
      style={width ? { flex: `0 0 ${width}px`, width } : {}}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className={styles.wisdomCardInner}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className={styles.wisdomCardBack}>
          <img src={category.image} alt={category.title} className={styles.wisdomCardBackImg} />
          <div className={styles.wisdomCardBackOverlay}>
            <h3 className={styles.wisdomCardBackTitle}>{category.title}</h3>
          </div>
        </div>

        <div className={styles.wisdomCardFront}>
          <div className={styles.wisdomCardFrontContent}>
            <h3 className={styles.wisdomFrontTitle}>{category.title}</h3>
            <p className={styles.wisdomFrontDesc}>{category.description}</p>
            <button
              className={styles.wisdomFrontBtn}
              onClick={() => { document.documentElement.style.scrollBehavior = "auto"; window.scrollTo(0, 0); navigate(category.route); }}
            >
              Explore More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ExploreSacredWisdom() {
  const navigate = useNavigate();
  const [wisdomIndex, setWisdomIndex] = useState(0);
  const [wisdomCardW, setWisdomCardW] = useState(0);
  const wisdomRef = useRef(null);

  useLayoutEffect(() => {
    const el = wisdomRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      if (w > 0) setWisdomCardW((w - WISDOM_GAP * (WISDOM_VISIBLE - 1)) / WISDOM_VISIBLE);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const prevWisdom = () => setWisdomIndex((p) => Math.max(0, p - WISDOM_STEP));
  const nextWisdom = () =>
    setWisdomIndex((p) => Math.min(knowledgeCategories.length - WISDOM_VISIBLE, p + WISDOM_STEP));

  return (
    <div className={styles.sacredCollectionSection}>
      <div className={styles.container}>
        <div className={styles.sectionGoldDivider} />
        <h1 className={styles.sectionTitle}>
          Explore <span className={styles.highlight}>Sacred Wisdom</span>
        </h1>
      </div>

      <div className={styles.wisdomSliderWrapper}>
        <div className={styles.wisdomTrackOuter} ref={wisdomRef}>
          <motion.div
            className={styles.wisdomTrack}
            animate={{ x: -wisdomIndex * (wisdomCardW + WISDOM_GAP) }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {knowledgeCategories.map((category) => (
              <WisdomFlipCard
                key={category.id}
                category={category}
                width={wisdomCardW}
                navigate={navigate}
              />
            ))}
          </motion.div>
        </div>

        <button
          className={`${styles.wisdomArrow} ${styles.wisdomArrowLeft}`}
          onClick={prevWisdom}
          disabled={wisdomIndex === 0}
          aria-label="Previous"
        >
          ‹
        </button>

        <button
          className={`${styles.wisdomArrow} ${styles.wisdomArrowRight}`}
          onClick={nextWisdom}
          disabled={wisdomIndex >= knowledgeCategories.length - WISDOM_VISIBLE}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default ExploreSacredWisdom;
