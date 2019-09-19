let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-0").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", () => {
  let dice = Math.ceil(Math.random() * 6);

  let diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = `dice-${dice}.png`;

  if (dice !== 1) {
    roundScore += dice;
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
  } else {
    roundScore = 0;
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
