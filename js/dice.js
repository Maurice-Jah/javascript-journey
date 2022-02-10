let result = document.querySelector(".result");
let gameBtn = document.querySelector(".game-btn");

let handleClick = () => {
  // Player 1
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let imgPlayer1 = document.querySelector(".player1-img");
  imgPlayer1.src = "../images/dice/dice" + randomNumber1 + ".png";

  // Player 2
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);
  let imgPlayer2 = document.querySelector(".player2-img");
  imgPlayer2.src = "../images/dice/dice" + randomNumber2 + ".png";

  if (randomNumber1 > randomNumber2) {
    result.innerHTML =
      '<p class="result"> 🚩 <span class = "winner">Player 1 </span> Wins</p>';
  } else if (randomNumber2 > randomNumber1) {
    result.innerHTML =
      '<p class="result"> <span class = "winner">Player 2 </span> Wins 🚩</p>';
  } else {
    result.innerHTML = ' <p class="result">It is a Draw 🤝</p>';
  }
};

gameBtn.addEventListener("click", handleClick);
