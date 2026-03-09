import { useState } from "react";
import styles from "./FAQ.module.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are your products temple-blessed and authentic?",
      answer:
        "Yes. Every product in our collection — from sambrani cups to puja samagri — is sourced directly from verified temple artisans and traditional manufacturers across India. Our incense and dhoop are prepared using age-old Vedic recipes with natural ingredients like guggul, loban, and camphor. We partner with over 500 temples and certified suppliers to ensure every item you receive carries genuine spiritual intent and purity.",
    },
    {
      question: "How do your prices compare to retail incense/sambrani?",
      answer:
        "Because we work directly with artisans and temple cooperatives — cutting out middlemen — our prices are typically 30–45% lower than retail stores for equivalent quality. A standard sambrani cup set that retails for ₹350 in stores is available on Bhava for ₹199. We believe sacred products should be accessible to every devotee, not just those who can afford luxury pricing.",
    },
    {
      question: "Is Bhava: certified by regulatory bodies?",
      answer:
        "Yes. Bhava is registered under FSSAI for all applicable consumable products and complies with BIS standards for incense and dhoop. Our herbal and ayurvedic products carry relevant certifications, and we are in the process of obtaining GI (Geographical Indication) tags for region-specific offerings like Mysore Agarbatti and Varanasi Puja Samagri. All certifications are available for review upon request.",
    },
    {
      question: "What's your return/refund policy?",
      answer:
        "We offer a hassle-free 7-day return policy on all non-consumable products (idols, puja thalis, decor items). For consumable items like incense, dhoop, and oils, we accept returns only if the product is damaged or defective upon arrival. Simply share a photo of the issue within 48 hours of delivery and our team will arrange a full refund or replacement within 3–5 business days — no questions asked.",
    },
    {
      question: "How fast is delivery? Do you ship internationally?",
      answer:
        "Within India, we deliver in 3–5 business days for most pin codes, with express 1–2 day delivery available in metro cities. For international shipping, we currently serve the USA, UK, Canada, Australia, Singapore, and UAE — with delivery in 7–14 business days. International orders above $50 / £40 qualify for free shipping. We take special care in packaging fragile items like idols and clay diyas to ensure they arrive safely.",
    },
    {
      question: "When is the Wellness App launching?",
      answer:
        "The Bhava Wellness App is currently in its final beta phase and is set to launch in Q2 2025 on both iOS and Android. The app will bring Daily Horoscope & Vedic Astrology readings, Personalized Ritual Recommendations, a Sacred Temple Directory with Virtual Darshan, and Guided Meditation Practices — all in one place. Join our waitlist today and get 3 months of premium access completely free at launch.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h1 className={styles.faqTitle}>
        Spiritual Seekers Ask—We{" "}
        <span className={styles.faqTitleAccent}>Illuminate</span>
      </h1>

      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${openIndex === index ? styles.faqItemOpen : ""}`}
            onClick={() => toggle(index)}
          >
            <div className={styles.faqQuestion}>
              <span>{faq.question}</span>
              <span
                className={`${styles.faqToggle} ${openIndex === index ? styles.faqToggleOpen : ""}`}
              >
                ▼
              </span>
            </div>
            {openIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;