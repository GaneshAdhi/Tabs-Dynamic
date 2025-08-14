let about = document.getElementById("aboutTab");
let time = document.getElementById("timeToVisitTab");
let attraction = document.getElementById("attractionsTab");

function About() {
    attraction.classList.remove("d-none");
    time.classList.add("d-none");
    attraction.classList.add("d-none");
}

function timeClick() {
    time.classList.remove("d-none");
    attraction.classList.add("d-none");
    about.classList.add("d-none");

}

function attractionClick() {
    attraction.classList.remove("d-none");
    time.classList.add("d-none");
    about.classList.add("d-none");
}
