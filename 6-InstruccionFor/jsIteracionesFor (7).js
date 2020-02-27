function mostrar() {
    var numero;
    var validador;

    numero = parseInt(prompt("Ingrese un numero"));

    while (isNaN(numero)) {

        numero = prompt("no es un numero, ingrese un numero");

    }

    for (var index = 0; index <= numero; index++) {

        if (numero % index == 0) {

            alert(index);
        }
    }


















}//FIN DE LA FUNCIÓN