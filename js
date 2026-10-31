const products = [
    {
        name: "Молоко",
        price: 450,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400"
    },
    {
        name: "Хлеб",
        price: 180,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
    },
    {
        name: "Яйца",
        price: 650,
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400"
    },
    {
        name: "Сок",
        price: 500,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400"
    }
];

let cart = [];

const productsContainer = document.getElementById("products");

products.forEach((product, index) => {
    productsContainer.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} ₸</p>
            <button onclick="addToCart(${index})">
                Добавить в корзину
            </button>
        </div>
    `;
});

function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById("cart-total").textContent = total + " ₸";
}
