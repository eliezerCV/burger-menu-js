btnCloseModalAdd.addEventListener("click", hideModalAdd);
btnAddQuantityModalAdd.addEventListener("click", onAddQuantity);
btnSubQuantityModalAdd.addEventListener("click", onSubQuantity);
btnAddToCart.addEventListener("click", addProduct);
btnBuyProd.addEventListener("click", onBuy);

function onAddQuantity() {
    selectedBurger.quantity++;
    updateUI();
}

function onSubQuantity() {
    if (selectedBurger.quantity <= 1) return;

    selectedBurger.quantity--;
    updateUI();
}

function initUI() {
    burgerNameElem.innerHTML = selectedBurger.name;
    quantityModalAddElem.value = selectedBurger.quantity;
    burgerPriceTotalModalAdd.innerHTML = selectedBurger.price;
}

function updateUI() {
    quantityModalAddElem.value = selectedBurger.quantity;
    burgerPriceTotalModalAdd.innerHTML = "$" + (selectedBurger.quantity * selectedBurger.price).toFixed(2);
}

function onBuy() {
    hideModalAdd();
    deleteAllFromCart();
    showModalSuccess();
}