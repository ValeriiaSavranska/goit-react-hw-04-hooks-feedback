import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <div className={styles.container}>
      {Object.keys(options).map(option => (
        <button
          key={option}
          className={styles.btn}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
    <h2 className={styles.title}>Statistic</h2>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
