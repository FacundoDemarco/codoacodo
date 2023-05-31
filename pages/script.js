document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencia al botón "Resumen"
  var botonResumen = document.querySelectorAll("button[type='submit']")[1];

  // Agregar evento de clic al botón "Resumen"
  botonResumen.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var categoria = document.querySelector(".selector").value;

    // Calcular el total a pagar con el descuento correspondiente
    var precioUnitario = 200;
    var descuento;

    if (categoria === "Estudiante") {
      descuento = 0.8; // 80% de descuento para estudiantes
    } else if (categoria === "Trainee") {
      descuento = 0.5; // 50% de descuento para trainees
    } else if (categoria === "Junior") {
      descuento = 0.2; // 20% de descuento para juniors
    }

    var total = cantidad * precioUnitario * (1 - descuento);

    // Actualizar el elemento HTML que muestra el total a pagar
    document.getElementById("total").value = "TOTAL A PAGAR $" + total.toFixed(0);
  });
});


