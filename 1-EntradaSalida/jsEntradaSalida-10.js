/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	let importe;
	let resultado;
	
	importe = document.getElementById("txtIdImporte").value;

	//uso parseFloat porque el importe puede ser un valor decimal
	importe = parseFloat(importe);

	resultado = importe *0.75

	document.getElementById("txtIdResultado").value = resultado;

}
