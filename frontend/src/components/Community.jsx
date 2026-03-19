import { useState } from "react";
import styles from "./Community.module.css";

function Community() {
  const testimonials = [
    {
      text: "The quality is incomparable. I've been using Bhava: incense for my daily puja and the difference is extraordinary. It's like bringing the temple into my home.",
      author: "- Priya Sharma, Mumbai"
    },
    {
      text: "Finally, a brand that respects the sanctity of our traditions while meeting luxury standards. This is spiritual commerce done right.",
      author: "- Rajesh Iyer, Bangalore"
    },
    {
      text: "The storytelling, packaging, and authenticity—everything about Bhava: feels like a blessing. I've gifted it to all my family members abroad.",
      author: "- Anjali Desai, London"
    }
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className={styles.communitySection}>
      <div className={styles.communityHeader}>
        <h2 className={styles.communityTitle}>
          Community <span className={styles.highlight}>Stories</span>
        </h2>
      </div>

      <div className={styles.fullWidthSlider}>
        <button
          aria-label="Previous review"
          className={`${styles.circleArrow} ${styles.left}`}
          onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
        >
          ‹
        </button>

        <div className={styles.sliderInner}>
          <article key={current} className={styles.testimonialCardLarge} aria-live="polite">
            <div className={styles.stars}>{"★★★★★"}</div>
            <p className={styles.testimonialTextLarge}>{testimonials[current].text}</p>
            <p className={styles.testimonialAuthor}>{testimonials[current].author}</p>
          </article>
        </div>

        <button
          aria-label="Next review"
          className={`${styles.circleArrow} ${styles.right}`}
          onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Community;
