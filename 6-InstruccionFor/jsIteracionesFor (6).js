function mostrar()
{
    var num;
    var contador = 0;


    num = parseInt(prompt("Ingrese un numero"));

    while (isNaN(num)) {

        num = prompt("eso no es un numero ingrese uno nuevo");

    }

    for (var index = 0; index <= num; index += 2) { // Importante el index+=2
        contador++
        alert(index)

    }

    if (contador > 0) {

        alert("se encontraron " + contador)


    }


}