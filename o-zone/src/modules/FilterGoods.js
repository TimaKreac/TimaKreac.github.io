import filters from "./filters";

const FilterGoods = () => {
  const cardGoods = document.querySelectorAll(".goods .card"),
    discountCheckbox = document.querySelectorAll(".filter-check_label")[0],
    min = document.querySelector("#min"),
    max = document.querySelector("#max"),
    search = document.querySelector(".search-wrapper_input"),
    searchBtn = document.querySelector(".search-btn");

  discountCheckbox.addEventListener("click", filters);

  min.addEventListener("change", filters);
  max.addEventListener("change", filters);
  searchBtn.addEventListener("click", () => {
    const searchText = new RegExp(search.value.trim(), "i");
    cardGoods.forEach(card => {
      const cardTitles = card.querySelector(".card-title");
      if (!searchText.test(cardTitles.textContent)) {
        card.parentElement.style.display = "none";
      } else {
        card.parentElement.style.display = "block";
      }
    });
    search.value = "";
  });
};

export default FilterGoods;
