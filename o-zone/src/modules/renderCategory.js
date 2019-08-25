import filters from "./filters";

const renderCategory = () => {
  const cardGoods = document.querySelectorAll(".goods .card"),
    catalogWrapper = document.querySelector(".catalog"),
    catalogList = catalogWrapper.querySelector(".catalog-list"),
    catalogBtn = document.querySelector(".catalog-button");

  const categories = new Set();

  cardGoods.forEach(card => {
    categories.add(card.dataset.category);
  });

  categories.forEach(category => {
    const li = document.createElement("li");
    li.textContent = category;
    catalogList.appendChild(li);
  });

  const liCatalog = catalogList.querySelectorAll("li");

  catalogBtn.addEventListener("click", e => {
    if (catalogWrapper.style.display === "block") {
      catalogWrapper.style.display = "none";
    } else {
      catalogWrapper.style.display = "block";
    }

    if (e.target.tagName === "LI") {
      liCatalog.forEach(item => {
        if (item === e.target) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
      filters();
    }
  });
};

export default renderCategory;
