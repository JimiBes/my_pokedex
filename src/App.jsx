import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from "react";
import NavBar from './components/NavBar';
import { useEffect } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      style: "lightgreen",
      type: "Plant"
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        style: "orange",
        type: "Fire"
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        style: "blue",
        type: "Aquatic"
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        style: "yellow",
        type: "Electrik"
    },
    {
      name: "mew",
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
      style: "pink",
      type: "Psychic"
    },
  ];

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  
  
  
return (
    <div>
      <PokemonCard Pokemon={pokemonList[pokemonIndex]}/>
      <NavBar pokemonIndex = {pokemonIndex} handleClickNext = {handleClickNext} handleClickPrevious = {handleClickPrevious} pokemonList = {pokemonList}/>
    </div>
  )
}

export default App
