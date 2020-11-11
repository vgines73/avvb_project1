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
optionOne = document.querySelector("#option-one");
document.createElement("option")
option.append(heroList);
optionOne.append(option)
console.log(optionOne)
