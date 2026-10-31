
const products = [
    { name: "Молоко", price: 450, image: "images/milk.jpg" },
    { name: "Хлеб", price: 180, image: "images/bread.jpg" },
    { name: "Яйца", price: 650, image: "images/eggs.jpg" },
    { name: "Сок", price: 500, image: "images/juice.jpg" }
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
