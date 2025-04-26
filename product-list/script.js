/** @format */

// /** @format */
// document.addEventListener("click", function (e) {
//   const btn = e.target.closest(".cart-action-btn");
//   if (!btn) return;

//   const defaultState = btn.querySelector(".default-state");
//   const quantityState = btn.querySelector(".quantity-state");
//   const quantityCount = btn.querySelector(".quantity-count");

//   if (defaultState && defaultState.contains(e.target)) {
//     defaultState.style.display = "none";
//     quantityState.style.display = "flex";
//     quantityCount.textContent = "1";
//     btn.classList.add("active-cart");
//   }

//   if (e.target.classList.contains("plus-btn")) {
//     let qty = parseInt(quantityCount.textContent);
//     quantityCount.textContent = qty + 1;

//     const card = btn.closest(".card");
//     card.classList.add("active-card");
//   }

//   if (e.target.classList.contains("minus-btn")) {
//     let qty = parseInt(quantityCount.textContent);
//     if (qty > 1) {
//       quantityCount.textContent = qty - 1;
//     } else {
//       // If qty is 1 and user clicks minus, reset to default state
//       quantityCount.textContent = "0";
//       quantityState.style.display = "none";
//       defaultState.style.display = "flex";
//       btn.classList.remove("active-cart");
//     }
//   }
// });

// document.addEventListener("click", function (e) {
//   const btn = e.target.closest(".cart-action-btn");
//   if (!btn) return;

//   const productId = btn.getAttribute("data-id");
//   const productName = btn.getAttribute("data-name");
//   const productPrice = parseFloat(btn.getAttribute("data-price"));

//   const purchasedItemsContainer = document.querySelector(".purchased-items");

//   let existingItem = purchasedItemsContainer.querySelector(
//     `.cart-item[data-id="${productId}"]`
//   );

//   if (existingItem) {
//     const quantityCount = existingItem.querySelector(".quantity-count");
//     const newQuantity = parseInt(quantityCount.textContent) + 1;
//     quantityCount.textContent = newQuantity;

//     const totalPrice = existingItem.querySelector(".total-price");
//     totalPrice.textContent = (newQuantity * productPrice).toFixed(2);
//   } else {
//     const cartItem = document.createElement("div");
//     cartItem.classList.add("cart-item");
//     cartItem.setAttribute("data-id", productId);

//     cartItem.innerHTML = `
//     <div class="cart-item-details">
//         <div class="title">
//             <p class="item-name">${productName}</p>
//         </div>
//         <div class="item-meta">
//             <span class="quantity-count">1x</span>
//             <span class="item-price">@$${productPrice.toFixed(2)}</span>
//             <span class="total-price">${productPrice.toFixed(2)}</span>
//                 <div class="my-btn">
//                     <button class="remove-item-btn">
//                         <img src="./images/icon-remove-item.svg" alt="" />
//                     </button>
//                 </div>
//         </div>
//     </div>
//      <button id="confirm">Confirm Order</button>

//       `;

//     purchasedItemsContainer.appendChild(cartItem);
//   }

//   const cartCount = document.querySelector(".heading");
//   const currentCount = parseInt(cartCount.textContent.match(/\d+/)[0]);
//   cartCount.textContent = `Your Cart(${currentCount + 1})`;

//   document.querySelector(".sub-content").style.display = "none";
// });

document.addEventListener("click", function (e) {
  const btn = e.target.closest(".cart-action-btn");
  if (!btn) return;

  const defaultState = btn.querySelector(".default-state");
  const quantityState = btn.querySelector(".quantity-state");
  const quantityCount = btn.querySelector(".quantity-count");

  // Show quantity selector when "Add to Cart" is clicked
  if (defaultState && defaultState.contains(e.target)) {
    defaultState.style.display = "none";
    quantityState.style.display = "flex";
    quantityCount.textContent = "1";
    btn.classList.add("active-cart");
    updateCart(btn);
  }

  // Plus button increases count and updates cart
  if (e.target.classList.contains("plus-btn")) {
    let qty = parseInt(quantityCount.textContent);
    quantityCount.textContent = qty + 1;
    updateCart(btn);
  }

  // Minus button decreases count and updates cart or removes item
  if (e.target.classList.contains("minus-btn")) {
    let qty = parseInt(quantityCount.textContent);
    if (qty > 1) {
      quantityCount.textContent = qty - 1;
      updateCart(btn);
    } else {
      quantityCount.textContent = "0";
      quantityState.style.display = "none";
      defaultState.style.display = "flex";
      btn.classList.remove("active-cart");
      removeFromCart(btn);
    }
  }
});

// Function to update or add an item in the cart
function updateCart(btn) {
  const productId = btn.getAttribute("data-id");
  const productName = btn.getAttribute("data-name");
  const productPrice = parseFloat(btn.getAttribute("data-price"));
  const quantity = parseInt(btn.querySelector(".quantity-count").textContent);

  const purchasedItemsContainer = document.querySelector(".purchased-items");
  let existingItem = purchasedItemsContainer.querySelector(
    `.cart-item[data-id="${productId}"]`
  );

  if (existingItem) {
    existingItem.querySelector(".quantity-count").textContent = `${quantity}x`;
    existingItem.querySelector(".total-price").textContent = (
      quantity * productPrice
    ).toFixed(2);
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
    <div class="products">
      <span class="quantity-count">${quantity}x</span>
      <span class="item-price">@$${productPrice.toFixed(2)}</span>
      <span class="total-price">${(quantity * productPrice).toFixed(2)}</span>
    </div>
    <div class="my-btn">
      <button class="remove-item-btn">
        <img src="./images/icon-remove-item.svg" alt="Remove" />
      </button>
    </div>
  </div>
</div>
      `;
    purchasedItemsContainer.appendChild(cartItem);
  }

  updateCartHeading();
  document.getElementById("confirm").style.display = "block";
}

// Function to remove item from cart
function removeFromCart(btn) {
  const productId = btn.getAttribute("data-id");
  const purchasedItemsContainer = document.querySelector(".purchased-items");
  const existingItem = purchasedItemsContainer.querySelector(
    `.cart-item[data-id="${productId}"]`
  );

  if (existingItem) {
    purchasedItemsContainer.removeChild(existingItem);
  }

  updateCartHeading();

  if (purchasedItemsContainer.querySelectorAll(".cart-item").length === 0) {
    document.getElementById("confirm").style.display = "none";
  }
}

// Update the cart heading count (total quantity of all items)
function updateCartHeading() {
  const cartCount = document.querySelector(".heading");
  const items = document.querySelectorAll(".purchased-items .cart-item");
  let totalQuantity = 0;

  items.forEach((item) => {
    const quantityText =
      item.querySelector(".quantity-count")?.textContent || "0";
    const qty = parseInt(quantityText.match(/\d+/)?.[0] || 0);
    totalQuantity += qty;
  });

  cartCount.textContent = `Your Cart(${totalQuantity})`;
}
