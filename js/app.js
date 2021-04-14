var burgers = [
    {id: 1, name: "Classic", price: 3.15, url_image: "https://i.pinimg.com/originals/17/96/8e/17968e2f57220db9b679d07d2044f299.png", quantity: 1},
    {id: 2, name: "Cheese", price: 4.15, url_image: "https://i.pinimg.com/originals/17/96/8e/17968e2f57220db9b679d07d2044f299.png", quantity: 1},
    {id: 3, name: "Double Cheese", price: 5.15, url_image: "https://i.pinimg.com/originals/17/96/8e/17968e2f57220db9b679d07d2044f299.png", quantity: 1},
    {id: 4, name: "Emperator", price: 6.15, url_image: "https://i.pinimg.com/originals/17/96/8e/17968e2f57220db9b679d07d2044f299.png", quantity: 1}
];
var selectedBurger = {};
var showingModal = false;

var cartQuantityElem = document.querySelector("#cart_quantity");
var burgersListElem = document.querySelector("#list_burgers");
var maskElem = document.querySelector("#mask");
var modalAdd = document.querySelector("#modal_add");

function showMask() {
    showingModal = !showingModal;

    (showingModal) ? this.maskElem.style.display = "block" : this.maskElem.style.display = "none";
}

function showModalAdd(prodIndex) {
    selectedBurger = burgers[prodIndex];
    
    showMask();
    this.modalAdd.style.display = 'block';
}
function hideModalAdd() {
    showMask();
    this.modalAdd.style.display = 'none';
}