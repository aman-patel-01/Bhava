import { useState } from "react";
import styles from "./Community.module.css";

const testimonials = [
  {
    text: "The quality is incomparable. I've been using Bhava: incense for my daily puja and the difference is extraordinary. It's like bringing the temple into my home.",
    author: "Priya Sharma, Mumbai",
  },
  {
    text: "Finally, a brand that respects the sanctity of our traditions while meeting luxury standards. This is spiritual commerce done right.",
    author: "Rajesh Iyer, Bangalore",
  },
  {
    text: "The storytelling, packaging, and authenticity—everything about Bhava: feels like a blessing. I've gifted it to all my family members abroad.",
    author: "Anjali Desai, London",
  },
];

function Community() {
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const goNext = () => {
    if (current < testimonials.length - 1) setCurrent(current + 1);
  };

  return (
    <section className={styles.communitySection}>
      <div className={styles.communityHeader}>
        <h2 className={styles.communityTitle}>
          Community <span className={styles.highlight}>Stories</span>
        </h2>
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.testimonialCard}>
          <div className={styles.stars}>★★★★★</div>
          <p className={styles.testimonialText}>{testimonials[current].text}</p>
          <div className={styles.divider} />
          <p className={styles.testimonialAuthor}>— {testimonials[current].author}</p>
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowLeft} ${current === 0 ? styles.arrowHidden : ""}`}
          onClick={goPrev}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <button
          className={`${styles.arrow} ${styles.arrowRight} ${current === testimonials.length - 1 ? styles.arrowHidden : ""}`}
          onClick={goNext}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Community;
