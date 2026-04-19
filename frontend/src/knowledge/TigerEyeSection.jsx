import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TigerEyeSection.module.css";
import TigerEye108 from "./TigerEye108";

// eslint-disable-next-line react-refresh/only-export-components
export const tigerEyeRoutes = [
  { path: "tiger-eye", element: <TigerEye108 /> },
];

const tiles = [
  {
    id: 1,
    eyebrow: "SACRED STRATEGY",
    title: "Why 108 and Tiger Eye Are the Ultimate Spiritual Power Pair",
    highlights: [
      "Daily guided ritual with Tiger Eye mala",
      "Sacred mantra teachings & 108 philosophy",
      "Community of devoted seekers",
    ],
    image: "/Sacred Mission.png",
    color: "#4A0B1D",
    description:
      "108 appears in the distance between the Earth and Sun, in the 108 Upanishads, 108 sacred sites, 108 beads of the mala — it is the universe's ordering frequency. Tiger Eye is the stone of the disciplined warrior.",
    expandedContent: {
      eyebrow: "SACRED STRATEGY",
      title: "Why 108 and Tiger Eye Are the Ultimate Spiritual Power Pair",
      fullDescription:
        "108 appears in the distance between the Earth and Sun (108 · the Sun's diameter), in the 108 Upanishads, 108 sacred sites, 108 beads of the mala — it is the universe's ordering frequency.",
      facts: [
        "108 Upanishads — The complete library of Vedantic wisdom",
        "108 × Sun Diameter — Earth–Sun distance, cosmic proof",
        "Tiger Eye Chakras — Solar plexus · Root, power & grounding",
        "108-Second Ritual — Nervous system reset protocol",
        "Godin's Tribe — 10,000 · devoted seekers, not mass marketing",
        "6 Pillars — Kotler · Godin · Ries · Trout strategic core",
      ],
    },
  },
  {
    id: 2,
    eyebrow: "CIVILIZATIONAL CODE",
    title: "The Civilizational Code: 108 & Tiger Eye",
    highlights: [
      "Sacred Geometry — 108 encoded in cosmic proportions",
      "Tiger Eye Power — Concentration, discipline & focused action",
      "Civilizational Renewal — Beyond wellness, toward cultural transformation",
    ],
    image: "/Temple Blessed.png",
    color: "#4A0B1D",
    description:
      "108 is not just a number — it is the universe's blueprint encoded in sacred geometry, planetary cycles, and ancient yogic science.",
    expandedContent: {
      title: "The Civilizational Code: 108 & Tiger Eye",
      fullDescription:
        "108 is not just a number — it is the universe's blueprint encoded in sacred geometry, planetary cycles, and ancient yogic science.",
      facts: [
        "Sacred Geometry — 108 encoded in cosmic proportions and planetary cycles",
        "Vedic Science — The ancient wisdom of 108 Upanishads and sacred sites",
        "Tiger Eye Power — Concentration, discipline, and grounded focus",
        "Modern Dharma — Bringing ancient wisdom into contemporary life",
        "Civilizational Renewal — Beyond wellness, toward cultural transformation",
        "The 108 Tribe — A movement of 10,000+ devoted practitioners",
      ],
    },
  },
  {
    id: 3,
    eyebrow: "PERSONAL DHARMA",
    title: "108 + Tiger Eye: Your Personal Dharmic Operating System",
    highlights: [
      "Order (108) — Structure, completion & cosmic alignment",
      "Power (Tiger Eye) — Courage, protection & focused action",
      "Daily Integration — 108-second ritual for nervous system reset",
    ],
    image: "/108-Day Mantra Sadhana.png",
    color: "#4A0B1D",
    description:
      "108 encodes cosmic order and completion, while Tiger Eye carries grounded courage and protection. Together they become a daily system that anchors modern life in Dharma.",
    expandedContent: {
      title: "108 + Tiger Eye: Your Personal Dharmic Operating System",
      fullDescription:
        "108 encodes cosmic order and completion, while Tiger Eye carries grounded courage and protection. Together they become a daily system that anchors modern life in Dharma.",
      facts: [
        "Order (108) — Structure, completion, and cosmic alignment",
        "Power (Tiger Eye) — Courage, protection, and focused action",
        "Daily Integration — 108-second ritual for nervous system reset",
        "Personal Dharma — Your unique path of spiritual discipline",
        "Modern Life Navigation — Through chaos, abundance, and ambition",
        "Sacred Anchor — A physical and spiritual talisman for your journey",
      ],
    },
  },
  {
    id: 4,
    eyebrow: "108 · TIGER EYE · MODERN DHARMA",
    title: "From Stones to Symbolic Infrastructure",
    highlights: [
      "Order (108): structure, completion & cosmic order",
      "Power (Tiger Eye): courage, protection & grounded focus",
      "Daily 108-Second Ritual: stillness, breath & anchor stone",
    ],
    image: "/Premium Quality.png",
    color: "#4A0B1D",
    description:
      "In Hindu civilization, 108 appears again and again as a signal of wholeness — in malas, temple canons, sacred name-garlands, and cosmic mappings.",
    expandedContent: {
      eyebrow: "108 · TIGER EYE · MODERN DHARMA",
      title: "From Stones to Symbolic Infrastructure",
      fullDescription:
        "In Hindu civilization, 108 appears again and again as a signal of wholeness — in malas, temple canons, sacred name-garlands, and cosmic mappings.",
      facts: [
        "Order (108): structure, completion, and cosmic order.",
        "Power (Tiger Eye): courage, protection, and grounded focus.",
        "Daily 108-Second Ritual: stillness, breath, and touch of the anchor stone.",
        "Tribe and Movement: a 108 Tribe that wears, counts, posts, and lives by 108.",
      ],
    },
  },
];

