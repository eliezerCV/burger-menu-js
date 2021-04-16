var cartOrders = [];
var totalCart = 0;

btnCloseCart.addEventListener("click", hideModalCart);
btnDeleteAllFromCart.addEventListener("click", deleteAll);
btnSaveOrder.addEventListener("click", onSaveOrder);

function onSaveOrder() {
    deleteAllFromCart();
    showModalSuccess();    
}

function deleteAll() {
    deleteAllFromCart();
    renderOrders();
}

function onSubQuantityCart(index) {
    if (cartOrders[index].quantity <= -1) return;

    cartOrders[index].quantity--;
    editOrders(cartOrders[index], index);
    renderOrders();
}

function onAddQuantityCart(index) {
    cartOrders[index].quantity++;
    editOrders(cartOrders[index], index);
    renderOrders();
}

function onRemove(index) {
    deleteOrder(index);
    renderOrders();
}

function renderOrders() {
    cartOrders = getOrders();
    orderListCart.innerHTML = '';
    if (!cartOrders || cartOrders.lenght <= 0) {
        no_items_cart.style.display = 'block';
        totalCart = 0;
        totalCartElem.innerHTML = "$" + totalCart.toFixed(2);
        btnDeleteAllFromCart.style.display = "none";
        totalOrdersElem.style.display = 'none';
        return;
    }
    no_items_cart.style.display = 'none';
    totalOrdersElem.style.display = 'block';
    btnDeleteAllFromCart.style.display = "block";
    cartOrders.forEach((order, i) => {
        let total = (order.price*order.quantity).toFixed(2);
        orderListCart.innerHTML += `
            <div class="order">
                <div class="order-header">
                    <img src="${order.url_image}" />
                    <i title="Elimina sólo este artículo del carrito" onClick="onRemove(${i})" class="fas fa-trash-alt"></i>
                </div>
                <div class="order-info">    
                    <span>${order.name}</span>
                </div>
                <div class="order-form">
                    <i class="fas fa-minus-circle"  onClick="onSubQuantityCart(${i})"></i>
                    <input type="number" value="${order.quantity}">
                    <i class="fas fa-plus-circle" onClick="onAddQuantityCart(${i})"></i>
                </div>
                <div class="order-total">
                    <span>${total}</span>
                </div>
            </div>
        `;
    })
    calculateTotal();
}

function calculateTotal() {
    totalCart = 0;
    cartOrders.forEach(order => {
        let total = (order.price*order.quantity).toFixed(2);
        totalCart += parseFloat(total);
    });
    totalCartElem.innerHTML = "$" + totalCart.toFixed(2);
}

renderOrders();