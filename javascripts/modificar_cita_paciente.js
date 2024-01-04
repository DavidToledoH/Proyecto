// modificar_cita_paciente.js
document.addEventListener("DOMContentLoaded", function () {
    const modificarCitaForm = document.getElementById("modificarCitaForm");
  
    modificarCitaForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obtener valores del formulario
      const idCita = document.getElementById("idCita").value;
      const nuevaFecha = document.getElementById("fecha").value;
      const nuevaHora = document.getElementById("hora").value;
  
      // Validaciones
      const today = new Date();
      const selectedDate = new Date(nuevaFecha + "T" + nuevaHora);
      const maxAnticipacion = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());
  
      if (selectedDate <= today) {
        showAlert("No se permite una cita con fecha pasada.");
        return;
      }
  
      if (selectedDate > maxAnticipacion) {
        showAlert("Seleccione una fecha más cercana.");
        return;
      }
  
      // Verificación de disponibilidad (simulado)
      const citaDisponible = verificarDisponibilidad(selectedDate);
      if (!citaDisponible) {
        showAlert("La fecha y hora seleccionadas están ocupadas. Elija otra.");
        return;
      }
  
      // Lógica para modificar la cita (simulada)
  
      showAlert("La cita ha sido modificada exitosamente.");
    });
  
    function verificarDisponibilidad(selectedDate) {
      // Lógica de verificación de disponibilidad (simulada)
      return true;
    }
  
    function showAlert(message) {
      alert(message);
      window.history.back();
    }
  

  });
  
  function goBack() {
    window.history.back();
  }
  