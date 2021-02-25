function mostrar()
{
let pais;
let paisMinT;
let paisMinH;
let habitantes;
let habitantesMin = 7000;
let temp;
let tempMin = 50;
let tempMax = 0;
let promedioHab;
let pregunta;
let contadorTempPar = 0;
let flagHab = 0
let flagTemp = 0;
let contadorPaisTemp = 0;
let contador = 0;
let habitantesAc = 0;

do {

    pais = prompt("Ingrese pais");

    habitantes = parseInt(prompt("Ingrese cantidad de habitantes"))

        while (!(habitantes > 1 && habitantes < 7000)) {
            
            habitantes = parseInt(prompt("Dato invalido, ingreselo nuevamente"))
        }

        flagHab = 0
        if (flagHab = 0) {
            
             habitantesMin = habitantes

             paisMinH = pais

             flagHab = 1
        }

        if (habitantes < habitantesMin) {
            
            habitantesMin = habitantes

            paisMinH = pais
        }
        

        habitantesAc += habitantes

    temp = parseInt(prompt("Ingrese temperatura registrada"))

        while (!(temp > -50 && temp < 50)) {
            
            temp = parseInt(prompt("Dato invalido, ingreselo nuevamente"))
        }

        if (temp % 2 == 0) {
            
            contadorTempPar ++
        }
        flagTemp = 0
        if (flagTemp = 0) {
            
            tempMin = temp;
            paisMinT = pais;
            flagTemp = 1
        }
        if (temp < tempMin) {
            
            tempMin = temp
            paisMinT = pais;
        }

            
        

        if (temp > 40) {
            
            contadorPaisTemp ++
        }

        contador ++
    
    pregunta = prompt("Desea agrear mas datos? s/n")
} while (pregunta == "s");

promedioHab = habitantesAc / contador

alert("A) La cantidad de temp pares es "+ contadorTempPar)
alert("B) El nombre del pais con menos habitantes es "+ paisMinH)
alert("C) La cantidad de paises que superan los 40° es de "+ contadorPaisTemp)
alert("D) El promedio de habitantes entre paises es "+ promedioHab)
alert("F La temperatura minima ingresada es de "+ tempMin + " correspondiente a "+ paisMinT)
} 
