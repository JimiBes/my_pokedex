function NavBar ({Pokemon, pokemonIndex, handleClickPrevious, handleClickNext, pokemonList}) {
    
    
    return (
        <div className="container-button">
        {pokemonIndex > 0 ? <button className={Pokemon.buttonStyle} onClick={handleClickPrevious}>Précédent</button> : null}
        {pokemonIndex < pokemonList.length - 1 ? <button className={Pokemon.buttonStyle} onClick={handleClickNext}>Suivant</button> : null}
        </div>
    )
}

export default NavBar