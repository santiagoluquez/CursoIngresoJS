function mostrar()
{
const PRECIO = 15000;
let estacion;
let destino;
let precioFinal;
let indice;

estacion = document.getElementById("txtIdEstacion").value;
destino = document.getElementById("txtIdDestino").value;


switch (estacion) {
	case "Invierno":
		if (destino == "Bariloche") {
			indice = 1.2;

		} 
		else if (destino == "Cataratas") {
			indice = 0.9;
		} 
		else if (destino == "Cordoba") {
			indice = 0.9;
		}
		else{
			indice = 0.80;
		}
		
		break;

	case "Verano":
		if (destino == "Bariloche") {
			indice = 0.8;

		} 
		else if (destino == "Cataratas") {
			indice = 1.1;
		} 
		else if (destino == "Cordoba") {
			indice = 1.1;
		}	
		else{
			indice = 1.2;
		}
		break;

	case "Primavera":
	case "Otoño":
		if (destino == "Bariloche") {
			indice = 1.1;
		} 
		else if (destino == "Cataratas") {
			indice = 1.1;

		}
		else if (destino == "Mar del plata") {
			indice = 1.1;
		} 
		else{
			indice = 0
		}
		break;
}
if (indice != 0) {
	precioFinal = PRECIO * indice
	alert (precioFinal);
}
else {

	alert (PRECIO)
}





}