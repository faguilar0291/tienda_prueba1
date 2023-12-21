let productsInCart = localStorage.getItem("products-in-cart");
productsInCart = JSON.parse(productsInCart);

const cartNumber = document.querySelector(".item--number");
const cartEmpty = document.querySelector(".container__cart--empty");
const productCart = document.querySelector(".products__cart");
const cartActions = document.querySelector(".products__actions");
const cartBuyed = document.querySelector(".container__cart--buy");
let deleteButtons = document.querySelectorAll(".product__cart--empty");

function loadProductsOnCart() {
    
    if (productsInCart && productsInCart.length > 0){
    
        cartEmpty.classList.add("disabled");
        productCart.classList.remove("disabled");
        cartActions.classList.remove("disabled");
        cartBuyed.classList.add("disabled");
    
        productCart.innerHTML = "";
    
        productsInCart.forEach(product => {

            const figure = document.createElement("figure");
            figure.classList.add("product__cart")
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


/* 
function refreshNumber() {
    let cartNumberAdd = productsInCart.reduce((acu, product) => acu + product.quantity, 0);
    cartNumber.innerText = cartNumberAdd;
}

let emptyButton = document.querySelector(".product__action--empty");
emptyButton.addEventListener("click", emptyCart);

function emptyCart() {
    console.log("Hola");
}
*/


//container__cart--empty
//products__cart
//products__actions
//container__cart--buy