import { useState } from "react";
import styles from "./GitaSlider.module.css";
import { getTodaysQuote } from "./gitaQuotes";

const quote = getTodaysQuote();

function GitaSlider() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = `"${quote.text}" — ${quote.ref}`;
    if (navigator.share) {
      await navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className={styles.gitaSection}>
      <div className={styles.gitaBg} />

      <div className={styles.gitaHeader}>
        <h2 className={styles.gitaHeading}>Daily Wisdom</h2>
        <p className={styles.gitaSubheading}>
          Timeless guidance from the Bhagavad Gita
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.quoteCard}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>{quote.text}</p>
          <div className={styles.quoteDivider} />
          <span className={styles.quoteRef}>{quote.ref}</span>
          <button
            className={styles.shareBtn}
            onClick={handleShare}
            aria-label="Share quote"
            title={copied ? "Copied!" : "Share"}
          >
            {copied ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default GitaSlider;
