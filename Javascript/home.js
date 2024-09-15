
const groceryItems = [
  {
    name: "Fresh Apples",
    price: 3.99,
    description: "Crisp and juicy apples, perfect for snacks or baking.",
    image: '../images/apple.jpg'
  },
  {
    name: "Organic Bananas",
    price: 1.29,
    description: "Sweet, ripe organic bananas full of vitamins and minerals.",
    image: '../images/Banana.jpg'
  },
  {
    name: "Whole Wheat Bread",
    price: 2.50,
    description: "Healthy and fresh whole wheat bread, perfect for sandwiches.",
    image: '../images/whole_wheat_bread.jpg'
  },
  {
    name: "Almond Milk",
    price: 3.49,
    description: "Delicious and nutritious almond milk, dairy-free alternative.",
    image: '../images/Almond_milk.jpg'
  },
  {
    name: "Organic Eggs",
    price: 2.99,
    description: "High-quality organic eggs, ideal for breakfast or baking.",
    image: '../images/eggs.jpg'
  },
  {
    name: "Broccoli",
    price: 1.99,
    description: "Fresh green broccoli, packed with vitamins and minerals.",
    image: '../images/broccoli.jpg'
  },
  {
    name: "Chicken Breast",
    price: 7.99,
    description: "Tender and juicy chicken breast, perfect for grilling.",
    image: '../images/Chicken_breast.jpg'
  },
  {
    name: "Brown Rice",
    price: 2.79,
    description: "Healthy whole grain brown rice, great for nutritious meals.",
    image: '../images/Brown Rice.jpg'
  },
  {
    name: "Peanut Butter",
    price: 4.29,
    description: "Creamy peanut butter, perfect for spreads and smoothies.",
    image: '../images/Peanut Butter.jpg'
  },
  {
    name: "Greek Yogurt",
    price: 3.19,
    description: "Rich and creamy Greek yogurt, packed with protein.",
    image: '../images/Greek_Yogurt.jpg'
  },
  {
    name: "Oats",
    price: 3.19,
    description: "Whole rolled oats, ideal for breakfast or baking.",
    image: '../images/Oats.jpg'
  },
  {
    name: "Avocados",
    price: 1.99,
    description: "Creamy avocados, perfect for toast, salads, or guacamole.",
    image: '../images/Avocado.jpg'
  },
];

// Function to load and display grocery items on the home page
function loadGroceries() {
  const groceriesContainer = document.getElementById('groceryContainer');
  groceriesContainer.classList.add('row', 'g-4');  // Adding row and gutter spacing for grid

  groceryItems.forEach((item, index) => {
    const groceryCard = document.createElement('div');
    groceryCard.classList.add('col-md-3', 'my-2');  // 4 items per row for medium devices and larger

    groceryCard.innerHTML = `
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" style="height: 18em;" alt="${item.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <h6>$${item.price}</h6>
            <button class="btn btn-primary mt-auto" onclick="addToCart(${index})">Add to Cart</button>
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

