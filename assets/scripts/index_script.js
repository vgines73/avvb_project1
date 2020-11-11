let proxyurl = "https://cors-anywhere.herokuapp.com/";
<<<<<<< HEAD
let fightUrl = "https://superheroapi.com/api/1073994739725347/1/powerstats";
=======
let fightUrl = `https://superheroapi.com/api/1073994739725347/1/powerstats`;
>>>>>>> vgines73-main
let requestUrl = proxyurl + fightUrl

function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

<<<<<<< HEAD
getApi(requestUrl);

=======
getApi(requestUrl);
>>>>>>> vgines73-main
