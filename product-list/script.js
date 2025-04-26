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

    const card = btn.closest(".card");
    card.classList.add("active-card");
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

document.addEventListener("click", function (e) {
  const btn = e.target.closest(".cart-action-btn");
  if (!btn) return;

  const productId = btn.getAttribute("data-id");
  const productName = btn.getAttribute("data-name");
  const productPrice = parseFloat(btn.getAttribute("data-price"));

  const purchasedItemsContainer = document.querySelector(".purchased-items");

  let existingItem = purchasedItemsContainer.querySelector(
    `.cart-item[data-id="${productId}"]`
  );

  if (existingItem) {
    const quantityCount = existingItem.querySelector(".quantity-count");
    const newQuantity = parseInt(quantityCount.textContent) + 1;
    quantityCount.textContent = newQuantity;

    const totalPrice = existingItem.querySelector(".total-price");
    totalPrice.textContent = (newQuantity * productPrice).toFixed(2);
  } else {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.setAttribute("data-id", productId);

    cartItem.innerHTML = `
    <div class="cart-item-details">
        <div class="title">
            <p class="item-name">${productName}</p>
        </div>
        <div class="item-meta">
            <span class="quantity-count">1x</span>
            <span class="item-price">@$${productPrice.toFixed(2)}</span>
            <span class="total-price">${productPrice.toFixed(2)}</span>
                <div class="my-btn">
                    <button class="remove-item-btn">
                        <img src="./images/icon-remove-item.svg" alt="" />
                    </button>
                </div>
        </div>
    </div>
     <button id="confirm">Confirm Order</button>
        
      `;

    purchasedItemsContainer.appendChild(cartItem);
  }

  const cartCount = document.querySelector(".heading");
  const currentCount = parseInt(cartCount.textContent.match(/\d+/)[0]);
  cartCount.textContent = `Your Cart(${currentCount + 1})`;

  document.querySelector(".sub-content").style.display = "none";
});
