// alta_doctor.js
document.addEventListener("DOMContentLoaded", function () {
    const altaDoctorForm = document.getElementById("altaDoctorForm");
  
    altaDoctorForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obtener valores del formulario
      const umPaciente = document.getElementById("um_paciente").value;
      const curp = document.getElementById("curp").value;
      const rfc = document.getElementById("rfc").value;
      const nss = document.getElementById("nss").value;
      const nombrePila = document.getElementById("nombrePila").value;
      const apellidos = document.getElementById("apellidos").value;
      const especialidad = document.getElementById("especialidad").value;
  
      // Validaciones adicionales si es necesario
  
      // Lógica para dar de alta al doctor (simulada)
      const nuevoDoctor = {
        umPaciente: umPaciente,
        curp: curp,
        rfc: rfc,
        nss: nss,
        nombrePila: nombrePila,
        apellidos: apellidos,
        especialidad: especialidad,
      };
  
      // Aquí deberías implementar la lógica real, posiblemente consultando a un backend
      console.log("Nuevo Doctor:", nuevoDoctor);
  
      // Puedes redirigir a otra página o hacer alguna acción adicional después de dar de alta al doctor
      alert("Doctor dado de alta exitosamente.");
      // Puedes redirigir a la página de lista de doctores u otra página
      window.location.href = "lista_doctores.html"; // Ajusta la ruta según sea necesario
    });
  

  });
  
  function goBack() {
    window.history.back();
  }