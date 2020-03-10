

/*
function mostrar() {

	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var validador = 's';
	var nombreDelMasJovenCasado;
	var edadDelMasJoven;
	var flagDelMasJoven = 0;
	var edadDelMasViejo;
	var sexoDelMasViejo;
	var nombreDelMasViejo;
	var flagDelMasViejo = 0;
	var contadorMujeresViudasxCasadas = 0;
	var contadorTodasLasMujeres = 0;
	var acumuladorEdadMujeres = 0;
	var contadorHombresSolteros = 0;
	var acumuladorEdadHombresSolteros = 0;



	do {


		nombre = prompt("ingrese un nombre");
		while (!(isNaN(nombre))) {
			nombre = prompt("un nombre no puede ser un numero, ingrese otro");

		}



		edad = parseInt(prompt("ingrese una edad"));
		while (isNaN(edad) || edad <= 17) {
			edad = parseInt(prompt("edad invalida, no se aceptan menores,ingrese una edad mayor de 18"));

		}


		sexo = prompt("ingrese su sexo (f=femenino,m=masculino)");
		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("sexo invalido, el sexo puede ser f=femenino o m=masculino");

		}

		estadoCivil = prompt("ingrese un estado civil (soltero,viudo, casado")
		while (estadoCivil != 'soltero' && estadoCivil != 'viudo' && estadoCivil != 'casado') {
			estadoCivil = prompt("estado civil invalido, los validos son soltero,viudo o casado");

		}





		//---------------------------a----------------------------+
		if ((sexo == 'm' && edad < edadDelMasJoven && estadoCivil == 'casado') || flagDelMasJoven == 0) {

			nombreDelMasJovenCasado = nombre;

			flagDelMasJoven++

		}

		//--------------------------b-------------------------------

		if (edad >= edadDelMasViejo || flagDelMasViejo == 0) {
			edadDelMasViejo = edad;

			sexoDelMasViejo = sexo;

			nombreDelMasViejo = nombre;

			flagDelMasViejo++

		}



		//--------------------------c-------------------------------
		if (sexo == 'f' && (estadoCivil == 'casado' || estadoCivil == 'viudo')) {
			contadorMujeresViudasxCasadas++

		}

		//-------------------------d-------------------------------
		if (sexo == 'f') {
			acumuladorEdadMujeres = edad + acumuladorEdadMujeres;
			contadorTodasLasMujeres++



		}

		//-------------------------e--------------------------------

		if (sexo == 'm' && estadoCivil == 'soltero') {
			acumuladorEdadHombresSolteros = edad + acumuladorEdadHombresSolteros;
			contadorHombresSolteros++

		}
















		validador = prompt("si desea continuar ingrese 's'");
	} while (validador == 's');





	document.write("a- el nombre del casado mas joven es " + nombreDelMasJovenCasado + "</br>");
	document.write("b- el sexo del pasajero/a mas viejo es  " + sexoDelMasViejo + "y su nombre " + nombreDelMasViejo + "</br>");
	document.write("c-la cantidad de mujeres casadas o viudas es de  " + contadorMujeresViudasxCasadas + "</br>");
	document.write("d-el promedio de edad entre las mujeres  " + (acumuladorEdadMujeres / contadorTodasLasMujeres) + "</br>");





	/*TEST

	NOMBRE       EDAD           SEXO          ESTADO CIVIL

	H            22             M                CASADO
	R            18            F               casado
	T            18             M              VIUDO
	Y             23           M                CASADO
	U            25            f                soltero
	O            33           f                 viudo

	
	
	
	







}

*/

function mostrar() {


}










































/*
function mostrar() {

	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var validador = 's';
	var elMasJoven;
	var flagEdadJoven = 0;
	var nombreDelMasJovenCasado;
	var elMasViejo;
	var sexoDelMasViejo;
	var nombreDelMasViejo;
	var contadorMujeresViudasxCasadas = 0;
	var contadorTodasLasMujeres = 0;
	var acumuladorEdadMujeres = 0;
	var contadorTodosLosHombresSolteros = 0;
	var acumuladorEdadHombresSolteros = 0;
	var flagMasViejo=0;
	var noExistenSolteros=0;







	do {




		nombre = prompt("ingrese un nombre");






		edad = parseInt(prompt("ingrese una edad mayor de 18"));
		while (isNaN(edad) || edad < 18) {
			edad = parseInt(prompt("error- la edad tiene que ser mayor a 18"));
		}








		sexo = prompt("ingrese un sexo (f=femenino, m=masculino)");
		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("sexo invalido, ingrese f para femenino y m para masculino");
		}





		estadoCivil = prompt("ingrese un estado civil, los validos son: soltero, casado o viudo");
		while (estadoCivil != 'casado' && estadoCivil != 'viudo' && estadoCivil != 'soltero') {
			estadoCivil = prompt("estado civil invalido, ingrese casado, soltero o viudo");
		}





		///--------------------------------a-----------------------------


		if ((estadoCivil == 'casado') && (flagEdadJoven == 0 || edad < elMasJoven)) {

			nombreDelMasJovenCasado = nombre;
			flagEdadJoven++



		}

		///-------------------------------b----------------------------





		if (edad > elMasViejo || flagMasViejo==0) {
			elMasViejo = edad;

			sexoDelMasViejo = sexo;
			nombreDelMasViejo = nombre;

		}



		///------------------------------c------------------------------


		if ((estadoCivil == 'casado' || estadoCivil == 'viudo') && (sexo == 'f')) {

			contadorMujeresViudasxCasadas++;

		}






		///-----------------------------d-------------------------------



		if (sexo == 'f') {

			contadorTodasLasMujeres++
			acumuladorEdadMujeres = edad + acumuladorEdadMujeres;

		}







		//----------------------------e----------------------------------



		if (sexo == 'm' && estadoCivil == 'soltero') {

			contadorTodosLosHombresSolteros++;
			acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edad;
			noExistenSolteros++


		}







		validador = prompt("si desea continuar ingrese 's'");

	} while (validador == 's');


	alert(acumuladorEdadHombresSolteros);
	alert(contadorTodosLosHombresSolteros);












	document.write("a)el nombre del hombre casado mas joven es: " + nombreDelMasJovenCasado + "</br>");
	document.write("b)el sexo del pasajero mas viejo es: " + sexoDelMasViejo + " y su nombre es: " + nombreDelMasViejo + "</br>");
	document.write("c)la cantidad de mujeres casadas o viudas es " + contadorMujeresViudasxCasadas+"</br>");
	document.write("d)el promedio de edad entre las mujeres es de " + (acumuladorEdadMujeres / contadorTodasLasMujeres) + "</br>");
	if (noExistenSolteros==1) {

		document.write("e)el promedio de edad entre los hombres solteros es " +(acumuladorEdadHombresSolteros / contadorTodosLosHombresSolteros)+ "</br>");


	}
	else{
		document.write("e)no existe ningun soltero");

	}



	  nombre    edad        sexo                  estado civil
		  juan      18          m                      soltero
		  hernesto  19          m                      casado
		  josefina  20          f                      soltero
		  maria     34          f                      viuda
		  hernesta  50          f                      casado






*/


