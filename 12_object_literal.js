// ambil element
const cart_items = document.getElementById('cart');

// es6
function addProduct(name, category) {
    return {
        name,
        category,
    }
}

let getProduct = addProduct("Xiaomi 8", "Gadget");
cart_items.innerText = `Product : ${getProduct.name}, Category : ${getProduct.category}`;