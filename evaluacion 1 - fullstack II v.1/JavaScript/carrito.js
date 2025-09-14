// Asegurar que el LocalStorage tenga el carrito inicializado
if (!localStorage.getItem("productosCarrito")) {
    localStorage.setItem("productosCarrito", JSON.stringify([]))
}



function actualizarCarritoHTML() {
    const carrito = JSON.parse(localStorage.getItem("productosCarrito")) || []
    const contenedor = document.getElementById("carrito")

    if (!contenedor) return

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p class='text-break'>El carrito está vacío :(</p>"
        return
    }

    let total = 0 
    let html = "<ul class='list-group'>"

    carrito.forEach(item => {
        total += item.precio * item.cantidad // Calcular total 
        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}
                <button class="btn btn-sm btn-danger btn-eliminar" data-id="${item.id}">&times</button>
            </li>`
    })

    html += `</ul><p class="mt-2 fw-bold">Total: $${total}</p>` 
    contenedor.innerHTML = html

    const btnEliminar = document.querySelectorAll(".btn-eliminar")
    btnEliminar.forEach(btn => {
        btn.addEventListener("click", () => {
            eliminarDelCarrito(btn.dataset.id)
        })
    })
}
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];
    const contadorElemento = document.getElementById("carritoCounter");

    if (contadorElemento) {
        
        contadorElemento.textContent = carrito.length;
    }
}
function actualizarDropdownCarrito() {
    const carrito = JSON.parse(localStorage.getItem("productosCarrito")) || []
    const listaProductos = document.getElementById("lista-productos-dropdown")
    const totalElement = document.getElementById("total-carrito-dropdown")
    
    // Si no encontramos los elementos, salimos
    if (!listaProductos || !totalElement) return

    let html = ""
    let total = 0

    if (carrito.length === 0) {
        listaProductos.innerHTML = "<li>El carrito está vacío.</li>"
        totalElement.textContent = "$0"
        return
    }

    carrito.forEach(item => {
        total += item.precio * item.cantidad
        html += `<li>${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}</li>`
    })

    listaProductos.innerHTML = html
    totalElement.textContent = `$${total}`

}

// Función para agregar un producto al carrito
function agregarAlCarrito(id, cantidad = 1) {
    let carrito = JSON.parse(localStorage.getItem("productosCarrito")) || []
    const producto = productos.find(p => p.id == id)

    if (!producto) return

    const index = carrito.findIndex(p => p.id == id)

    if (index >= 0) {
        carrito[index].cantidad += cantidad
    } else {
        carrito.push({ ...producto, cantidad })
    }

    localStorage.setItem("productosCarrito", JSON.stringify(carrito))
    actualizarCarritoHTML() // Actualizar la vista del carrito
    actualizarDropdownCarrito()
    actualizarContadorCarrito()
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("productosCarrito")) || []
    carrito = carrito.filter(p => p.id != id)
    localStorage.setItem("productosCarrito", JSON.stringify(carrito))
    actualizarCarritoHTML()
    actualizarDropdownCarrito()
    actualizarContadorCarrito()
}



// Función para mostrar los productos aleatorios en el HTML
function mostrarProductosDestacados() {
    const contenedor = document.getElementById("lista-productos-destacados")
    if (!contenedor) {
        console.error("El contenedor 'lista-productos-destacados' no se encontró en el DOM.");
        return;
    }
    
    const copia = [...productos]

    
    // Obtiene una selecciónde productos, podria hacer un rango dinamico 
    const productosDestacados = copia.slice(0,4)
    
    let html = ''
    productosDestacados.forEach(p => {
        html += `
            <div class="col-xs-6 col-md-6 col-lg-4 col-xxl-3">
                <div class="card mb-4" style="width: 20rem;">
                    <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${p.nombre}</h5>
                        <p class="card-text">${p.descripcion}</p>
                        <p class="fw-bold">$${p.precio}</p>
                        <a href="detalle-producto.html?id=${p.id}" class="btn btn-primary">Ver Producto</a>
                        <button class="btn btn-success btn-agregar-carrito" data-id="${p.id}">Agregar al carrito</button>
                    </div>
                </div>
            </div>`

            
    })

    contenedor.innerHTML= html

     const btnAgregar = document.querySelectorAll(".btn-agregar-carrito");
    btnAgregar.forEach(btn => {
        btn.addEventListener("click", () => {
            const productId = btn.dataset.id
            agregarAlCarrito(productId)
        })
    })


    
}
// Asegura de que el carrito se actualice cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    actualizarCarritoHTML()
    actualizarDropdownCarrito()
    actualizarContadorCarrito()
    mostrarProductosDestacados()
})






/*

//guardar los productos del carrito en el localstorage
if (!localStorage.getItem("productosCarrito")) {
    localStorage.setItem("productosCarrito", JSON.stringify([]))
}

//LocalStorage usuarios para guardar usarios registrados si no existe uno ya
if (!localStorage.getItem("usuarios")) {
    localStorage.setItem("usuarios", JSON.stringify([]))
}
//actualiza el estado del carrito en el html
function actualizarCarritoHTML() {
    const carrito = JSON.parse(localStorage.getItem("productosCarrito")) || []
    const contenedor = document.getElementById("carrito")
    
    if (!contenedor) return

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p style='font-size: 100px'> El carrito está vacío :( </p>"
        return
    }

    let html = "<ul class='list-group'>"
    let total = 0

    carrito.forEach(item => {
        total += item.precio * item.cantidad
        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}
                <button class="btn btn-sm btn-danger btn-eliminar" data-id="${item.id}">&times</button>
            </li>`})

    html += `</ul><p class="mt-2 fw-bold">Total: $${total}</p>`
    contenedor.innerHTML = html
    // listener de botones de eliminar
    const btnEliminar = document.querySelectorAll(".btn-eliminar")
    btnEliminar.forEach(btn => {
        btn.addEventListener("click", () => {
            eliminarDelCarrito(btn.dataset.id)
        })
    })
}

