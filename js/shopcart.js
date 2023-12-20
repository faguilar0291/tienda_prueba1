const productsInCart = JSON.parse(localStorage.getItem("products-in-cart"));

const cartEmpty = document.querySelector(".container__cart--empty");
const productCart = document.querySelector(".products__cart");
const cartActions = document.querySelector(".products__actions");
const cartBuyed = document.querySelector(".container__cart--buy");

if (productsInCart){

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
                <p>Producto 01</p>
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
            <button class="product__cart--empty ${product.id}"><i class="bi bi-trash3-fill"></i></button>
        
        `;

        productCart.append(figure);

    })

} else {

}

//container__cart--empty
//products__cart
//products__actions
//container__cart--buy