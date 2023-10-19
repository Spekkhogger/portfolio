// Imports
import { loadKey } from "./storage.mjs";

// Constants
const lightButton = document.querySelectorAll(".lightButton");
const darkButton = document.querySelectorAll(".darkButton");
const darkText = document.querySelectorAll(".darkText");
const bold = document.querySelectorAll(".boldColor");
const body = document.querySelector("body"); 
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const outerCard = document.querySelectorAll(".card"); 
const innerCard = document.querySelectorAll("img")

const newBackgroundColor = loadKey("background"); 
const secondaryColor = loadKey("secondaryButton");
const newDarkText = loadKey("dText");
const newBoldColor = loadKey("boldColor");

function changeBackground(elementToChange, newColor) {
    elementToChange.forEach(element => {
        element.style.backgroundColor = newColor;
        element.style.border = newColor;
    })
}

function changeText(elementToChange, newColor) {
    elementToChange.forEach(element => {
        element.style.color = newColor; 
    })
}

function changeCard(cardElement, newColor) {
    cardElement.forEach(element => {
        element.style.border = "3px solid" + newColor;
    })
}

// Change design of page to colors from localstorage
// If no color in localStorage, use default
export function changeTheme(){
    // Changes background colors.
    body.style.backgroundColor = newBackgroundColor; 
    ul.style.backgroundColor = newBackgroundColor; 
    nav.style.backgroundColor = newBackgroundColor; 
    changeBackground(bold, newBoldColor);

    // Card border
    changeCard(outerCard, newBoldColor);
    changeCard(innerCard, newBoldColor); 

    // Changes buttons.
    changeBackground(lightButton, secondaryColor);
    changeBackground(darkButton, newBoldColor);
    
    
    // Changes textcolor.
    changeText(lightButton, newDarkText);
    changeText(darkText, newDarkText);
}

// Set default
const defBackground = "F5F5F5";
const defText = "3B2D1F";

if (loadKey("background") === null){
    body.style.backgroundColor = defBackground;
}

// Call function
changeTheme();