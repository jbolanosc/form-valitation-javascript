document.getElementById("btnSubmit").addEventListener("click", function(e) {
  //say this is an anchor
  //do something
  e.preventDefault();

  const errores = new Array();
  const form = document.getElementById("giordiForm");

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const fechaNacimiento = document.getElementById("fecha").value;
  const email = document.getElementById("correo").value;
  const email2 = document.getElementById("correo2").value;
  const genero = obtenerRadio(errores);
  const tienda = obtenerOption(errores);

  validarCampos(nombre, telefono, fechaNacimiento, errores);
  validarCorreo(email, email2, errores);

  if (errores.length > 0) {
    mostrarErrores(errores);
  } else {
    mostrarCorrecto();
    form.reset();
  }
});

function obtenerOption(errores) {
  var tienda = document.getElementById("tienda");
  var valor = tienda.options[tienda.selectedIndex].value;
  if (valor == "" || valor == null) {
    errores.push("No ha seleccionado la tienda de su preferencia");
    return errores;
  } else {
    return valor;
  }
}

function obtenerRadio(errores) {
  var radios = document.getElementsByName("genero");
  var valor = "";

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      valor = radios[i].value;
      return valor;
    }
  }

  if (valor == "" || valor == null) {
    errores.push("No ha seleccionado el genero");
    return errores;
  } else {
    return valor;
  }
}

function validarCampos(nombre, telefono, fechaNacimiento, errores) {
  if (nombre == "" || nombre == null || telefono == "" || telefono == null) {
    errores.push("Debe completar todos los campos");
    return [];
  } else if (fechaNacimiento == "" || fechaNacimiento == null) {
    errores.push("Debe seleccionar una fecha de nacimiento");
    return [];
  }
}

function validarCorreo(email, email2, errores) {
  emailRegex = /(^\w.*@\w+\.\w)/;

  if (
    email !== email2 ||
    email == "" ||
    email == null ||
    email2 == "" ||
    email == null
  ) {
    errores.push("Los correos proporcionados no coinciden");
  } else {
    if (emailRegex.test(email)) {

    } else {
      errores.push("El formato de correo no es correcto");
    }
  }
}

function mostrarErrores(errores) {
  var elemento = document.getElementById("error");

  limpiarAlert();

  errores.map(error => {
    elemento.innerHTML += error + "<br>";
  });

  elemento.removeAttribute("hidden");
}

function limpiarAlert() {
  var error = document.getElementById("error");
  error.innerHTML = "";
  error.setAttribute("hidden", "true");

  var exito = document.getElementById("success");
  exito.innerHTML = "";
  exito.setAttribute("hidden", "true");
}

function mostrarCorrecto() {
  const alert = document.getElementById("success");

  limpiarAlert();

  alert.innerHTML += "Formulario enviado con exito!";

  alert.removeAttribute("hidden");
}
