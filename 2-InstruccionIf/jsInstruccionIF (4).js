function mostrar() {
    var edad;


    edad = parseInt(document.getElementById("edad").value)

    // Con && "y" , diciendolo de la forma directa

    /*  if (edad >= 13 && edad <18) {
  
          alert("sos adolecente");
          
      }  
  */

    //Con || "or", diciendolo de la forma indirecta

    if (!(edad < 13 || edad > 17)) {

        alert("es un adolecente");
    }


}//FIN DE LA FUNCIÓN