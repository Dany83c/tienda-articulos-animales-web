// Selecciona el botón para guardar el producto y el formulario
    const saveProductBtn = document.getElementById('saveProductBtn');
    const productForm = document.getElementById('productForm');

    // Escucha el evento 'click' del botón de guardar
    saveProductBtn.addEventListener('click', function(event) {
        // Detiene el envío del formulario si no es válido
        if (!productForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Aplica las clases de Bootstrap para mostrar la validación visual
        productForm.classList.add('was-validated');

        // Si el formulario es válido, podemos simular el guardado de datos
        if (productForm.checkValidity()) {
            // Aquí iría la lógica para procesar los datos, por ejemplo, mostrarlos en la consola
            const productName = document.getElementById('productName').value;
            const productPrice = document.getElementById('productPrice').value;
            const productStock = document.getElementById('productStock').value;
            const productImage = document.getElementById('productImage').value;

            console.log("Datos del producto:");
            console.log("Nombre:", productName);
            console.log("Precio:", productPrice);
            console.log("Stock:", productStock);
            console.log("Imagen:", productImage);
            
            // Cierra el modal después de "guardar"
            const modal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
            modal.hide();

            // Resetea las clases de validación y el formulario para el próximo uso
            productForm.classList.remove('was-validated');
            productForm.reset();
        }
    });

    
function getProducts() {
    // Obtiene la string de 'productos' del localStorage
    const productsJSON = localStorage.getItem('products');
    // Si no hay productos, devuelve un array vacío
    if (!productsJSON) {
        return [];
    }
    // Convierte la string JSON a un array de objetos y lo devuelve
    return JSON.parse(productsJSON);
}
function saveProducts(products) {
    // Convierte el array de productos a una string JSON
    const productsJSON = JSON.stringify(products);
    // Guarda la string en localStorage bajo la clave 'products'
    localStorage.setItem('products', productsJSON);
}
function addProduct(newProduct) {
    const products = getProducts();
    // Le asigna un ID único al nuevo producto (simulando una base de datos)
    newProduct.id = Date.now();
    products.push(newProduct);
    saveProducts(products);
}
function updateProduct(updatedProduct) {
    const products = getProducts();
    // Busca el índice del producto en el array
    const index = products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
        // Reemplaza el producto antiguo con el nuevo
        products[index] = updatedProduct;
        saveProducts(products);
    }
}
function deleteProduct(productId) {
    const products = getProducts();
    // Crea un nuevo array sin el producto a eliminar
    const newProducts = products.filter(p => p.id !== productId);
    saveProducts(newProducts);
}