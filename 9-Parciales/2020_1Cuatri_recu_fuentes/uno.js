
function mostrar()
{

let producto;
let precio;
let cantidad;
let marca;
let fabricante;
let precioMayorJabon = 0;
let marcaMayorJabon;
let fabricanteMayorJabon;
let acumuladorBarbijo = 0;
let acumuladorAlcohol = 0;
let acumuladorJabon = 0;
let contadorBarbijo = 0;
let contadorAlcohol = 0;
let contadorJabon = 0;

for(let i = 0; i < 5 ; i++){

	producto = prompt(`Ingrese producto, debe ser "barbijo", "jabon" o "alcohol"`);

		while (!(producto == "barbijo" || producto == "jabon" || producto == "alcohol" )) {
			
			producto = prompt("Producto invalido, ingreselo nuevamente");
		}

	precio = parseFloat(prompt("Ingrese precio, debe ser entre $100 y $300"));

		while (!(precio >= 100 && precio <=300 )) {

			precio = parseFloat(prompt("Precio invalido, ingreselo nuevamente"));
			
		}
	
	cantidad = parseInt(prompt("Ingrese cantidad de unidades, no puede ser menor a 0 ni mayor a 1000"));

		while (!(cantidad > 0 && cantidad <= 1000) ) {
			
			cantidad = parseInt(prompt("Cantidad ingresada invalida, ingreselo nuevamente"));
		}
	
	marca = prompt("Ingrese marca");

	fabricante = prompt("Ingrese fabricante");

	switch (producto) {
		case "jabon":

			acumuladorJabon += cantidad

			contadorJabon ++
			
			if(precio > precioMayorJabon){

			precioMayorJabon = precio

			marcaMayorJabon = marca

			fabricanteMayorJabon = fabricante
			}

			
			break;

		case "alcohol":

			acumuladorAlcohol += cantidad;

			contadorAlcohol++
	
			break;

		case "barbijo":

			acumuladorBarbijo += cantidad;

			contadorBarbijo++

			break;
	}

}

alert("El precio del jabon mas caro es " + precioMayorJabon + " su marca es " + marcaMayorJabon + " y su fabricante es "+ fabricanteMayorJabon)


if (acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon) {
	alert("El producto con mas unidades compradas es el barbijo con unidades compradas: "+ acumuladorBarbijo +" y un promedio por compra de "+ acumuladorBarbijo/contadorBarbijo)
}
else if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
	alert("El producto con mas unidades compradas es el alcohol con unidades compradas: "+acumuladorAlcohol +" y un promedio por compra de "+ acumuladorAlcohol/contadorAlcohol)
}
else{
	alert("El producto con mas unidades compradas es el jabon con unidades compradas: "+acumuladorJabon +" y un promedio por compra de "+ acumuladorJabon/contadorJabon)
}

alert("La cantidad de barbijos comprados son "+ acumuladorBarbijo)
}
