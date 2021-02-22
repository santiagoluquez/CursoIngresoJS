/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	






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
}


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
{let max = 3;
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