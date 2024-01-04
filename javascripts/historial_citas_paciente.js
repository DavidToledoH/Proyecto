// historial_citas_paciente.js
document.addEventListener("DOMContentLoaded", function () {
    const historialCitasContainer = document.getElementById("historialCitasContainer");
  
    // Simulación de datos del historial de citas
    const historialCitasData = [
      { id_cita: 1, fecha: "2024-01-10", nombreMedico: "Dr. García", diagnostico: "Resfriado", consultorio: "A" },
      { id_cita: 2, fecha: "2024-01-15", nombreMedico: "Dr. García", diagnostico: "Dolor de cabeza", consultorio: "B" },
      // Agrega más datos del historial de citas según sea necesario
    ];
  
    // Generar tabla del historial de citas
    const table = document.createElement("table");
    const thead = table.createTHead();
    const tbody = table.createTBody();
  
    // Crear encabezados de la tabla
    const headerRow = thead.insertRow();
    const headers = ["ID Cita", "Fecha", "Nombre del Médico", "Diagnóstico", "Consultorio"];
    headers.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    // Llenar la tabla con datos del historial de citas
    historialCitasData.forEach(cita => {
      const row = tbody.insertRow();
      Object.values(cita).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    });
  
    // Agregar la tabla al contenedor
    historialCitasContainer.appendChild(table);
  });
  
  function goBack() {
    window.history.back();
  }
  