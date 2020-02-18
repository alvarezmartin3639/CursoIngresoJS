/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



function Sumar() {

    var entradaNum1;
    var entradaNum2;
    var entradaNum3;

    entradaNum1 = parseInt(document.getElementById("PrecioUno").value);
    entradaNum2 = parseInt(document.getElementById("PrecioDos").value);
    entradaNum3 = parseInt(document.getElementById("PrecioTres").value);
    alert(entradaNum1 + entradaNum2 + entradaNum3);


}
function Promedio() {

    var entradaNum1;
    var entradaNum2;
    var entradaNum3;

    entradaNum1 = parseInt(document.getElementById("PrecioUno").value);
    entradaNum2 = parseInt(document.getElementById("PrecioDos").value);
    entradaNum3 = parseInt(document.getElementById("PrecioTres").value);

    alert((entradaNum1+entradaNum2+entradaNum3)/3)

}
function PrecioFinal() {

    var entradaNum1;
    var entradaNum2;
    var entradaNum3;
    var iva;

    entradaNum1 = parseInt(document.getElementById("PrecioUno").value);
    entradaNum2 = parseInt(document.getElementById("PrecioDos").value);
    entradaNum3 = parseInt(document.getElementById("PrecioTres").value);

    iva=((entradaNum1+entradaNum2+entradaNum3)*21)/100;

    alert(entradaNum1+entradaNum2+entradaNum3+iva);

}