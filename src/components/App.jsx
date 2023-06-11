import { Component } from 'react';

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

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <button onClick={this.handleAdditionGood}>Good</button>
        <button onClick={this.handleAdditionNeutral}>Neutral</button>
        <button onClick={this.handleAdditionBad}>Bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good:{good}</p>
          </li>
          <li>
            <p>Neutral:{neutral}</p>
          </li>
          <li>
            <p>Bad:{bad}</p>
          </li>
          <li>
            <p>Total:{this.countTotalFeedback()}</p>
          </li>
          <li>
            <p>
              Positive feedback:
              {this.state.good === 0
                ? 0
                : this.countPositiveFeedbackPercentage()}
              %
            </p>
          </li>
        </ul>
      </>
    );
  }
}
