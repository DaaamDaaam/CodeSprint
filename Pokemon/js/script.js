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