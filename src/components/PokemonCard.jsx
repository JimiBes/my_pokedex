import PropTypes from "prop-types";
import { useEffect } from "react";


function PokemonCard({Pokemon}) {

     return (
        <div>
           <figure className="card">
            {Pokemon.imgSrc ? <img className="card-img" src={Pokemon.imgSrc} alt={Pokemon.name}/>
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