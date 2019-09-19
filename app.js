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
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  scores[activePlayer] += roundScore;
  document.querySelector(`#score-${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 10) {
    document.querySelector(`#name-${activePlayer}`).textContent = "Winner";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(`.player-${activePlayer}-panel`)
      .classList.add("winner");
    document
      .querySelector(`.player-${activePlayer}-panel`)
      .classList.remove("active");
  } else {
    nextPlayer();
  }
});

function nextPlayer() {
  roundScore = 0;
  document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.player-0-panel`).classList.toggle("active");
  document.querySelector(`.player-1-panel`).classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}
