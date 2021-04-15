document.addEventListener('DOMContentLoaded', () => {
    
    btnCloseModalAdd.addEventListener("click", hideModalAdd);
    btnAddQuantityModalAdd.addEventListener("click", onAddQuantity);
    btnSubQuantityModalAdd.addEventListener("click", onSubQuantity);
    btnAddToCart.addEventListener("click", addProduct);
    btnBuyProd.addEventListener("click", addProduct);

    function onAddQuantity() {
        selectedBurger.quantity++;
        updateUI();
    }
    
    function onSubQuantity() {
        if (selectedBurger.quantity <= 1) return;

        selectedBurger.quantity--;
        updateUI();
    }

    function updateUI() {
        quantityModalAddElem.value = selectedBurger.quantity;
        burgerPriceTotalModalAdd.innerHTML = "$" + (selectedBurger.quantity * selectedBurger.price).toFixed(2);
    }

    function onAddToCart() {
        addProduct();
    }

    function onBuy() {

    }
})