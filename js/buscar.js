// Función para manejar la búsqueda de productos
function buscarProductos() {
  const barraBusqueda = document
    .getElementById("barra-busqueda")
    .value.toLowerCase();
  const productos = document.querySelectorAll(".producto");

  productos.forEach((producto) => {
    const nombre = producto.getAttribute("data-nombre").toLowerCase();
    if (nombre.includes(barraBusqueda)) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
}

// Asignar evento al botón de búsqueda
function asignarEventoBusqueda() {
  const botonBuscar = document.getElementById("boton-buscar");
  botonBuscar.addEventListener("click", buscarProductos);

  // Permitir búsqueda al presionar Enter
  const barraBusqueda = document.getElementById("barra-busqueda");
  barraBusqueda.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      buscarProductos();
    }
  });
}

asignarEventoBusqueda();
