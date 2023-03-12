const ageBox = document.querySelector("#age"); 
const todaysDate = new Date();
const currentYear = todaysDate.getFullYear(); 
const myAge = currentYear - 1994; 

ageBox.innerHTML = `Age: ${myAge}`; 