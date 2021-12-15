// import { Component } from 'react';
import { useState } from 'react';
import Section from '../Section/Section.jsx';
import FeedbackOptions from '../Section/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../Section/Statistics/Statistics.jsx';
import Notification from '../Notification/Notification.jsx';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const hahdelClick = option => {
    setState(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const sum = state.good + state.neutral + state.bad;
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.ceil(
      (state.good / countTotalFeedback()) * 100,
    );

    return positivePercentage;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={state} onLeaveFeedback={hahdelClick} />
      {countTotalFeedback() ? (
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Section>
  );
};

export default App;
