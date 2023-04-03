
import App from "../App";

function NavBar({ pokemonIndex, setPokemonIndex, handleClickPrevious, handleClickNext, pokemonList }) {


    const handlePokemonClick = (index) => {
        setPokemonIndex(index);
    }

    return (
        <div>
            {pokemonList.map((Pokemon, index) => (
                <button
                    key={Pokemon.name}
                    onClick={() => handlePokemonClick(index)}>{Pokemon.name}</button>

            ))}
        </div>
    )
}

export default NavBar