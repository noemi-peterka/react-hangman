import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AlphabetButtons from "./components/AlphabetButtons";
import GuessWord from "./components/GuessWord";
import HangmanGraphic from "./components/HangmanGraphic";
import AttemptsCounter from "./components/AttemptsCounter";
import ResetButton from "./components/ResetButton";

function App() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [word, setWord] = useState("northcoders");
  const [wrongGuesses, setWrongGuesses] = useState(0);

  function handleGuess(letter) {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((prev) => [...prev, letter]);
    if (!word.includes(letter)) {
      setWrongGuesses((prev) => prev + 1);
    }
  }

  return (
    <>
      <Header />
      <AlphabetButtons onGuess={handleGuess} guessedLetters={guessedLetters} />
      <GuessWord word={word} guessedLetters={guessedLetters} />
      <HangmanGraphic />
      <AttemptsCounter wrongGuesses={wrongGuesses} />
      <ResetButton />
    </>
  );
}

export default App;
