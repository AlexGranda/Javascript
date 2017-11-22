var misLI = document.getElementsByTagName("li");
document.write("El número de elementos en la lista son: "+misLI.length+"<br>");

var misDOM = document.getElementById("dom");
document.write("El numero de nodos de lista son: "+misDOM.childNodes.length+"<br>");
document.write("El contenido del nodo es: "+misDOM.innerHTML+"<br>")

document.write("El tipo de nodo es: "+misDOM.nodeType+"<br>")

var i;

window.onload =  function(){
    var rojos = document.getElementsByClassName("rojo");
    alert("Elementos que tienen la clase 'rojo' son: "+rojos.length+"<br>");
    for(i=0; i<rojos.length;i++)
    {
        alert("El contenido es: "+rojos[i].innerHTML);
    }
}