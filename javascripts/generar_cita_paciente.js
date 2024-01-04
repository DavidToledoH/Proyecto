// generar_cita_paciente.js
document.addEventListener("DOMContentLoaded", function () {
    const generarCitaForm = document.getElementById("generarCitaForm");
  
    generarCitaForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obtener valores del formulario
      const especialidad = document.getElementById("especialidad").value;
      const fecha = document.getElementById("fecha").value;
      const hora = document.getElementById("hora").value;
      const consultorio = document.getElementById("consultorio").value;
  
      // Validaciones
      const today = new Date();
      const selectedDate = new Date(fecha + "T" + hora);
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
  
      // Mostrar información de la cita
      const citaInfo = `
        Se generó exitosamente su cita
        Información de la cita:
        Especialidad: ${especialidad}
        Fecha: ${fecha}
        Hora: ${hora}
        Consultorio: ${consultorio}
      `;
  
      showAlert(citaInfo);
    });
  
    function verificarDisponibilidad(selectedDate) {
      // Lógica de verificación de disponibilidad (simulada)
      // Aquí deberías implementar la lógica real, posiblemente consultando a un backend
      // En este ejemplo, siempre se considera que la cita está disponible
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