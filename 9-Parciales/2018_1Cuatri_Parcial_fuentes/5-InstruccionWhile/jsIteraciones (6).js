function mostrar() {
	var numerosAcumulados=0;
	var i = 1;
	var entradaNumeros;
	

	entradaNumeros =prompt("Ingrese 5 numeros ");



	while (i <= 5 )  {
		entradaNumeros = parseInt(prompt("Ingrese 5 numeros "));

		numerosAcumulados= entradaNumeros + numerosAcumulados;
		i++;
	}
	

	
	
	document.getElementById('suma').value = numerosAcumulados;
	document.getElementById('promedio').value = numerosAcumulados / 5;		






















}//FIN DE LA FUNCIÓN

//tolowerCase ( convertir a minusculas)