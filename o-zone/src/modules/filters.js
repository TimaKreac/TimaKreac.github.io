const filters = () => {
  const cardGoods = document.querySelectorAll(".goods .card"),
    discountCheckbox = document.querySelectorAll(".filter-check_label")[0],
    min = document.querySelector("#min"),
    max = document.querySelector("#max"),
    activeLi = document.querySelector(".catalog-list li.active");

  cardGoods.forEach(card => {
    const cardPrices = card.querySelector(".card-price");
    const price = parseFloat(cardPrices.textContent);
    const cardSale = card.querySelector(".card-sale");
    const newCheckbox = discountCheckbox.querySelectorAll(
      ".filter-check_checkmark"
    )[0];
    card.parentElement.style.display = "block";
    if ((price < min.value && min.value) || (max.value && price > max.value)) {
      card.parentElement.style.display = "none";
    } else if (newCheckbox.classList.contains("checked") && !cardSale) {
      card.parentElement.style.display = "none";
    } else if (activeLi) {
      if (card.dataset.category !== activeLi.textContent) {
        card.parentElement.style.display = "none";
      }
    }
  });
};

export default filters;
