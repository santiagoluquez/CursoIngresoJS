/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo
    let ancho
    let perimetro
    let alambre
    
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value; 

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = (2*largo + 2*ancho)

    alambre = perimetro *3

    alert(alambre)


}
function Circulo () 
{
    let radio
    let perimetro

    radio = document.getElementById("txtIdRadio").value;

    radio = parseFloat(radio);

    perimetro =  2 * 3.14 * radio * 3

    alert (perimetro)



	
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;
    
    
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value; 

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = largo * ancho;

    cemento = area *2;

    cal = area * 3;

    alert("para " + area +"m2 se necesitaran " + cemento + " bolsas de cemento y " + cal+ " bolsas de cal");





    

    alert(perimetro)
	
}