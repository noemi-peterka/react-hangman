Hangman (React)
A simple Hangman game built with React. Guess the word one letter at a time before you run out of attempts.

Features
Random word selected from a predefined list

Alphabet buttons for guessing letters (buttons disable after being clicked)

Word display updates live as letters are guessed

Wrong guesses increment an attempts counter

Hangman graphic updates as attempts increase

Win and loss states:

Win: all letters guessed
Loss: wrong guesses reach the maximum allowed Game Screenshot
Reset / “Go Again” button to start a new game

Hint button (toggles hint text)

Confetti on win

Game Screenshot

How to Play
Click a letter button to make a guess.
If the letter is in the word, it will appear in the blanks.
If the letter is not in the word, the wrong guess counter increases and the hangman graphic updates.
Win by revealing the whole word before you hit the max wrong guesses.
Tech Stack
React
Vite
JavaScript
CSS
Getting Started
To clone the repo
git clone <your-repo-url>
cd <your-folder>
2) Install dependencies
bash
Copy code
npm install
3) Run the dev server
bash
Copy code
npm run dev
Then open the local URL shown in your terminal.

Project Structure (example)
txt
Copy code
src/
  components/
    AlphabetButtons.jsx
    AttemptsCounter.jsx
    GuessWord.jsx
    HangmanGraphic.jsx
    Header.jsx
  App.jsx
  main.jsx
assets/
  0.png
  1.png
  2.png
  3.png
  4.png
  5.png
  6.png
Game Rules / Logic Notes
guessedLetters stores all guessed letters.

Wrong guesses increment wrongGuesses.

win is true when every character in word is in guessedLetters.

loss is true when wrongGuesses >= maxWrong.

When the game is over, letter input should be disabled and the UI switches to a win/loss screen.
