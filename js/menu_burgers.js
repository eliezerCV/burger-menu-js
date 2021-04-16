function onAddProdToCart(index) {    
    showModalAdd(index);
}

function loadProducts() {
    burgers.forEach((prod, i) => {
        burgersListElem.innerHTML += `
        <div class="burger">
            <div class="burger-img">
                <img src="${prod.url_image}" />
            </div>
            <div class="burger-info">
                <h3>${prod.name}</h3>
                <span>${prod.price}</span>
            </div>
            <div class="actions">
                <i onClick="onAddProdToCart(${i})" class="fas fa-cart-plus"></i>
            </div>
        </div>`;
    });
}

loadProducts();