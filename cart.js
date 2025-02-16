document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.getElementById('cart-count');
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Fetch products (opsional, jika masih ingin mendapatkan data produk)
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      console.log("Products fetched:", products); // Debug
    });

  // Update Cart Count
  function updateCartCount() {
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  // Initialize Cart Count
  updateCartCount();
});
