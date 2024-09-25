import Option from "./Option";
import { useQuiz } from "../contexts/QuizContexts";
function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Option />
    </div>
  );
}

export default Question;
