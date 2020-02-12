function mostrar()
{var edad;

    edad=parseInt(document.getElementById("edad").value);

    if (!(edad < 12 || edad >18)) {

        alert("No sos adolecente");
        
    }

}//FIN DE LA FUNCIÓN