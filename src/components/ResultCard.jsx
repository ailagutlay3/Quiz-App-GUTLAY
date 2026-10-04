function ResultCard({ score, totalQuestions }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="result-card">
      <h2>Quiz Completed!</h2>

      <p>
        Score: {score} / {totalQuestions}
      </p>

      <p>Percentage: {percentage}%</p>
    </div>
  );
}

export default ResultCard;