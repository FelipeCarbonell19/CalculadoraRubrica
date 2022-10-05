let display = document.querySelector(".numeros"),
  valor = "0",
  punto = false,
  iniciar = true,
  contador = 0,
  signo = null,
  historial = "";

function Numeros(numero) {
  if (valor == "0" || iniciar) {
    if (numero == ".") {
      display.innerHTML = "0.";
      valor = "0.";
      historial += "0.";
      punto = true;
    } else {
      display.innerHTML = numero;
      valor = numero;
      historial += numero;
    }
  } else {
    if (numero == "." && punto == false) {
      display.innerHTML += numero;
      valor += numero;
      historial += numero;
      punto = true;
    } else if (numero == "." && punto == true) {
    } else {
      display.innerHTML += numero;
      valor += numero;
      historial += numero;
    }
  }

  iniciar = false;
}

function operaciones(tipo) {
  operacionIgual();
  contador = valor;
  signo = tipo;
  iniciar = true;
  punto = false;
  historial += tipo;
}

function operacionIgual() {
  if (signo == null) {
    display.innerHTML = valor;
  } else {
    var cadena = contador + signo + valor;
    sol = eval(cadena);
    display.innerHTML = sol;
    valor = sol;
    signo = null;
    iniciar = true;
  }
}

function agregarHistorial() {
  if (
    historial.indexOf("+") == -1 &&
    historial.indexOf("-") == -1 &&
    historial.indexOf("*") == -1 &&
    historial.indexOf("/") == -1
  ) {
  } else {
    let historialOperaciones = document.createElement("LI");
    historialOperaciones.style.setProperty("font-size", "20px");
    historialOperaciones.style.setProperty("text-align", "center");
    historialOperaciones.style.setProperty("margin-right", "10px");
    historialOperaciones.innerHTML = historial + " = " + "<b>" + valor + "</b>";
    document.querySelector(".operaciones").appendChild(historialOperaciones);
    historial = valor;
  }
}

function limpiarResultados() {
  valor = 0;
  display.innerHTML = valor;
  punto = false;
  iniciar = true;
  contador = 0;
  signo = null;
  historial = "";
}

function limpiarHistorial() {
  var padre = document.querySelector(".operaciones");
  while (padre.firstChild) {
    padre.removeChild(padre.firstChild);
  }
}

function ejecutarFunciones() {
  operacionIgual();
  agregarHistorial();
}
