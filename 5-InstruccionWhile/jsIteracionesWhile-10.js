/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{


let pregunta = "s";
let numero;
let contadorP = 0;
let contadorN = 0;
let promedioP = 0;
let promedioN = 0; 
let acumuladorP = 0;
let acumuladorN = 0;
let contador0 = 0;
let diferencia;
let resto;
let contadorR = 0;

while (pregunta == "s") {
	
	numero = parseInt(prompt("Ingrese un numero"))

	resto = (numero % 2)
	

		if (numero > 0) {
			
			acumuladorP = acumuladorP + numero;

			contadorP = contadorP + 1;

		} 
		
		else if (numero < 0) {
			
			acumuladorN = acumuladorN + numero;

			contadorN = contadorN + 1;
		}
		else{
			
			contador0 = contador0 + 1;
		}

		if (resto == 0) {
			
			contadorR = contadorR +1;
		}

	

	pregunta = prompt("Desea ingresar otro numero?")

}
/* CON ESTA FORMA UTILIZO EL CONTADOR COMO FLAG, SI NO PUSE NINGUN NUMERO POSITIVO EL PROMEDIO ES 0 DE LO CONTRARIO USAR LA FORMULA
if (contadorP == 0) {
	
	promedioP = 0
} 

else {
	
	promedioP = acumuladorP / contadorP
}

if (contadorN == 0) {
	
	promedioN = 0
} 
else {
	
	promedioN = acumuladorN / contadorN
}

diferencia = acumuladorP + acumuladorN; 
*/

//CON ESTE METODO OBLIGO A INICIALIZAR LA VARIABLE DANDOLE VALOR 0 Y SE CUMPLE EN CASO DE QUE NO SEA VERDADERA LA CONDICION, AHORA, SI
//LA CONDICION ES VERDADERA SE USA LA FORMULA
if (contadorP > 0) {
	promedioP = acumuladorP /contadorP
}

if (contadorN > 0) {
	promedioN = acumuladorN /contadorN
}

diferencia = acumuladorP + acumuladorN; 

console.log("La cantidad de numeros positivos ingresados es " + contadorP)
console.log("La suma de los numeros positivos ingresados " + acumuladorP)
console.log("El promedio de los numeros positivos es " + promedioP)
console.log("La cantidad de numeros negativos ingresados es " + contadorN)
console.log("La suma de los numeros negativos ingresados es " + acumuladorN)
console.log("El promedio de los numeros negativos es " + promedioN)
console.log("La cantidad de 0 ingresados es "+ contador0)
console.log("La diferencia es " + diferencia)
console.log("La cantidad de numeros pares es " + contadorR)
/*


alert(
	"La cantidad de numeros positivos ingresados es " + contadorP + 
	" La suma de los numeros positivos ingresados " + acumuladorP + 
	" El promedio de los numeros positivos es " + promedioP +
	" La cantidad de numeros negativos ingresados es " + contadorN +
	" y la suma de los numeros negativos ingresados es " + acumuladorN + 
	" El promedio de los numeros negativos es " + promedioN +
	" la cantidad de 0 ingresados es "+ contador0 +
	" La diferencia es " + diferencia +
	" La cantidad de numeros pares es " + contadorR); 
*/
}

//FIN DE LA FUNCIÓN