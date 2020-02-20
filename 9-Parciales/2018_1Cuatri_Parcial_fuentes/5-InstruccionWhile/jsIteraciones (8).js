function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var validar;

	var respuesta = 'si';

	do {

		validar = parseInt(prompt("Ingresa numeros, ingresa un char para cerrar"));

		if (validar >= 0) {

			positivo = validar + positivo;

		}
		else if (validar <= 0) {
			negativo = validar * negativo;
			flag=1;

		}

	} while (!(isNaN(validar)));

	if (negativo==1) {
		negativo=0;
		
	}
	
	



	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN

/* ejemplo del codigo hecho por el profe

do{
	numero=parseint(prompt("ingrese un numero"));
	while (isNaN(numero)){
		numero =parseInt(promt("eso no es un numero, ingrese un numero"));
	}
	if (numero>=0){
		positivo = positivo +numero;
	}else{
		negativo=negativo*numero;
		flag=1;
	}


	}while (respuesta=='si') {

		if (flag==0) {
		negativo=0;
		
	}

	
	}
}*/

