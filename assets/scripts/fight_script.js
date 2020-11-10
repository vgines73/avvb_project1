let proxyurl = "https://cors-anywhere.herokuapp.com/";
let chartUrl = "https://image-charts.com/chart";
let barChart1 = document.querySelector("#barChart1");


function fullUrl(fighterId) {
    let fighterURL = proxyurl + determineFighter(fighterId);
    return fighterURL;
}

function determineFighter(fighterId) {
    let superUrl = `https://superheroapi.com/api/1073994739725347/${fighterId}/powerstats`;
    return superUrl;
}

function getApi(chosenUrl) {
    return fetch(chosenUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            loadCharts(data.combat,data.durability,data.intelligence,data.power,data.speed,data.strength);
        })
        .catch(function(err){
            console.log(err);
        });
}

function loadCharts(combat,durability,intelligence,power,speed,strength) {
    let popChart = document.createElement("img")
    popChart.setAttribute("src", `https://image-charts.com/chart?cht=bvg&chd=t:${combat},${durability},${intelligence},${power},${speed},${strength}&chbr=10&chxt=x&chs=500x300&chl=${combat}|${durability}|${intelligence}|${power}|${speed}|${strength}&chxl=0:|Combat|Durability|Intelligence|Power|Speed|Strength`)
    barChart1.append(popChart)
    // Chart type: cht=<type_code> <-- bvg is the bar graph type.
    // Chart data: chd=t:<data>,<data> etc. <-- Actually modifies the chart's visuals to match the numeric data.
    // Chart size: chs=<chart_size>x</chart_size>
    // Chart List: chl=<data>|<data>|<data> etc. <-- Adds the numeric ontop of its respective visual.
    // Chart Bar Shape: chbr=<number> <-- indicates how rounded the bars are.
    // Chart Bar Colors: chco=<color code>,<color code> <-- indicates the color of each bar.
    // Chart XT: chxt=<X>,<Y> <-- both are optional.
    // Chart XL: chxl=0:|<parameter>|<parameter>| etc. <-- provides a title under the chart for the data.
}

for (let i = 1; i < 3; i++) {
    getApi(fullUrl(i))
}



// TODO: local storage save matchup and who won on match up