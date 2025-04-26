/** @format */
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".cart-action-btn");
  if (!btn) return;

  const defaultState = btn.querySelector(".default-state");
  const quantityState = btn.querySelector(".quantity-state");
  const quantityCount = btn.querySelector(".quantity-count");

  if (defaultState && defaultState.contains(e.target)) {
    defaultState.style.display = "none";
    quantityState.style.display = "flex";
    quantityCount.textContent = "1";
    btn.classList.add("active-cart");
  }

  if (e.target.classList.contains("plus-btn")) {
    let qty = parseInt(quantityCount.textContent);
    quantityCount.textContent = qty + 1;
  }

  if (e.target.classList.contains("minus-btn")) {
    let qty = parseInt(quantityCount.textContent);
    if (qty > 1) {
      quantityCount.textContent = qty - 1;
    } else {
      // If qty is 1 and user clicks minus, reset to default state
      quantityCount.textContent = "0";
      quantityState.style.display = "none";
      defaultState.style.display = "flex";
      btn.classList.remove("active-cart");
    }
  }
});
