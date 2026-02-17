function AlphabetButtons() {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const alphabetButtons = alphabet.map((letter) => <button>{letter}</button>);

  return (
    <>
      <h2>Make a guess below:</h2>

      <div>{alphabetButtons}</div>
    </>
  );
}

export default AlphabetButtons;
