
const products = [
    {
        name: "Молоко",
        price: 450,
        category: "Молочные",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400"
    },
    {
        name: "Хлеб",
        price: 180,
        category: "Хлеб",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
    },
    {
        name: "Яйца",
        price: 650,
        category: "Другое",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400"
    },
    {
        name: "Сок",
        price: 500,
        category: "Напитки",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400"
    },
    {
        name: "Сыр",
        price: 1200,
        category: "Молочные",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400"
    },
    {
        name: "Батон",
        price: 200,
        category: "Хлеб",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400"
    },
    {
        name: "Вода",
        price: 250,
        category: "Напитки",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400"
    },
    {
        name: "Масло",
        price: 850,
        category: "Молочные",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400"
    }
];

let cart = [];
let selectedCategory = "Все";

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search");

function displayProducts() {
    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchText);
        const matchesCategory =
            selectedCategory === "Все" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    productsContainer.innerHTML = "";

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = "<p>Товары не найдены.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const index = products.indexOf(product);

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
}

function filterCategory(category) {
    selectedCategory = category;

    document.querySelectorAll(".categories button").forEach(button => {
        button.classList.toggle(
            "active",
            button.textContent.trim() === category
        );
    });

    displayProducts();
}

function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById("cart-total").textContent = total + " ₸";
}

searchInput.addEventListener("input", displayProducts);

displayProducts();
