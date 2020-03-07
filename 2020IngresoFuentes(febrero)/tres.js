function mostrar() {
	var edad;
	var sexo;
	var estadoCivil;
	var nombre;
	var validar = 's'	
	var edadMenor;
	var edadMayor;
	var nombreMenor;
	var flagEdad = 0;
	var sexoDelViejo;
	var NombreDelViejo;
	var contadorMujeresViudasCasadas=0;
	var contadorMujeres=0;
	var contadorHombres=0;

	do {
		edad = parseInt(prompt("ingrese una edad"));
		while (edad <= 17) {
			edad = parseInt(prompt("edad invalida, tiene que ser mayor de 18"));

		}

		sexo = prompt("ingrese un sexo");
		while (sexo != 'f' && sexo != 'm') {

			sexo = prompt("sexo invalido, ingrese f para femenino y m para masculino");

		

			}




			if (sexo=='f') {
				contadorMujeres++

				
			}
			else{
				contadorHombres++






		}





		estadoCivil = prompt("ingrese su estado civil");
		while (estadoCivil != 'soltero' && estadoCivil != 'viudo' && estadoCivil != 'casado') {

			estadoCivil = prompt("estado civil invalido, los posibles son, 'soltero', 'viudo' o 'casado'");

		}








		//------a----------------
		if (edad < edadMenor || flagEdad == 0) {
			edadMenor = edad + edadMenor;
			nombreMenor = nombre;
			flagEdad++

		}


		//-----b-------------
		if (edad > edadMayor || flagEdad==1) {
			sexoDelViejo=sexo;
			NombreDelViejo=nombre;




		}
		if (sexo=='f' && estadoCivil=='casado' && estadoCivil=='viudo') {

			contadorMujeresViudasCasadas++
			
		}










		validar = prompt("ingrese 's' si desea continuar");





	} while (validar == 's');
}
