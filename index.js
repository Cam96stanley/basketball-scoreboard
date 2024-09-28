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

function incrementOneGuest() {
  guestScore += 1;
  guestScoreDisplay.textContent = guestScore;
}

function incrementTwoGuest() {
  guestScore += 2;
  guestScoreDisplay.textContent = guestScore;
}

function incrementThreeGuest() {
  guestScore += 3;
  guestScoreDisplay.textContent = guestScore;
}
