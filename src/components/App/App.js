import { Component } from 'react';
import Section from '../Section/Section.jsx';
import FeedbackOptions from '../Section/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../Section/Statistics/Statistics.jsx';
import Notification from '../Notification/Notification.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hahdelClick = event => {
    this.setState(prevState => {
      if (event.target.id === 'good') {
        return { good: prevState.good + 1 };
      }
      if (event.target.id === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      }
      if (event.target.id === 'bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  countTotalFeedback = () => {
    const sum = this.state.good + this.state.neutral + this.state.bad;
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.ceil(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return positivePercentage;
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.hahdelClick}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    );
  }
}

export default App;
