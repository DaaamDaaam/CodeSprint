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

            let priceMin = ""
            if(pokemon.tcgplayer) {
              if(pokemon.tcgplayer.prices.holofoil){
                priceMin = "low : " + pokemon.tcgplayer.prices.holofoil.low + "$"
              } else if(pokemon.tcgplayer.prices.stEditionHolofoil){
                priceMin = "low : " + pokemon.tcgplayer.prices.stEditionHolofoil.low + "$"
              }
            }

            let priceMoy = ""
            if(pokemon.tcgplayer) {
              if(pokemon.tcgplayer.prices.holofoil){
                priceMoy = "moy : " + pokemon.tcgplayer.prices.holofoil.mid + "$"
              } else if(pokemon.tcgplayer.prices.stEditionHolofoil){
                priceMoy = "moy : " + pokemon.tcgplayer.prices.stEditionHolofoil.mid + "$"
              }
            }

            let priceMax = ""
            if(pokemon.tcgplayer) {
              if(pokemon.tcgplayer.prices.holofoil){
                priceMax = "high : " + pokemon.tcgplayer.prices.holofoil.high + "$"
              } else if(pokemon.tcgplayer.prices.stEditionHolofoil){
                priceMax = "high : " + pokemon.tcgplayer.prices.stEditionHolofoil.high + "$"
              }
            }

            const pokemonCard = document.createElement("div");
            pokemonCard.className = "col-md-4 justify-content-center";
            pokemonCard.innerHTML = `
                <img src="${pokemon.images.large}" class='pkmn-card'>
                <div class="prix">
                  <p>${priceMin}</p>
                  <p>${priceMoy}</p>
                  <p>${priceMax}</p>
                </div>
            `
            cardContainerHTML.append(pokemonCard)
        })
    })
})