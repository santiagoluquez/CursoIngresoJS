

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	



}//FIN DE LA FUNCIÓN
function piedra()
{
let max = 3;
let min = 1;
let numero;


    numero = Math.round(Math.random()*(max - min)+min);
switch (numero) {
    case 1:
        alert("Empate")
        break;
    
    case 2:
        alert("Perdiste")
        break;

    default:
        alert("Ganaste")
        break;
	

}//FIN DE LA FUNCIÓN
function papel()
{
	let max = 3;
    let min = 1;
    let numero;
    
    
        numero = Math.round(Math.random()*(max - min)+min);

    if (numero == 2) {
        alert("Empate")
    } else if(numero == 3) {
        alert("Perdiste")
    }else{
        alert("Ganaste")
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	let max = 3;
	let min = 1;
	let numero;
	
	
		numero = Math.round(Math.random()*(max - min)+min);
		if (numero == 3) {
			alert("Empate")
		} else if(numero == 1) {
			alert("Perdiste")
		}else{
			alert("Ganaste")
		}
	
}//FIN DE LA FUNCIÓN
}



