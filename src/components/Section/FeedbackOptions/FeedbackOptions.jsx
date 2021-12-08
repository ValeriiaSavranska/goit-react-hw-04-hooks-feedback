import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
