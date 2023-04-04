import PropTypes from "prop-types";
import Section from './Section';
import NavBar from "./NavBar";

function PokemonCard({ Pokemon, pokemonIndex, setPokemonIndex, pokemonList }) {

   const handleClickPrevious = () => {
      setPokemonIndex(pokemonIndex - 1)
    }
    const handleClickNext = () => {
      setPokemonIndex(pokemonIndex + 1)
    }

   return (
      <div>
         <figure className={`card ${Pokemon.style}`}>
            {Pokemon.imgSrc ? <img className="card-img" src={Pokemon.imgSrc} alt={Pokemon.name} />
               : <p>???</p>}
            <figcaption>{Pokemon.name}</figcaption>
            <p className="type">{Pokemon.type}</p>
            <Section Pokemon={Pokemon.section} />
            <NavBar pokemonIndex={pokemonIndex} handleClickNext={handleClickNext} handleClickPrevious={handleClickPrevious} pokemonList={pokemonList} />
         </figure>
      </div>
   )

}

PokemonCard.propTypes = {
   Pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
   }).isRequired,
}

export default PokemonCard;