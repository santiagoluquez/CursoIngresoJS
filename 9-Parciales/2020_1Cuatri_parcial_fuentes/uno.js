
function mostrar()
{

let producto;
let precioBarbijo;
let precioJabon;
let precioAlcohol;
let cantidadBarbijo = 0;
let cantidadAlcohol = 0;
let cantidadJabon = 0;
let marcaAlcohol;
let fabricanteAlcohol;
let acumuladorBarbijo = 0;
let acumuladorJabon = 0;
let acumuladorAlcohol = 0;
let contadorBarbijo = 0;
let contadorAlcohol = 0;
let contadorJabon = 0;
let flagAlcohol = 0;
let alcoholBarato;

for (let i = 0 ; i < 5 ; i++){

producto = prompt("Ingrese producto, barbijo, jabon o alcohol")

while (producto != "barbijo" && producto != "jabon" && producto != "alcohol") {
	
	producto = prompt("Producto invalido, ingrese uno correcto")
}

switch (producto) {
	case "barbijo":

		precioBarbijo = parseInt(prompt("Ingrese precio de barbijo, entre 100 y 300"));

			while (!(precioBarbijo >= 100 && precioBarbijo <= 300)) {
				
				precioBarbijo = parseInt(prompt("Precio incorrecto, vuelva a ingresarlo"))
			}

		cantidadBarbijo = parseInt(prompt("Ingrese cantidad de barbijo, no puede ser 0 o negativo y no debe superar las 1000 unidades"));
		
			while (!(cantidadBarbijo > 0 && cantidadBarbijo <= 1000)) {
				
				cantidadBarbijo = parseInt(prompt("cantidad incorrecto, vuelva a ingresarlo"))
			}

			//marca = prompt("Ingrese marca")

			//fabricante = prompt("Ingrese fabricante")

		acumuladorBarbijo = acumuladorBarbijo + cantidadBarbijo;

		contadorBarbijo++
		break;

	case "jabon":

		precioJabon = parseInt(prompt("Ingrese precio de jabon, entre 100 y 300"));

			while (!(precioJabon >= 100 && precioJabon <= 300)) {
				
				precioJabon = parseInt(prompt("Precio incorrecto, vuelva a ingresarlo"))
			}

		cantidadJabon = parseInt(prompt("Ingrese cantidad de jabon, no puede ser 0 o negativo y no debe superar las 1000 unidades"));
			
			while (!(cantidadJabon > 0 && cantidadJabon <= 1000)) {
				
				cantidadJabon = parseInt(prompt("Cantidad incorrecto, vuelva a ingresarlo"))
			}	
			
			//marca = prompt("Ingrese marca")

			//fabricante = prompt("Ingrese fabricante")

		acumuladorJabon = acumuladorJabon + cantidadJabon;

		contadorJabon++
		break;

	case "alcohol":

		precioAlcohol = parseInt(prompt("Ingrese precio de alcohol, entre 100 y 300"));

			while (!(precioAlcohol >= 100 && precioAlcohol <= 300)) {
				
				precioAlcohol = parseInt(prompt("Precio incorrecto, vuelva a ingresarlo"));
			}

		cantidadAlcohol = parseInt(prompt("Ingrese cantidad de alcohol, no puede ser 0 o negativo y no debe superar las 1000 unidades"))

			while (!(cantidadAlcohol > 0 && cantidadAlcohol <= 1000)) {
				
				cantidadAlcohol = parseInt(prompt("Cantidad incorrecto, vuelva a ingresarlo"));
			}

			if (flagAlcohol == 0) {
				
				alcoholBarato = precioAlcohol
				
				marca = prompt("Ingrese marca")

				fabricante = prompt("Ingrese fabricante")

				flagAlcohol == 1

			} else if (alcoholBarato < precioAlcohol) {
				
				alcoholBarato = precioAlcohol

				marcaAlcohol = prompt("Ingrese marca")

				fabricanteAlcohol = prompt("Ingrese fabricante")
			}
		
				

		acumuladorAlcohol = acumuladorAlcohol + cantidadAlcohol;
		contadorAlcohol++
		break;

i++

			
}

}
if (acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo) {
	
	alert("El promedio de compra del alcohol es " + acumuladorAlcohol / contadorAlcohol)
}
else if (acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbijo) {
	
	alert("El promedio de compra del jabon es " + acumuladorJabon / contadorJabon)
} else{

	alert("El promedio de compra del barbijo es " + acumuladorBarbijo / acumuladorBarbijo)
}

alert("La cantidad de jabon comprado es "+ acumuladorJabon + " unidades")

alert ("El precio del alcohol mas barato es "+ alcoholBarato + " su marca es " + marca + " y su fabricante es " +  fabricante)
}
