fightButton = document.querySelector("#fight-button")

fightButton.style.display = "none"
fightButton.addEventListener("click", fight)

function fight() {
    if (heros.value !== "" && heros2.value !== "" && heros.value !== heros2.value) {
        // When the fight button is clicked, if two non-identical characters are selected...
        localStorage.setItem("fighter1", heros.value);
        localStorage.setItem("fighter2", heros2.value);
        // Both of those character's will be saved to local storage for later use.
        window.location.href = "fight.html"
        // The page will change to the Fight page.
    }
}

populateIndex();
// On page load, the drop-down menus will populate with the herolist_script file.


