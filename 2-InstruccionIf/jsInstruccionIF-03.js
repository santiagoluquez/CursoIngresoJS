function mostrar()
{
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad>=18) {
		alert("es mayor de edad")
		
	} else {
		alert("no es mayor de edad")
	}

/*Prueba como alternativa sin usar el if else

let edad

edad = parseInt(document.getElementById("txtIdEdad").value);

if (edad>= 18 ) {
	alert("es mayor de edad")}
	
if (edad< 18 ) {
	alert("es menor de edad")}

	*/
}
