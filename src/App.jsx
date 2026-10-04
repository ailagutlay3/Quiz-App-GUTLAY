import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    navigate("/result");
  };

  const retakeQuiz = () => {
    setScore(0);
    navigate("/quiz");
  };

  const returnHome = () => {
    setScore(0);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<Home onStart={startQuiz} />} />

      <Route
        path="/quiz"
        element={<Quiz onFinish={finishQuiz} />}
      />

      <Route
        path="/result"
        element={
          <Result
            score={score}
            totalQuestions={10}
            onRetake={retakeQuiz}
            onHome={returnHome}
          />
        }
      />
    </Routes>
  );
}

export default App;