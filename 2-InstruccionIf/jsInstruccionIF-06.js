function mostrar()
{
/*	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		
		alert("Es mayor de edad")
	}

	if (edad > 13 && edad <18) {

		alert("Es adolescente")
		
	}

	if (edad < 13) {

		alert("Es niño")
		
	}


let edad

edad = parseInt(document.getElementById("txtIdEdad").value);

if (edad >= 18) {
	
	alert("Es mayor de edad")

} 	else { if (edad > 13 && edad <18) {

		alert("Es adolescente")
	
} 			else {

				alert("Es niño")
	
}
	
}
*/
let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

if (edad <13 ) {

	alert("Es niño")
	
} 

else if (edad <18) {
	
	alert("Es adolescente")
	
}

else if (edad <65) {

	alert("Es adulto")
}

else {
	alert("Es anciano")
}
}