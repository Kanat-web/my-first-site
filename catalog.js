let products = [];

async function loadProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=30");
    const data = await response.json();
    products = data.products;
    update();
  } catch (error) {
    document.getElementById("status").textContent = "Не удалось загрузить данные";
  }
}

function update() {
  const text = document.getElementById("search").value.toLowerCase();
  const sort = document.getElementById("sort").value;

  let result = products.filter(function (p) {
    return p.title.toLowerCase().includes(text);
  });

  if (sort === "asc") {
    result.sort(function (a, b) { return a.price - b.price; });
  } else if (sort === "desc") {
    result.sort(function (a, b) { return b.price - a.price; });
  }

  showProducts(result);
}

function showProducts(items) {
  const list = document.getElementById("list");
  const status = document.getElementById("status");
  list.innerHTML = "";

  if (items.length === 0) {
    status.textContent = "Ничего не найдено";
    return;
  }
  status.textContent = "Найдено: " + items.length;

  items.forEach(function (p) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
      '<img src="' + p.thumbnail + '" alt="' + p.title + '" width="150">' +
      "<h2>" + p.title + "</h2>" +
      "<p>$" + p.price + "</p>";
    list.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", update);
document.getElementById("sort").addEventListener("change", update);

loadProducts();
