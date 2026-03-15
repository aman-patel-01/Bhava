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

  return (
    <div className={styles.communitySection}>
      <div className={styles.container}>
        <h2 className={styles.communityTitle}>
          Community <span className={styles.highlight}>Stories</span>
        </h2>

        <div className={styles.row}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.col}>
              <div className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {"★★★★★"}
                </div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <p className={styles.testimonialAuthor}>{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;
