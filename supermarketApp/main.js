const products = [
    {
        image: "assets/berenjena.jpg",
        title: "Berenjena",
        color: "Morado",
        type: "verdura",
        description: "Berenjenas jugosas y resplandecientes para tus platos",
        price: "Comprar berenjena"
    },
    {
      image: "assets/tomato.png",
      title: "Tomate",
      color: "Rojo",
      type: "verdura",
      description: "Deliciosos tomates para guisos y guarniciones",
      price: "Comprar tomate"
    },
    {
      image: "assets/meat.jpg",
      title: "Chuleta de ternera",
      color: "Rojo",
      type: "carne",
      description: "Para asar a la plancha",
      price: "Comprar chuleta"
    },
    {
      image: "assets/lechuga.png",
      title: "Lechuga",
      color: "Verde",
      type: "verdura",
      description: "Verde y fresca lechuga para ensaladas",
      price: "Comprar lechuga"
    },
    {
      image: "assets/banana.png",
      title: "Plátano",
      color: "Amarillo",
      type: "fruta",
      description: "Nutritivos plátanos para merendar",
      price: "Comprar plátano"
    },
    {
      image: "assets/blueberry.png",
      title: "Arándanos",
      color: "Azul",
      type: "fruta",
      description: "Deliciosos arándanos",
      price: "Comprar arándanos"
    },
    {
      image: "assets/fish.png",
      title: "Jurel",
      color: "Azul",
      type: "pescado",
      description: "Pescado el mismo día, fresco de la ría",
      price: "Comprar jurel"
    },
    {
      image: "assets/apple.png",
      title: "Manzana",
      color: "Rojo",
      type: "fruta",
      description: "Refrescante fruta",
      price: "Comprar manzana"
    }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const template = document.getElementById('products-card');
    const container = document.getElementById('products-container');
    const cartImage = "assets/money.gif";
    const resetDelay = 2000;

    // Render all products initially
    renderProducts(products);

    // Set up filter buttons
    const filterButtons = document.querySelectorAll(".filter-nav a");
    filterButtons.forEach(button => {
        button.addEventListener("click", handleFilterClick);
    });

    function renderProducts(productsToRender) {
        container.innerHTML = '';
        
        productsToRender.forEach(product => {
            const clone = template.content.cloneNode(true);
            const productImg = clone.querySelector('.product-image');
            const productButton = clone.querySelector('.primary-btn');
            
            // Set product data
            productImg.src = product.image;
            productImg.alt = product.title;
            productButton.textContent = product.price;
            clone.querySelector('.product-title').textContent = product.title;
            clone.querySelector('.color').textContent = product.color;
            clone.querySelector('.type').textContent = product.type;
            clone.querySelector('.description').textContent = product.description;

            // Add to cart effect
            productButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Visual feedback
                const originalImage = productImg.src;
                const originalText = productButton.textContent;
                
                productImg.src = cartImage;
                productButton.textContent = "Producto añdido";
                productButton.disabled = true;
                
                setTimeout(() => {
                    productImg.src = originalImage;
                    productButton.textContent = originalText;
                    productButton.disabled = false;
                }, resetDelay);
            });

            container.appendChild(clone);
        });
    }

    function handleFilterClick(e) {
        e.preventDefault();
        const filterValue = e.currentTarget.dataset.filter;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        // Filter products
        const filtered = filterValue === "all" 
            ? products 
            : products.filter(p => p.type === filterValue);
        
        renderProducts(filtered);
    }
});