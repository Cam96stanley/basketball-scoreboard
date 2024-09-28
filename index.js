const homeScoreDisplay = document.getElementById("home-score");
const guestScoreDisplay = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function incrementOneHome() {
  homeScore += 1;
  homeScoreDisplay.textContent = homeScore;
}

function incrementTwoHome() {
  homeScore += 2;
  homeScoreDisplay.textContent = homeScore;
}

function incrementThreeHome() {
  homeScore += 3;
  homeScoreDisplay.textContent = homeScore;
}
