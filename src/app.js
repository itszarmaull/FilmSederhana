const form = document.getElementById("search-form");
const results = document.getElementById("results");

const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalGenres = document.getElementById("modal-genres");
const modalRating = document.getElementById("modal-rating");
const modalSummary = document.getElementById("modal-summary");

window.addEventListener("DOMContentLoaded", async () => {
  results.innerHTML = "";
  const res = await axios.get("https://api.tvmaze.com/shows");
  const trending = res.data.slice(0, 20);
  const text = document.getElementById("pencarian");
  text.textContent = "Films Trending 2025 : ";
  getImages(trending);
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  results.innerHTML = "";
  const keyword = form.elements.query.value;
  if (!keyword) return;

  const config = { params: { q: keyword } };
  const res = await axios.get("https://api.tvmaze.com/search/shows", config);
  const text = document.getElementById("pencarian");
  text.textContent = "Hasil Pencarian : ";
  const mapped = res.data.map((r) => r.show);
  getImages(mapped);

  form.elements.query.value = "";
});

const getImages = (shows) => {
  for (let show of shows) {
    if (show.image) {
      const card = document.createElement("div");
      card.className =
        "fade-in bg-gray-800/60 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition transform duration-300 cursor-pointer";

      const img = document.createElement("img");
      img.src = show.image.medium;
      img.alt = show.name;
      img.className = "w-full h-64 object-cover";

      const title = document.createElement("h3");
      title.textContent = show.name;
      title.className = "p-3 text-center text-yellow-300 font-semibold";

      card.addEventListener("click", () => {
        openModal(show);
      });

      card.append(img, title);
      results.append(card);
    }
  }
};

function openModal(show) {
  modalImg.src = show.image ? show.image.original : "";
  modalTitle.textContent = show.name;
  modalGenres.textContent = show.genres.length
    ? `Genre: ${show.genres.join(", ")}`
    : "Genre: N/A";
  modalRating.textContent =
    show.rating && show.rating.average
      ? `Rating: ⭐ ${show.rating.average}`
      : "Rating: N/A";
  modalSummary.innerHTML = show.summary
    ? show.summary
    : "<i>Tidak ada deskripsi.</i>";

  modal.classList.remove("hidden");
}

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
