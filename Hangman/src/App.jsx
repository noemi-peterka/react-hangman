import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AlphabetButtons from "./components/AlphabetButtons";
import GuessWord from "./components/GuessWord";
import HangmanGraphic from "./components/HangmanGraphic";
import AttemptsCounter from "./components/AttemptsCounter";
import ResetButton from "./components/ResetButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AlphabetButtons />
      <GuessWord />
      <HangmanGraphic />
      <AttemptsCounter />
      <ResetButton />
    </>
  );
}

export default App;
