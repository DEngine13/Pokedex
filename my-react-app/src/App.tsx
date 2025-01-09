import "./App.css";

import PokemonCard from "./components/PokemonCard";

import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc: "https://img.pokemondb.net/artwork/avif/mew.avif",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPlus = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handleClickMinus = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <section>
      <div className="CardApp">
        <PokemonCard
          name={pokemonList[pokemonIndex].name}
          imgSrc={pokemonList[pokemonIndex].imgSrc}
        />
        {pokemonIndex < pokemonList.length - 1 ? (
          <button type="button" onClick={handleClickPlus}>
            Next
          </button>
        ) : null}

        {pokemonIndex > 0 ? (
          <button type="button" onClick={handleClickMinus}>
            Previous
          </button>
        ) : null}

        <p>{pokemonIndex}</p>
      </div>
    </section>
  );
}

export default App;
