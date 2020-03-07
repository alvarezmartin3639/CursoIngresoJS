function mostrar() {
  var ingrediente;
  var peso;
  var precioKg;
  var descuento=0;
  var validar='s';
  var acumuladorPrecioTotal=0;
  var acumuladorPrecioKgMasCaro=0;
  var flagPrecioKgMasCaro=0;
  var tipoAlimentoMasCaro;

  do {

    
    
    ingrediente = prompt("ingrese un ingrediente, los validos son 'v' para vegetal, 'a' para animal y 'm' para mezcla");
    while (ingrediente != 'v' && ingrediente != 'a' && ingrediente != 'm') {

      ingrediente = prompt("error-tiene que ser v para vegetal, a para animal y m para mezcla");

    }



    precioKg=parseInt(prompt("Ingrese el precio por kg"));
    while (precioKg<=0) {
      precioKg=parseInt(prompt("error- el precio no puede ser menor a 0") );
    }


      





    peso = parseInt(prompt("ingrese un peso de entre 10 y 1000 kg"));
    while (peso <= 10 && peso >= 1000) {

      peso = parseInt(prompt("error-peso invalido, ingrese uno de entre 10 y 1000"));



    }


    if (precioKg>acumuladorPrecioKgMasCaro || flagPrecioKgMasCaro==0 ) {

      acumuladorPrecioKgMasCaro=precioKg+acumuladorPrecioKgMasCaro;
      tipoAlimentoMasCaro=ingrediente;

      
    }
    validar=prompt("si quiere continuar ingrese 's'");




    acumuladorPrecioTotal=precioKg+acumuladorPrecioTotal;


  } while (validar=='s');











  document.write("A-El improte total sin descuento a pagar es: " + acumuladorPrecioTotal+"</br>");  

  if (peso>100) {
    descuento=15;

    document.write("B-El improte total sin descuento a pagar es: " + (acumuladorPrecioTotal/descuento)+"</br>");  

    
  }

  else if (peso>=300) {

    document.write("B-El improte total sin descuento a pagar es: " + (acumuladorPrecioTotal/descuento)+"</br>");  

    descuento=25;
    
  }
  else{
    document.write("B-no tiene descuento "+"</br>"); 



  }

  document.write("C-El alimento mas caro fue :  " + tipoAlimentoMasCaro+"</br>");  
  document.write("D-El promedio de precio por kg es :  " + (acumuladorPrecioTotal/precioKg)+"</br>");  

  




}

