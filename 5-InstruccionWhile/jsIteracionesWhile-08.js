/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
/*
let pregunta = "si";
let numero;
let acumulador = 0;
let acumuladorSuma = 0;
let acumuladorProducto = 1;
let suma;
let contador = 0;
let positivos;
let negativos;

while (pregunta == "si") {
	
	numero = parseInt(prompt("Ingrese numero"));

	pregunta = prompt("Desea ingresar mas numeros?")

	acumuladorSuma = acumuladorSuma + numero;

	acumuladorProducto = acumuladorProducto * numero

}
if (numero > 0) {
	acumuladorSuma = acumuladorSuma + numero
}
else {
	acumuladorProducto = acumuladorProducto * numero
}



document.getElementById("txtIdSuma").value = acumuladorSuma;
document.getElementById("txtIdProducto").value = acumuladorProducto;

alert("Muchas gracias por participar")

*/

let pregunta = `s`;
let numero;
let acumulador = 0;
let acumuladorP = 1;
let flag = 0;

while (pregunta == `s`) {
	numero = parseInt(prompt("Ingrese un numero"));

	if (numero > 0) {
		acumulador = acumulador + numero;
	}
	else {
		flag == 1
		acumuladorP = acumuladorP * numero
	}

	pregunta = prompt("Desea ingresar otro numero?")
}

if (flag == 0) {
	acumuladorP = 0
}
document.getElementById("txtIdSuma").value = acumulador;
document.getElementById("txtIdProducto").value = acumuladorP;

alert("Gracias por participar")

}//FIN DE LA FUNCIÓN
/*

*/