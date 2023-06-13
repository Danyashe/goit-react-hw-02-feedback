import { Notification } from 'components/Notification/Notification';
export function Statistics({ good, neutral, bad, state }) {
  const countTotalFeedback = () => {
    return Object.values(state).reduce((a, b) => a + b, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };
  return (
    <>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
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
            <p>Total:{countTotalFeedback()}</p>
          </li>
          <li>
            <p>
              Positive feedback:
              {good === 0 ? 0 : countPositiveFeedbackPercentage()}%
            </p>
          </li>
        </ul>
      )}
    </>
  );
}
