// js/script.js

// Inicializar carrito desde localStorage si existe
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = parseFloat(localStorage.getItem("total")) || 0;
let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

// Función para agregar producto al carrito
function agregarCarrito(producto, precio) {
  const index = carrito.findIndex((item) => item.producto === producto);
  if (index > -1) {
    carrito[index].cantidad += 1;
  } else {
    carrito.push({ producto, precio, cantidad: 1 });
  }
  total += precio;
  actualizarCarrito();
  toggleCheckout();
}

// Función para eliminar producto del carrito
function eliminarCarrito(producto, precio, cantidad) {
  const index = carrito.findIndex((item) => item.producto === producto);
  if (index > -1) {
    total -= precio * cantidad;
    carrito.splice(index, 1);
    actualizarCarrito();
    toggleCheckout();
  }
}

// Función para actualizar el carrito en la interfaz y en localStorage
function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  listaCarrito.innerHTML = "";
  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${item.producto} x${item.cantidad}</span>
            <span>$${(item.precio * item.cantidad).toFixed(2)}</span>
            <button class="eliminar" onclick="eliminarCarrito('${
              item.producto
            }', ${item.precio}, ${item.cantidad})">X</button>
        `;
    listaCarrito.appendChild(li);
  });
  totalCarrito.textContent = total.toFixed(2);
  // Guardar en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("total", total.toFixed(2));
}

// Función para manejar la suscripción
function suscribirse(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (email) {
    // Validar formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Obtener suscriptores existentes
    let suscriptores = JSON.parse(localStorage.getItem("suscriptores")) || [];
    // Verificar si el email ya está suscrito
    if (!suscriptores.includes(email)) {
      suscriptores.push(email);
      // Guardar de nuevo en localStorage
      localStorage.setItem("suscriptores", JSON.stringify(suscriptores));
      // Mostrar mensaje de éxito
      alert(`Gracias por suscribirte con el correo: ${email}`);
      // Limpiar el formulario
      document.getElementById("form-suscripcion").reset();
    } else {
      alert("Este correo electrónico ya está suscrito.");
    }
  }
}

// Función para asignar eventos a los botones de agregar al carrito
function asignarEventosAgregar() {
  const botonesAgregar = document.querySelectorAll(".boton-agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", function () {
      const producto = this.getAttribute("data-producto");
      const precio = parseFloat(this.getAttribute("data-precio"));
      agregarCarrito(producto, precio);
    });
  });
}

/*// Función para asignar evento al formulario de suscripción
function asignarEventoSuscripcion() {
  const formulario = document.getElementById("form-suscripcion");
  formulario.addEventListener("submit", suscribirse);
}*/

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

// Función para manejar el checkout
function manejarCheckout(event) {
  event.preventDefault();
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const nombre = document.getElementById("nombre").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const formaPago = document.getElementById("forma-pago").value;

  if (!nombre || !direccion || !telefono || !formaPago) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Crear el pedido
  const pedido = {
    nombre,
    direccion,
    telefono,
    formaPago,
    productos: [...carrito],
    total: total.toFixed(2),
    fecha: new Date().toLocaleString(),
  };

  // Guardar el pedido en localStorage
  pedidos.push(pedido);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));

  // Limpiar el carrito
  carrito = [];
  total = 0;
  actualizarCarrito();

  // Mostrar mensaje de éxito
  alert("¡Pedido confirmado! Nos pondremos en contacto para el envío.");
  document.getElementById("checkout").classList.add("hidden");
}

// Función para mostrar u ocultar el formulario de checkout
function toggleCheckout() {
  const checkout = document.getElementById("checkout");
  if (carrito.length > 0) {
    checkout.classList.remove("hidden");
  } else {
    checkout.classList.add("hidden");
  }
}

// Función para asignar evento al formulario de checkout
function asignarEventoCheckout() {
  const formularioCheckout = document.getElementById("form-checkout");
  formularioCheckout.addEventListener("submit", manejarCheckout);
}

/*// Función para abrir el modal de administrador
function abrirModalAdmin() {
  const modal = document.getElementById("modal-admin");
  modal.classList.remove("hidden");
}

// Función para cerrar el modal de administrador
function cerrarModalAdmin() {
  const modal = document.getElementById("modal-admin");
  modal.classList.add("hidden");
  // Ocultar panel admin
  const panelAdmin = document.getElementById("panel-admin");
  panelAdmin.classList.add("hidden");
  // Limpiar formulario admin
  document.getElementById("form-admin").reset();
}

// Función para manejar el acceso de administrador
function accederAdmin(event) {
  event.preventDefault();
  const usuario = document.getElementById("admin-usuario").value.trim();
  const password = document.getElementById("admin-password").value.trim();

  // Definir credenciales de administrador (Ejemplo simple)
  const adminUsuario = "admin";
  const adminPassword = "admin123";

  if (usuario === adminUsuario && password === adminPassword) {
    // Mostrar panel admin
    const panelAdmin = document.getElementById("panel-admin");
    panelAdmin.classList.remove("hidden");

    // Cargar suscriptores
    cargarSuscriptores();

    // Cargar pedidos
    cargarPedidos();
  } else {
    alert("Credenciales incorrectas.");
  }
}

// Función para cargar suscriptores en el panel admin
function cargarSuscriptores() {
  const listaSuscriptores = document.getElementById("lista-suscriptores");
  listaSuscriptores.innerHTML = "";
  const suscriptores = JSON.parse(localStorage.getItem("suscriptores")) || [];
  suscriptores.forEach((email) => {
    const li = document.createElement("li");
    li.textContent = email;
    listaSuscriptores.appendChild(li);
  });
}

// Función para cargar pedidos en el panel admin
function cargarPedidos() {
  const listaPedidos = document.getElementById("lista-pedidos");
  listaPedidos.innerHTML = "";
  pedidos.forEach((pedido, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <strong>Pedido #${index + 1}</strong><br>
            Nombre: ${pedido.nombre}<br>
            Dirección: ${pedido.direccion}<br>
            Teléfono: ${pedido.telefono}<br>
            Forma de Pago: ${pedido.formaPago}<br>
            Productos:
            <ul>
                ${pedido.productos
                  .map(
                    (prod) =>
                      `<li>${prod.producto} x${prod.cantidad} - $${(
                        prod.precio * prod.cantidad
                      ).toFixed(2)}</li>`
                  )
                  .join("")}
            </ul>
            Total: $${pedido.total}<br>
            Fecha: ${pedido.fecha}
        `;
    listaPedidos.appendChild(li);
  });
}

