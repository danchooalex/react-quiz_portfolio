function Progress({ index, numQuestion, points, maxPossiblePoints }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index} />
      <p>
        Question<strong> {index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
