function mostrar()
{

let nota;
let max = 10;
let min = 1;

nota = Math.round(Math.random()*(max - min) + min);

if (nota>=9) {
	
	alert("Excelente nota igual " + nota)
} 

	else if (nota >= 4 && nota < 9) {
	
		alert ("Aprobado, nota igual " + nota)
} 

	else {
		alert("Vamos, la proxima se puede, nota igual " + nota) }

}//FIN DE LA FUNCIÓN