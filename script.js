/*
 * script.js
 * Inventory Management and Product Display for Handbag Storefront
 */

// State management
let inventory = [];

// DOM Elements
const productGrid = document.getElementById('inventory-grid');

// Initialize
function init() {
  // Fetch inventory from JSON file
  fetch('inventory.json')
    .then(response => response.json())
    .then(data => {
      inventory = data;
      renderProducts();
    })
    .catch(error => {
      console.error('Error loading inventory:', error);
      productGrid.innerHTML = '<p>Error loading inventory. Please try again later.</p>';
    });
}

// Render products to the grid
function renderProducts() {
  productGrid.innerHTML = '';
  
  inventory.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-title">${item.name}</h3>
        <p class="product-price">$${item.price}</p>
        <p class="product-status">${item.status}</p>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
