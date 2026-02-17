function HangmanGraphic({ wrongGuesses }) {
  return (
    <div>
      <img src={`../assets/${wrongGuesses}.png`} alt="Hangman drawing" />
    </div>
  );
}

export default HangmanGraphic;
