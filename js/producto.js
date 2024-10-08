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
  //return listar;
}

//Al hacer click en la imagen se muestran los productos en info.html
const imgInfo = document.getElementById("imgInfo");
console.log(imgInfo);

imgInfo.addEventListener("click", (ev) => {
  console.log(ev);

  const alimentoId = ev.target.getAttribute("data-id");
  console.log(alimentoId);

  localStorage.setItem("alimento", alimentoId);
  window.location.href = "info.html"; //redirecciono a la página de info.html con el id del usuario en el local storage
});

//mostrarProductos(DatosAlimentos);
