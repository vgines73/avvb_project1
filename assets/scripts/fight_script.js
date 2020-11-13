let proxyurl = "https://cors-anywhere.herokuapp.com/";
let chartUrl = "https://image-charts.com/chart";
let fighter1stats = 0;
let fighter2stats = 0;

function loadFight(fighter1, fighter2) {
    getApi(1,fullUrl(fighter1))
    getApi(2,fullUrl(fighter2))
    // Determines if this is our first or second fighter and then runs our main function chain.
}

function fullUrl(fighterId) {
    let fighterURL = proxyurl + determineFighter(fighterId);
    // This will combine our fighter's API URL with the proxy URL so  that we can actually fetch.
    return fighterURL;
}

function determineFighter(fighterId) {
    let superUrl = `https://superheroapi.com/api/1073994739725347/${fighterId}/powerstats`;
    // This will create a usable URL to fetch from, with our Fighter's unique ID from the API.
    return superUrl;
}

function getApi(i, chosenUrl) {
    fetch(chosenUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            ftAry = [data.combat,data.durability,data.intelligence,data.power,data.speed,data.strength,data.name]
            fighterData(i,ftAry[0],ftAry[1],ftAry[2],ftAry[3],ftAry[4],ftAry[5],ftAry[6]);
            dataContest(i,ftAry[0],ftAry[1],ftAry[2],ftAry[3],ftAry[4],ftAry[5]);
        // This is the meat and potatoes. Will utilize our data in the various ways we need it to.
        // FighterData will create the name and charts. dataContest determines the winner.
        })
        .catch(function(err){
            console.log(err);
        });
}

function fighterData(i,combat,durability,intelligence,power,speed,strength,name) {
    fighterName(i,name);
    // First, getApi will run a function to populate our fighter's name.
    createChart(i,combat,durability,intelligence,power,speed,strength);
    // Then, getApi will run a function to populate our fighter's respective chart with the data.
}

function fighterName(index, name){
    if (index === 1) {
        nameFighter1.textContent = name;
        // If this is fighter 1, AKA the left fighter, it will place the name data there.
    } else {
        nameFighter2.textContent = name;
        // otherwise, the name data is entered on fighter 2, aka the right fighter.
    }
}

function createChart(i,combat,durability,intelligence,power,speed,strength){
    let popChart = document.createElement("img")
    // First, this function creates an image element.
    popChart.setAttribute("src", `https://image-charts.com/chart?cht=bvg&chd=t:${combat},${durability},${intelligence},${power},${speed},${strength}&chbr=10&chxt=x&chs=500x300&chl=${combat}|${durability}|${intelligence}|${power}|${speed}|${strength}&chxl=0:|Combat|Durability|Intelligence|Power|Speed|Strength`)
    // Then, we assign the image element our second api, image-charts, utilizing the data pulled from our first api.
    addChart(i, popChart);
    // Lastly, we run a function to append these charts to their respective fighters.
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
        barChart1.append(source);
        // If this is fighter 1, append it to the left side.
    } else {
        barChart2.append(source);
        // If this is fighter 2, append it to the right side.
    }
}

function dataContest(i,combat,durability,intelligence,power,speed,strength) {
    setFighterStats(i,combat,durability,intelligence,power,speed,strength);
    // Calculates the fighter's stat total and assigns it to a variable.
    if (fighter1stats > fighter2stats) {
        winnerName.textContent = nameFighter1.textContent + " Wins!";
    } else {
        winnerName.textContent = nameFighter2.textContent + " Wins!";
    }
}

function setFighterStats(i,combat,durability,intelligence,power,speed,strength) {
    let calculation = parseInt(combat)+parseInt(durability)+parseInt(intelligence)+parseInt(power)+parseInt(speed)+parseInt(strength);
    if (i === 1) {
        fighter1stats = calculation;
    } else {
        fighter2stats = calculation;
    }
}

loadFight(parseFloat(localStorage.getItem("fighter1")), parseFloat(localStorage.getItem("fighter2")))
// Pulls from local storage to populate the entire page.

// TODO: Unfortunately, some Heroes don't have stats. Will need to write some kind of response.
// TODO: local storage save matchup and who won on match up
// WISHLIST: Use ftAry so that it is an array through all its child functions.

document.getElementById("go-back-button").addEventListener("click", goBack)
function goBack() {
    window.location.href="index.html"
}
