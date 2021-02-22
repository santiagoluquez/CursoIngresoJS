/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
/*
let clave;

clave = prompt("Ingrese clave");

while (clave != "utn750") {
	
	alert("Clave ingresada no valida");

	clave = prompt("Reingrese clave")
	
}

alert("Puede seguir")
*/

let clave;
flag = 0;

do{
	if (flag == 0) {
	
		clave = prompt("Ingrese clave");
		flag = 1;
	}
	else{

		clave = prompt("Clave invalida, re ingrese clave")
	}


}while (clave != "utn750")

alert("Puede seguir")
}
