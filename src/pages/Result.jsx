import ResultCard from "../components/ResultCard";

function Result({ score, totalQuestions, onRetake, onHome }) {
  return (
    <div className="result-page">
      <ResultCard
        score={score}
        totalQuestions={totalQuestions}
      />

      <div className="result-buttons">
        <button onClick={onRetake}>Retake Quiz</button>
        <button onClick={onHome}>Return Home</button>
      </div>
    </div>
  );
}

export default Result;