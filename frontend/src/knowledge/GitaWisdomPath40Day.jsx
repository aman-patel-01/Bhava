import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GitaWisdomPath40Day.module.css";

function GitaWisdomPath40Day() {
  const navigate = useNavigate();
  const [expandedStage, setExpandedStage] = useState(null);


  const stages = [
    {
      name: "Understanding Dharma",
      tagline: "The Foundation of Right Living",
      days: "Day 1–10",
      color: "#295F8A",
      purpose:
        "Understand the fundamental principles of life's purpose and your inner conflicts. This stage introduces the core teachings of the Bhagavad Gita and how they apply to your life.",
      keyThemes: [
        "Human struggle and inner conflict",
        "Seeking divine guidance",
        "Nature of the eternal soul",
        "Duty above emotion",
        "Balance in success and failure",
        "Right action without attachment",
        "Calm mind and clear vision",
        "Control of the senses",
        "Overcoming desire and anger",
        "Living with discipline",
      ],
      verses: "Bhagavad Gita 1.28–30, 2.7, 2.20, 2.31, 2.38, 2.47, 2.50, 2.58, 3.37, 6.5",
      reflectionFocus:
        "Explore your own inner conflicts and how Krishna's teachings can guide you toward clarity and peace.",
      universalMessage:
        "Every human faces internal battles. The Gita shows that confusion is the beginning of wisdom.",
      gems: [
        "The soul is eternal and beyond death",
        "You have the right to action, not to results",
        "Balance is the key to peace",
      ],
    },
    {
      name: "Karma & Discipline",
      tagline: "Action Without Attachment",
      days: "Day 11–20",
      color: "#1B4430",
      purpose:
        "Learn the art of selfless action and discipline. This stage teaches how to perform your duties with complete focus while releasing attachment to outcomes.",
      keyThemes: [
        "Karma Yoga - selfless service",
        "Leading by example",
        "Selfless work and ego-free action",
        "Mind as friend or enemy",
        "Meditation and mental stability",
        "Moderation in all aspects of life",
        "Focus and sustained awareness",
        "Building inner strength",
        "Devotion expressed through action",
        "Faith and unwavering determination",
      ],
      verses: "Bhagavad Gita 3.19, 3.21, 3.30, 6.6, 6.11–15, 6.17, 6.26, 6.35, 9.27, 9.22",
      reflectionFocus:
        "How can you serve others without seeking recognition? What disciplines strengthen your mind?",
      universalMessage:
        "Discipline is the bridge between intention and transformation. Action without ego is the secret of peace.",
      gems: [
        "People follow the actions of great leaders",
        "The mind is your greatest friend or enemy",
        "Moderation brings harmony to life",
      ],
    },
    {
      name: "Knowledge & Self-Realization",
      tagline: "Seeing the Divine in All",
      days: "Day 21–30",
      color: "#422868",
      purpose:
        "Transcend the ego and experience divine presence. This stage opens your perception to the sacred nature of existence and your true identity beyond the physical form.",
      keyThemes: [
        "Divine presence everywhere",
        "God reflected in nature",
        "Universal vision and cosmic perspective",
        "Awe and humility before the infinite",
        "Detachment from ego",
        "Understanding the cycle of nature",
        "Three Gunas - energetic qualities",
        "Transcending limited qualities",
        "Divine consciousness within",
        "Life as an inverted tree",
      ],
      verses: "Bhagavad Gita 10.20, 10.41, 11.8, 11.12, 13.7–8, 13.22, 14.5, 14.20, 15.7, 15.1",
      reflectionFocus:
        "Where do you see divinity? How does understanding your smallness in the universe change your perspective?",
      universalMessage:
        "True knowledge is realizing that the divine exists in all beings and that your true self is beyond the body.",
      gems: [
        "Every greatness reflects divine energy",
        "Humility and simplicity lead to knowledge",
        "Freedom comes by transcending worldly qualities",
      ],
    },
    {
      name: "Devotion & Surrender",
      tagline: "Freedom Through Surrender",
      days: "Day 31–40",
      color: "#8B6914",
      purpose:
        "Complete your journey by surrendering to the divine. This final stage teaches that true freedom comes not from control, but from releasing the illusion of ego and accepting divine will.",
      keyThemes: [
        "Faith shapes your destiny",
        "Purity of body, speech, and intention",
        "Power of selfless charity",
        "Releasing ego's false control",
        "True wisdom sees unity in diversity",
        "Courage through steady determination",
        "Lasting happiness from within",
        "Living your authentic path",
        "Surrender to divine will",
        "Victory through wisdom and righteousness",
      ],
      verses: "Bhagavad Gita 17.3, 17.14, 17.20, 18.16, 18.20, 18.33, 18.37, 18.47, 18.66, 18.78",
      reflectionFocus:
        "What would complete surrender mean for you? How can you live your dharma authentically?",
      universalMessage:
        "The final teaching: Surrender is not weakness but freedom. When we release the ego's grip, we find victory.",
      gems: [
        "Better to follow your own path imperfectly than another's perfectly",
        "Surrender brings freedom from fear",
        "Wisdom and righteousness lead to lasting victory",
      ],
    },
  ];

  const completionBenefits = [
    {
      icon: "📖",
      title: "Ancient Wisdom Applied",
      description:
        "Transform 2,500-year-old teachings into practical guidance for modern life challenges.",
    },
    {
      icon: "🧘",
      title: "Inner Clarity",
      description:
        "Move from confusion to confidence through understanding your dharma and life's true purpose.",
    },
    {
      icon: "❤️",
      title: "Liberation from Ego",
      description:
        "Release the burden of control and perfectionism by embracing surrender and divine trust.",
    },
    {
      icon: "🌟",
      title: "Spiritual Awakening",
      description:
        "Recognize the divine presence within yourself and in all beings around you.",
    },
    {
      icon: "⚡",
      title: "Transformed Living",
      description:
        "Live with purpose, discipline, and compassion — becoming the wisest version of yourself.",
    },
  ];

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroSplit}>
          {/* Left — text content */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>40-Day Gita Wisdom Path</h1>
            <p className={styles.heroSubtitle}>
              Journey through the timeless teachings of the Bhagavad Gita over
              40 sacred days. Transform confusion into clarity, attachment into
              freedom, and ego into <em>divine consciousness</em>.
            </p>
            <button
              className={styles.btnJoinHero}
              onClick={() =>
                document
                  .getElementById("stages")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Begin the 40-Day Journey
            </button>
          </div>
          {/* Right — image */}
          <div className={styles.heroRight}>
            <div
              className={styles.heroImageOverlay}
              style={{
                background:
                  "linear-gradient(to right, #295F8A 0%, #295F8A99 18%, transparent 50%)",
              }}
            />
            <img
              src="../40 Day Gita Wisdom Path.png"
              alt="40-Day Gita Wisdom Path"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* ── 4 Stages Overview ── */}
      <section className={styles.stagesSection} id="stages">
        <div className={styles.container}>
          <p className={styles.eyebrowCenter}>
            How the 40 Days Are Structured
          </p>
          <h2 className={styles.sectionTitle}>
            Four Stages of <span className={styles.maroon}>Transformation</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Each stage builds upon the last — from understanding duty to
            recognizing divinity, from action to surrender.
          </p>
          <div className={styles.stagesGrid}>
            {stages.map((stage) => (
              <div
                key={stage.name}
                className={styles.stageCard}
                style={{ borderTop: `3px solid ${stage.color}` }}
              >
                <span
                  className={styles.stageDays}
                  style={{ color: stage.color }}
                >
                  {stage.days}
                </span>
                <h3 className={styles.stageTitle}>{stage.name}</h3>
                <p className={styles.stageTagline}>"{stage.tagline}"</p>
                <p className={styles.stageDesc}>{stage.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed Stage Breakdown ── */}
      <section className={styles.detailSection}>
        <div className={styles.container}>
          <p className={styles.eyebrowCenter}>Complete Guide</p>
          <h2 className={styles.sectionTitle}>
            The <span className={styles.maroon}>40-Day Journey</span> in Detail
          </h2>
          <p className={styles.sectionSubtitle}>
            Click any stage to explore the verses, reflections, and universal
            messages that will guide your daily practice.
          </p>

          <div className={styles.stageDetailList}>
            {stages.map((stage, idx) => (
              <div
                key={stage.name}
                className={`${styles.stageDetailRow} ${
                  expandedStage === idx ? styles.stageDetailRowOpen : ""
                }`}
                style={{ "--stage-color": stage.color }}
              >
                <button
                  className={styles.stageDetailHeader}
                  onClick={() =>
                    setExpandedStage(expandedStage === idx ? null : idx)
                  }
                >
                  <span
                    className={styles.stageNumber}
                    style={{ background: stage.color }}
                  >
                    Stage {idx + 1}
                  </span>
                  <span className={styles.stageDetailName}>
                    {stage.name}{" "}
                    <span className={styles.stageDetailDays}>
                      ({stage.days})
                    </span>
                  </span>
                  <span className={styles.stageDetailTagline}>
                    "{stage.tagline}"
                  </span>
                  <span className={styles.stageChevron}>
                    {expandedStage === idx ? "▲" : "▼"}
                  </span>
                </button>

                {expandedStage === idx && (
                  <div className={styles.stageDetailBody}>
                    <div className={styles.stageDetailGrid}>
                      {/* Purpose */}
                      <div className={styles.stageDetailBlock}>
                        <p className={styles.stageDetailLabel}>Purpose</p>
                        <p className={styles.stagePurposeText}>
                          {stage.purpose}
                        </p>
                      </div>

                      {/* Key Themes */}
                      <div className={styles.stageDetailBlock}>
                        <p className={styles.stageDetailLabel}>Key Themes</p>
                        <ul className={styles.stageDetailUl}>
                          {stage.keyThemes.map((theme, i) => (
                            <li key={i}>{theme}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Verses */}
                      <div className={styles.stageDetailBlock}>
                        <p className={styles.stageDetailLabel}>Verses</p>
                        <p className={styles.stageVerseText}>
                          {stage.verses}
                        </p>
                      </div>

                      {/* Reflection Focus */}
                      <div className={styles.stageDetailBlock}>
                        <p className={styles.stageDetailLabel}>
                          Reflection Focus
                        </p>
                        <p className={styles.stageReflectionText}>
                          {stage.reflectionFocus}
                        </p>
                      </div>

                      {/* Universal Message */}
                      <div className={styles.stageDetailBlock}>
                        <p className={styles.stageDetailLabel}>
                          Universal Message
                        </p>
                        <p className={styles.stageMessageText}>
                          "{stage.universalMessage}"
                        </p>
                      </div>

                      {/* Key Gems */}
                      <div className={styles.stageDetailBlock}>
                        <p className={styles.stageDetailLabel}>Key Gems</p>
                        <ul className={styles.stageDetailUl}>
                          {stage.gems.map((gem, i) => (
                            <li key={i}>{gem}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Completion / Benefits ── */}
      <section className={styles.completionSection}>
        <div className={styles.container}>
          <p className={styles.eyebrowCenter}>What You Gain</p>
          <h2 className={styles.sectionTitle}>
            After <span className={styles.maroon}>40 Days</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Following the 40-Day Gita Wisdom Path, you will emerge with a
            deeper understanding of your purpose, greater peace in your heart,
            and a transformed perspective on life.
          </p>
          <div className={styles.benefitsGrid}>
            {completionBenefits.map((b, i) => (
              <div key={i} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Begin Your 40-Day Gita Wisdom Path
            </h2>
            <p className={styles.ctaSubtext}>
              40 days. One verse at a time. One reflection at a time.
              <br />
              The transformation begins when you open your heart.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.btnPrimary}>Start the Challenge</button>
              <button
                className={styles.btnSecondary}
                onClick={() => navigate("/knowledge")}
              >
                ← Back to Knowledge
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GitaWisdomPath40Day;
