const btn = document.createElement("button");
btn.id = "theme-btn";
document.body.appendChild(btn);

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    btn.textContent = "🌙 Ночь";
  } else {
    document.body.classList.remove("light");
    btn.textContent = "☀️ День";
  }
}

applyTheme(localStorage.getItem("theme") || "dark");

btn.addEventListener("click", function () {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});
