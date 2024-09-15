// Sample grocery items (for display on the home page)
const groceryItems = [
    {
      name: "Fresh Apples",
      price: 3.99,
      description: "Crisp and juicy apples, perfect for snacks or baking.",
      image: "https://via.placeholder.com/150/FF0000/FFFFFF/?text=Apples"
    },
    {
      name: "Organic Bananas",
      price: 1.29,
      description: "Sweet, ripe organic bananas full of vitamins and minerals.",
      image: "https://via.placeholder.com/150/FFFF00/000000/?text=Bananas"
    },
    {
      name: "Whole Wheat Bread",
      price: 2.50,
      description: "Healthy and fresh whole wheat bread, perfect for sandwiches.",
      image: "https://via.placeholder.com/150/8B4513/FFFFFF/?text=Bread"
    },
    {
      name: "Almond Milk",
      price: 3.49,
      description: "Delicious and nutritious almond milk, dairy-free alternative.",
      image: "https://via.placeholder.com/150/F4A460/FFFFFF/?text=Almond%20Milk"
    },
    {
      name: "Organic Eggs",
      price: 2.99,
      description: "High-quality organic eggs, ideal for breakfast or baking.",
      image: "https://via.placeholder.com/150/F0E68C/FFFFFF/?text=Eggs"
    },
    {
      name: "Broccoli",
      price: 1.99,
      description: "Fresh green broccoli, packed with vitamins and minerals.",
      image: "https://via.placeholder.com/150/228B22/FFFFFF/?text=Broccoli"
    },
    {
      name: "Chicken Breast",
      price: 7.99,
      description: "Tender and juicy chicken breast, perfect for grilling.",
      image: "https://via.placeholder.com/150/DC143C/FFFFFF/?text=Chicken%20Breast"
    },
    {
      name: "Brown Rice",
      price: 2.79,
      description: "Healthy whole grain brown rice, great for nutritious meals.",
      image: "https://via.placeholder.com/150/8B4513/FFFFFF/?text=Brown%20Rice"
    },
    {
      name: "Peanut Butter",
      price: 4.29,
      description: "Creamy peanut butter, perfect for spreads and smoothies.",
      image: "https://via.placeholder.com/150/FFA500/FFFFFF/?text=Peanut%20Butter"
    },
    {
      name: "Greek Yogurt",
      price: 3.19,
      description: "Rich and creamy Greek yogurt, packed with protein.",
      image: "https://via.placeholder.com/150/FFFFFF/000000/?text=Greek%20Yogurt"
    }
  ];
  
  // Function to load and display grocery items on the home page
  function loadGroceries() {
    const groceriesContainer = document.getElementById('groceryContainer');
  
    groceryItems.forEach((item, index) => {
      const groceryCard = document.createElement('div');
      groceryCard.classList.add('col-md-3', 'mb-4');  // Adjusted for 4 items per row using Bootstrap grid
  
      groceryCard.innerHTML = `
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <p class="card-text"><strong>Price:</strong> $${item.price.toFixed(2)}</p>
            <button class="btn btn-primary" onclick="addToCart(${index})">Add to Cart</button>
          </div>
        </div>
      `;
  
      groceriesContainer.appendChild(groceryCard);
    });
  }
  
  // Function to handle adding items to the cart and storing them in localStorage
  function addToCart(index) {
    const item = groceryItems[index];
  
    // Get the cart from localStorage (if it exists), otherwise initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Add the selected item to the cart
    cart.push(item);
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    window.location.href = "cart.html";
    alert(`${item.name} has been added to your cart!`);
  }
  
  // Load the groceries when the page loads
  window.onload = loadGroceries;
  