// agregar al carrito
function agregarAlCarrito(id, cantidad = 1) {
    let carrito = JSON.parse(localStorage.getItem("productosCarrito")) || []
    const producto = productos.find(p => p.id == id)
    
    if (!producto) return

    //  si el producto ya existe en el carrito
    const index = carrito.findIndex(p => p.id == id)
    if (index >= 0) {
        // Si existe suma la cantidad
        carrito[index].cantidad += cantidad
    } else {
        // Si no existe, agregar uno nuevo
        carrito.push({ ...producto, cantidad })
    }

    localStorage.setItem("productosCarrito", JSON.stringify(carrito))
    actualizarCarritoHTML()
}
// listener de botones agregar al carrito
const btnAgregar = document.querySelectorAll(".btn-agregar-carrito")
// Usa un bucle forEach para agregar el listener a cada botón individualmente
btnAgregar.forEach(btn => {
    btn.addEventListener("click", () => {
        const productId = btn.dataset.id
        // La variable `btn` ahora está definida dentro del bucle
        // `document.getElementById("cantidad")` solo funciona si tienes un solo input para cantidad
        // Si no, puedes omitirlo o pasar un valor predeterminado
        const cantidad = parseInt(document.getElementById("cantidad").value) || 1  // Un valor fijo si no hay un input de cantidad por producto
        agregarAlCarrito(productId, cantidad)
    })
})






if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
        const productId = btn.dataset.id
        const cantidad = parseInt(document.getElementById("cantidad").value) || 1
        agregarAlCarrito(productId, cantidad)
    })
}
    





// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("productosCarrito")) || []
    carrito = carrito.filter(p => p.id != id)
    localStorage.setItem("productosCarrito", JSON.stringify(carrito))
    actualizarCarritoHTML()
}

//cuando carga la pagina actualiza tambien el carrito
document.addEventListener("DOMContentLoaded", () => {
    actualizarCarritoHTML()
})


*/
