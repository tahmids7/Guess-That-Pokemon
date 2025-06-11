import React from "react";

const PokemonDisplay = ({ currentPokemon, isGuessedCorrectly }) => {
  const imageSrc = isGuessedCorrectly ? currentPokemon.after : currentPokemon.before;

  return (
    <div>
      <img alt="Who's that Pokémon?" src={imageSrc} />
    </div>
  );
};

export default PokemonDisplay;
