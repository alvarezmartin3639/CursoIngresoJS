function mostrar() {
    var nota;
    var notasuma;
    var peorNota = 0;
    var sexoPeor;
    var sexo;
    var sexoynota;
    var flag=0;





    for (var alumnos = 0; alumnos <= 5; alumnos++) {

        nota = parseInt(prompt("Ingrese las notas del alumno"));
        sexo = prompt("Ingrese el sexo del alumno");

        while (nota < 0 || nota > 10) {

            nota=parseInt(prompt("nota invalida seleccionar otra"))
        }

        sexo = prompt("Ingrese el sexo del alumno").value;

        while (sexo != 'f' || sexo != 'm') {

            

        }




        notasuma = notasuma + nota;

        if (nota < peorNota || flag==0) {

            sexoPeor = sexo;





        }

        alert("a- "(notasuma / alumnos) + "b- ");


    }



}
