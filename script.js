let secret = Math.floor(Math.random() * 100) + 1;

function check() {
  let guess = Number(document.getElementById("guess").value);
  let message = document.getElementById("message");

  if (guess === secret) {
    message.textContent = "Верно! Ты угадал!";
  } else if (guess < secret) {
    message.textContent = "Загаданное число больше";
  } else {
    message.textContent = "Загаданное число меньше";
  }
}
