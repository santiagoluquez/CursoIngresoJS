function mostrar()
{

let contadorPares = 0;
let pregunta;
let numero;


	
numero = parseInt(prompt("Ingrese un numero"))

alert("Usted ingreso: " + numero)	

for ( let i = 1; i <= numero ; i = i + 1) {

	if (i % 2 == 0) {
		alert(i)
		contadorPares = contadorPares + 1
	}


}
alert("Cantidad de numeros pares "+ contadorPares);
	



}