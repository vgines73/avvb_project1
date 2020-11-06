const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://superheroapi.com/api/1073994739725347/1/powerstats"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
