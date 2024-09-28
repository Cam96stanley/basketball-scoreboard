const homeScoreDisplay = document.getElementById("home-score");
const guestScoreDisplay = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function incrementOneHome() {
  homeScore += 1;
  homeScoreDisplay.textContent = homeScore;
}
