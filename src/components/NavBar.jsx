function NavBar ({pokemonIndex, handleClickPrevious, handleClickNext, pokemonList}) {
    
    
    return (
        <div className="container-button">
        {pokemonIndex > 0 ? <button onClick={handleClickPrevious}>Previous</button> : null}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Next</button> : null}
        </div>
    )
}

export default NavBar