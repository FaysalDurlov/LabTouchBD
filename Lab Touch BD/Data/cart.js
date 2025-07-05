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
        saveCartToStorage();
    }
}
loadCartFromStorage();

// Save cart to localStorage
export function saveCartToStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
}


// Remove a Item from Cart By Id
export function RemoveByIdFromCart(itemId){
    const tempCart = []
    cartItems.forEach((eachItem)=>{
        if(eachItem.id !== itemId ){
            tempCart.push(eachItem)
        }
    });
    cartItems = tempCart;
    saveCartToStorage();
};

// Update Quantity of the items in the Cart
export function UpdateCartItemQuantity(ItemId, newQuantity){
    cartItems.forEach((EachCartItem)=>{
        if(EachCartItem.id === ItemId){
            EachCartItem.quantity = newQuantity
        };
    });
    saveCartToStorage();
};

// Search an Item In the cart and returns
export function findItemInCart(itemId){
    let matchedItem;
    cartItems.forEach((eachItem)=>{
        if(eachItem.id === itemId){
            matchedItem = eachItem;
        }
    });
    return matchedItem;
};