let proxyurl = "https://cors-anywhere.herokuapp.com/";
let chartUrl = "https://image-charts.com/chart";

function loadFight(fighter1, fighter2) {
    getApi(1,fullUrl(fighter1))
    getApi(2,fullUrl(fighter2))
}

function fullUrl(fighterId) {
    let fighterURL = proxyurl + determineFighter(fighterId);
    return fighterURL;
}

function determineFighter(fighterId) {
    let superUrl = `https://superheroapi.com/api/1073994739725347/${fighterId}/powerstats`;
    return superUrl;
}

function getApi(i, chosenUrl) {
    fetch(chosenUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            loadCharts(i,data.combat,data.durability,data.intelligence,data.power,data.speed,data.strength);
        })
        .catch(function(err){
            console.log(err);
        });
}

function loadCharts(i,combat,durability,intelligence,power,speed,strength) {
    let popChart = document.createElement("img")
    popChart.setAttribute("src", `https://image-charts.com/chart?cht=bvg&chd=t:${combat},${durability},${intelligence},${power},${speed},${strength}&chbr=10&chxt=x&chs=500x300&chl=${combat}|${durability}|${intelligence}|${power}|${speed}|${strength}&chxl=0:|Combat|Durability|Intelligence|Power|Speed|Strength`)
    addChart(i, popChart);
    // Chart type: cht=<type_code> <-- bvg is the bar graph type.
    // Chart data: chd=t:<data>,<data> etc. <-- Actually modifies the chart's visuals to match the numeric data.
    // Chart size: chs=<chart_size>x</chart_size>
    // Chart List: chl=<data>|<data>|<data> etc. <-- Adds the numeric ontop of its respective visual.
    // Chart Bar Shape: chbr=<number> <-- indicates how rounded the bars are.
    // Chart Bar Colors: chco=<color code>,<color code> <-- indicates the color of each bar.
    // Chart XT: chxt=<X>,<Y> <-- both are optional.
    // Chart XL: chxl=0:|<parameter>|<parameter>| etc. <-- provides a title under the chart for the data.
}

function addChart(chartNum, source) {
    if (chartNum === 1) {
        barChart1.append(source)
    } else {
        barChart2.append(source)
    }
}

loadFight(289, 41)

// TODO: The names of the fighters to dynamically update.
// TODO: Unfortunately, some Heroes don't have stats. Will need to write some kind of response.
// TODO: Calculate who has the highest stats and declare them the winner.
// TODO: local storage save matchup and who won on match up