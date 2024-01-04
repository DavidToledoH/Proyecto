// servicio.js
document.addEventListener("DOMContentLoaded", function () {
    const servicioForm = document.getElementById("servicioForm");
  
    servicioForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obtener valores del formulario
      const numReceta = document.getElementById("numReceta").value;
      const tipoServicio = document.getElementById("tipoServicio").value;
      const descripcion = document.getElementById("descripcion").value;
  
      // Aquí podrías enviar estos datos al backend para su procesamiento y almacenamiento
  
      // Ejemplo de impresión en consola para demostración
      console.log("Número de Receta:", numReceta);
      console.log("Tipo de Servicio:", tipoServicio);
      console.log("Descripción:", descripcion);
  
      // Puedes redirigir o realizar otras acciones después de procesar el servicio
    });

  });
    
  function goBack() {
    window.history.back();
  }