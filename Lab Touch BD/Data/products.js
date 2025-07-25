export const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.5,
        reviews: 128,
        badge: "Sale",
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 199.99,
        rating: 4.8,
        reviews: 89,
        badge: "New",
    },
    {
        id: 3,
        name: "Portable Phone Charger",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.3,
        reviews: 256,
        badge: "Sale",
    },
    {
        id: 4,
        name: "Wireless Gaming Mouse",
        price: 59.99,
        rating: 4.6,
        reviews: 174,
    },
    {
        id: 5,
        name: "USB-C Hub Adapter",
        price: 49.99,
        rating: 4.4,
        reviews: 92,
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.7,
        reviews: 203,
        badge: "Sale",
    },
    {
        id: 7,
        name: "Laptop Stand",
        price: 39.99,
        rating: 4.2,
        reviews: 67,
    },
    {
        id: 8,
        name: "Wireless Keyboard",
        price: 69.99,
        rating: 4.5,
        reviews: 145,
        badge: "Popular",
    },
    {
        id: 9,
        name: "Phone Camera Lens Kit",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.1,
        reviews: 78,
        badge: "Sale",
    },
    {
        id: 10,
        name: "Smart Home Hub",
        price: 129.99,
        rating: 4.6,
        reviews: 156,
        badge: "New",
    },
    {
        id: 11,
        name: "Wireless Earbuds",
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.8,
        reviews: 312,
        badge: "Sale",
    },
    {
        id: 12,
        name: "Tablet Stand",
        price: 19.99,
        rating: 4.0,
        reviews: 45,
    },
];

export function getProductById(productId){
    let matchedProduct;
    products.forEach((eachProduct)=>{
        if(eachProduct.id === productId){
            matchedProduct = eachProduct
        };
    });
    return matchedProduct;
}