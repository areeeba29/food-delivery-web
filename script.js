let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');
  if (!cartList || !cartTotal) return; // Prevents error if not on index page
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rs. ${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    window.location.href = 'order.html';
  }
}

// Call renderCart() on page load (in case returning back to index.html)
renderCart();
