
var nombres, apellidos, email, edad, asistencia, fechaInicio;

var forma, miBody;

//Funciones
function enciende(campo) {
    campo.setAttribute("class", "enciende")
}
function apaga(campo) {
    campo.setAttribute("class", "apaga")
}

window.onload = function() {
    nombres = document.getElementById("nombres")
    apellidos = document.getElementById("apellidos")
    email = document.getElementById("email")
    edad = document.getElementById("edad")
    asistencia = document.getElementById("asistencia")
    fechaInicio = document.getElementById("fechaInicio")
    forma = document.getElementById("form")

    nombres.onfocus = function () {
        enciende(nombres)
    }
    nombres.onblur = function () {
        apaga(nombres)
    }
    apellidos.onfocus = function () {
        enciende(apellidos)
    }
    apellidos.onblur = function () {
        apaga(apellidos)
    }
    email.onfocus = function () {
        enciende(email)
    }
    email.onblur = function () {
        apaga(email)
    }
    edad.onfocus = function () {
        enciende(edad)
    }
    edad.onblur = function () {
        apaga(edad)
    }
    asistencia.onfocus = function () {
        enciende(asistencia)
    }
    asistencia.onblur = function () {
        apaga(asistencia)
    }
    fechaInicio.onfocus = function () {
        enciende(fechaInicio)
    }
    fechaInicio.onblur = function () {
        apaga(fechaInicio)
    }

    nombres.onkeyup = function () {
        nombres.value = nombres.value.toUpperCase();
    }

    apellidos.onkeyup = function () {
        apellidos.value = apellidos.value.toUpperCase();
    }

    nombres.onmouseover = function () {
        miBody = document.getElementsByTagName("body");
        miBody[0].setAttribute("class", "rojo");

    }

    nombres.onmouseout = function () {
        miBody = document.getElementsByTagName("body");
        miBody[0].setAttribute("class", "blanco")
    }

    apellidos.onselect = function () {
        miBody = document.getElementsByTagName("body")
        miBody[0].setAttribute("class", "verde")
    }
    apellidos.onselect = function () {
        miBody = document.getElementsByTagName("body")
        miBody[0].setAttribute("class", "azul")
    }


    forma.onsubmit = function () {
        alert("Su nombre completo es: "+nombres.value+" "+apellidos.value+"\nSu email es: "+email.value+"\nSu edad es: "+edad.value+
            "\nSu horario de asistencia es: "+asistencia.value+"\nSu fecha de inicio es: "+fechaInicio.value);
    }

}