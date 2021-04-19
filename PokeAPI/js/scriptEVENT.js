const API_URL = "https://pokeapi.co/api/v2/"

const form = document.getElementById("searchForm")

form.addEventListener('submit', function(){
    event.preventDefault()
    console.log('submit')
    let searchPokemon = document.getElementById('searchPokemon')
    let searchValue = searchPokemon.nodeValue
    console.log(searchValue)

    fetch(`${API_URL}pokemon/ditto`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let pokemonHTML = document.getElementById("pokemon")
            pokemonHTML.innerHTML = `
                <h1>${data.name}<h1>
                <img src="${data.sprites.front_default}" alt=""/>
            `
        })
})