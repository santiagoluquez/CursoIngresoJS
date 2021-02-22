function mostrar()
{
/*
let n1;
let n2;
let n3;
let n4;
let n5;
let suma;
let promedio;

n1 = parseInt(prompt("Ingrese el primer numero"))
n2 = parseInt(prompt("Ingrese el segundo numero"))
n3 = parseInt(prompt("Ingrese el tercer numero"))
n4 = parseInt(prompt("Ingrese el cuarto numero"))
n5 = parseInt(prompt("Ingrese el quinto numero"))

suma = n1 + n2 + n3 + n4 + n5

promedio =  (n1 + n2 + n3 + n4 + n5) / 5

document.getElementById("txtIdSuma").value = suma 
document.getElementById("txtIdPromedio").value = promedio



let numero
let acumulador = 0
let i = 1


while (i < 5) {
	
	numero = parseInt(prompt("Ingrese un numero"))

	acumulador = acumulador + numero;

	i = i + 1;

}
document.getElementById("txtIdSuma").value = acumulador 
document.getElementById("txtIdPromedio").value = (acumulador / 5)
*/

let numero;
let contador = 0;
let acumulador = 0;


while (contador < 5) {
	
	numero = parseInt(prompt("Ingrese un numero"));

	contador++ ;

	acumulador = acumulador + numero;
}

document.getElementById("txtIdSuma").value = acumulador;
document.getElementById("txtIdPromedio").value = acumulador/contador;


}//FIN DE LA FUNCIÓN