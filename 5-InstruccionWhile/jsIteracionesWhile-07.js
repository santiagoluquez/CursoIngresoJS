/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
/*
let numero;
let acumulador = 0;
let respuesta;
let pregunta;

respuesta = prompt("Desea ingresar numeros?");

while (respuesta == "si") {
	

	numero = parseInt(prompt("Ingrese numero"))

	acumulador = acumulador + numero

	respuesta = prompt("Desea seguir ingresando numeros?");
}
alert ("Muchas gracias por participar")

document.getElementById("txtIdSuma").value = acumulador
document.getElementById("txtIdPromedio").value = acumulador/
*/

let numero;
let acumulador = 0;
let respuesta = "si"; //De esta manera manda entra directamente al while
let contador = 0



while (respuesta == "si") {
	

	numero = parseInt(prompt("Ingrese numero"))

	acumulador = acumulador + numero;

	respuesta = prompt("Desea seguir ingresando numeros?");

	contador++
}
alert ("Muchas gracias por participar")

document.getElementById("txtIdSuma").value = acumulador
document.getElementById("txtIdPromedio").value = acumulador/contador
}

//FIN DE LA FUNCIÓN