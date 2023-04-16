// Constructor function
function Product(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
  
  // Fetch API
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
      // array to store objects
      const productObjects = [];
      // loop through data from API
      data.forEach(item => {
        const title = item.title;
        const price = item.price;
        const description = item.description;
        const image = item.image;
        // create product object
        const productObject = new Product(title, price, description, image);
        // push object to array
        productObjects.push(productObject);
      });
      // render cards for each product object
      productObjects.map(item => {
        // create card
        const product = document.createElement('div');
        product.className = 'product';
        // create HTML elements with each item information
        product.innerHTML = `
          ${item.title}
          
          ${item.description}
          Price: $${item.price}
          `;
          let image = document.createElement('img');
          image.src = item.image;
          image.style.width = '10rem';
        // append card to main
        document.querySelector('main').appendChild(product);
        product.appendChild(image);
        
       
      });
    });
  