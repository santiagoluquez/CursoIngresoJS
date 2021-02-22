function mostrar()
{
let destino

destino = document.getElementById("txtIdDestino").value;

switch (destino) {
	case "Bariloche":
		alert("Este");
		break;
	
	case "Mar del Plata":
		alert("Oeste");
		break;

	case "Cataratas":
		alert("Norte");
		break;

	case "Usuahia":
		alert ("Sur");
		break;

	default:
		break;
}

}