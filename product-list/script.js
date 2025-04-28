/** @format */

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
  const productImage = btn.querySelector("img").src; // Get image dynamically

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
              <span class="total-price">${(quantity * productPrice).toFixed(
                2
              )}</span>
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
  document.getElementById("confirm").style.display = "block"; // Show the confirm order button
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

  // Hide the confirm order button if cart is empty
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

// Render confirmation-order box when "Confirm Order" button is clicked
document.getElementById("confirm").addEventListener("click", function () {
  // Show confirmation box
  document.querySelector(".confirmation-box").style.display = "block";

  const purchasedItemsContainer = document.querySelector(".purchased-items");
  const confirmedItemsContainer = document.querySelector(".confirmed-items");

  confirmedItemsContainer.innerHTML = ""; // Clear previous confirmed items

  const cartItems = purchasedItemsContainer.querySelectorAll(".cart-item");

  cartItems.forEach((item) => {
    const itemName = item.querySelector(".item-name").textContent;
    const itemQuantity = item.querySelector(".quantity-count").textContent;
    const itemTotalPrice = item.querySelector(".total-price").textContent;
    const itemImage = item.querySelector("img").src; // Assuming the image is inside the cart item.

    const itemHTML = `
  <div class="confirmed-item">
  <div class="my-items">
    <div class="product-image">
      <img src="${itemImage}" alt="${itemName}" class="confirmed-item-image" />
    </div>
    <div class="product-details">
      <p class="product-name">${itemName}</p>
      <div class="product-quantity-price">
        <p class="product-quantity">${itemQuantity}</p>
        <p class="product-price">@$${parseFloat(itemTotalPrice).toFixed(2)}</p>
      </div>
    </div>
    <div class="price">
      <p class="total-price">$${parseFloat(itemTotalPrice).toFixed(2)}</p>
    </div>
    </div>
  </div>
`;

    confirmedItemsContainer.insertAdjacentHTML("beforeend", itemHTML);
  });

  let finalTotal = 0;
  cartItems.forEach((item) => {
    const itemPrice = parseFloat(
      item.querySelector(".total-price").textContent
    );
    finalTotal += itemPrice;
  });

  // Display final order total
  document.getElementById(
    "final-order-total"
  ).textContent = `$${finalTotal.toFixed(2)}`;
});

// Confirm Checkout and complete order
document
  .getElementById("confirm-checkout")
  .addEventListener("click", function () {
    alert("Order Confirmed!"); // Example confirmation action

    // Reset the cart and hide confirmation box after confirming
    document.querySelector(".confirmation-box").style.display = "none";
    document.querySelector(".box").style.display = "block"; // Show the cart box again
    document.querySelector(".purchased-items").innerHTML = ""; // Clear cart
    document.getElementById("order-total-value").textContent = "$0.00"; // Reset total
    document.getElementById("confirm").style.display = "none"; // Hide the confirm order button
    updateCartHeading(); // Reset cart heading
  });
