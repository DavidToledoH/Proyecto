document.addEventListener("DOMContentLoaded", function () {
  // Simulación de datos de citas
  const citasData = [
    { paciente: "Juan Perez", fecha: "2024-01-10", hora: "09:00 AM" },
    { paciente: "Maria Rodriguez", fecha: "2024-01-15", hora: "02:30 PM" },
    { paciente: "Carlos Gomez", fecha: "2024-01-20", hora: "11:15 AM" },
    // Agrega más datos de citas según sea necesario
  ];

  // Obtén la tabla y el cuerpo de la tabla
  const citasTable = document.getElementById("citasTable");
  const tbody = citasTable.getElementsByTagName("tbody")[0];

  // Llena dinámicamente la tabla con datos simulados
  citasData.forEach((cita) => {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = cita.paciente;
    row.insertCell(1).textContent = cita.fecha;
    row.insertCell(2).textContent = cita.hora;
  });
});
function goBack() {
  window.history.back();
}
