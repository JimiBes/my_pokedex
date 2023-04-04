import './App.scss'
import PokemonCard from './components/PokemonCard'
import { useState } from "react";
import NavBar from './components/NavBar';

import { useEffect } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "#1 Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      style: "lightgreen",
      type: "Type : Plante",
      section: "Il a une étrange graine plantée sur son dos. Elle grandit avec lui depuis la naissance."
    },
    {
      name: "#4 Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      style: "orange",
      type: "Type : Feu",
      section: "Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme autour de sa queue."
    },
    {
      name: "#7 Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      style: "blue",
      type: "Type : Eau",
      section: "Son dos durcit avec l'âge et devient une super carapace. Il peut cracher des jets d'écume."
    },
    {
      name: "#25 Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      style: "yellow",
      type: "Type : Electrique",
      section: "Quand plusieurs de ces pokémons se réunissent, ils provoquent de gigantesques orages."
    },
    {
      name: "#151 Mew",
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
      style: "pink",
      type: "Type : Psy",
      section: "Unique, son existence est remise en cause par les experts. Peu nombreux sont ceux qui l'ont vu."
    },
  ];

  
return (
    <div>
      <PokemonCard Pokemon={pokemonList[pokemonIndex]} pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
    </div>
  )
}

export default App
