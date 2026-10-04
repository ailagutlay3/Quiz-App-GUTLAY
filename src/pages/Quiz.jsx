import { useState } from "react";
import questions from "../data/questions";

import QuestionCard from "../components/QuestionCard";
import AnswerOption from "../components/AnswerOption";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";

function Quiz({ onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (selectedAnswer === question.answer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      const finalScore =
        score + (selectedAnswer === question.answer ? 1 : 0);

      onFinish(finalScore);
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  };

  return (
    <div className="quiz-page">
      <div className="quiz-card">

        <QuizHeader
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
        />

        <ProgressBar
          current={currentQuestion + 1}
          total={questions.length}
        />

        <QuestionCard question={question.question} />

        <div className="answers">
          {question.options.map((option) => (
            <AnswerOption
              key={option}
              option={option}
              selected={selectedAnswer === option}
              onSelect={handleAnswer}
            />
          ))}
        </div>

        <button
          className="next-button"
          onClick={handleNext}
          disabled={!selectedAnswer}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next"}
        </button>

      </div>
    </div>
  );
}

export default Quiz;