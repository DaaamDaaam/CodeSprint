<<<<<<< HEAD
const setsListHTML = document.getElementById("setsList");
      const choicePokemonHTML = document.getElementById("choicePokemon");
      let userPokemonChoices = [];
      fetch("https://api.pokemontcg.io/v2/sets/")
        .then((response) => response.json())
        .then((data) => {
          const setsList = data.data;
          setsList.map((set) => {
            console.log(set);
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${set.images.logo}" alt=""/>
            `;
            setsListHTML.append(card);
            card.addEventListener("click", function () {
              setsListHTML.remove();
              choicePokemonHTML.style.display = "flex";
              fetch(
                `https://api.pokemontcg.io/v2/cards?q=supertype:pokemon set.id:${set.id}`
              )
                .then((response) => response.json())
                .then((data) => {
                  let pokemons = data.data;
                  //   console.log(pokemons);
                  //radnom
                  console.log(pokemons[0]);
                  showPokemon(pokemons[0]);
                  showPokemon(pokemons[5]);
                  showPokemon(pokemons[8]);
                });
            });
          });
        });
      function showPokemon(pokemon) {
        let card = document.createElement("div");
        card.className = "pokemon-card";
        card.innerHTML = `
            <img src="${pokemon.images.small}" alt=""/>
        `;
        card.addEventListener("click", function () {
          userPokemonChoices.push(pokemon);
          console.log(userPokemonChoices);
        });
        choicePokemonHTML.append(card);
      }
=======
const API_URL = "https://api.pokemontcg.io/v2/"

const form = document.getElementById("searchForm")

fetch(`${API_URL}sets/`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let setHTML = document.getElementById("selection-set")
        
        setHTML.innerHTML = `
            <p>${data.name}</p>
            <img src="${data.images}" alt=""/>
        `
        console.log(setHTML)
    })
t(t)
>>>>>>> fc002dc623a9e479609340d1d3d3a04502f6aa8d
