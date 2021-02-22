function mostrar()
{

let destino

destino = document.getElementById("txtIdDestino").value;
	
switch (destino) {
	case "Bariloche":
		alert("Hace frio");
		break;
	
	case "Mar del Plata":
		alert("Hace calor");
		break;

	case "Cataratas":
		alert("Hace calor");
		break;

	case "Usuahia":
		alert ("Hace frio");
		break;

}
}