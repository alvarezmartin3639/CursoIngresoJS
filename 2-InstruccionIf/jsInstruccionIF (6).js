function mostrar()
{
var edad;

edad=parseInt(document.getElementById("edad").value);
/*
if (edad > 18) {

    alert("Sos mayor de edad");
    
}

if (edad >= 13 && edad < 17) {

    alert("Sos adolecente");

    
}

if (edad >13) {

    alert("sos niño");
    
}
ESTO ESTÀ MAL, SE USA ELSE IF*/


// Asì se redacta correctamente
if (edad<13) {
    alert("sos niño");
    
}

else if (edad >17) {
    alert("sos adulto");
    
}

else {

    alert("sos adolecente");
}

}//FIN DE LA FUNCIÓN