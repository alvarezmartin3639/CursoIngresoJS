



function mostrar() {

  var producto;
  var peso;
  var precioPorKg;
  var acumuladorPrecio = 0;
  var validador = 's';
  var descuento;
  var acumuladorPeso = 0;
  var alimentoMasCaro;
  var flagAlimentoMasCaro = 0;
  //-------------------------------------------------------------------------------------
  do {

    producto = prompt("ingrese un ingrediente (v=vegetal, a=animal, m=mezcla)");
    while (producto != 'v' && producto != 'a' && producto != 'm') {
      producto = prompt("ingrediente invalido, ingrese 'v', 'a' o 'm' (v=vegetal, a=animal, m=mezcla)");



    }

    peso = parseInt(prompt("ingrese un peso entre 10 y 1000"));
    while (peso <= 9 || peso >= 1001 || isNaN(peso)) {
      peso = parseInt(prompt("peso invalido, ingrese uno entre 10 y 1000"));

    }

    precioPorKg = parseInt(prompt("ingrese un precio por kg"));
    while (precioPorKg < 0 || isNaN(precioPorKg)) {
      precioPorKg = parseInt(prompt("precio invalido, ingrese uno mayor a 0"));

    }








 //---------------------------------a------------------------------------------------
    if (precioPorKg < alimentoMasCaro || flagAlimentoMasCaro == 0) {

      alimentoMasCaro = precioPorKg;


      flagAlimentoMasCaro++;

    }





//-----------------------------------------------------------------------------------


    acumuladorPrecio = (precioPorKg * peso) + acumuladorPrecio;
    acumuladorPeso = peso + acumuladorPeso;

    validador = prompt("si desea continuar ingrese 's'");

  } while (validador == 's');


//----------------------------------------------------------------------------------




  if (acumuladorPeso >= 100 && acumuladorPrecio <= 299) {
    descuento = 15;




    document.write("el importe total en bruto a pagar es: " + acumuladorPrecio + "</br>");
    document.write("usted dispone de un descuento del 15% su precio total a pagar seria: " + (acumuladorPrecio - ((acumuladorPrecio * descuento) / 100)) + "</br>");
    document.write("el alimento mas caro es: " + alimentoMasCaro);
    document.write("el promedio de peso por kg es: " + precioPorKg / peso);
  }









  else if (acumuladorPeso >= 300) {
    descuento = 25;




    document.write("el importe total en bruto a pagar es: " + acumuladorPrecio + "</br>");
    document.write("usted dispone de un descuento del 25% su precio  total a pagar seria:  " + (acumuladorPrecio - ((acumuladorPrecio * descuento) / 100)) + "</br>");
    document.write("el alimento mas caro es: " + alimentoMasCaro);
    document.write("el promedio de peso por kg es: " + precioPorKg / peso);
  }







  else {
    document.write("el importe total en bruto a pagar es: " + acumuladorPrecio + "</br>");
    document.write("el alimento mas caro es: " + alimentoMasCaro);
    document.write("el promedio de peso por kg es: " + precioPorKg / peso);





  }

}
//--------------------------------------------------------------------------------------

















































