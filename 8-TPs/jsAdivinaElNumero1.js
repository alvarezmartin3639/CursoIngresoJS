/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos;

function comenzar() {
  //Genero el número RANDOM entre 1 y 100

  //alert(numeroSecreto );


  var entradaNumero;
  var numeroRandom;
  var intentos;

  entradaNumero = parseInt(document.getElementById("numero").value);

  numeroRandom = 1;



}

function verificar() {

  while (entradaNumero != numeroRandom) {
    var entradaNumero;
    var numeroRandom;
    var intentos;

    intentos = intentos + 1

    document.getElementById("intentos").value = intentos;

  }

  alert("ganaste el numero era " + entradaNumero);









}