function TigerEyeSection() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  const trackOuterRef = useRef(null);
  const [outerWidth, setOuterWidth] = useState(0);

  useEffect(() => {
    const el = trackOuterRef.current;
    if (!el) return;
    setOuterWidth(el.clientWidth);
    const ro = new ResizeObserver(() => setOuterWidth(el.clientWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const PEEK = 88;
  const GAP = 16;
  const cardWidth = outerWidth ? outerWidth - PEEK - GAP : 0;
  const step = cardWidth + GAP;

  const prevSlide = () => setActiveSlide((p) => Math.max(0, p - 1));
  const nextSlide = () => setActiveSlide((p) => Math.min(tiles.length - 1, p + 1));

  return (
    <section className={styles.carouselSection}>
      <div
        className={styles.trackWrapper}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.trackOuter} ref={trackOuterRef}>
          <div
            className={styles.track}
            style={{ transform: `translateX(${-activeSlide * step}px)` }}
          >
            {tiles.map((tile, idx) => (
              <div
                key={tile.id}
                className={styles.card}
                style={{ "--card-color": tile.color, width: cardWidth || undefined }}
              >
                <div className={styles.cardLeft} style={{ background: tile.color }}>
                  <div className={styles.cardLeftInner}>
                    {tile.eyebrow && (
                      <span className={styles.cardEyebrow}>{tile.eyebrow}</span>
                    )}
                    <h3 className={styles.cardTitle}>{tile.title}</h3>
                    <ul className={styles.cardHighlights}>
                      {tile.highlights.map((h, i) => (
                        <li key={i}>
                          <span className={styles.cardDot} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={styles.cardBtn}
                      onClick={() =>
                        navigate("/knowledge/tiger-eye", { state: { tile } })
                      }
                    >
                      Explore →
                    </button>
                  </div>
                </div>

                <div className={styles.cardRight} style={{ backgroundColor: tile.color }}>
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className={styles.cardImage}
                  />
                  <div
                    className={styles.cardImageOverlay}
                    style={{
                      background: `linear-gradient(to right, ${tile.color} 0%, ${tile.color}99 18%, transparent 50%)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.edgeArrow} ${styles.edgeArrowLeft} ${
            hovered && activeSlide > 0
              ? styles.edgeArrowVisible
              : styles.edgeArrowHidden
          }`}
          onClick={prevSlide}
          aria-label="Previous"
        >
          ‹
        </button>

        <button
          className={`${styles.edgeArrow} ${
            hovered && activeSlide < tiles.length - 1
              ? styles.edgeArrowVisible
              : styles.edgeArrowHidden
          }`}
          onClick={nextSlide}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className={styles.navRow}>
        <div className={styles.dots}>
          {tiles.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeSlide ? styles.dotActive : ""}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TigerEyeSection;
