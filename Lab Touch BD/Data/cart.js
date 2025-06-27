export let cartItems;


// Load cart from localStorage (if available)
export function loadCartFromStorage() {
    cartItems = JSON.parse(localStorage.getItem('shoppingCart'));
    if (!cartItems){
        cartItems = [
            {
                id: 1,
                name: "Wireless Bluetooth Headphones",
                price: 79.99,
                quantity: 2,
                image: "Product Image"
            },
            {
                id: 3,
                name: "Portable Phone Charger",
                price: 29.99,
                quantity: 1,
                image: "Product Image"
            },
            {
                id: 8,
                name: "Wireless Keyboard",
                price: 69.99,
                quantity: 1,
                image: "Product Image"
            }
        ];
}
}
loadCartFromStorage();

// Save cart to localStorage
export function saveCartToStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
}

// Remove item from cart
export function removeItem(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    renderCart();
}
    