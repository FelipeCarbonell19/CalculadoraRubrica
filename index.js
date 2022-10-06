let display = document.querySelector(".numeros"),
  valor = "0",
  punto = false,
  iniciar = true,
  contador = 0,
  signo = null,
  historial = "";

function Numeros(numero) {
  //Tomamos el numero guardado en el argumento
  if (valor == "0" || iniciar) {
    //Iniciaomos un numero
    if (numero == ".") {
      //Por si escribimos 0 al comiezo
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
    //Continuamos agregando numero
    if (numero == "." && punto == false) {
      //Si escribimos un punto por primera vez
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
  operacionIgual();// Si hay alguna op pendiente
  contador = valor;//Ponemos el numero a esperar
  signo = tipo;//Guardamos operacion
  iniciar = true;
  punto = false;
  historial += tipo;
}

function operacionIgual() {
  if (signo == null) {
    //No hay resultado al pulsar
    display.innerHTML = valor; // mostramos el mismmo numero
  } else {
    var cadena = contador + signo + valor;//escribimos la operacion en una cadena
    sol = eval(cadena); //Convertimos la cadena a codigo
    display.innerHTML = sol; //Mostramos
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
    //Si no hay ninguna operacion no agrega nada
    let historialOperaciones = document.createElement("LI"); //Creamos lista
    historialOperaciones.style.setProperty("font-size", "20px");
    historialOperaciones.style.setProperty("text-align", "center");
    historialOperaciones.style.setProperty("margin-right", "10px");
    historialOperaciones.innerHTML = historial + " = " + "<b>" + valor + "</b>";
    document.querySelector(".operaciones").appendChild(historialOperaciones); //seleccionamos el padre (ul) y le agregamos la operacion
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
