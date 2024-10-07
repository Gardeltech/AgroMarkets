// Esperar a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Crear un nuevo párrafo
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.innerHTML = `
Bienvenido a AgroMarket, tu plataforma integral dedicada al mundoagrícola. Fundada con la misión de conectar a productores, proveedores y consumidores, AgroMarket nace de la pasión por el campo y el compromiso con la sostenibilidad. Somos una tienda comprometida con ofrecer productos frescos y de calidad, apoyando a productores locales y promoviendo una alimentación saludable.
<br>
<br>
<br>



En AgroMarket, creemos que la agricultura es el corazón de nuestras comunidades. Nuestro objetivo es facilitar el acceso a productos agrícolas de calidad, promoviendo la compra y venta directa entre agricultores y consumidores. Queremos empoderar a los productores locales, dándoles las herramientas necesarias para prosperar en un mercado en constante evolución.
<br>
<br>
<br>



Conexión Directa: Creamos un espacio donde los agricultores pueden listar sus productos, y los compradores pueden acceder a una amplia variedad de opciones frescas y sostenibles. Educación y Recursos: Ofrecemos contenido educativo sobre prácticas agrícolas sostenibles, tendencias del mercado y consejos útiles para maximizar la producción. Sostenibilidad: Fomentamos la agricultura responsable y la protección del medio ambiente, impulsando métodos que respeten nuestros recursos naturales.
<br>
<br>
<br>
  
En AgroMarket, contamos con un equipo apasionado y diverso, compuesto por expertos en agricultura, tecnología y comercio. Juntos, trabajamos para ofrecerte una experiencia excepcional, apoyando tanto a pequeños productores como a grandes empresas en su viaje hacia el éxito.
  
`;

  // Agregar el párrafo al contenedor
  document.getElementById("contenedor").appendChild(nuevoParrafo);
});
