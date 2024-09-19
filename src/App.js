import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Error from "./components/Error.js";
import Loader from "./components/Loader.js";
import StartScreen from "./components/StartScreen.js";
import Question from "./components/Question.js";

const initialState = {
  questions: [],
  //'Loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Action not supported");
  }
}

export default function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  const numOfQuestions = questions.length;
  console.log(numOfQuestions);

  return (
    <div className="App">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}
