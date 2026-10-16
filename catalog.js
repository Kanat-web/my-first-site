let products = [];

async function loadProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=30");
    const data = await response.json();
    products = data.products;
    showProducts(products);
  } catch (error) {
    document.getElementById("status").textContent = "Не удалось загрузить данные";
  }
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

document.getElementById("search").addEventListener("input", function (e) {
  const text = e.target.value.toLowerCase();
  const filtered = products.filter(function (p) {
    return p.title.toLowerCase().includes(text);
  });
  showProducts(filtered);
});

loadProducts();
