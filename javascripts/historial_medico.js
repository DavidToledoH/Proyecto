// historial_medico.js
document.addEventListener("DOMContentLoaded", function () {
    const historialContainer = document.getElementById("historialContainer");
  
    // Simulación de datos del historial médico
    const historialData = [
      { id_bitacora: 1, fechaMovimiento: "2024-01-10", usuario: "Dr. García", nombrePaciente: "Juan Perez", diagnostico: "Resfriado", consultorio: "A", totalPagar: 50 },
      { id_bitacora: 2, fechaMovimiento: "2024-01-15", usuario: "Dr. García", nombrePaciente: "Maria Rodriguez", diagnostico: "Dolor de cabeza", consultorio: "B", totalPagar: 30 },
      // Agrega más datos del historial médico según sea necesario
    ];
  
    // Generar tabla del historial médico
    const table = document.createElement("table");
    const thead = table.createTHead();
    const tbody = table.createTBody();
  
    // Crear encabezados de la tabla
    const headerRow = thead.insertRow();
    const headers = ["ID Bitácora", "Fecha Movimiento", "Usuario", "Nombre Paciente", "Diagnóstico", "Consultorio", "Total a Pagar"];
    headers.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    // Llenar la tabla con datos del historial médico
    historialData.forEach(entry => {
      const row = tbody.insertRow();
      Object.values(entry).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    });
  
    // Agregar la tabla al contenedor
    historialContainer.appendChild(table);
  });
  
  function goBack() {
    window.history.back();
  }
  