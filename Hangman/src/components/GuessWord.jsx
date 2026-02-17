function GuessWord({ word, guessedLetters }) {
  const display = word
    .split("")
    .map((char) => (guessedLetters.includes(char) ? char : "_"))
    .join(" ");
  return (
    <div class="guess-word">
      <h2>{display}</h2>
    </div>
  );
}

export default GuessWord;
