let form = document.querySelector("form");
let input = document.querySelector("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valor = input.value;
    let longitud = valor.length;

    console.log(valor);
    console.log(longitud);

    if (longitud < 3){
        console.log("menor a 3");
    }
});