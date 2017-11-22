var ace;
var miBody;

var cajas;
var caja;

var campo1, campo2;

var forma, clave1, clave2;

//Funciones
function enciende(campo) {
    campo.setAttribute("class", "enciende")
}
function apaga(campo) {
    campo.setAttribute("class", "apaga")
}

window.onload = function() {
    //Instancia
    ace = document.getElementById("ace");

    //Listener para la imagen
    ace.onclick = function() {
        alert("Ace, hermano de Luffy");
    }

    ace.onmouseover = function () {
        miBody = document.getElementsByTagName("body");
        miBody[0].setAttribute("class", "rojo");

    }

    ace.onmouseout = function () {
        miBody = document.getElementsByTagName("body");
        miBody[0].setAttribute("class", "blanco")
    }

    cajas = document.getElementsByTagName("input")
    cajas[0].onselect = function () {
        miBody = document.getElementsByTagName("body")
        miBody[0].setAttribute("class", "rojo")
    }
    cajas[1].onselect = function () {
        miBody = document.getElementsByTagName("body")
        miBody[0].setAttribute("class", "verde")
    }
    cajas[2].onselect = function () {
        miBody = document.getElementsByTagName("body")
        miBody[0].setAttribute("class", "amarillo")
    }
    cajas[3].onselect = function () {
        miBody = document.getElementsByTagName("body")
        miBody[0].setAttribute("class", "azul")
    }

    caja = document.getElementById("caja");

    caja.onkeyup = function () {
        caja.value = caja.value.toUpperCase();
    }


    campo1 = document.getElementById("campo1");
    campo2 = document.getElementById("campo2");

    campo1.onfocus = function () {
        enciende(campo1)
    }
    campo1.onblur = function () {
        apaga(campo1)
    }
    campo2.onfocus = function () {
        enciende(campo2)
    }
    campo2.onblur = function () {
        apaga(campo2)
    }

    forma = document.getElementById("forma");
    clave1 = document.getElementById("clave1");
    clave2 = document.getElementById("clave2");

    //Listeners para detectar el envio de la forma
    forma.onsubmit = function () {
        var valor1 = clave1.value;
        var valor2 = clave2.value;

        //Verificar que no esten vacios los campos
        if(valor1=="" || valor2=="")
        {
            alert("Claves erróneas")
        }
        else if(valor2!=valor1)
        {
            alert("Claves no coinciden")
        }
        else
            alert("Claves correctas, enviando la información")
    }
}