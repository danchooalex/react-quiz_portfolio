function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
  emoji,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> points out of {maxPossiblePoints} (
        {Math.ceil(percentage)} % )
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
