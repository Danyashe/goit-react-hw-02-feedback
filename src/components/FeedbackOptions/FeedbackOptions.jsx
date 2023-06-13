export function FeedbackOptions({
  handleAdditionGood,
  handleAdditionNeutral,
  handleAdditionBad,
}) {
  return (
    <>
      <button onClick={handleAdditionGood}>Good</button>
      <button onClick={handleAdditionNeutral}>Neutral</button>
      <button onClick={handleAdditionBad}>Bad</button>
    </>
  );
}
