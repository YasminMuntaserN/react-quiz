import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Error from "./components/Error.js";
import Loader from "./components/Loader.js";
import StartScreen from "./components/StartScreen.js";
import Question from "./components/Question.js";
import NextButton from "./components/NextButton.js";
import Progress from "./components/Progress.js";
import FinishScreen from "./components/FinishScreen.js";
import Footer from "./components/Footer.js";
import Timer from "./components/Timer.js";
import { QuizProvider, useQuiz } from "./contexts/QuizContexts.js";

export default function App() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}

// Separate component for quiz content after QuizProvider is applied
function QuizContent() {
  const { status } = useQuiz();

  return (
    <div className="App">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
