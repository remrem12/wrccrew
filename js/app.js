function displayCard(container, title, subtitle, image) {
    container.innerHTML += `
        <div class="card">
            <img src="${image}" alt="${title}">
            <div class="card-content">
                <h3>${title}</h3>
                <p>${subtitle}</p>
            </div>
        </div>
    `;
}

// Shops
function loadShops() {
    const container = document.getElementById("shopList");
    if (!container) return;
    container.innerHTML = "";
    shops.forEach(shop => {
        displayCard(container, shop.name, "District: " + shop.district, shop.image);
    });
}

function filterShops() {
    const district = document.getElementById("districtFilter").value;
    const container = document.getElementById("shopList");
    container.innerHTML = "";

    const filtered = district === "all"
        ? shops
        : shops.filter(s => s.district === district);

    filtered.forEach(shop => {
        displayCard(container, shop.name, "District: " + shop.district, shop.image);
    });
}

function searchShops() {
    const keyword = document.getElementById("searchShop").value.toLowerCase();
    const container = document.getElementById("shopList");
    container.innerHTML = "";

    const result = shops.filter(s =>
        s.name.toLowerCase().includes(keyword)
    );

    result.forEach(shop => {
        displayCard(container, shop.name, "District: " + shop.district, shop.image);
    });
}

// Beans
function loadBeans() {
    const container = document.getElementById("beanList");
    if (!container) return;
    beans.forEach(bean => {
        displayCard(container, bean.name, "Origin: " + bean.origin, bean.image);
    });
}

// Brewing
function loadBrewing() {
    const container = document.getElementById("brewList");
    if (!container) return;
    brewing.forEach(b => {
        displayCard(container, b.method, b.description, b.image);
    });
}

// Types
function loadTypes() {
    const container = document.getElementById("typeList");
    if (!container) return;
    types.forEach(t => {
        displayCard(container, t.name, t.description, t.image);
    });
}

window.onload = function() {
    loadShops();
    loadBeans();
    loadBrewing();
    loadTypes();
};

// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Active Page Highlight
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll(".nav-item").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});