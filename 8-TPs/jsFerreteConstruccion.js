/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var entradaLargo;
    var entradaAncho;

    entradaLargo=parseInt(document.getElementById("Largo").value);
    entradaAncho=parseInt(document.getElementById("Ancho").value);

    alert("se necesitan " + (((entradaLargo+entradaAncho)*2)*3) + " metros de alambres");



    

}
function Circulo () 
{
    var entradaRadio;

    entradaRadio=parseInt(document.getElementById("Radio").value);

    alert("Se necesitan " + ((entradaRadio*2)*3) + " metros de alambres");
	
}
function Materiales () 
{
    var entradaLargo;
    var entradaAncho;
    var superficie;

    entradaLargo=parseInt(document.getElementById("Largo").value);
    entradaAncho=parseInt(document.getElementById("Ancho").value);

    superficie=entradaLargo*entradaAncho;



    alert("se necesitan " + superficie*2  +" bolsas de cemento y " + superficie*3 + " bolsas de cal");
	
}