const lightmode = document.querySelector("#lightmode");
const header = document.querySelector("header");
const body = document.querySelector("body");
const container = document.querySelector(".container");

lightmode.addEventListener("click", function setLightMode() {

    if (body.style.background == "linear-gradient(var(--first-color), var(--fifth-color), var(--second-color), var(--fourth-color))") {
        body.style.background = "var(--first-color)";
    } else {
        body.style.background = "linear-gradient(var(--first-color), var(--fifth-color), var(--second-color), var(--fourth-color))";
    }

    console.log("click");
});