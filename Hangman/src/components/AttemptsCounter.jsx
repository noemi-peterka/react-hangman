function AttemptsCounter({ wrongGuesses }) {
  let counter = wrongGuesses;
  return (
    <div>
      <p>Attempts: {counter}</p>
    </div>
  );
}

export default AttemptsCounter;
