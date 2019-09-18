let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let dice = Math.ceil(Math.random() * 6); // Gets random number from 1 to 6

document.querySelector(`#current-${activePlayer}`).textContent = dice;

document.querySelector(".dice").style.display = "none";
