import {products} from "../Data/products.js";

let cartCount = 0;
let filteredProducts = [...products];

// Generate star rating HTML
function generateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHTML += `<svg class="star" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>`;
        } else {
            starsHTML += `<svg class="star empty" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>`;
        }
    }
    return starsHTML;
}

// Generate product card HTML
function generateProductCard(product) {
    const badgeClass = product.badge ? 
        (product.badge === 'Sale' ? 'badge-sale' : 
         product.badge === 'New' ? 'badge-new' : 'badge-popular') : '';
    
    return `
        <div class="product-card">
            <div class="product-image-container">
                <div class="product-image">Product Image</div>
                ${product.badge ? `<div class="product-badge ${badgeClass}">${product.badge}</div>` : ''}
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="reviews-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">BDT ${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">BDT ${product.originalPrice}</span>` : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="8" cy="21" r="1"></circle>
                        <circle cx="19" cy="21" r="1"></circle>
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Render products
function renderProducts(productsToRender = filteredProducts) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = productsToRender.map(product => generateProductCard(product)).join('');
}

// Search functionality
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts();
}

// Add to cart functionality
function addToCart(productId) {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    
    // Find product name for notification
    const product = products.find(p => p.id === productId);
    alert(`${product.name} added to cart!`);
}

// Toggle wishlist
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} added to wishlist!`);
}

// Load more products (placeholder)
function loadMoreProducts() {
    alert('Loading more products...');
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', searchProducts);

// Initial render
renderProducts();