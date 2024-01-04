// cancelar_cita_paciente.js
document.addEventListener("DOMContentLoaded", function () {
    const cancelarCitaForm = document.getElementById("cancelarCitaForm");
  
    cancelarCitaForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obtener valores del formulario
      const idCita = document.getElementById("idCita").value;
  
      // Lógica para verificar la cancelación de la cita (simulada)
      // Aquí deberías implementar la lógica real, posiblemente consultando a un backend
      const citaProgramada = obtenerCitaPorID(idCita);
  
      if (!citaProgramada) {
        showAlert("No se encontró una cita con el ID proporcionado.");
        return;
      }
  
      const horasRestantes = obtenerHorasRestantes(citaProgramada.fecha);
      if (horasRestantes < 24) {
        showAlert("No se puede cancelar la cita con menos de 24 horas de antelación.");
        return;
      }
  
      // Lógica para cancelar la cita (simulada)
      // Aquí deberías implementar la lógica real, posiblemente consultando a un backend
  
      showAlert("La cita ha sido cancelada exitosamente.");
    });
  
    function obtenerCitaPorID(idCita) {
      // Lógica para obtener la información de la cita por ID (simulada)
      // Aquí deberías implementar la lógica real, posiblemente consultando a un backend
      // En este ejemplo, se devuelve una cita simulada
      return {
        fecha: new Date("2024-01-20T14:30:00"), // Fecha y hora simuladas
      };
    }
  
    function obtenerHorasRestantes(fechaCita) {
      const now = new Date();
      const timeDifference = fechaCita - now;
      return Math.floor(timeDifference / (1000 * 60 * 60));
    }
  
    function showAlert(message) {
      alert(message);
      window.history.back();
    }

  });
    
  function goBack() {
    window.history.back();
  }