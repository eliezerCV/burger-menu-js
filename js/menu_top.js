btnShowCart.addEventListener("click", showModalCart);

function getQuantity() {
    let quantity = getProductsQuantityInCart();
    if (quantity == 0) {
        cartQuantityElem.style.display = 'none';
    } else {
        cartQuantityElem.innerHTML = quantity; 
        cartQuantityElem.style.display = 'inline-block';
    } 
}

getQuantity();