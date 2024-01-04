// alta_baja_doctor.js
// Simulación de datos de doctores (puedes cargarlos desde un backend)
const doctores = [
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología", citas: [] },
    { id: 2, nombre: "Dra. María Gómez", especialidad: "Pediatría", citas: [] },
  ];

document.addEventListener("DOMContentLoaded", function () {
    // Llena la tabla con los doctores
    const doctoresTable = document.getElementById("doctoresTable").getElementsByTagName('tbody')[0];
    doctores.forEach(doctor => {
      const row = doctoresTable.insertRow();
      row.innerHTML = `<td>${doctor.id}</td><td>${doctor.nombre}</td><td>${doctor.especialidad}</td><td><button onclick="eliminarDoctor(${doctor.id})">Eliminar</button></td>`;
    });
  });
  
  function eliminarDoctor(idDoctor) {
    // Lógica para verificar citas asignadas antes de dar de baja (simulada)
    const doctor = doctores.find(d => d.id === idDoctor);
    if (doctor.citas.length > 0) {
      alert("No se puede dar de baja. El doctor tiene citas asignadas.");
      return;
    }
  
    // Lógica para dar de baja al doctor (simulada)
    const index = doctores.findIndex(d => d.id === idDoctor);
    if (index !== -1) {
      doctores.splice(index, 1);
      alert("Doctor eliminado exitosamente.");
      // Recargar la tabla después de eliminar el doctor
      location.reload();
    }
  }
  
  function irAltaDoctor() {
    // Redirigir a la página de alta de doctor
    window.location.href = "alta_doctor.html"; // Asegúrate de proporcionar la ruta correcta
  }
  
  function goBack() {
    window.history.back();
  }
  