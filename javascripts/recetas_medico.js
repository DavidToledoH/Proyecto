// recetas_medico.js
document.addEventListener("DOMContentLoaded", function () {
    const recetasContainer = document.getElementById("recetasContainer");
  
    // Simulación de datos de recetas emitidas por el médico
    const recetasData = [
      { numReceta: 1, fecha: "2024-01-10", nombrePaciente: "Juan Perez", nombreMedico: "Dr. García", diagnostico: "Resfriado", medicamentos: "Paracetamol", tratamiento: "Descanso", duracion: "7 días" },
      { numReceta: 2, fecha: "2024-01-15", nombrePaciente: "Maria Rodriguez", nombreMedico: "Dr. García", diagnostico: "Dolor de cabeza", medicamentos: "Ibuprofeno", tratamiento: "Hidratación", duracion: "5 días" },
      // Agrega más datos de recetas según sea necesario
    ];
  
    // Generar tabla de recetas
    const table = document.createElement("table");
    const thead = table.createTHead();
    const tbody = table.createTBody();
  
    // Crear encabezados de la tabla
    const headerRow = thead.insertRow();
    const headers = ["Num Receta", "Fecha", "Nombre Paciente", "Nombre Médico", "Diagnóstico", "Medicamentos", "Tratamiento", "Duración"];
    headers.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    // Llenar la tabla con datos de recetas
    recetasData.forEach(receta => {
      const row = tbody.insertRow();
      Object.values(receta).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    });
  
    // Agregar la tabla al contenedor
    recetasContainer.appendChild(table);
  });
  
  function goBack() {
    window.history.back();
  }
  