const submitHTML = document.getElementById('submit')

submitHTML.addEventListener('click', function(event){
    event.preventDefault();
    const cardContainerHTML = document.getElementById('card-container')
    const searchHTML = document.getElementById('search')
    const searchValue = searchHTML.value.trim()

    fetch(`https://api.pokemontcg.io/v2/cards?q=supertype:pokemon name:${searchValue}`)
    .then(response => response.json())
    .then(data => {
        data.data.map(pokemon => {
            let price = ""
            console.log(pokemon);
            if(pokemon.tcgplayer){
              if(pokemon.tcgplayer.prices.holofoil){
                price = pokemon.tcgplayer.prices.holofoil.high
              } else if(pokemon.tcgplayer.prices.stEditionHolofoil){
                  price = pokemon.tcgplayer.prices.stEditionHolofoil.high
              }
            }

            const pokemonCard = document.createElement("div");
            pokemonCard.className = "col-md-4";
            pokemonCard.innerHTML = `
                <img src="${pokemon.images.large}" class='pkmn-card'>
                <p>${price}</p>
            `
            cardContainerHTML.append(pokemonCard)
        })
    })
})