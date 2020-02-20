function mostrar()
{

	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares;
	var promedioDeNegativos;
	var promedioDePositivos;
	var difposYneg;
	var validacionN;
	var numero;
	

	//declarar contadores y variables 

	do {
		numero=parseInt(prompt("Ingrese un numero"));

		validacionN=prompt("Si quiere salir ingrese un char")

		if (numero<0) { //1
			cantidadNegativos++
			sumaNegativos=sumaNegativos+numero;

			
		}
		if (numero>0) {//2
			cantidadPositivos++
			sumaPositivos=sumaPositivos+numero;

			
		}
		if (numero==0) {//3

			cantidadCeros++

			
		}
		
		promedioDeNegativos = sumaNegativos/cantidadNegativos;
		promedioDePositivos= promedioDePositivos/cantidadNegativos;
		difposYneg= sumaPositivos-sumaNegativos;

		
		



	
		
	} while (!(isNaN(validacionN)));

	document.write("1- La suma de engativos es " + sumaNegativos+"<br>2- La suma de positivos es" + sumaPositivos+ " <br>3- La cantidad de positivos son " + cantidadPositivos);
	
	



}//FIN DE LA FUNCIÓN