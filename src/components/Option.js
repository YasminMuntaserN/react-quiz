import { useQuiz } from "../contexts/QuizContexts";
function Option() {
  const { questions, dispatch, answer, index } = useQuiz();

  const question = questions[index];
  const hasAnwered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option
          ${index === answer ? "answer" : ""}
          ${
            hasAnwered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnwered}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
