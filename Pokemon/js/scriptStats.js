const TypeRareteHTML = document.getElementById("rareteCarte");

fetch("https://api.pokemontcg.io/v2/rarities")

  .then((response) => response.json())
  .then((data) => {
    const rareteList = data.data;
    let liste = document.createElement("p");
    console.log(rareteList);
    console.log(rareteList.lenght);
    console.log(liste);
    
    liste.innerHTML ="ee";
    TypeRareteHTML.innerHTML = rareteList;
  });