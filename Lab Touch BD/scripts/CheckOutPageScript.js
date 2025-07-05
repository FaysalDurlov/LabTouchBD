import {cartItems, RemoveByIdFromCart, findItemInCart, UpdateCartItemQuantity} from '../Data/cart.js';

// Calculate totals
function calculateTotals() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cartItems.length > 0 ? 9.99 : 0;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    return { subtotal, shipping, tax, total };
}

// Generate cart item HTML
function generateCartItemHTML(item) {
    return `
        <div class="cart-item">
            <div class="item-image">${item.image}</div>
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-price">BDT ${item.price.toFixed(2)} each</div>
                <div class="item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn js-UpdateQuantity-neg-Button" data-cart-item-id="${item.id}" ${item.quantity <= 1 ? 'disabled' : ''}>
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14"/>
                            </svg>
                        </button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                               onchange="updateQuantity(${item.id}, parseInt(this.value))" />
                        <button class="quantity-btn js-UpdateQuantity-pos-Button" data-cart-item-id="${item.id}">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                        </button>
                    </div>
                    <button class="remove-btn js_RemoveButton" data-cart-item-id="${item.id}">Remove</button>
                </div>
            </div>
            <div class="item-total">BDT ${(item.price * item.quantity).toFixed(2)}</div>
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
    document.getElementById('subtotal').textContent = `BDT ${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping > 0 ? `BDT ${shipping.toFixed(2)}` : 'Free';
    document.getElementById('tax').textContent = `BDT ${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `BDT ${total.toFixed(2)}`;

    // Enable/disable checkout button
    document.getElementById('checkoutBtn').disabled = cartItems.length === 0;


    // Adding Event listener to Each Remove Button
    document.querySelectorAll('.js_RemoveButton').forEach((EachRemoveButton)=>{
        EachRemoveButton.addEventListener('click',()=>{
            const cartItemId =  parseInt(EachRemoveButton.dataset.cartItemId);
            RemoveByIdFromCart(cartItemId); // Removing a cart item by Using its ID
            renderCart();
        });
    });
    
    // Adding Even Listener to all the - sign Button to Update Cart
    document.querySelectorAll('.js-UpdateQuantity-neg-Button').forEach((EachUpdateNegButton)=>{
        EachUpdateNegButton.addEventListener('click',()=>{
            const cartItemId = parseInt(EachUpdateNegButton.dataset.cartItemId);
            const matchedItemInCart = findItemInCart(cartItemId);
            const prevQuantity = matchedItemInCart.quantity;
            UpdateCartItemQuantity(cartItemId,prevQuantity-1);
            renderCart();
        });
    });

    // Adding Even Listener to all the + sign Button to Update Cart
    document.querySelectorAll('.js-UpdateQuantity-pos-Button').forEach((EachUpdatePosButton)=>{
        EachUpdatePosButton.addEventListener('click',()=>{
            const cartItemId = parseInt(EachUpdatePosButton.dataset.cartItemId);
            const matchedItemInCart = findItemInCart(cartItemId);
            const prevQuantity = matchedItemInCart.quantity;
            UpdateCartItemQuantity(cartItemId,prevQuantity+1);
            renderCart();
        });
    });
};

// Proceed to checkout
function proceedToCheckout() {
    if (cartItems.length === 0) return;
    
    const { total } = calculateTotals();
    alert(`Proceeding to checkout with total: BDT ${total.toFixed(2)}`);
    // In a real app, this would redirect to checkout page
}
renderCart();