function mostrar() {

	/* como se escribe se usa el do while cuando queres ejecutar el while aunque sea una vez
	el while se usa cuando es un bucle infinito
	el for cuando es un "bucle" con un numero determinado, por ejemplo si queres que se repita 3 veces
	
	do {

	} while();
	*/

	//Fijarse cuando se usa cada estructura, while,switch,if,elseif,etc)


	var sumaAcumulada = 0;
	var contador = 0;
	var validador;
	var numero;


	do {
		numero = parseInt(prompt("Escriba un numero"));
		validador = prompt("Si quiere seguir entrando numeros escriba un char");

		sumaAcumulada = sumaAcumulada + numero;
		contador++

















	} while ((isNaN(validador)));
	

	document.getElementById('suma').value = sumaAcumulada;
	document.getElementById('promedio').value = sumaAcumulada / contador;
































}//FIN DE LA FUNCIÓN