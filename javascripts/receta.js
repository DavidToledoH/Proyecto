document.addEventListener("DOMContentLoaded", function () {
  // Obtener el elemento de entrada de fecha
  const fechaInput = document.getElementById("fecha");

  // Obtener la fecha actual
  const today = new Date();

  // Formatear la fecha en el formato YYYY-MM-DD
  const formattedDate = today.toISOString().split('T')[0];
  fechaInput.value = formattedDate;

  numRecetaInput.disabled = true;
  fechaInput.disabled = true;
  nombreMedicoInput.disabled = true;
});

function goBack() {
    window.history.back();
  }