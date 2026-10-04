function AnswerOption({ option, selected, onSelect }) {
  return (
    <button
      className={`answer-option ${selected ? "selected" : ""}`}
      onClick={() => onSelect(option)}
    >
      {option}
    </button>
  );
}

export default AnswerOption;