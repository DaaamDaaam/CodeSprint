const setsListHTML = document.getElementById("setsList2");
const choicePokemonHTML = document.getElementById("choicePokemon");
let userPokemonChoices = [];

fetch("https://api.pokemontcg.io/v2/sets/")

  .then((response) => response.json())
  .then((data) => {
    const setsList2 = data.data;
    
    setsList2.map((set) => {
      console.log(set);
      let card2 = document.createElement("div");
      card2.className = "card2";
      card2.innerHTML = `<div class="setButton"><img class="imgSets" src="${set.images.logo}" alt=""/>
      <p style="margin-left: 20px">${set.name}</p></div>`;
      setsListHTML.append(card2);
      
      card2.addEventListener("click", function () {
        setsListHTML.remove();
        choicePokemonHTML.style.display = "flex";
        
        fetch(`https://api.pokemontcg.io/v2/cards?q= set.id:${set.id}`)
          .then((response) => response.json())
          .then((data) => {
            let pokemons = data.data;
            //random
            console.log(pokemons[0]);
            
            showPokemon(pokemons[0]);
            
          });
      });
    });
  });

function showPokemon(pokemon) {

  let card = document.createElement("div");

  card.className = "pokemon-card";
  card.innerHTML = `<img src="${pokemon.images.large}" alt=""/>`;

  card.addEventListener("click", function () {
    userPokemonChoices.push(pokemon);
    console.log(userPokemonChoices);
  });

  choicePokemonHTML.append(card);

}