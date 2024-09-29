document.addEventListener('DOMContentLoaded', function () {
    const products = [
      {
        "image": {"thumbnail": "./assets/images/image-waffle-thumbnail.jpg"},
        "name":"Waffle with Berries",
        "category": "Waffle",
        "price": 6.5
      },  
      {
        "image": {"thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg"},
        "name":"Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
      },  
      {
          "image": {"thumbnail": "./assets/images/image-macaron-thumbnail.jpg"},
          "name":"Macaron Mix of Five",
          "category": "Macaron",
          "price": 8.00
        },  
        {
          "image": {"thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg"},
          "name":"Classic Tiramisu",
          "category": "Tiramisu",
          "price": 5.50
        },  
      {
        "image": {"thumbnail": "./assets/images/image-baklava-thumbnail.jpg"},
        "name":"  Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
      },  
      {
        "image": {"thumbnail": "./assets/images/image-meringue-thumbnail.jpg"},
        "name":"Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
      },  
      {
        "image": {"thumbnail": "./assets/images/image-cake-thumbnail.jpg"},
        "name":"Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
      },  
      {
        "image": {"thumbnail": "./assets/images/image-brownie-thumbnail.jpg"},
        "name":"Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
      },  
      {
        "image": {"thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg"},
        "name":"Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
      },  
    ];

    const renderProducts = (products) =>{
        const productList= document.querySelector('#productList');
        products.forEach((product) => {
            const productCard = document.createElement('article');
            productCard.className = 'productCard';

            const productImg = document.createElement('img');
            productImg.src = product.image.thumbnail;
            productImg.alt = product.name;

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productCategory = document.createElement('h4');
            productCategory.textContent = product.category;

            const productPrice = document.createElement('p');
            productPrice.textContent = product.price

            const addToCartBtn = document.createElement('button');
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.className = 'addToCart';
            
            productCard.appendChild(productImg);
            productCard.appendChild(productCategory);
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productCard.appendChild(addToCartBtn);

            productList.appendChild(productCard);
        });
    };
    renderProducts(products);
});