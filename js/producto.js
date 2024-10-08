/*Productos se mostraran en pantalla  */

mostrarProductos(DatosAlimentos);
console.log(mostrarProductos(DatosAlimentos));

function mostrarProductos(productos) {
  console.log(productos[0].nombre);
  const listar = document.getElementById("lista-productos");
  productos.forEach((producto) => {
    // Crear elementos HTML

    listar.innerHTML += `

        <div class="producto" 
        data-nombre="${producto.nombre}">
        <img src="${producto.imagen}" alt="${producto.nombre}" id="imgInfo" data-id="${producto.id}"/>
        <h3>${producto.nombre}</h3>
        <p>€${producto.precio} / kg</p>
        <button
        class="boton-agregar"
        data-producto="${producto.nombre}"
        data-precio="${producto.precio}"
        data-id=${producto.id}>
        Agregar al carrito
        </button>
        </div>`;
  });
  return listar;
}
