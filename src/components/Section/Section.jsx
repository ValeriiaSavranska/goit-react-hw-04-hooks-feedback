import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
