let proxyurl = "https://cors-anywhere.herokuapp.com/";
let superUrl = "https://superheroapi.com/api/1073994739725347/1/powerstats";
let fightUrl = proxyurl + superUrl;
let chartUrl = "https://image-charts.com/chart";
let barChart = document.querySelector("#barChart");

function getApi(chosenUrl) {
    fetch(chosenUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

getApi(fightUrl);

let popChart = document.createElement("img")
popChart.setAttribute("src", "https://image-charts.com/chart?cht=bvg&chd=t:5,4,3,7,10&chxt=x&chs=500x300&chl=5|4|3|7|10&chxl=0:|Power|Speed|Intelligence|Durability|Will")
barChart.append(popChart)
// Chart type: cht=<type_code>
// Chart data: chd=t:<data>,<data> etc. <-- Actually modifies the chart's visuals to match the numeric data.
// Chart size: chs=<chart_size>x</chart_size>
// Chart List: chl=<data>|<data>|<data> etc. <-- Adds the numeric ontop of its respective visual.
// Chart XT: chxt=<X>,<Y> <-- both are optional.
// Chart XL: chxl=0:|<parameter>|<parameter>| etc. <-- provides a title under the chart for the data.


// local storage save matchup and who won on match up