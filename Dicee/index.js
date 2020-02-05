function roll(x) {
  randNum = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".dice" + x).setAttribute("src", "images/dice" + randNum + ".png");
  return randNum;
}

function whoWins(x, y) {
  var firstRoll = roll(x);
  var secondRoll = roll(y);
  if (firstRoll > secondRoll) {
    document.querySelector("h1").innerHTML = "Player One Wins!!";
  } else if (secondRoll > firstRoll) {
    document.querySelector("h1").innerHTML = "Player Two Wins!!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

// window.Refresh = whoWins(1, 2);
var button = document.querySelector(".rollBtn");
button.addEventListener('click', function() {
  whoWins(1, 2);
});
