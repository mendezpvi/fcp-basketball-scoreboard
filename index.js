let homePointEl = document.getElementById("home-point")
let guestPointEl = document.getElementById("guest-point")

let homePoints = 0
let guestPoints = 0


function add1PointToHome() {
  homePoints += 1
  homePointEl.textContent = homePoints
  getHigherScore()
}

function add2PointToHome() {
  homePoints += 2
  homePointEl.textContent = homePoints
  getHigherScore()
}

function add3PointToHome() {
  homePoints += 3
  homePointEl.textContent = homePoints
  getHigherScore()
}

function add1PointToGuest() {
  guestPoints += 1
  guestPointEl.textContent = guestPoints
  getHigherScore()
}

function add2PointToGuest() {
  guestPoints += 2
  guestPointEl.textContent = guestPoints
  getHigherScore()
}

function add3PointToGuest() {
  guestPoints += 3
  guestPointEl.textContent = guestPoints
  getHigherScore()
}

function cleanPoints() {
  homePoints = 0
  guestPoints = 0
  homePointEl.textContent = homePoints
  guestPointEl.textContent = guestPoints
  homePointEl.style.color = "#0EA5E9"
  guestPointEl.style.color = "#0EA5E9"
}

function getHigherScore() {
  if (homePoints > guestPoints) {
    homePointEl.style.color = "yellow"
    guestPointEl.style.color = "#0EA5E9"
  } else if (guestPoints > homePoints) {
    guestPointEl.style.color = "yellow"
    homePointEl.style.color = "#0EA5E9"
  } else {
    homePointEl.style.color = "#0EA5E9"
    guestPointEl.style.color = "#0EA5E9"
  }
}