import React, { useState } from "react";
import "./styles/App.css";
import PokemonDisplay from "./components/PokemonDisplay";
import GuessInput from "./components/GuessInput";
import GuessCounter from "./components/GuessCounter";

const pokemonList = [
  { name: "pikachu", before: "/assets/1_before.png", after: "/assets/1_after.png" },
  { name: "onix", before: "/assets/2_before.png", after: "/assets/2_after.png" },
  { name: "clefairy", before: "/assets/3_before.png", after: "/assets/3_after.png" },
  { name: "bulbasaur", before: "/assets/4_before.png", after: "/assets/4_after.png" },
  { name: "charmander", before: "/assets/5_before.png", after: "/assets/5_after.png" },
  { name: "squirtle", before: "/assets/6_before.png", after: "/assets/6_after.png" },
  { name: "gengar", before: "/assets/7_before.png", after: "/assets/7_after.png" },
  { name: "ditto", before: "/assets/8_before.png", after: "/assets/8_after.png" },
  { name: "eevee", before: "/assets/9_before.png", after: "/assets/9_after.png" },
  { name: "snorlax", before: "/assets/10_before.png", after: "/assets/10_after.png" },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0); 
  const [hasCorrectGuess, setHasCorrectGuess] = useState(false);
  const [livesRemaining, setLivesRemaining] = useState(3);
  const [gameIsOver, setGameIsOver] = useState(false);

  const processGuess = (guess) => {
    if (guess.toLowerCase() === pokemonList[pokemonIndex].name) {
      setHasCorrectGuess(true);
    } else {
      setLivesRemaining((prev) => {
        const newLives = prev - 1;
        if (newLives === 0) setGameIsOver(true);
        return newLives;
      });
    }
  };

  const loadNextPokemon = () => {
    if (pokemonIndex + 1 < pokemonList.length) {
      setPokemonIndex((prev) => prev + 1);
      setHasCorrectGuess(false);
    } else {
      setGameIsOver(true); 
    }
  };

  const resetGame = () => {
    setPokemonIndex(0);
    setLivesRemaining(3);
    setHasCorrectGuess(false);
    setGameIsOver(false);
  };

  return (
    <div className="App">
      <PokemonDisplay
        currentPokemon={pokemonList[pokemonIndex]}
        isGuessedCorrectly={hasCorrectGuess}
      />
      <GuessCounter remainingAttempts={livesRemaining} />
      <GuessInput
        isGuessedCorrectly={hasCorrectGuess}
        gameOver={gameIsOver}
        onGuess={processGuess}
        onNext={loadNextPokemon}
        onNewGame={resetGame}
      />
    </div>
  );
}

export default App;
