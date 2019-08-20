"use strict";

//checkbox
const toggleCheckbox = () => {
  const FilterCheckboxes = document.querySelectorAll(".filter-check_label");

  FilterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("click", () => {
      const newCheckbox = checkbox.querySelector(".filter-check_checkmark");
      if (newCheckbox.classList.contains("checked")) {
        newCheckbox.classList.remove("checked");
      } else {
        newCheckbox.classList.add("checked");
      }
    });
  });
};

// cart
const toggleCart = () => {
  const openCart = document.querySelector("#cart"),
    modalCart = document.querySelector(".cart"),
    modalCartClose = modalCart.querySelector(".cart-close");

  openCart.addEventListener("click", () => {
    modalCart.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  modalCartClose.addEventListener("click", () => {
    modalCart.style.display = "none";
    document.body.style.overflow = "visible";
  });
};

const toggleCards = () => {
  const cardGoods = document.querySelectorAll(".goods .card"),
    cartWrapper = document.querySelector(".cart-wrapper"),
    cartCardsCounter = document.querySelector(".counter"),
    cartEmpty = document.querySelector("#cart-empty");

  const ShowCardsCount = () => {
    const cartCards = cartWrapper.querySelectorAll(".card"),
      cardPrices = cartWrapper.querySelectorAll(".card-price"),
      cardPricesTotal = document.querySelector(".cart-total span");

    cartCardsCounter.textContent = cartCards.length;

    let sumCardPrices = 0;

    cardPrices.forEach(price => {
      const parsedPrice = parseFloat(price.textContent);
      sumCardPrices += parsedPrice;
    });
    cardPricesTotal.textContent = sumCardPrices;

    if (cartCards.length !== 0) {
      cartEmpty.style.display = "none";
    } else {
      cartEmpty.style.display = "block";
    }
  };

  cardGoods.forEach(card => {
    const btnCardGoods = card.querySelector("button");
    btnCardGoods.addEventListener("click", () => {
      const cardGoodsClone = card.cloneNode(true);
      cartWrapper.appendChild(cardGoodsClone);
      ShowCardsCount();

      const removeCardBtn = cardGoodsClone.querySelector("button");
      removeCardBtn.textContent = "Удалить из корзины";
      removeCardBtn.addEventListener("click", () => {
        cardGoodsClone.remove();
        ShowCardsCount();
      });
    });
  });
};

// filters
const FilterGoods = () => {
  const cardGoods = document.querySelectorAll(".goods .card"),
    discountCheckbox = document.querySelectorAll(".filter-check_label")[0],
    min = document.querySelector("#min"),
    max = document.querySelector("#max"),
    search = document.querySelector(".search-wrapper_input"),
    searchBtn = document.querySelector(".search-btn");

  const filters = () => {
    cardGoods.forEach(card => {
      const cardPrices = card.querySelector(".card-price");
      const price = parseFloat(cardPrices.textContent);
      const cardSale = card.querySelector(".card-sale");
      const newCheckbox = discountCheckbox.querySelectorAll(
        ".filter-check_checkmark"
      )[0];

      if (
        (price < min.value && min.value) ||
        (max.value && price > max.value)
      ) {
        card.parentElement.style.display = "none";
      } else if (newCheckbox.classList.contains("checked") && !cardSale) {
        card.parentElement.style.display = "none";
      } else {
        card.parentElement.style.display = "block";
      }
    });
  };

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

// Получение данных с сервера
const getData = () => {
  const goodsWrapper = document.querySelector(".goods");
  return fetch("../db/db.json")
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Данные не были получены ${response.status}`);
      }
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      console.warn(err);
      goodsWrapper.innerHTML =
        '<div style="font-size: 40px;">Упс..Что-то пошло не так!</div>';
    });
};

const renderCards = data => {
  const goodsWrapper = document.querySelector(".goods");
  data.goods.forEach(good => {
    const card = document.createElement("div");
    card.className = "col-12 col-md-6 col-lg-4 col-xl-3";
    card.innerHTML = `
      <div class="card" data-category="${good.category}">
        ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ""}
        <div class="card-img-wrapper">
          <span class="card-img-top"
            style="background-image: url('${good.img}')"></span>
        </div>
        <div class="card-body justify-content-between">
          <div class="card-price" >
          <span ${good.sale ? 'style="color:red;"' : ""}>
          ${good.price}</span> ₽</div>
          <h5 class="card-title">${good.title}</h5>
          <button class="btn btn-primary">В корзину</button>
        </div>
      </div>
    `;
    goodsWrapper.appendChild(card);
  });
};

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

  catalogBtn.addEventListener("click", e => {
    if (catalogWrapper.style.display === "block") {
      catalogWrapper.style.display = "none";
    } else {
      catalogWrapper.style.display = "block";
    }

    if (e.target.tagName === "LI") {
      cardGoods.forEach(card => {
        if (card.dataset.category !== e.target.textContent) {
          card.parentElement.style.display = "none";
        } else {
          card.parentElement.style.display = "block";
        }
      });
    }
  });
};

getData().then(data => {
  renderCards(data);
  toggleCheckbox();
  toggleCart();
  toggleCards();
  FilterGoods();
  renderCategory();
});
