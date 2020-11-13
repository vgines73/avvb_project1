let proxyurl = "https://cors-anywhere.herokuapp.com/";
let fightUrl = `https://superheroapi.com/api/1073994739725347/1/powerstats`;
let requestUrl = proxyurl + fightUrl

function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
          //  console.log(data);
        })
}

getApi(requestUrl);

// fight button function

document.getElementById("fight-button").addEventListener("click", fight)
function fight() {
    if (heros.value !== "" && heros2.value !== "") {
        localStorage.setItem("fighter1", heros.value);
        localStorage.setItem("fighter2", heros2.value);
        window.location.href = "fight.html"       
    }
}

populateIndex();


