var showingCart = false;

btnShowCart.addEventListener("click", onToggleCart);

function onToggleCart() {
    showingCart = !showingCart;
    if (showingCart) showModalCart();
    else hideModalCart();
}
function getQuantity() {
    let quantity = getProductsQuantityInCart();
    console.log(quantity);
    if (quantity == 0) {
        cartQuantityElem.style.display = 'none';
    } else {
        cartQuantityElem.innerHTML = quantity; 
        cartQuantityElem.style.display = 'inline-block';
    } 
}

getQuantity();