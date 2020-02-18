/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    /*
    var entradaCantidad;
    var entradaMarca;
    var descuento;

    entradaCantidad = parseInt(document.getElementById("Cantidad").value)*35;
    entradaMarca = document.getElementById("Marca").value;




    //A

    if (entradaCantidad >= 6) {
        

        descuento= entradaCantidad*50/100;

        document.getElementById("precioDescuento").value = entradaCantidad - descuento;





    }

    //B
    else if (entradaCantidad == 5 && entradaMarca == "ArgentinaLuz") {

        descuento= entradaCantidad*40/100;


        document.getElementById("precioDescuento").value = entradaCantidad - descuento;

    }

    else if (entradaCantidad == 5 && entradaMarca != "ArgentinaLuz") {

        descuento=entradaCantidad*30/100;

        document.getElementById("precioDescuento").value = entradaCantidad - descuento;

    }
    //C

    else if (entradaCantidad == 4 && entradaMarca == "ArgentinaLuz" || entradaMarca == "FelipeLamparas") {

        document.getElementById("precioDescuento").value = ((entradaCantidad * 35) * 25 / 100) + (entradaCantidad * 35);

    }

    else if (entradaCantidad == 4 && entradaMarca != "ArgentinaLuz" || entradaMarca != "FelipeLamparas") {

        document.getElementById("precioDescuento").value = ((entradaCantidad * 35) * 20 / 100) + (entradaCantidad * 35);

    }

    //D

    else if (entradaCantidad == 3 && entradaMarca == "ArgentinaLuz") {

        document.getElementById("precioDescuento").value = ((entradaCantidad * 35) * 25 / 100) - (entradaCantidad * 35);


    }

    else if (entradaCantidad == 3 && entradaMarca == "FelipeLamparas") {

        document.getElementById("precioDescuento").value = ((entradaCantidad * 35) * 10 / 100) - (entradaCantidad * 35);


    }

    else if (entradaCantidad == 3 && entradaMarca != "FelipeLamparas" || entradaMarca != "ArgentinaLuz") {

        document.getElementById("precioDescuento").value = ((entradaCantidad * 35) * 5 / 100) - (entradaCantidad * 35);


    }

    //E

     if (entradaCantidad > 120){

        var afip =entradaCantidad*35/100;

        

        document.getElementById("precioDescuento").value = entradaCantidad + afip;








        alert("Usted pagó " + entradaCantidad + " y se le suma gracias a impuestos " + afip );
    }
    */

    var entradaCantidad;
    var entradaMarca;
    var descuento;
    var afip;
    var precioFinal;


    entradaCantidad = parseInt(document.getElementById("Cantidad").value);
    entradaMarca = document.getElementById("Marca").value;

    //A
    if (entradaCantidad >= 6) {

        entradaCantidad = entradaCantidad * 35 //Precio sin descuento(de 6) = 210
        descuento = (entradaCantidad * 50) / 100;//Descuento = 105
        precioFinal = entradaCantidad - descuento;//Precio con descuento = 105

        document.getElementById("precioDescuento").value = precioFinal;
    }

    //B

    else if (entradaCantidad == 5 && entradaMarca == "ArgentinaLuz") {

        entradaCantidad = entradaCantidad * 35 //Precio sin descuento = 175
        descuento = (entradaCantidad * 40) / 100;//Descuento = 70
        precioFinal = entradaCantidad - descuento;//Precio con descuento = 105

        document.getElementById("precioDescuento").value = precioFinal;
    }


    else if (entradaCantidad == 5 && entradaMarca != "ArgentinaLuz") {

        entradaCantidad = entradaCantidad * 35 //Precio sin descuento = 175
        descuento = (entradaCantidad * 30) / 100;//Descuento = 52.5
        precioFinal = entradaCantidad - descuento;//Precio con descuento = 122.5

        document.getElementById("precioDescuento").value = precioFinal;
    }

    //C

    else if (entradaCantidad == 4 && entradaMarca == "ArgentinaLuz" || entradaMarca == "FelipeLamparas") {

        entradaCantidad = entradaCantidad * 35 //Precio sin descuento = 140
        descuento = (entradaCantidad * 25) / 100;//Descuento = 35
        precioFinal = entradaCantidad - descuento;//Precio con descuento = 105

        document.getElementById("precioDescuento").value = precioFinal;
    }


    else if (entradaCantidad == 4 && entradaMarca != "ArgentinaLuz" && entradaMarca != "FelipeLamparas") {

        entradaCantidad = entradaCantidad * 35 //Precio sin descuento = 140
        descuento = (entradaCantidad * 20) / 100;//Descuento = 28
        precioFinal = entradaCantidad - descuento;//Precio con descuento = 112

        document.getElementById("precioDescuento").value = precioFinal;
    }

    //D
    else if (entradaCantidad == 3 && entradaMarca == "ArgentinaLuz") {

        entradaCantidad = entradaCantidad * 35 //Precio sin descuento = 105
        descuento = (entradaCantidad * 15) / 100;//Descuento = 15.7
        precioFinal = entradaCantidad - descuento;//Precio con descuento = 89.3

        document.getElementById("precioDescuento").value = precioFinal;
    }

    else if (entradaCantidad == 3 && entradaMarca == "FelipeLamparas") {

        entradaCantidad = entradaCantidad * 35 //Precio sin descuento = 105
        descuento = (entradaCantidad * 10) / 100;//Descuento = 10.5
        precioFinal = entradaCantidad - descuento;//Precio con descuento = 94.5

        document.getElementById("precioDescuento").value = precioFinal;
    }

    else if (entradaCantidad == 3 && entradaMarca != "FelipeLamparas" && entradaMarca != "ArgentinaLuz") {

        entradaCantidad = entradaCantidad * 35 //Precio sin descuento = 105
        descuento = (entradaCantidad * 5) / 100;//Descuento = 5.25
        precioFinal = entradaCantidad - descuento;//Precio con descuento = 99.75

        document.getElementById("precioDescuento").value = precioFinal;
    }


    //E

    if (precioFinal > 120) {

        afip = (precioFinal * 10) / 100;

        document.getElementById("precioDescuento").value = precioFinal + afip;

        alert("Usted pagó " + precioFinal + " siendo " + afip + " el impuesto que pagó")




    }





















}
