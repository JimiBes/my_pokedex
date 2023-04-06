import './App.scss'
import PokemonCard from './components/PokemonCard'
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "#1 Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      style: "plante",
      buttonStyle: "plante-button",
      type: "Type : Plante",
      section: "Il a une étrange graine plantée sur son dos. Elle grandit avec lui depuis la naissance."
    },
    {
      name: "#2 Herbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      style: "plante",
      buttonStyle: "plante-button",
      type: "Type : Plante",
      section: "La lumière du soleil le rend plus fort et vigoureux. Le bulbe sur son dos grossit en conséquence."
    },
    {
      name: "#3 Florizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      style: "plante",
      buttonStyle: "plante-button",
      type: "Type : Plante",
      section: "Ses pétales lui servent à capter la lumière du soleil. Il peut ainsi en canaliser l'énergie."
    },
    {
      name: "#4 Salamèche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      style: "feu",
      buttonStyle: "feu-button",
      type: "Type : Feu",
      section: "Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme autour de sa queue."
    },
    {
      name: "#5 Reptincel",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      style: "feu",
      buttonStyle: "feu-button",
      type: "Type : Feu",
      section: "En agitant sa queue, il peut élever le niveau de la température à un degré incroyable."
    },
    {
      name: "#6 Dracaufeu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      style: "feu",
      buttonStyle: "feu-button",
      type: "Type : Feu",
      section: "Il peut fondre la roche de son souffle brûlant. Il est souvent la cause de nombreux incendies."
    },
    {
      name: "#7 Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      style: "eau",
      buttonStyle: "eau-button",
      type: "Type : Eau",
      section: "Son dos durcit avec l'âge et devient une super carapace. Il peut cracher des jets d'écume."
    },
    {
      name: "#8 Carabaffe",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      style: "eau",
      buttonStyle: "eau-button",
      type: "Type : Eau",
      section: "Il se cache au fond de l'eau pour guetter sa proie. Ses oreilles sont des gouvernails."
    },
    {
      name: "#9 Tortank",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      style: "eau",
      buttonStyle: "eau-button",
      type: "Type : Eau",
      section: "Un pokémon brutal armé de canons hydrauliques. Ses puissants jets d'eau sont dévastateurs."
    },
    {
      name: "#172 Pichu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
      style: "electrique",
      buttonStyle: "electrique-button",
      type: "Type : Electrique",
      section: "Il ne sait pas encore stocker l'électricité. Il envoie des décharges par jeu ou par peur."
    },
    {
      name: "#25 Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      style: "electrique",
      buttonStyle: "electrique-button",
      type: "Type : Electrique",
      section: "Quand plusieurs de ces pokémons se réunissent, ils provoquent de gigantesques orages."
    },
    {
      name: "#26 Raichu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
      style: "electrique",
      buttonStyle: "electrique-button",
      type: "Type : Electrique",
      section: "Quand son taux d'énergie monte, ses muscles se contractent et il devient plus agressif."
    },
    {
      name: "#150 Mewtwo",
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
      style: "psy",
      buttonStyle: "psy-button",
      type: "Type : Psy",
      section: "Il est le fruit de nombreuses expériences génétiques horribles et malsaines."
    },
    {
      name: "#151 Mew",
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
      style: "psy",
      buttonStyle: "psy-button",
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
