export default function FinishScreen({
  points,
  maxPossiblePointes,
  highScore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePointes) * 100;

  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "😒";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You Scored <strong>{points} </strong>
        out of the ( {maxPossiblePointes} ) {Math.ceil(percentage)}%
      </p>
      <p className="highscore">HighScore : {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restarting" })}
      >
        Restarting the Quiz
      </button>
    </>
  );
}
