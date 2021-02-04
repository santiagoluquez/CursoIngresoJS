/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo;
	let resultado;
	
	sueldo = document.getElementById("txtIdSueldo").value;

	//uso parseFloat porque el sueldo puede ser un valor decimal
	sueldo = parseFloat(sueldo);

	resultado = sueldo *1.1

	document.getElementById("txtIdResultado").value = resultado;


}
