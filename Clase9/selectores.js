window.onload = function() {
    var rojos = document.querySelectorAll(".rojo");
    console.log("Tenemos "+rojos.length+" elementos rojos")

    var amarillos = document.querySelectorAll("#amarillo")
    console.log("Tenemos "+amarillos.length+" elementos amarillos")

    var verdes = document.querySelectorAll("p[class]")
    console.log("Tenemos "+verdes.length+" elementos verdes")

    var parrafos = document.querySelectorAll("p")
    console.log("Tenemos "+parrafos.length+" parrafos")

    var noexiste = document.querySelectorAll(".rojo, .noexiste")
    console.log("Tenemos "+noexiste.length+" elementos con la clase rojo o noexiste")

}