/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioA
    let precioB
    let precioC
    let preciofinal

    precioA = document.getElementById("txtIdPrecioUno").value;
    precioB = document.getElementById("txtIdPrecioDos").value;
    precioC = document.getElementById("txtIdPrecioTres").value;

    precioA = parseFloat(precioA)
    precioB = parseFloat(precioB)
    precioC = parseFloat(precioC)

    preciofinal = precioA + precioB + precioC

    alert (preciofinal)



	
}
function Promedio () 
{
	let precioA
    let precioB
    let precioC
    let preciofinal

    precioA = document.getElementById("txtIdPrecioUno").value;
    precioB = document.getElementById("txtIdPrecioDos").value;
    precioC = document.getElementById("txtIdPrecioTres").value;

    precioA = parseFloat(precioA);
    precioB = parseFloat(precioB);
    precioC = parseFloat(precioC);

    preciofinal = (precioA+ precioB+ precioC)/3;

    alert ("El promedio es "+ preciofinal.toFixed(2));
}
function PrecioFinal () 
{
	let precioA
    let precioB
    let precioC
    let preciofinal

    precioA = document.getElementById("txtIdPrecioUno").value;
    precioB = document.getElementById("txtIdPrecioDos").value;
    precioC = document.getElementById("txtIdPrecioTres").value;

    precioA = parseFloat(precioA)
    precioB = parseFloat(precioB)
    precioC = parseFloat(precioC)

    preciofinal = (precioA* 1.21 + precioB* 1.21 + precioC* 1.21) 

    alert (preciofinal.toFixed(2))


}