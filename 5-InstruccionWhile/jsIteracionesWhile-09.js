/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{

let numero;
let pregunta = `s`;
let maximo;
let minimo;	
flag = 0;

while (pregunta == `s`) {
	numero = parseInt(prompt("Ingrese un numero"));
	
	if (flag == 0) {
		maximo = numero;

		minimo =  numero;
		
		flag = 1;
	} 

	if (numero >= maximo) {
		
		maximo = numero;
	}
	else if (numero <= minimo) {
		
		minimo = numero;
	}
	pregunta = prompt("Desea ingresar otro numero?");
}

document.getElementById("txtIdMaximo").value = maximo;
document.getElementById("txtIdMinimo").value = minimo;

alert("Gracias por participar");
}//FIN DE LA FUNCIÓN