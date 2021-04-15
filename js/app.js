var burgers = [
    {id: 1, name: "Classic", price: 3.15, url_image: "https://i.pinimg.com/originals/17/96/8e/17968e2f57220db9b679d07d2044f299.png", quantity: 1},
    {id: 2, name: "Cheese", price: 4.15, url_image: "https://i.pinimg.com/originals/17/96/8e/17968e2f57220db9b679d07d2044f299.png", quantity: 1},
    {id: 3, name: "Double Cheese", price: 5.15, url_image: "https://i.pinimg.com/originals/17/96/8e/17968e2f57220db9b679d07d2044f299.png", quantity: 1},
    {id: 4, name: "Emperator", price: 6.15, url_image: "https://i.pinimg.com/originals/17/96/8e/17968e2f57220db9b679d07d2044f299.png", quantity: 1}
];
var selectedBurger = {};
var showingModal = false;


var btnCloseModalAdd = document.querySelector("#close_modal_add");
var btnSubQuantityModalAdd = document.querySelector("#sub_quantity_modal_add");
var btnAddQuantityModalAdd = document.querySelector("#add_quantity_modal_add");
var btnBuyProd = document.querySelector("#btn_buy_prod");
var btnAddToCart = document.querySelector("#btn_add_cart");
var btnShowCart = document.querySelector("#cart_logo");
var btnDeleteAllFromCart = document.querySelector("#delete_all_cart");
var btnCloseCart = document.querySelector("#btn_close_cart");

var totalCartElem = document.querySelector("#total_cart");
var noItemsInCartElem = document.querySelector("#no_items_cart");
var orderListCart = document.querySelector("#list_orders_modal_cart");
var cartQuantityElem = document.querySelector("#cart_quantity");
var burgersListElem = document.querySelector("#list_burgers");
var maskElem = document.querySelector("#mask");
var quantityModalAddElem = document.querySelector("#quantity_modal_add");
var burgerPriceTotalModalAdd = document.querySelector("#burger_price_total");
var modalAdd = document.querySelector("#modal_add");
var modalCart = document.querySelector("#modal_cart");

maskElem.addEventListener("click", closeModals);

function closeModals() {
    hideModalAdd();
    hideModalCart();
    showMask();
}

function showMask() {
    showingModal = !showingModal;

    (showingModal) ? maskElem.style.display = "block" : maskElem.style.display = "none";
}

function showModalAdd(prodIndex) {
    selectedBurger = burgers[prodIndex];

    showMask();
    modalAdd.style.display = 'block';
}
function hideModalAdd() {
    selectedBurger = {};
    showMask();
    modalAdd.style.display = 'none';
}

function showModalCart() {
    showMask();
    modalCart.style.left = "20%";
    renderOrders();
}

function hideModalCart() {
    showMask();
    showingCart = false;
    modalCart.style.left = "120%";
}

/**SERVICE TO HAND THE LOCALSTORAGE */
function getOrders() {
    let currentOrders = JSON.parse(localStorage.getItem('orders'));
    return currentOrders;
}

function addProduct() {
    let currentOrders = JSON.parse(localStorage.getItem('orders'));
    let newOrders = [];

    if (currentOrders) {
        let repeated = currentOrders.findIndex((burger) => burger.id == selectedBurger.id);

        if (repeated > -1) { currentOrders[repeated].quantity += selectedBurger.quantity; }
        else newOrders.push(selectedBurger);

        currentOrders.forEach(order => newOrders.push(order))
    } else newOrders.push(selectedBurger)

    localStorage.setItem('orders', JSON.stringify(newOrders));
    selectedBurger = {}
    getQuantity();
    hideModalAdd();
}

function editOrders(order, index) {
    let currentOrders = JSON.parse(localStorage.getItem('orders'));
    currentOrders[index] = order;
    localStorage.setItem('orders', JSON.stringify(currentOrders));
}

function deleteAllFromCart() { 
    localStorage.clear(); 
    hideModalCart()
}

function deleteOrder(index) {
    let currentOrders = JSON.parse(localStorage.getItem('orders'));
    currentOrders.splice(index, 1);
    if (currentOrders.lenght == 0) {
        localStorage.clear();
        return;
    }
    localStorage.setItem('orders', JSON.stringify(currentOrders));
}

function getProductsQuantityInCart() {
    let currentOrders = JSON.parse(localStorage.getItem('orders'));
    return currentOrders ? currentOrders.length : 0;
}

















