/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/


function comenzar()
{
  let numero
  let max = 3
  let min = 1
  let ingresarNumero;
  let contador = 0;
  
  numero = Math.floor(Math.random() * (max - min )+  min);
  
  ingresarNumero = parseInt(document.getElementById("txtIdNumero").value);
/*
  if (numero == ingresarNumero) {
    
    alert("Usted es el ganador en "+ " intentos")

  } else {
    alert("Usted perdio")
  }
  contador ++
  contador = document.getElementById("txtIdIntentos").value;
*/

while (numero == ingresarNumero) {
  
  
}
}

function verificar()
{
	
	
}