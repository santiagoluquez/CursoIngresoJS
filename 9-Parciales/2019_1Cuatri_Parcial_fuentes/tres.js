function mostrar()
{
let precio;
let porcentaje;
let importefinal;

precio = parseFloat(prompt("Inserte precio del producto"))

porcentaje = parseFloat(prompt("Inserte porcentaje de descuento que desea aplicar"))

importefinal = precio * porcentaje/100;

document.getElementById("elPrecioFinal").value = importefinal

alert("El precio final es de "+importefinal)
}
