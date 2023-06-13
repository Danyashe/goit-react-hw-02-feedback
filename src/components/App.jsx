import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAdditionGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleAdditionNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleAdditionBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>hello!!!</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleAdditionBad={this.handleAdditionBad}
            handleAdditionNeutral={this.handleAdditionNeutral}
            handleAdditionGood={this.handleAdditionGood}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            state={this.state}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        </Section>
      </>
    );
  }
}
