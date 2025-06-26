import {cartItems} from '../Data/cart.js';

// Calculate totals
function calculateTotals() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cartItems.length > 0 ? 9.99 : 0;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    return { subtotal, shipping, tax, total };
}

// Update quantity
function updateQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        removeItem(itemId);
        return;
    }

    const item = cartItems.find(item => item.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        renderCart();
    }
}

// Remove item from cart
function removeItem(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    renderCart();
}

// Generate cart item HTML
function generateCartItemHTML(item) {
    return `
        <div class="cart-item">
            <div class="item-image">${item.image}</div>
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-price">$${item.price.toFixed(2)} each</div>
                <div class="item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14"/>
                            </svg>
                        </button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                               onchange="updateQuantity(${item.id}, parseInt(this.value))" />
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                        </button>
                    </div>
                    <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
                </div>
            </div>
            <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `;
}

// Render cart
function renderCart() {
    const cartItemsList = document.getElementById('cartItemsList');
    const emptyCart = document.getElementById('emptyCart');
    const cartContainer = document.querySelector('.cart-container');

    if (cartItems.length === 0) {
        cartContainer.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }

    cartContainer.style.display = 'grid';
    emptyCart.style.display = 'none';

    // Render items
    cartItemsList.innerHTML = cartItems.map(item => generateCartItemHTML(item)).join('');

    // Update item count
    document.getElementById('itemCount').textContent = `${cartItems.length} item${cartItems.length !== 1 ? 's' : ''}`;

    // Update totals
    const { subtotal, shipping, tax, total } = calculateTotals();
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free';
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;

    // Enable/disable checkout button
    document.getElementById('checkoutBtn').disabled = cartItems.length === 0;
}

// Proceed to checkout
function proceedToCheckout() {
    if (cartItems.length === 0) return;
    
    const { total } = calculateTotals();
    alert(`Proceeding to checkout with total: $${total.toFixed(2)}`);
    // In a real app, this would redirect to checkout page
}

// Load cart from localStorage (if available)
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
}

// Override update and remove functions to save to storage
const originalUpdateQuantity = updateQuantity;
const originalRemoveItem = removeItem;

updateQuantity = function(itemId, newQuantity) {
    originalUpdateQuantity(itemId, newQuantity);
    saveCartToStorage();
};

removeItem = function(itemId) {
    originalRemoveItem(itemId);
    saveCartToStorage();
};
// Initialize cart
loadCartFromStorage();
renderCart();