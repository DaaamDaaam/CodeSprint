const submitHTML = document.getElementById('submit')

submitHTML.addEventListener('click', function(event){
    event.preventDefault();
    const cardContainerHTML = document.getElementById('card-container')
    const searchHTML = document.getElementById('search')
    const searchValue = searchHTML.value.trim()

    fetch(`https://api.pokemontcg.io/v2/cards?q=supertype:pokemon name:${searchValue}`)
    .then(response => response.json())
    .then(data => {
      cardContainerHTML.innerHTML = "";
        data.data.map(pokemon => {
            let priceMin = ""
            if(pokemon.tcgplayer) {
              if(pokemon.tcgplayer.prices.holofoil){
                priceMin = "<strong>low :</strong> " + pokemon.tcgplayer.prices.holofoil.low + "$"
              } else if(pokemon.tcgplayer.prices.stEditionHolofoil){
                priceMin = "<strong>low :</strong> " + pokemon.tcgplayer.prices.stEditionHolofoil.low + "$"
              }
            }

            let priceMoy = ""
            if(pokemon.tcgplayer) {
              if(pokemon.tcgplayer.prices.holofoil){
                priceMoy = "<strong>moy :</strong> " + pokemon.tcgplayer.prices.holofoil.mid + "$"
              } else if(pokemon.tcgplayer.prices.stEditionHolofoil){
                priceMoy = "<strong>moy :</strong> " + pokemon.tcgplayer.prices.stEditionHolofoil.mid + "$"
              }
            }

            let priceMax = ""
            if(pokemon.tcgplayer) {
              if(pokemon.tcgplayer.prices.holofoil){
                priceMax = "<strong>high :</strong> " + pokemon.tcgplayer.prices.holofoil.high + "$"
              } else if(pokemon.tcgplayer.prices.stEditionHolofoil){
                priceMax = "<strong>high :</strong> " + pokemon.tcgplayer.prices.stEditionHolofoil.high + "$"
              }
            }

            const pokemonCard = document.createElement("div");
            pokemonCard.className = "col-md-4 justify-content-center";
            pokemonCard.innerHTML = `
                <img src="${pokemon.images.large}" class='pkmn-card'>
                <div class="prix">
                  <p class="m-1">${priceMin}</p>
                  <p class="m-1">${priceMoy}</p>
                  <p class="m-1">${priceMax}</p>
                </div>
            `
            cardContainerHTML.append(pokemonCard)
        })
    })
})