import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AlphabetButtons from "./components/AlphabetButtons";
import GuessWord from "./components/GuessWord";
import HangmanGraphic from "./components/HangmanGraphic";
import AttemptsCounter from "./components/AttemptsCounter";

function App() {
  const words = [
    "coding",
    "react",
    "northcoders",
    "javascript",
    "function",
    "recursion",
    "sum",
    "variable",
    "array",
    "object",
    "class",
    "id",
    "method",
  ];
  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  const [word, setWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const text = showHint ? "Hint: Think like a developer" : "Need a hint?";

  const maxWrong = 6;
  const win = word.split("").every((char) => guessedLetters.includes(char));
  const loss = wrongGuesses >= maxWrong;
  const gameOver = win || loss;

  function handleGuess(letter) {
    if (gameOver) return;
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((prev) => [...prev, letter]);
    if (!word.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    }
  }

  function reset() {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setWrongGuesses(0);
    setShowHint(false);
  }

  function clickShowHint() {
    setShowHint((prev) => !prev);
  }

  return (
    <>
      <Header />
      {win && (
        <div>
          <h2>Well done!</h2>
          <button onClick={reset}>Go Again</button>
        </div>
      )}
      {loss && (
        <div>
          <p>Oh no...</p>
          <p>How embarrassing for you.</p>
          <HangmanGraphic wrongGuesses={wrongGuesses} />
          <button onClick={reset}>Try Again?</button>
        </div>
      )}
      {!gameOver && (
        <>
          <AlphabetButtons
            onGuess={handleGuess}
            guessedLetters={guessedLetters}
          />
          <GuessWord word={word} guessedLetters={guessedLetters} />
          <HangmanGraphic wrongGuesses={wrongGuesses} />
          <AttemptsCounter wrongGuesses={wrongGuesses} />
          <button onClick={reset}>Reset</button>
          <button onClick={clickShowHint}>{text}</button>
        </>
      )}
    </>
  );
}

export default App;
