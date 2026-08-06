const searchBox = document.getElementById("searchBox");
const themeToggle = document.getElementById("themeToggle");
const gameCards = document.querySelectorAll(".game-card");

searchBox.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();

  gameCards.forEach((card) => {
    const name = card.getAttribute("data-name").toLowerCase();
    card.style.display = name.includes(query) ? "block" : "none";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});
