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

export default toggleCards;