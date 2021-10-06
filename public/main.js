const coreURL = "https://api.giphy.com/v1/gifs/search";
const apiKey = "0f2XPD4BCYpaXg3geFQYpZyn28HaYKAL";
const displayLimit = 12;

let searchButton = document.getElementById("searchButton");
searchButton.addEventListener('click', searchGiphy);

async function searchGiphy() {
    let searchTerms = document.getElementById("searchTerms");
    let userQuery = searchTerms.value;
    let response = await fetch(`${coreURL}?api_key=${apiKey}&q=${userQuery}&limit=${displayLimit}`);
    let json = await response.json();
    for(i=0; i< displayLimit; i++){
        let currentGif = json.data[i].images.fixed_height.url;
        let display = document.getElementById("container");
        let gif = document.createElement('img');
        gif.src = currentGif;
        display.appendChild(gif);
    }
}