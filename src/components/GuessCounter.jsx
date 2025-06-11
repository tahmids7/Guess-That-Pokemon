import React from "react";
import "../styles/GuessCounter.css";

const GuessCounter = ({ remainingAttempts }) => {
  return (
    <div id="guess-counter">
      {[...Array(3)].map((_, i) => (
        <img
          key={i}
          className={`pokeball-counter ${i >= remainingAttempts ? "grayscale" : ""}`}
          alt="Pokéball"
          src="/assets/pokeball.png"
        />
      ))}
    </div>
  );
};

export default GuessCounter;
