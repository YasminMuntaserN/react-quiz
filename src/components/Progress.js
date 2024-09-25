import { useQuiz } from "../contexts/QuizContexts";
function Progress() {
  const { index, numOfQuestions, points, maxPossiblePointes, answer } =
    useQuiz();
  return (
    <header className="progress">
      {/* if there is an answer the Number method will produce one and added it to the index and if not it will be added zero to the the index then nothing will be changed  */}
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePointes}
      </p>
    </header>
  );
}

export default Progress;
