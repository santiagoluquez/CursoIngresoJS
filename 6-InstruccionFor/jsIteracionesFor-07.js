function mostrar()
{

let pregunta;
let acumulador = 0;
let numero;
let divisor;

numero = parseInt(prompt("Ingrese un numero"))

for (let i = 0 ; i < numero ; i = i + 1){

	

	if (numero % i == 0) {

		alert(i)

		acumulador = acumulador + 1
	}

}
alert("Cantidad divisores " + acumulador)
}//FIN DE LA FUNCIÓN