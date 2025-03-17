
window.addEventListener('DOMContentLoaded', () => {
   
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            
            const productsContainer = document.getElementById('products');

           
            products.forEach(product => {
                
                const productCol = document.createElement('div');
                productCol.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');

              
                productCol.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img 
              src="${product.image}" 
              class="card-img-top p-3" 
              alt="${product.title}" 
              style="height: 200px; object-fit: contain;"
            >
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text text-truncate" 
                 style="max-height: 3em; overflow: hidden;">
                 ${product.description}
              </p>
              <p class="card-text fw-bold">Kaina: $${product.price}</p>
              <p class="card-text">
                <span class="badge bg-secondary">${product.category}</span>
              </p>
            </div>
          </div>
        `;

        
                productsContainer.appendChild(productCol);
            });
        })
        
});

// function addProductsIntoDiv(products) {
//     let productsDiv = document.getElementById('products');
//     let productCard = '';

//     for (let product of products) {
//         productCard += `
//         <div> class="products-card">
//         <img src="${product.image}">
//         <h4>${product.title}</h4>
//         <button class="button-card"> Perziureti</button>
//         </div>`
//     }

//     productsDiv. innerHTML = productCard;
// }

// window.addEventListener('load',() => {
//     fetch('https://fakestoreapie.com/products/')
//     .then(response => response.json())
//     .then(data => addProductsIntoDiv(data))
// })
