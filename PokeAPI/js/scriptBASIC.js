const API_URL = "https://pokeapi.co/api/v2/"

fetch(`${API_URL}pokemon/ditto`)
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
        let pokemonHTML = document.getElementById("pokemon")
        pokemonHTML.innerHTML = `
            <h1>${data.name}<h1>
            <img src="${data.sprites.front_default}" alt=""/>
        `
    })