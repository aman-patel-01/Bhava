import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MantraSadhana108.module.css";

function MantraSadhana108() {
  const navigate = useNavigate();
  const [expandedPhase, setExpandedPhase] = useState(null);


  const phases = [
    {
      name: "Foundation",
      tagline: "Discipline Begins the Journey",
      days: "Day 1–21",
      color: "#681327",
      purpose:
        "To build consistency, correct pronunciation, and mental focus. This phase is about habit formation. The mind may wander. The body may resist. But discipline is more important than depth at this stage.",
      focusAreas: [
        "Fix a specific daily time",
        "Sit in the same place",
        "Maintain steady posture",
        "Learn correct mantra pronunciation",
        "Chant slowly and consciously",
      ],
      mantras: {
        primary: ["Om (21 times)", "Gayatri Mantra (11 times)"],
        optional: ["Om Namah Shivaya (108 times using mala)"],
      },
      innerExperience: [
        "Restlessness",
        "Boredom",
        "Distraction",
        "Mechanical chanting",
      ],
      innerNote:
        "This is normal. Do not judge. Continue. Discipline creates spiritual momentum.",
      transformationGoal: [
        "Have a fixed routine",
        "Chant with clarity",
        "Sit comfortably for 10–15 minutes",
        "Feel slight mental stability",
      ],
      transformationNote: "Foundation is about commitment, not intensity.",
    },
    {
      name: "Stabilization",
      tagline: "Breath and Sound Become One",
      days: "Day 22–54",
      color: "#1B4430",
      purpose:
        "To connect mantra with breath and deepen awareness. Now the mind starts settling. Chanting becomes rhythmic.",
      focusAreas: [
        "Synchronize mantra with breathing",
        "Chant from the diaphragm",
        "Keep spine straight",
        "Reduce speed slightly",
        "Increase awareness of vibration",
      ],
      mantras: {
        primary: [
          "Gayatri Mantra (21 times)",
          "Mahamrityunjaya Mantra (11 times)",
        ],
        optional: ["Om Namah Shivaya (108 times)"],
      },
      innerExperience: [
        "Calmness increasing",
        "Thoughts slowing",
        "Emotional balance improving",
        "Subtle vibrations in chest or forehead",
      ],
      innerNote: "Mantra starts moving from lips to mind.",
      transformationGoal: [
        "Mind becomes quieter",
        "Chanting feels natural",
        "Breath becomes deeper",
        "Awareness increases",
      ],
      transformationNote:
        "Now mantra begins to reshape subconscious patterns.",
    },
    {
      name: "Deepening",
      tagline: "Mantra Enters the Heart",
      days: "Day 55–81",
      color: "#422868",
      purpose:
        "To move from verbal chanting to internal repetition (Japa). This phase is about internalization.",
      focusAreas: [
        "Chant softly or mentally",
        "Feel vibration in heart center",
        "Maintain longer silence after chanting",
        "Observe thoughts without reacting",
      ],
      mantras: {
        primary: [
          "Om Namah Shivaya (108 times)",
          "OR Om Namo Bhagavate Vasudevaya (108 times)",
        ],
        optional: ["Add silent meditation after chanting (3–5 minutes)"],
      },
      innerExperience: [
        "Emotional cleansing",
        "Old memories surfacing",
        "Sudden clarity",
        "Deeper peace",
      ],
      innerNote:
        "This is purification. Mantra now moves from mind to consciousness.",
      transformationGoal: [
        "You enjoy silence",
        "Chanting becomes effortless",
        "Emotional reactions reduce",
        "Awareness stays longer in present moment",
      ],
      transformationNote: "Mantra becomes part of your identity.",
    },
    {
      name: "Integration",
      tagline: "Sound Becomes Stillness",
      days: "Day 82–108",
      color: "#8B6914",
      purpose:
        "To integrate mantra into daily life. Chanting is no longer practice. It becomes presence.",
      focusAreas: [
        "Maintain steady daily practice",
        "Reduce external dependency",
        "Increase silent mantra during day",
        "Carry awareness into actions",
      ],
      mantras: {
        primary: [
          "Morning: Full 108 mantra repetition",
          "Daytime: Silent mantra remembrance",
          "Night: 5-minute gratitude meditation",
        ],
        optional: [],
      },
      innerExperience: [
        "Stable inner calm",
        "Quick emotional recovery",
        "Clear decision-making",
        "Natural detachment",
        "Increased compassion",
      ],
      innerNote: "Now mantra works automatically within.",
      transformationGoal: [
        "Discipline becomes natural",
        "Mind becomes clearer",
        "Emotional control improves",
        "Spiritual identity strengthens",
        "Inner stillness deepens",
      ],
      transformationNote:
        "You are not the same person who began on Day 1.",
    },
  ];

  const completionBenefits = [
    {
      icon: "📿",
      title: "Unshakeable Discipline",
      description:
        "108 days of consistent practice forges a daily sadhana that becomes second nature.",
    },
    {
      icon: "🧠",
      title: "Mental Clarity",
      description:
        "The mind becomes clearer, sharper, and no longer controlled by scattered thoughts.",
    },
    {
      icon: "❤️",
      title: "Emotional Mastery",
      description:
        "Reactions soften. You observe feelings instead of being overtaken by them.",
    },
    {
      icon: "🙏",
      title: "Spiritual Identity",
      description:
        "Mantra becomes part of who you are — a living, breathing devotion within.",
    },
    {
      icon: "☮️",
      title: "Inner Stillness",
      description:
        "Sound becomes silence. Practice becomes presence. Stillness deepens permanently.",
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
            <h1 className={styles.heroTitle}>108-Day Mantra Sādhana</h1>
            <p className={styles.heroSubtitle}>
              Commit to daily mantra and deepen your inner stillness. Chant
              sacred mantras for 108 consecutive days and experience{" "}
              <em>profound inner transformation</em> through sound and devotion.
            </p>
            <button
              className={styles.btnJoinHero}
              onClick={() =>
                document
                  .getElementById("phases")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore the 108-Day Path
            </button>
          </div>
          {/* Right — image */}
          <div className={styles.heroRight}>
            <div
              className={styles.heroImageOverlay}
              style={{
                background:
                  "linear-gradient(to right, #6E1B21 0%, #6E1B2199 18%, transparent 50%)",
              }}
            />
            <img
              src="../108-Day Mantra Sadhana.png"
              alt="108-Day Mantra Sādhana"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* ── 4 Phases Overview ── */}
      <section className={styles.phasesSection} id="phases">
        <div className={styles.container}>
          <p className={styles.eyebrowCenter}>
            How the 108 Days Are Structured
          </p>
          <h2 className={styles.sectionTitle}>
            Four Phases of{" "}
            <span className={styles.maroon}>Transformation</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Each phase builds upon the last — from discipline to stillness, from
            sound to silence.
          </p>
          <div className={styles.phasesGrid}>
            {phases.map((phase) => (
              <div
                key={phase.name}
                className={styles.phaseCard}
                style={{ borderTop: `3px solid ${phase.color}` }}
              >
                <span
                  className={styles.phaseDays}
                  style={{ color: phase.color }}
                >
                  {phase.days}
                </span>
                <h3 className={styles.phaseTitle}>{phase.name}</h3>
                <p className={styles.phaseTagline}>"{phase.tagline}"</p>
                <p className={styles.phaseDesc}>{phase.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed Phase Breakdown ── */}
      <section className={styles.detailSection}>
        <div className={styles.container}>
          <p className={styles.eyebrowCenter}>Complete Guide</p>
          <h2 className={styles.sectionTitle}>
            The <span className={styles.maroon}>108-Day Journey</span> in Detail
          </h2>
          <p className={styles.sectionSubtitle}>
            Click any phase to expand its full practice guide, mantras, and
            transformation goals.
          </p>

          <div className={styles.phaseDetailList}>
            {phases.map((phase, idx) => (
              <div
                key={phase.name}
                className={`${styles.phaseDetailRow} ${
                  expandedPhase === idx ? styles.phaseDetailRowOpen : ""
                }`}
                style={{ "--phase-color": phase.color }}
              >
                <button
                  className={styles.phaseDetailHeader}
                  onClick={() =>
                    setExpandedPhase(expandedPhase === idx ? null : idx)
                  }
                >
                  <span
                    className={styles.phaseNumber}
                    style={{ background: phase.color }}
                  >
                    Phase {idx + 1}
                  </span>
                  <span className={styles.phaseDetailName}>
                    {phase.name}{" "}
                    <span className={styles.phaseDetailDays}>
                      ({phase.days})
                    </span>
                  </span>
                  <span className={styles.phaseDetailTagline}>
                    "{phase.tagline}"
                  </span>
                  <span className={styles.phaseChevron}>
                    {expandedPhase === idx ? "▲" : "▼"}
                  </span>
                </button>

                {expandedPhase === idx && (
                  <div className={styles.phaseDetailBody}>
                    <div className={styles.phaseDetailGrid}>
                      {/* Focus Areas */}
                      <div className={styles.phaseDetailBlock}>
                        <p className={styles.phaseDetailLabel}>Focus Areas</p>
                        <ul className={styles.phaseDetailUl}>
                          {phase.focusAreas.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Recommended Mantras */}
                      <div className={styles.phaseDetailBlock}>
                        <p className={styles.phaseDetailLabel}>
                          Recommended Mantras
                        </p>
                        <p className={styles.mantraLabel}>Primary:</p>
                        <ul className={styles.phaseDetailUl}>
                          {phase.mantras.primary.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                        {phase.mantras.optional.length > 0 && (
                          <>
                            <p className={styles.mantraLabel}>
                              {phase.name === "Integration"
                                ? ""
                                : "Optional:"}
                            </p>
                            <ul className={styles.phaseDetailUl}>
                              {phase.mantras.optional.map((m, i) => (
                                <li key={i}>{m}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>

                      {/* Inner Experience */}
                      <div className={styles.phaseDetailBlock}>
                        <p className={styles.phaseDetailLabel}>
                          Inner Experience
                        </p>
                        <ul className={styles.phaseDetailUl}>
                          {phase.innerExperience.map((e, i) => (
                            <li key={i}>{e}</li>
                          ))}
                        </ul>
                        <p className={styles.phaseDetailNote}>
                          {phase.innerNote}
                        </p>
                      </div>

                      {/* Transformation Goal */}
                      <div className={styles.phaseDetailBlock}>
                        <p className={styles.phaseDetailLabel}>
                          Transformation Goal
                        </p>
                        <ul className={styles.phaseDetailUl}>
                          {phase.transformationGoal.map((g, i) => (
                            <li key={i}>{g}</li>
                          ))}
                        </ul>
                        <p className={styles.phaseDetailNote}>
                          {phase.transformationNote}
                        </p>
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
            After <span className={styles.maroon}>108 Days</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            After completing the 108-Day Mantra Sādhana, you will have
            undergone a complete inner transformation — from discipline to
            stillness, from sound to silence.
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
              Begin Your 108-Day Mantra Sādhana
            </h2>
            <p className={styles.ctaSubtext}>
              108 days. One mantra. One seat. One breath at a time.
              <br />
              The transformation begins when you commit.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.btnPrimary}>Join the Sādhana</button>
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

export default MantraSadhana108;
