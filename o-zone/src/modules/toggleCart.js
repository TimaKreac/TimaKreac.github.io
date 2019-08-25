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

export default toggleCart;
