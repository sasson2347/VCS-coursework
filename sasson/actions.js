const detailModal = document.getElementById("gameDetailModal");
const detailTitleEl = document.getElementById("detailTitle");
const detailDescriptionEl = document.getElementById("detailDescription");
const detailImageEl = document.getElementById("detailImage");
const detailPriceEl = document.getElementById("detailPrice");
const detailTagsEl = document.getElementById("detailTags");
const detailCloseButton = document.querySelector(".detail-close");
const detailCards = document.querySelectorAll(".game-card");

const openGameDetails = (card) => {
  const name = card.dataset.name || "Game";
  const description = card.dataset.description || "A thrilling new adventure awaits.";
  const image = card.dataset.image || "";
  const price = card.dataset.price || "$0.00";
  const tags = (card.dataset.tags || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  detailTitleEl.textContent = name;
  detailDescriptionEl.textContent = description;
  detailImageEl.src = image;
  detailImageEl.alt = `${name} cover art`;
  detailPriceEl.textContent = price;
  detailTagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "detail-tag";
    tagElement.textContent = tag;
    detailTagsEl.appendChild(tagElement);
  });

  detailModal.classList.remove("hidden");
  detailModal.setAttribute("aria-hidden", "false");
};

const closeGameDetails = () => {
  detailModal.classList.add("hidden");
  detailModal.setAttribute("aria-hidden", "true");
};

detailCards.forEach((card) => {
  card.addEventListener("click", () => openGameDetails(card));
});

detailCloseButton.addEventListener("click", closeGameDetails);

detailModal.addEventListener("click", (event) => {
  if (event.target === detailModal) {
    closeGameDetails();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !detailModal.classList.contains("hidden")) {
    closeGameDetails();
  }
});
