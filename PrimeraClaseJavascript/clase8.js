var i = 0;


while(i<10)
{
    document.write(i+"<br>");
    i = i+1;
}

i=10;
while(i>0)
{
    document.write(i+"<br>");
    i--;
}

var clave="";

do{
    clave = prompt("Clave de acceso")
}while (clave!="007")

document.write("Bienvenido, Agente 007")

for(i=0;i<10;i++)
{
    document.write("El valor de i es:"+i+"<br>");
}

document.write("El valor final de i es: "+i+"<br>")

for(i=1;i>10;i--)
{
    if(i==4)
    {
        continue
    }
    document.write("El valor de i es: "+i+"<br>")
}

document.write("El valor final de i es: "+i+"<br>")

var numero =0
var intentos=0

while (numero!=7)
{
    numero = prompt("Adivina el numero magico menor o igual a 10")
    if(numero==7)
    {
        alert("El siete es el numero mágico")
        break
    }
    intentos++
    if(intentos==3)
    {
        alert("Lo sentimos, no eres un buen adivinador")
        break
    }
}

function saludo(miNombre, fecha) {
    alert("Hola, "+miNombre+" "+fecha)
}

var nombre = "";

nombre = prompt("¿Cuál es tu nombre?")

saludo(nombre, Date())

var total = 10000
var valorIVA = 0.12;

function calcularIVA(total, IVA) {
    return (total + (total*IVA))
}

var resultado = calcularIVA(total, valorIVA)

document.write("El valor total sin IVA es: "+total+"<br>")
document.write("El valor total con IVA es: "+resultado+"<br>")

var a = 6
var b = 6
var c = a + b;

alert(c)

var nombre = "Alexandra"

alert(nombre.length)

function validarEmail(emailIngresado, emailGuardado) {
   if(emailIngresado.length<6)
       alert("Email no válido, menor a 6 caracteres")
    else if(emailIngresado!=emailGuardado)
        alert("Acceso denegado")
    else if(emailIngresado==emailGuardado)
        alert("Email correcto, bienvenido")
    else
        alert("Email invalido")
}

var emailIAIngresar = prompt("Ingrese su email")
var emailGuardado = "alex_a-gc@hotmail.com"

validarEmail(emailIAIngresar, emailGuardado)


