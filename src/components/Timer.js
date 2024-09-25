import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContexts";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const min = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tic" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min} :{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
