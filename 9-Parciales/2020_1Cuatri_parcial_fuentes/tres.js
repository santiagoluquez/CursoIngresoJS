function mostrar()
{
let pregunta;
let nombre;
let edad;
let estadoC;
let sexo;
let temperatura;
let temperaturaMayor = 0;
let nombreMayorT;
let sumadorEdad = 0;
let contadorViudo = 0;
let contadorAncianos = 0;
let contadorSolteros = 0;
let promedio = 0;
let mayorEdad;
let sujeto;

do {
nombre = prompt("Ingrese nombre");

edad = parseInt(prompt("Ingrese edad"));


estadoC = prompt(`Ingrese estado civil "casado", "soltero" o "viudo"`);


	while (estadoC != "casado" && estadoC != "soltero" && estadoC != "viudo" ) {
		
		estadoC = prompt(`Estado civil invalido, ingreselo nuevamente`)
	}

	switch (estadoC) {
		case "viudo":

			if (edad > 18) {
			
				contadorViudo++
			}						
			break;
	
	}

temperatura = parseInt(prompt("Ingrese tempreratura"))

	if (temperatura > temperaturaMayor) {
		
		temperaturaMayor = temperatura

		nombreMayorT = nombre
	}
	if (edad > 60 && temperatura > 38) {
		
		contadorAncianos++
	}

	

sexo = prompt(`Ingrese sexo "f" para femenino y "m" para masculino` )

	while (sexo != "f" && sexo != "m") {
		
		sexo = prompt("Sexo invalido, ingreselo nuevamente")
	}

	switch (sexo) {
		case "m":
			
			if (estadoC == "soltero") {
				
				sumadorEdad+= edad
				contadorSolteros ++
			}
			break;
	
	}

pregunta = prompt("Desea cargar los datos de otra persona? si o no")

} while (pregunta == "si") 

alert("El que tiene mayor temperatura es " + nombreMayorT)

alert("La cantidad de mayores de edad viudos son "+ contadorViudo)

alert("La cantidad de adultos mayores con una temperatura mayor a 38  son " + contadorAncianos)

if (contadorSolteros > 0) {

	promedio = sumadorEdad/contadorSolteros	
}
else{
	promedio = 0
}


alert("La suma de todas las edades es "+sumadorEdad + " la cantidad de solteros es " + contadorSolteros + " el promedio es " + promedio)
}
