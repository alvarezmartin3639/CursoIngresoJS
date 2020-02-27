function mostrar() {

	var contador = 0;
	var nummaximo=0;
	var numminimo=0;
	var entradaNum;
	var validador;
	// declarar variables


	do {
		validador = parseInt(prompt("ingrese un numero a comprar o escriba un char si desea abandonar"));
		entradaNum = validador;

		if (entradaNum >= numminimo) {
			numminimo=entradaNum;
			//EL numero menor

		}

		else if (entradaNum <= nummaximo) {

			nummaximo=entradaNum;

		}

	} while (!(isNaN(validador)));


	document.getElementById("maximo").value=numminimo;
	document.getElementById("minimo").value=nummaximo




}//FIN DE LA FUNCIÓN

//Flag aprender que es