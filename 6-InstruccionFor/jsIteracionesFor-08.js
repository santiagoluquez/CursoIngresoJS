function mostrar()
{

let numero;
let acumulador = 0;


numero = parseInt(prompt("Ingrese un numero"))

for( let i = 0 ; i < numero ; i++){

	if (numero % i == 0) {
		
	acumulador = acumulador + 1;
	}
	

}
if (acumulador >= 2) {
	
	alert("No es primo")
} 
else{
	alert("Es primo")
}

 

}//FIN DE LA FUNCIÓN