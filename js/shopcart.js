let productsInCart = localStorage.getItem("products-in-cart");
productsInCart = JSON.parse(productsInCart);


const cartNumber = document.querySelector(".item--number");
const cartEmpty = document.querySelector(".container__cart--empty");
const productCart = document.querySelector(".products__cart");
const cartActions = document.querySelector(".products__actions");
const cartBuyed = document.querySelector(".container__cart--buy");
let deleteButtons = document.querySelectorAll(".product__cart--empty");
const emptyButton = document.querySelector(".product__actions--empty");
const buyCartTotal = document.querySelector(".product__actions--buy");
const cartTotal = document.querySelector("#total");
const modalContainer = document.querySelector(".modal__container");
const modal = document.querySelector(".modal");

function loadProductsOnCart() {

    
    if (productsInCart && productsInCart.length > 0){
    
        cartEmpty.classList.add("disabled");
        productCart.classList.remove("disabled");
        cartActions.classList.remove("disabled");
        cartBuyed.classList.add("disabled");
    
        productCart.innerHTML = "";
    
        productsInCart.forEach(product => {

            const figure = document.createElement("figure");
            figure.classList.add("product__cart");
            figure.innerHTML = `
                <img class="product__cart--image" src="${product.img}" alt="${product.title}">
                <div class="product__cart--title">
                    <p>Producto</p>
                    <h3>${product.title}</h3>
                </div>
                <div class="product__cart--quantity">
                    <p>Cantidad</p>
                    <h3>${product.quantity}</h3>
                </div>
                <div class="product__cart--price">
                    <p>Precio</p>
                    <h3>$${product.price}</h3>
                </div>
                <div class="product__cart--subtotal">
                    <p>Subtotal</p>
                    <h3>$${product.price * product.quantity}</h3>
                </div>
                <button class="product__cart--empty" id="${product.id}"><i class="bi bi-trash3-fill"></i></button>

            `;

            productCart.append(figure);

        })
    
    } else {
    
        cartEmpty.classList.remove("disabled");
        productCart.classList.add("disabled");
        cartActions.classList.add("disabled");
        cartBuyed.classList.add("disabled");
    
    }

    refreshDeleteButtons();
    refreshTotal();
    refreshNumber();
}

loadProductsOnCart();

function refreshDeleteButtons() {
    deleteButtons = document.querySelectorAll(".product__cart--empty");

    deleteButtons.forEach( button => {
        button.addEventListener("click", deleteFromCart);
    });
}

function deleteFromCart(e) {
    const idButton = e.currentTarget.id;
    const index = productsInCart.findIndex(product => product.id === idButton);

    productsInCart.splice(index, 1);
    loadProductsOnCart();

    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
}

emptyButton.addEventListener("click", emptyCart);

function emptyCart() {

    productsInCart.length = 0;
    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
    loadProductsOnCart();
}


function refreshTotal() {
    const calculatedTotal = productsInCart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    cartTotal.innerText = `$${calculatedTotal}`;
}

buyCartTotal.addEventListener("click", buyCart);

function buyCart() {

    productsInCart.length = 0;
    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
    
    cartEmpty.classList.add("disabled");
    productCart.classList.add("disabled");
    cartActions.classList.add("disabled");
    cartBuyed.classList.remove("disabled");

    createModal();
}

function refreshNumber() {
    let cartNumberAdd = productsInCart.reduce((acu, product) => acu + product.quantity, 0);
    cartNumber.innerText = cartNumberAdd;
}



/* MODAL */


function createModal() {
    modalContainer.classList.add("modal__container--visible");

    const divModal = document.createElement("div");
    divModal.classList.add("modal__div");
    divModal.innerHTML = `
            <h3>Introduce los datos para el envío a domicilio:</h3>
            <form id="contactForm" class ="formChart" onsubmit="validateForm(event)">
                <label for="firstName">Calle:</label>
                <input type="text" id="firstName" name="firstName" required>
                <span id="firstNameError" class="error"></span>

                <br>

                <label for="lastName">Departamento:</label>
                <input type="text" id="lastName" name="lastName" required>
                <span id="lastNameError" class="error"></span>

                <br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <span id="emailError" class="error"></span>

                <br>

                <label for="cellPhone">Celular:</label>
                <input type="tel" id="cellPhone" name="cellPhone" required>
                <span id="cellPhoneError" class="error"></span>

                <br>

                <input type="submit" value="Enviar Pedido">
            </form>
            `;
    modal.append(divModal);


}


/*
productsInCart.forEach(product => {

    const figure = document.createElement("figure");
    figure.classList.add("product__modal")
    figure.innerHTML = `
                <img class="product__modal--image" src="${product.img}" alt="${product.title}">
                <div class="product__modal--title">
                    <p>Producto</p>
                    <h3>${product.title}</h3>
                </div>
                <div class="product__modal--quantity">
                    <p>Cantidad</p>
                    <h3>${product.quantity}</h3>
                </div>
                <div class="product__modal--price">
                    <p>Precio</p>
                    <h3>$${product.price}</h3>
                </div>
                <div class="product__modal--subtotal">
                    <p>Subtotal</p>
                    <h3>$${product.price * product.quantity}</h3>
                </div>
                <button class="product__modal--empty" id="${product.id}"><i class="bi bi-trash3-fill"></i></button>

            `;

    modal.append(figure);

})

*/