"use strict";

import getData from "./modules/getData";
import renderCards from "./modules/renderCards";
import renderCategory from "./modules/renderCategory";
import toggleCheckbox from "./modules/toggleCheckbox";
import toggleCart from "./modules/toggleCart";
import toggleCards from "./modules/toggleCards";
import FilterGoods from "./modules/FilterGoods";

getData().then(data => {
  renderCards(data);
  renderCategory();
  toggleCheckbox();
  toggleCart();
  toggleCards();
  FilterGoods();
});

// (async function() {
//   const db = await getData();
//   renderCards(db);
//   renderCategory();
//   toggleCheckbox();
//   toggleCart();
//   toggleCards();
//   FilterGoods();
// })();
