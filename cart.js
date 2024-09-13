// Load cart data from localStorage and display it

  function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    const cartContainer = document.getElementById('cartContainer');
    const totalAmountElem = document.getElementById('totalAmount');
    cartContainer.innerHTML = '';
    let totalAmount = 0;
  
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalAmountElem.innerHTML = '<p><strong>Total Amount: $0.00</strong></p>';
    } else {
      cart.forEach((item, index) => {
        totalAmount += item.price;
  
        const cartItem = document.createElement('div');
        cartItem.classList.add('row', 'mb-3');
  
        cartItem.innerHTML = `
          <div class="col-md-8">
            <h5>${item.name}</h5>
            <p>${item.description}</p>
          </div>
          <div class="col-md-2">
            <p><strong>$${item.price}</strong></p>
          </div>
          <div class="col-md-2">
            <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
          </div>
        `;
  
        cartContainer.appendChild(cartItem);
      });
  
      totalAmountElem.innerHTML = `<p><strong>Total Amount:</strong> $${totalAmount}</p>`;
    }
  }



// Remove an item from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.splice(index, 1); // Remove item by index

  localStorage.setItem('cart', JSON.stringify(cart)); // Update cart in localStorage

  loadCart(); // Reload the cart to reflect changes
}

// Handle the checkout process
function checkout() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Simulate saving order details (this part should be integrated with the backend)
  localStorage.removeItem('cart'); // Clear the cart

  alert("Order Placed Successfully!");

  // Display the order success message and clear cart details
  document.getElementById('cartContainer').innerHTML = `
    <h4 class="text-success">Order Placed Successfully!</h4>
    <p>Your order will be processed and shipped shortly. Thank you for shopping with us!</p>
  `;

  document.getElementById('totalAmount').innerHTML = '<p><strong>Total Amount: $0.00</strong></p>';
}

// Load customer name from localStorage (if logged in)
function loadWelcomeMessage() {
  const userName = localStorage.getItem('userName') || "Customer";
  document.getElementById('welcomeMsg').innerText = `Hello ${userName}, Welcome to Online Grocery Store`;
}

// Logout function to redirect to the login page
function logout() {
  // Redirect to the login page
  localStorage.clear();
  window.location.href = "login.html";
}

// Load the cart and welcome message when the page loads
window.onload = function() {
  loadCart();
  loadWelcomeMessage();
};
