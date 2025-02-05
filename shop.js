const product = [
    {
        rasm: "./images/cavrik.png",
        nomi: "Mars rug",
        narxi:100,
        mavjud:12,
    },
    {
        rasm: "./images/kliviatura.png",
        nomi: "Keyboard sticker",
        narxi:49,
        mavjud:11,
    },
    {
        rasm: "./images/sota.png",
        nomi: "Smart watch",
        narxi:899,
        mavjud:7,
    },
    {
        rasm: "./images/image 26.png",
        nomi: "AirPods",
        narxi:499,
        mavjud:20,
    },
    {
        rasm: "images/image 25.png",
        nomi: "Mouse",
        narxi:359,
        mavjud:4,
    },
    {
        rasm: "./images/image 24.png",
        nomi: "Wireless keyboard",
        narxi:350,
        mavjud:0,
    },
    {
        rasm: "./images/image 28.png",
        nomi: "USB flash drive",
        narxi:299,
        mavjud:21,
    },
    {
        rasm: "./images/image 29.png",
        nomi: "Smartphone",
        narxi:3699,
        mavjud:2,
    },
    {
        rasm: "./images/image 30.png",
        nomi: "Playstation 5",
        narxi:7449,
        mavjud:12,
    },
    {
        rasm: "./images/image 31.png",
        nomi: "Yandex Station",
        narxi:1999,
        mavjud:4,
    },
    {
        rasm: "./images/image 32.png",
        nomi: "Planshet Samsung",
        narxi:4999,
        mavjud:24,
    },

    
]

const box = document.querySelector(".product__list");
const searchProduct = document.querySelector("#product__input");
const searchForm = document.querySelector("#product__form");

function renderProduct (mahsulot){
    box.innerHTML = "";
    mahsulot.map(objectlar => {
        const newItem = document.createElement("li");

        newItem.className = "item"
        newItem.innerHTML = `<img src="${objectlar.rasm}" 
        <h2>${objectlar.nomi}</h2>
        <p>Coin: ${objectlar.narxi}</p>
        <p>Mavjud: ${objectlar.mavjud} dona</p>
        <button>Buyurtma qilish</button>
        `

        box.appendChild(newItem)

    })
}

renderProduct(product)

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchValue = searchProduct.value.toLowerCase();
    const filteredProducts = product.filter(mahsulot => mahsulot.nomi.toLowerCase().includes(searchValue));
    
    if (filteredProducts.length > 0) {
        renderProduct(filteredProducts);
    } else {
        box.innerHTML = "<p>Ma'lumot topilmadi</p>"
    }
    
    searchProduct.value = "";
 
}); 
