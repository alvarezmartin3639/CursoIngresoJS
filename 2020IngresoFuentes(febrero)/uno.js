


/*
var producto;
var precio;
var unidades;
var marca;
var fabricante;
var vueltasFor;
var barbijoMasCaro;
var unidadesBarbijoMasCaro;
var fabricanteBarbijoMasCaro;
var flagBarbijo=0;
var unidadesMayor;
var fabricanteUnidadesMayor;
var flagUnidad=0;
var contadorJabón=0;
	


for (vueltasFor = 0; vueltasFor < 5; vueltasFor++) {





	producto = prompt("ingrese barbijo, jabón o alcohol");
	while (producto != 'barbijo' && producto != 'jabón' && producto != 'alcohol') {

		producto = prompt("producto invalido, ingrese barbijo, jabón o alcohol");

	}





	precio = parseInt(prompt("ingrese un precio (min 100, max 300)"));
	while (isNaN(precio) || precio > 300 || precio < 100) {

		precio = parseInt(prompt("precio invalido, el precio debe ser entre 100 y 300"));

	}




	unidades = parseInt(prompt("ingrese la cantidad de unidades"));
	while (isNaN(unidades) || unidades <= 0 || unidades >= 1001) {
		unidades = parseInt(prompt("unidades invalidas, tiene que ser mayor de 0 y menor de 1000"));

	}



	marca=prompt("ingrese una marca");


	fabricante=prompt("ingrese un fabricante");








	if ((producto=='barbijo') && (precio>=barbijoMasCaro || flagBarbijo=='0')) {
		unidadesBarbijoMasCaro=unidades;
		fabricanteBarbijoMasCaro=fabricante;
		flagBarbijo++
		barbijoMasCaro=precio;
		
	}

	if (unidades>unidadesMayor || flagUnidad==0) {
		fabricanteUnidadesMayor=fabricante;
		unidadesMayor=unidades;
		flagUnidad++;

	}

	if (producto=='jabón') {

		contadorJabón++;

		
	}

	



		







}

document.write("A- Del mas caro de los barbijos, la cantidad de unidades fueron: "+ unidadesBarbijoMasCaro+ " y el fabricante fue "+ fabricanteBarbijoMasCaro + "</br>");
document.write("B-del item con mas unidades, el fabricante fue " + fabricanteUnidadesMayor+ "</br>");
document.write("C-Las cantidad de unidades de jabón son: " + contadorJabón);

*/





















function mostrar() {

	var index;
	var producto;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var precioBarbijoMasCaro;
	var flagBarbijo=0;
	var fabricanteBarbijoMasCaro;
	var unidadesBarbijoMasCaro;
	var unidadesMayorNumero;
	var flagUnidades=0;
	var contadorJabón=0;
	var fabricanteUnidadesMayor;


	for (index = 0; index < 5; index++) {
//------------------------------------------------------------------------------------------		

		producto=prompt("ingrese un producto, los validos son 'barbijo', 'alcohol' o 'jabón'");
		while (producto!='barbijo' && producto!='alcohol' && producto!='jabón') {
			producto=prompt("producto invalido, los validos son 'barbijo', 'alcohol' o 'jabón'");
			
		}

		precio=parseInt(prompt("ingrese un precio entre 100 y 300"));
		while (isNaN(precio) || precio<=99 || precio>=301) {
			precio=parseInt(prompt("precio invalido, ingrese uno entre 100 y 300"));
			
		}

		unidades=parseInt(prompt("ingrese las unidades"));

		while (unidades<=0 || unidades>=1001 || isNaN(unidades)) {
			unidades=parseInt(prompt("unidades invalidas, debe ser mayor a 0 y menor o igual a 1000"));

			
		}

		marca=prompt("ingrese una marca");

		fabricante=prompt("ingrese un fabricante");


//---------------------------------A-------------------------------------------------------



		if ((producto=='barbijo') && (precio>precioBarbijoMasCaro || flagBarbijo==0)) {
			precioBarbijoMasCaro=precio;
			fabricanteBarbijoMasCaro=fabricante;
			unidadesBarbijoMasCaro=unidades;
			flagBarbijo++;
			
		}

//---------------------------------B-------------------------------------------------------



		if (unidades>unidadesMayorNumero || flagUnidades==0) {
			unidadesMayorNumero=unidades;
			fabricanteUnidadesMayor=fabricante;

			flagUnidades++;
			
		}

//--------------------------------C--------------------------------------------------------




		if (producto=='jabón') {
			contadorJabón++
			
		}



		
		
	}
//---------------------------------------------------------------------------------------------	

document.write("a-del mas caro de los barbijo la cantidad de unidades fueron: " + unidadesBarbijoMasCaro + " y el fabricante fue: "+ fabricanteBarbijoMasCaro+"</br>");
document.write("b-del item con mas unidades, el fabricante fue  "+ fabricanteUnidadesMayor+"</br>");
document.write("c-la cantidad de jabónes en total fueron: "+contadorJabón+"</br>");



/* TEST         

PRODUCTO         PRECIO          UNIDADES          MARCA          FABRICANTE

BARBIJO          222              222               a                 s
alcohol          255             255                d                f
barbijo          221              122               g               h
jabón            111              100                k               l
alcohol          300               300              q               w 


}