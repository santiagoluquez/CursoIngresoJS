function mostrar()
{
/*
let mes

mes = document.getElementById("txtIdMes").value;

switch (mes) {
	case "Febrero":
		alert("Este mes tiene 29 dias")
		break;

	case "Enero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	case "Septiembre":	
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Este mes tiene 30 dias o másS")
		break;


let mes

mes = document.getElementById("txtIdMes").value;

if (mes == "Febrero") {
	alert("Este mes no tiene mas de 29 dias")
} else {
	alert("Este mes tiene 30 dias o mas")
}
*/

// Esta opcion es valida unicamente porque los valores son cargados de una lista desplegable, 
// si fuese un cuadro de texto no seria posible porque el usuario puede cargar cualquier valor y 
// cairia siempre en el "default"
let mes

mes = document.getElementById("txtIdMes").value;

switch (mes) {
	case "Febrero":
		alert ("Este mes no tiene mas de 29 dias")
		break;

	default:
		alert("Este mes tiene tiene mas de 30 dias")
		break;
}




}//FIN DE LA FUNCIÓN