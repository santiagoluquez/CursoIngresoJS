function mostrar()
{
let pregunta;
let nombre;
let edad;
let estadoC;
let sexo;
let temperatura;
let temperaturaMayor = 0;

do {
nombre = prompt("Ingrese nombre");

edad = parseInt(prompt("Ingrese edad"));

estadoC = prompt(`Ingrese estado civil "casado", "soltero" o "viudo"`);


	while (estadoC != "casado" && estadoC != "soltero" && estadoC != "viudo" ) {
		
		estadoC = prompt(`Estado civil invalido, ingreselo nuevamente`)
	}

temperatura = parseInt(prompt("Ingrese tempreratura"))

	if (temperatura > temperaturaMayor) {
		temperaturaMayor = temperatura
	}

	

sexo = prompt(`Ingrese sexo "f" para femenino y "m" para masculino` )

	while (sexo != "f" && sexo != "m") {
		
		sexo = prompt("Sexo invalido, ingreselo nuevamente")
	}

pregunta = prompt("Desea cargar los datos de otra persona? si o no")

} while (pregunta == "si") 



}
