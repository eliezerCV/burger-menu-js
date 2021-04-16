btnShowCart.addEventListener("click", showModalCart);

function getQuantity() {
    let quantity = getProductsQuantityInCart();
    if (quantity == 0) {
        cartQuantityElem.style.display = 'none';
    } else {
        cartQuantityElem.style.display = 'inline-block';
        cartQuantityElem.classList.add("item-added");
        cartQuantityElem.innerHTML = quantity; 
        setTimeout(() => {
            cartQuantityElem.classList.remove("item-added");
        }, 1000);
    } 
}

getQuantity();