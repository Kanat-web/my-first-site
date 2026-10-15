let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function check() {
  let guess = Number(document.getElementById("guess").value);
  let message = document.getElementById("message");
  attempts++;

  if (guess === secret) {
    message.textContent = "Верно! Ты угадал за " + attempts + " попыток!";
  } else if (guess < secret) {
    message.textContent = "Загаданное число больше. Попыток: " + attempts;
  } else {
    message.textContent = "Загаданное число меньше. Попыток: " + attempts;
  }
}

function newGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guess").value = "";
  document.getElementById("message").textContent = "";
}
