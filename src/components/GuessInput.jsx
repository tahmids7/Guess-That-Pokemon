import React, { useState } from "react";
import "../styles/GuessInput.css";

const GuessInput = ({ isGuessedCorrectly, gameOver, onGuess, onNext, onNewGame }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.trim() !== "") {
      onGuess(guess);
      setGuess("");
    }
  };

  return (
    <div id="guess-input">
      {!gameOver && !isGuessedCorrectly && (
        <form onSubmit={handleSubmit}>
          <input
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Guess the Pokémon!"
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {!gameOver && isGuessedCorrectly && <button onClick={onNext}>Next</button>}
      {gameOver && <button onClick={onNewGame}>New Game</button>}
    </div>
  );
};

export default GuessInput;
