import "./App.css";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
    imgSrc:
      "https://img.pokemondb.net/artwork/large/mew.jpg",
  },
];

function App() {
  return (
  <section>
      <div className="CardApp">
    <PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc}/>
    <PokemonCard name={pokemonList[1].name} imgSrc={pokemonList[1].imgSrc}/> 
    </div>
    </section>
    
  );
}

export default App;