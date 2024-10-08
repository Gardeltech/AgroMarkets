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

//Función para asignar evento al formulario de suscripción
function asignarEventoSuscripcion() {
  const formulario = document.getElementById("form-suscripcion");
  formulario.addEventListener("submit", suscribirse);
}
asignarEventoSuscripcion();
