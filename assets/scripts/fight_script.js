let proxyurl = "https://cors-anywhere.herokuapp.com/";
let fightUrl = proxyurl + determineFighter(1);
let chartUrl = "https://image-charts.com/chart";
let barChart = document.querySelector("#barChart");

function determineFighter(fighterId) {
    let superUrl = `https://superheroapi.com/api/1073994739725347/${fighterId}/powerstats`;
    return superUrl;
}

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
popChart.setAttribute("src", "https://image-charts.com/chart?cht=bvg&chd=t:5,4,3,7,7,10&chbr=10&chxt=x&chs=500x300&chl=5|4|3|7|7|10&chxl=0:|Combat|Durability|Intelligence|Power|Speed|Strength")
barChart.append(popChart)
// Chart type: cht=<type_code>
// Chart data: chd=t:<data>,<data> etc. <-- Actually modifies the chart's visuals to match the numeric data.
// Chart size: chs=<chart_size>x</chart_size>
// Chart List: chl=<data>|<data>|<data> etc. <-- Adds the numeric ontop of its respective visual.
// Chart Bar Shape: chbr=<number> <-- indicates how rounded the bars are.
// Chart Bar Colors: chco=<color code>,<color code> <-- indicates the color of each bar.
// Chart XT: chxt=<X>,<Y> <-- both are optional.
// Chart XL: chxl=0:|<parameter>|<parameter>| etc. <-- provides a title under the chart for the data.