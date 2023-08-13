const $ = selector => document.querySelector(selector);

$btnFilterBurgers = $("#btn_filter_burgers");
$btnFilterDrinks = $("#btn_filter_drinks");
$btnFilterExtras = $("#btn_filter_extras");

$btnFilterBurgers.addEventListener("click", function()  { selectFilter(this); });
$btnFilterDrinks.addEventListener("click", function()  { selectFilter(this); });
$btnFilterExtras.addEventListener("click", function()  { selectFilter(this); });

// add .active class to the selected filter
function selectFilter(element) {
    const active = 'active-selector';
    $btnFilterBurgers.classList.remove(active);
    $btnFilterDrinks.classList.remove(active);
    $btnFilterExtras.classList.remove(active);
    element.classList.add(active);
}


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
                <span>$${prod.price}</span>
            </div>
            <div class="actions">
                <i onClick="onAddProdToCart(${i})" class="fas fa-cart-plus"></i>
            </div>
        </div>`;
    });
}

loadProducts();