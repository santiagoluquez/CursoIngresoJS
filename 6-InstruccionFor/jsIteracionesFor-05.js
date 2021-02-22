function mostrar()
{
/* EN ESTA OPCION USE EL WHILE PORQUE NO SE LA CANTIDAD DE REPETICIONES QUE SE NECESITAN,
	let pregunta;

pregunta = parseInt(prompt("Ingrese numero del 0 al 9"))

while (pregunta != 9) {
	
	alert("Numero incorrecto")

	pregunta = parseInt(prompt("Ingrese otro numero"))
}
alert("Numero correcto")

*/


// EN ESTA OPCION USO EL FOR Y PARA ESCAPAR DEL BUCLE USO UN BREAK;

for (let i  ; i != 9 ; i = i)   {
	
	i = parseInt(prompt("Ingrese numero del 0 al 9"))

	if (i == 9) {
		alert("Numero correcto")

		break;	
	
	}

	alert("Numero incorrecto")
}
}//FIN DE LA FUNCIÓN