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

// creating option list in html and appending it 

function selectHeroOne() {
    let optionOne = document.querySelector("#option-one");
    let firstPick = document.createElement("option")
    firstPick.append(heroList[1][1]);
    optionOne.append(firstPick);
    console.log(optionOne);
}

function selectHeroTwo() {
    let optionTwo = document.querySelector("#option-two");
    let secondPick = document.createElement("option")
    secondPick.append(heroList[1][1]);
    optionTwo.append(secondPick)
    console.log(optionTwo)
}


// fight button function

document.getElementById("fight-button").addEventListener("click", fight)
function fight() {
    window.location.href="fight.html" 
}