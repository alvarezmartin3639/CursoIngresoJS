
function mostrar() {
	var productos;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var contadorProductos=0;
	var contadorJabón=0;
	var contadorBarbijo=0;
	var ContadorAlcohol=0;
	var maximoBarbijo;
	var fabricanteBarbijoMasCaro;
	var unidadBarbijoMasVendido;
	var flagBarbijo=0;
	var unidadMayor;
	var flagUnidad=0;
	var unidadMayorFabricante;

	

	for (contadorProductos = 0; contadorProductos < 5; contadorProductos++) {


		productos = prompt("ingrese baribjo,jabón o alcohol");
		while (productos != 'barbijo' && productos != 'jabón' && productos != 'alcohol') {
			productos = prompt("error-producto invalido, los validos son barbijo, jabón y alcohol");


		}


		precio = parseInt(prompt("ingrese un pecio"));
		while (precio < 100 || precio >= 300) {
			precio = parseInt(prompt("error-precio invalido, ingrese uno entre 100 y 300"));

		}


		unidades = parseInt(prompt("Ingrese la cantidad de unidades a comprar"));
		while (unidades < 0 || unidades > 1000) {
			unidades = parseInt(prompt("Error- tiene que ser un numero de entre 0 a 1000"));

		}


		marca = prompt("ingrese la marca");

		fabricante=prompt("ingrese el fabricante");






		if (productos=='barbijo' && flagBarbijo==0 || maximoBarbijo<precio) {
			maximoBarbijo=precio;
			fabricanteBarbijoMasCaro=fabricante	
			unidadBarbijoMasVendido=unidades;
			flagBarbijo++
			contadorBarbijo++
		}

		if (unidades>unidadMayor || flagUnidad==0 ) {

			unidadMayor=unidad;

			unidadMayorFabricante=fabricante;
		}

		if (productos=="jabón") {
			contadorJabón++
		}



			





			



	}





}

/*usar var con nombres largos */
