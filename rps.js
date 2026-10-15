let wins = 0;
let losses = 0;
let draws = 0;

const names = {
  rock: "Камень",
  scissors: "Ножницы",
  paper: "Бумага"
};

function play(player) {
  const options = ["rock", "scissors", "paper"];
  const computer = options[Math.floor(Math.random() * 3)];
  let result;

  if (player === computer) {
    result = "Ничья";
    draws++;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    result = "Ты выиграл!";
    wins++;
  } else {
    result = "Компьютер выиграл";
    losses++;
  }

  document.getElementById("message").textContent =
    "Ты: " + names[player] + ", компьютер: " + names[computer] + ". " + result;
  document.getElementById("score").textContent =
    "Победы: " + wins + " | Поражения: " + losses + " | Ничьи: " + draws;
}
