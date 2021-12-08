import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <div className={styles.container}>
      <button
        id="good"
        className={styles.btn}
        type="button"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        id="neutral"
        className={styles.btn}
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        id="bad"
        className={styles.btn}
        type="button"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
    <h2 className={styles.title}>Statistic</h2>
  </>
);

export default FeedbackOptions;
