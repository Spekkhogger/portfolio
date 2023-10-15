import { setKey } from "./storage.mjs";
import { loadKey } from "./storage.mjs";

const friendlyCactus = document.querySelector("#cactusButton");
const angryPomeranian = document.querySelector("#pomButton");
const brownPurple = document.querySelector("#brownButton");
const warhammer = document.querySelector("#warhammerButton");
const barbie = document.querySelector("#barbieButton");
const sunFlower = document.querySelector("#sunflowerButton");
const darkHallow = document.querySelector("#hallowButton");
const kvist = document.querySelector("#kvistButton");
const cloudberry = document.querySelector("#berryButton");


const demoButton = document.querySelector("#demo-button");
const codeButton = document.querySelector("#code-button");
const body = document.querySelector("body"); 

export function changeTheme(){
    body.style.backgroundColor = loadKey("background"); 
    console.log("works"); 
}

// Set default
const defBackground = "F5F5F5";
const defText = "3B2D1F";

if (loadKey("background") === null){
    body.style.backgroundColor = defBackground;
}

// Save colorscheme in localstorage 
// Change design of page to colors from localstorage
// If no color in localStorage, use default
friendlyCactus.addEventListener("click", function(){
    setKey("background", "#EFECE1");
    setKey("text", "#5A854E");
    setKey("boldColor", "#E3B9CF");
    setKey("secondaryButton", "#A0BD62");
    location.reload();
})
angryPomeranian.addEventListener("click", function(){
    setKey("background", "#F0DDC5");
    setKey("text", "#7B6764");
    setKey("boldColor", "#C47839");
    setKey("secondaryButton", "#E6BB86");
    location.reload();
})
brownPurple.addEventListener("click", function(){
    setKey("background", "#D8C6AD");
    setKey("text", "#fff");
    setKey("boldColor", "#562830");
    setKey("secondaryButton", "#A68A67");
    location.reload();
})
warhammer.addEventListener("click", function(){
    setKey("background", "#F6C47E");
    setKey("text", "#7C4143");
    setKey("boldColor", "#4A66A1");
    setKey("secondaryButton", "#C46342");
    location.reload();
})
barbie.addEventListener("click", function(){
    setKey("background", "#F8EFF0");
    setKey("text", "#000");
    setKey("boldColor", "#D44F7F");
    setKey("secondaryButton", "#E99AC2");
    location.reload();
})
sunFlower.addEventListener("click", function(){
    setKey("background", "#fff");
    setKey("text", "#000");
    setKey("boldColor", "#596D1E")
    setKey("secondaryButton", "#D89333")
    location.reload();
})
darkHallow.addEventListener("click", function(){
    setKey("background", "#C89895");
    setKey("text", "#fff");
    setKey("boldColor", "#311B2A")
    setKey("secondaryButton", "#9E5B6D")
    location.reload();
})
kvist.addEventListener("click", function(){
    setKey("background", "#D7DDBF");
    setKey("text", "#6A5743");
    setKey("boldColor", "#556443")
    setKey("secondaryButton", "#B29D76")
    location.reload();
})
cloudberry.addEventListener("click", function(){
    setKey("background", "#F0DDC5");
    setKey("text", "#fff");
    setKey("boldColor", "#D45B49")
    setKey("secondaryButton", "#F5A645")
    location.reload();
})

changeTheme();