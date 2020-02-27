function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var tempPar;
    var validador


    
    
    
    do{}    
   
    peso = parseInt(prompt("ingrese un peso"));
   
    

    while (peso <= 0 || peso >= 101 || isNaN(peso)) {
        peso = parseInt(prompt("peso invalido, ingresar otro"));

    }

    temperatura = parseInt(prompt("ingrese una temperatura"));


    while (temperatura <= -31 || temperatura >= 31 || isNaN(temperatura)) {
        temperatura=parseInt(prompt("temperatura invalida, ingresar otra"))

    }

    while (validador!='s') {
        
    }



}
