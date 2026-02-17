function AlphabetButtons({ onGuess, guessedLetters }) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const alphabetButtons = alphabet.map((letter) => (
    <button
      key={letter}
      onClick={() => onGuess(letter)}
      disabled={guessedLetters.includes(letter)}
    >
      {letter}
    </button>
  ));

  return (
    <>
      <h2>Make a guess below:</h2>

      <div>{alphabetButtons}</div>
    </>
  );
}

export default AlphabetButtons;
