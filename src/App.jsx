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
    },
  ];

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  
  useEffect(
    () => {
    alert("Hello pokémon trainer !")
  }, []
  )

  if (pokemonIndex === 3) {
    alert("pika pikachu !!!")
  }
  
return (
    <div>
      <PokemonCard Pokemon={pokemonList[pokemonIndex]}/>
      <NavBar pokemonIndex = {pokemonIndex} handleClickNext = {handleClickNext} handleClickPrevious = {handleClickPrevious} pokemonList = {pokemonList}/>
    </div>
  )
}

export default App