// Función para asignar eventos al modal de administrador
function asignarEventosAdmin() {
  // Botón para abrir el modal
  const botonAdmin = document.getElementById("boton-admin");
  botonAdmin.addEventListener("click", abrirModalAdmin);

  // Botón para cerrar el modal
  const cerrar = document.querySelector(".cerrar");
  cerrar.addEventListener("click", cerrarModalAdmin);

  // Manejar el formulario de administrador
  const formularioAdmin = document.getElementById("form-admin");
  formularioAdmin.addEventListener("submit", accederAdmin);

  // Cerrar el modal al hacer clic fuera del contenido
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("modal-admin");
    if (event.target === modal) {
      cerrarModalAdmin();
    }
  });
}
*/
// Función para manejar el acceso al checkout
function handleCarritoChange() {
  toggleCheckout();
}

// Inicializar el carrito y eventos al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  actualizarCarrito();
  asignarEventosAgregar();
  //asignarEventoSuscripcion();
  asignarEventoBusqueda();
  asignarEventoCheckout();
  //asignarEventosAdmin();
  handleCarritoChange();
});

// script.js
console.log(DatosAlimentos[0].nombre);

// Conectando el archivo datos.js

document.addEventListener("DOMContentLoaded", function () {
  // Ruta al archivo JSON
  //console.log(DatosAlimentos);

  // Llenar la lista de alimentos
  /*const alimentoNombre = document.getElementById("nombre");
  console.log(alimentoNombre);
  const alimentoId = document.getElementById("id");
  console.log(alimentoId);
  const alimentoFamilia = document.getElementById("familia");
  console.log(alimentoFamilia);
  const alimentoGenero = document.getElementById("genero");
  console.log(alimentoGenero);
  const alimentoValores = document.getElementById("valores_nutritivos");
  console.log(alimentoValores);
  const alimentoCalorias = document.getElementById("calorias");
  console.log(alimentoCalorias);
  const alimentoAzucares = document.getElementById("azucares");
  console.log(alimentoAzucares);
  const alimentoCarbohidratos = document.getElementById("carbohidratos");
  console.log(alimentoCarbohidratos);
  const alimentoProteinas = document.getElementById("proteinas");
  console.log(alimentoProteinas);
  const alimentoDescripcion = document.getElementById("descripcion");
  console.log(alimentoDescripcion);
  const alimentoImagen = document.getElementById("imagen");
  console.log(alimentoImagen);*/

  mostrarAlimentos(DatosAlimentos);

  // Función para mostrar los alimentos en el HTML
  function mostrarAlimentos(alimentos) {
    const lista = document.getElementById("lista-alimentos");

    alimentos.forEach((alimento) => {
      //recuperar datos de localstorage
      const idAlimento = localStorage.getItem("alimento");
      console.log(idAlimento);

      //convertir string a numero
      if (parseInt(idAlimento) === alimento.id) {
        // Crear elementos HTML
        const divAlimento = document.createElement("div");
        divAlimento.classList.add("alimento");

        const img = document.createElement("img");
        img.src = alimento.imagen;
        img.alt = alimento.nombre;
        img.classList.add("contenido-imagen");

        const divDetails = document.createElement("div");
        divDetails.classList.add("alimento-details");

        const nombre = document.createElement("h2");
        nombre.textContent = alimento.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = alimento.descripcion;

        const infoNutritiva = document.createElement("ul");
        infoNutritiva.innerHTML = `

        

              <li><strong>Genero:</strong> ${alimento.genero}</li>
              <li><strong>Familia:</strong> ${alimento.familia}</li>
              <li><strong>Calorías:</strong> ${alimento.valores_nutritivos.calorias} kcal</li>
              <li><strong>Azúcares:</strong> ${alimento.valores_nutritivos.azucares} g</li>
              <li><strong>Carbohidratos:</strong> ${alimento.valores_nutritivos.carbohidratos} g</li>
              <li><strong>Proteínas:</strong> ${alimento.valores_nutritivos.proteinas} g</li>
              
              <div><button
              class="boton-agregar"
              data-producto="${alimento.nombre}"
              data-precio="${alimento.precio}"
              onclick="agregarCarrito('${alimento.nombre}',${alimento.precio});">

              
              Agregar al carrito
              </button></div>


            
          `;

        // Agregar elementos al DOM
        divDetails.appendChild(nombre);
        divDetails.appendChild(descripcion);
        divDetails.appendChild(infoNutritiva);

        divAlimento.appendChild(img);
        divAlimento.appendChild(divDetails);

        lista.appendChild(divAlimento);
        // }
      }
    });
  }
  /**Productos se mostraran en pantalla  */

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
              data-id=${producto.id}
              
            >
              Agregar al carrito
            </button>
          </div>

`;
    });
    return listar;
  }
});

const imgInfo = document.getElementById("imgInfo");
console.log(imgInfo);

imgInfo.addEventListener("click", (ev) => {
  console.log(ev);

  const alimentoId = ev.target.getAttribute("data-id");
  console.log(userId);
  localStorage.setItem("alimento", alimentoId);
  window.location.href = "info.html"; //redirecciono a la página de info.html con el id del usuario en el local storage
});
