

function PokemonCard({PokemonObject}) {

     return (
        <div>
           <figure>
            {PokemonObject.imgSrc ? <img src={PokemonObject.imgSrc} alt={PokemonObject.name}/>
            : <p>???</p>}
            <figcaption>{PokemonObject.name}</figcaption>
           </figure>
        </div>
    )
   
}



export default PokemonCard;