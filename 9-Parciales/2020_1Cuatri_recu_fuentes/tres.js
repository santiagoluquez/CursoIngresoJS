function mostrar()
{

let nombre;
let pregunta;
let nacionalidad;
let edad;
let sexo;
let estadoC;
let temp;
let tempMayor = 0;
let nacioMayorTemp;
let contadorMayorEdad = 0;
let contadorMujerViu = 0;
let contadorMujerSol = 0;
let contadorTerceraEdad = 0;
let acumuladorEdadMujeresCasadas = 0;
let contadorMujeresCasadas = 0;
let flag = 0;
let promedioMujeresCasadas = 0; 
let sumaMujerSolyViu = 0;

do {
	
	nombre = prompt("Ingrese nombre del pasajero")

	nacionalidad = prompt("Ingrese nacionalidad del pasajero")

	edad = parseInt(prompt("Ingrese edad"))

	sexo = prompt(`Ingrese sexo del pasajero, "f" para femenino y "m" para masculino`)

		while (!(sexo == "f" || sexo == "m")) {
			
			sexo = prompt("Sexo invalido, re ingreselo")
		}

	estadoC = prompt(`Ingrese estado civil del pasajero, "casado", "viudo"  o "soltero"`)

		switch (estadoC) {
			case "soltero":

				if (edad > 17) {
					contadorMayorEdad ++
				}

				if (sexo == "f") {
					contadorMujerSol ++
				}
				break;
			
			case "viuda":

				if (sexo == "f") {
					contadorMujerViu ++
				}
				break;

			case "casado":

				if (sexo == "f"){

					acumuladorEdadMujeresCasadas += edad
					contadorMujeresCasadas ++
					
					flag == 1

				}	
			
		}
	temp = parseInt(prompt("Ingrese temperatura corporal"))

		if (temp > 38 && edad >= 60) {
			
			contadorTerceraEdad ++
		}

		if (temp > tempMayor) {

			tempMayor = temp;

			nacioMayorTemp = nacionalidad;
			
		}

	pregunta = prompt("Desea ingresar otro pasajero")

} while (pregunta == "si");


alert("A) La nacionalidad de la persona con mayor temperatura es "+ nacioMayorTemp)
alert("B) La cantidad de mayores de edad que estan solteros es " + contadorMayorEdad)

sumaMujerSolyViu = contadorMujerViu + contadorMujerSol;

alert("C) La cantidad de mujeres solteres y viudas es "+ sumaMujerSolyViu)

alert("D) La cantidad de personas de la tercera edad con una temperatura mayor a 38° es "+ contadorTerceraEdad)

if (flag == 0) {
	promedioMujeresCasadas = 0
}
else{
	promedioMujeresCasadas = acumuladorEdadMujeresCasadas/contadorMujeresCasadas
}

alert("E) El promedio de edad de las mujeres casadas es "+ promedioMujeresCasadas)
}
