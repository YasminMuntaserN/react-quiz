export default function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You Scored <strong>{points}</strong>
      out of the {maxPossiblePoints} {Math.ceil(percentage)}%
    </p>
  );
}
