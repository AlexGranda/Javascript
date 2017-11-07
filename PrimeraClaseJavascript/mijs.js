var nombre = prompt("¿Cuál es tu nombre?");
var saludo = "Bienvenido ";
alert(saludo+nombre);
var user = "Alex";

if(nombre=="Alex")
{
    alert("Bienvenido "+nombre);
}
else {
    if(nombre=="jonni")
    {
        alert("Protocolo de seguridad, espere un chance")
    }
    else
    {
        alert("Acceso Denegado");
    }

}

var dinero = 100;
var auto = true;
var amiga = "Lola";

if(dinero>150 && auto==true && amiga != "Lola")
{
    alert("Voy al cine con "+amiga)
}
else if(dinero<=100 && auto == false && amiga == "Martha")
{
    alert("Voy a tomar un cafe con "+amiga)
}
else if (dinero<=100 && auto==true && amiga=="Lola")
{
    alert("Voy al teatro con Lola (ella paga)")
}
else
    alert("Me quedo a ver el futbol solo")

var estadoCivil = "casado";
var mensaje = "";

switch (estadoCivil){
    case "soltero":
        mensaje = "Eres soltero";
        break
    case "casado":
        mensaje = "Eres casado we q triste";
        break
    case "union libre":
        mensaje = "O casate o termina con eso we q feo";
        break
    case "divorciado":
        mensaje = "Disfruta tu nueva soltería we";
        break
    case "viudo":
        mensaje = "Chanquilo we, todo pasa";
        break
    default:
        mensaje = "opcion inválida";
        break
}

var mensaje3 = " en una extraordinaria experiencia en la selva"

document.write(mensaje+"<br><br>"+mensaje3)

var importe = 1000;
var tipoCambio = 13.50;
var total = (tipoCambio>0)? importe * tipoCambio : tipoCambio;
var mensaje = (tipoCambio>0)? ", tipo de cambio "+tipoCambio: "";
document.write("El total de tu pedido es "+total+mensaje)