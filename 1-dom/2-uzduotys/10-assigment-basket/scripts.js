function countFinalPrice(price, quantity) {
    return price * quantity;
}

function countFinalOrderPrice(items) {
    let sum = 0;
    items.forEach(item => {
        sum += item.finalPrice;
    });
    return sum;
}

const initialProducts = [
    {
        id: 'sim-card',
        name: 'Sim kortele',
        price: 2.0,
        quantity: 1,
        imgURL: 'images/sim.svg'
    },
    {
        id: 'phone',
        name: 'Telefonas',
        price: 1200.0,
        quantity: 1,
        imgURL: 'images/phone.svg'
    },
    {
        id: 'sd-card',
        name: 'SD kortele',
        price: 35.0,
        quantity: 1,
        imgURL: 'images/sdcard.svg'
    }
];

let products = JSON.parse(JSON.stringify(initialProducts));

const finalOrderPriceElement = document.querySelector('.basket-price .price');
const productListElement = document.querySelector('.product-list');
const refreshButton = document.querySelector('.refresh-button');
const addProductButton = document.querySelector('.add-product-button');

products = products.map(product => ({
    ...product,
    finalPrice: countFinalPrice(product.price, product.quantity)
}));

function generateProductsHTML(arr) {
    let finalHTML = '';
    arr.forEach(product => {
        finalHTML += `
      <div class="row ${product.id}" style="margin-bottom:10px;">
        <div class="col-6 d-flex align-items-center">
          <img 
            src="${product.imgURL}" 
            alt="${product.name}" 
            style="width:80px; height:auto; margin-right:5px;" 
          />
          <span>${product.name}</span>
        </div>
        <div class="col-2">${product.price.toFixed(2)} eur</div>
        <div class="col-2">
          <p>
            <button class="remove-button" data-id="${product.id}">-</button>
            <span class="quantity">${product.quantity}</span>
            <button class="add-button" data-id="${product.id}">+</button>
          </p>
        </div>
        <div class="col-2">
          <p>
            <span>${product.finalPrice.toFixed(2)}</span> eur
          </p>
          <button class="delete-item" data-id="${product.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 
               0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5
               0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 
               0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 
               0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 
               0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 
               0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1 
               1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 
               4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059
               L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </button>
        </div>
      </div>
      <hr class="basic-line">
    `;
    });
    return finalHTML;
}

function renderAll() {
    productListElement.innerHTML = generateProductsHTML(products);
    finalOrderPriceElement.textContent = countFinalOrderPrice(products).toFixed(2) + ' eur';
}

function updateProductFinalPrice(prod) {
    prod.finalPrice = countFinalPrice(prod.price, prod.quantity);
}

document.addEventListener('DOMContentLoaded', () => {
    renderAll();

    productListElement.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-button')) {
            let prodId = e.target.dataset.id;
            let prod = products.find(p => p.id === prodId);
            if (prod) {
                prod.quantity++;
                updateProductFinalPrice(prod);
            }
            renderAll();
        }

        if (e.target.classList.contains('remove-button')) {
            let prodId = e.target.dataset.id;
            let prod = products.find(p => p.id === prodId);
            if (prod && prod.quantity > 1) {
                prod.quantity--;
                updateProductFinalPrice(prod);
            }
            renderAll();
        }

        if (e.target.classList.contains('delete-item')) {
            let prodId = e.target.dataset.id;
            products = products.filter(p => p.id !== prodId);
            renderAll();
        }
    });

   
    refreshButton.addEventListener('click', () => {
        products = initialProducts.map(item => ({
            ...item,
            finalPrice: countFinalPrice(item.price, item.quantity)
        }));
        renderAll();
    });

    addProductButton.addEventListener('click', () => {
        let newProduct = {
            id: 'item-' + Date.now(),
            name: 'Nauja Preke',
            price: 50.00,
            quantity: 1,
            imgURL: 'images/delete.svg'
        };
        newProduct.finalPrice = countFinalPrice(newProduct.price, newProduct.quantity);
        products.push(newProduct);
        renderAll();
    });
});
