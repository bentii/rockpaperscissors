function welcome() {
  let title = document.getElementById("title");
  let button = document.getElementById("play-button");

  title.innerHTML = "<h1>Rock Paper Scissors<h1>";
  button.innerHTML = "Reset";
  button.onclick = function () {
    reset();
  };

  let playButton = document.getElementsByClassName("buttongame");

  let y = playButton.length;

  for (let i = 0; i < y; i++) {
    playButton[0].classList.toggle("buttongame");
  }
}

function pcturn() {
  let x = Math.floor(Math.random() * 3);
  return x;
}

let pcpoints = 0;
let playerpoints = 0;

function rock() {
  let x = pcturn();
  if (x === 0) {
    document.getElementById("title").innerHTML = "<h1>Draw</h1>";
    gameboard("Rock", "Rock");
  } else if (x === 1) {
    document.getElementById("title").innerHTML = "<h1>You Lose</h1>";
    pcpoints++;
    sumpoints();
    gameboard("Rock", "Paper");
  } else {
    document.getElementById("title").innerHTML = "<h1>You Win</h1>";
    playerpoints++;
    sumpoints();
    gameboard("Rock", "Scissors");
  }
  score();
}

function paper() {
  let x = pcturn();
  if (x === 0) {
    document.getElementById("title").innerHTML = "<h1>You Win</h1>";
    playerpoints++;
    sumpoints();
    gameboard("Paper", "Rock");
  } else if (x === 1) {
    document.getElementById("title").innerHTML = "<h1>Draw</h1>";
    gameboard("Paper", "Paper");
  } else {
    document.getElementById("title").innerHTML = "<h1>You Lose</h1>";
    pcpoints++;
    sumpoints();
    gameboard("Paper", "Scissors");
  }
  score();
}

function scissors() {
  let x = pcturn();
  if (x === 0) {
    document.getElementById("title").innerHTML = "<h1>You Lose</h1>";
    pcpoints++;
    sumpoints();
    gameboard("Scissors", "Rock");
  } else if (x === 1) {
    document.getElementById("title").innerHTML = "<h1>You Win</h1>";
    playerpoints++;
    sumpoints();
    gameboard("Scissors", "Paper");
  } else {
    document.getElementById("title").innerHTML = "<h1>Draw</h1>";
    gameboard("Scissors", "Scissors");
  }
  score();
}

function buttondisabler() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function sumpoints() {
  if (playerpoints >= 5) {
    win();
  } else if (pcpoints >= 5) {
    lose();
  }
}

function reset() {
  window.location.reload();
}

function win() {
  document.getElementById("title").innerHTML = "<h1>Won</h1>";
  buttondisabler();
}

function lose() {
  document.getElementById("title").innerHTML = "<h1>Lost</h1>";
  buttondisabler();
}

function score() {
  const newDiv = document.createElement("p");
  newDiv.className = "scorepoints";
  newDiv.appendChild(
    document.createTextNode(`Player ${playerpoints} X ${pcpoints} PC`)
  );
  document.getElementById("score").appendChild(newDiv);
}

let scorestarter = 0;

function gameboard (x , y) {

    if(scorestarter == 0){
    const newP = document.createElement("p");
    const newP1 = document.createElement("p");
    const newP2 = document.createElement("p");

    newP.appendChild(document.createTextNode(`${y}`));
    newP.id = "pcchoice";
    document.getElementById("gameturn").appendChild(newP);
    newP1.appendChild(document.createTextNode(`X`));
    newP1.id ="x";
    document.getElementById("gameturn").appendChild(newP1);
    newP2.appendChild(document.createTextNode(`${x}`));
    newP2.id ="playerchoice";
    document.getElementById("gameturn").appendChild(newP2);
    scorestarter = 1;
    }
    else {
       document.getElementById("pcchoice").innerText = `${y}`;
       document.getElementById("x").innerText = `x`;
       document.getElementById("playerchoice").innerText = `${x}`;
    }
}