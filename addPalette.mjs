import { removeKey, setKey } from "./storage.mjs";

const friendlyCactus = document.querySelector("#cactusButton");
const angryPomeranian = document.querySelector("#pomButton");
const brownPurple = document.querySelector("#brownButton");
const warhammer = document.querySelector("#warhammerButton");
const barbie = document.querySelector("#barbieButton");
const sunFlower = document.querySelector("#sunflowerButton");
const darkHallow = document.querySelector("#hallowButton");
const kvist = document.querySelector("#kvistButton");
const cloudberry = document.querySelector("#berryButton");
const defaultT = document.querySelector("#defaultTheme");

defaultT.addEventListener("click", function() {
    removeKey("background");
    removeKey("dText");
    removeKey("lText");
    removeKey("boldColor");
    removeKey("secondaryButton");
    location.reload();
})

friendlyCactus.addEventListener("click", function(){
    setKey("background", "#EFECE1");
    setKey("dText", "#5A854E");
    setKey("lText", "#fff");
    setKey("boldColor", "#E3B9CF");
    setKey("secondaryButton", "#A0BD62");
    location.reload();
})
angryPomeranian.addEventListener("click", function(){
    setKey("background", "#F0DDC5");
    setKey("dText", "#C47839");
    setKey("lText", "#F0DDC5");
    setKey("boldColor", "#C47839");
    setKey("secondaryButton", "#E6BB86");
    location.reload();
})
brownPurple.addEventListener("click", function(){
    setKey("background", "#D8C6AD");
    setKey("dText", "#562830");
    setKey("lText", "#fff");
    setKey("boldColor", "#562830");
    setKey("secondaryButton", "#A68A67");
    location.reload();
})
warhammer.addEventListener("click", function(){
    setKey("background", "#F6C47E");
    setKey("dText", "#7C4143");
    setKey("lText", "#fff");
    setKey("boldColor", "#4A66A1");
    setKey("secondaryButton", "#C46342");
    location.reload();
})
barbie.addEventListener("click", function(){
    setKey("background", "#F8EFF0");
    setKey("dText", "#D44F7F");
    setKey("lText", "#fff");
    setKey("boldColor", "#D44F7F");
    setKey("secondaryButton", "#E99AC2");
    location.reload();
})
sunFlower.addEventListener("click", function(){
    setKey("background", "#fff");
    setKey("dText", "#596D1E");
    setKey("lText", "#fff");
    setKey("boldColor", "#596D1E")
    setKey("secondaryButton", "#F6C845")
    location.reload();
})
darkHallow.addEventListener("click", function(){
    setKey("background", "#C89895");
    setKey("dText", "#311B2A");
    setKey("lText", "#C89895");
    setKey("boldColor", "#9E5B6D")
    setKey("secondaryButton", "#53344A")
    location.reload();
})
kvist.addEventListener("click", function(){
    setKey("background", "#D7DDBF");
    setKey("dText", "#6A5743");
    setKey("lText", "#D7DDBF");
    setKey("boldColor", "#556443")
    setKey("secondaryButton", "#B29D76")
    location.reload();
})
cloudberry.addEventListener("click", function(){
    setKey("background", "#F0DDC5");
    setKey("dText", "#D45B49");
    setKey("lText", "#D7DDBF");
    setKey("boldColor", "#D45B49")
    setKey("secondaryButton", "#F5A645")
    location.reload();
})