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
    "",
  ];
  const random = Math.floor(Math.random() * words.length);
  const randomWord = words[random];

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [word, setWord] = useState(randomWord);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  function handleGuess(letter) {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((prev) => [...prev, letter]);
    if (!word.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    }
  }

  function reset() {
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
  }

  return (
    <>
      <Header />
      <AlphabetButtons onGuess={handleGuess} guessedLetters={guessedLetters} />
      <GuessWord word={word} guessedLetters={guessedLetters} />
      <HangmanGraphic wrongGuesses={wrongGuesses} />
      <AttemptsCounter wrongGuesses={wrongGuesses} />

      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
