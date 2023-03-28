import PropTypes from "prop-types";

function PokemonCard({Pokemon}) {

     return (
        <div>
           <figure>
            {Pokemon.imgSrc ? <img src={Pokemon.imgSrc} alt={Pokemon.name}/>
            : <p>???</p>}
            <figcaption>{Pokemon.name}</figcaption>
           </figure>
        </div>
    )
   
}

PokemonCard.propTypes = {
   Pokemon: PropTypes.shape({
   name: PropTypes.string.isRequired,
   imgSrc: PropTypes.string
}).isRequired,
}

export default PokemonCard;