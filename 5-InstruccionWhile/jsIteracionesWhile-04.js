/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
    /*
let clave;

clave = parseInt(prompt("Ingrese numero"));

while (clave >= 9 || clave <= 0) {
    
    alert("Numero invalido");

    clave = prompt("Reingrese numero");

}

document.getElementById("txtIdNumero").value = clave
*/
let clave;

clave = parseInt(prompt("Ingrese numero"));

while (clave >= 0 && clave <=9) {
    
    alert("Numero invalido");

    clave = prompt("Reingrese numero");

}

document.getElementById("txtIdNumero").value = clave
}//FIN DE LA FUNCIÓN