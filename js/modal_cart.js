document.addEventListener("DOMContentLoaded", () => {
    

    function renderOrders() {
        let orders = getOrders();
        orders.forEach((order, i) => {
            let total = (order.price*order.quantity).toFixed(2);
            orderListCart.innerHTML += `
                <div class="order">
                    <div class="order-header">
                        <img src="${order.url_image}" />
                        <i title="Elimina sólo este artículo del carrito" class="fas fa-trash-alt"></i>
                    </div>
                    <div class="order-info">    
                        <span>${order.name}</span>
                    </div>
                    <div class="order-form">
                        <i class="fas fa-minus-circle"  onClick="onSubQuantity(${i})"></i>
                        <input type="number" value="${order.quantity}">
                        <i class="fas fa-plus-circle" onClick="onAddQuantity(${i})"></i>
                    </div>
                    <div class="order-total">
                        <span>${total}</span>
                    </div>
                </div>
            `;
        })


    }

    renderOrders();
})