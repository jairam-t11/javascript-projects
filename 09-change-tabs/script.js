let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");
let aboutTab = document.getElementById("aboutTab");
let timeToVisitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");

aboutButton.onclick = function() {
    aboutTab.classList.remove("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.add("d-none");

}
timeToVisitButton.onclick = function() {

    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.remove("d-none");
    attractionsTab.classList.add("d-none");

}

attractionsButton.onclick = function() {

    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.remove("d-none");

}
