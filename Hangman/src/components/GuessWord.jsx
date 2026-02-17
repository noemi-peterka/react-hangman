function GuessWord({ word, guessedLetters }) {
  const display = word
    .split("")
    .map((char) => (guessedLetters.includes(char) ? char : "_"))
    .join(" ");
  return (
    <div>
      <h2 className="guess-word">{display}</h2>
    </div>
  );
}

export default GuessWord;