function mostrar() {

	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var validador = 's';
	var flagDelMasJoven = 0;
	var edadDelMasJoven;
	var nombreDelMasJoven;
	var edadDelMasViejo
	var flagDelMasViejo = 0;
	var sexoDelMasViejo;
	var nombreDelMasViejo;
	var contadorMujeresViudasxCasadas = 0;
	var contadorHombresSolteros = 0;
	var contadorTodasLasMujeres = 0;
	var acumuladorEdadMujeres = 0;
	var acumuladorEdadHombresSolteros = 0;
	var validadorPromedioHombres = 0;
	var validadorPromedioMujeres = 0;



	do {

		nombre = prompt("ingrese un nombre");



		edad = parseInt(prompt("ingrese una edad"));
		while (isNaN(edad) || edad <= 17) {
			edad = parseInt(prompt("la edad debe ser un numero mayor a 18"));

		}

		sexo = prompt("ingrese un sexo. (f=femenino, m=masculino)");
		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("sexo invalido, ingrese uno valido (f=femenino, m=masculino)");

		}


		estadoCivil = prompt("ingrese un estado civil. (soltero, casado, viudo)");
		while (estadoCivil != 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo') {

			estadoCivil = prompt("estado civil invalido, ingrese uno valido los validos son: (soltero,casado viudo)");

		}



		//-------------------------------------------------------------------------------------------------	

		if ((sexo == 'm' && estadoCivil == 'casado') && (edad < edadDelMasJoven || flagDelMasJoven == 0)) {
			edadDelMasJoven = edad;
			nombreDelMasJoven = nombre;


			flagDelMasJoven++

		}



		//--------------------------------------------------------------------------------------------------

		if (sexo == 'm' && estadoCivil == 'soltero') {

			contadorHombresSolteros++;
			acumuladorEdadHombresSolteros = edad + acumuladorEdadHombresSolteros;
			validadorPromedioHombres++;

		}

		//--------------------------------------------------------------------------------------------------


		if (edad > edadDelMasViejo || flagDelMasViejo == 0) {

			edadDelMasViejo = edad;
			nombreDelMasViejo = nombre;
			sexoDelMasViejo = sexo;
			flagDelMasViejo++;


		}

		//--------------------------------------------------------------------------------------------------


		if (sexo == 'f' && estadoCivil == 'casado' || estadoCivil == 'viudo') {

			contadorMujeresViudasxCasadas++


		}


		//--------------------------------------------------------------------------------------------------


		if (sexo == 'f') {
			contadorTodasLasMujeres++;
			acumuladorEdadMujeres = edad + acumuladorEdadMujeres;
			validadorPromedioMujeres++;


		}







		validador = prompt("si desea continuar ingrese 's'");
	} while (validador == 's');
	//--------------------------------------------------------------------------------------------------





	document.write("a-el nombre del casado mas joven es " + nombreDelMasJoven + "</br>");
	document.write("b-el sexo del pasajero/a mas viejo es " + sexoDelMasViejo + " y su sexo es " + nombreDelMasViejo + "</br>");
	document.write("c-la cantidad de mujeres casadas o viudas es de " + contadorMujeresViudasxCasadas + "</br>");

	if (validadorPromedioMujeres == 0) {
		document.write("d- el promedio de edad entre las mujeres es " + acumuladorEdadMujeres + "</br >");

	}
	else {
		document.write("d- el promedio de edad entre las mujeres es " + (acumuladorEdadMujeres / contadorTodasLasMujeres) + "</br >");
	}

	if (validadorPromedioHombres == 0) {
		document.write("e-el promedio de edad entre los hombres solteros es de: " + acumuladorEdadHombresSolteros + "</br >");


	}
	else {
		document.write("e-el promedio de edad entre los hombres solteros es de: " + (acumuladorEdadHombresSolteros / contadorHombresSolteros) + "</br >");
	}




	/* TEST
	NOMBRE           EDAD         SEXO               ESTADOCIVIL
	A                25           m                    casado
	s                22           m                    soltero
	r                20           f                     viudo
	t                22           m                     soltero
	y                20           f                     casado



*/


}


