function mostrar()
{

let num;
let letr;
let acumuladorPares = 0;
let acumuladorImpares = 0;
let acumulador0 = 0;
let acumuladorPositivos = 0;
let sumaPositivos = 0;
let promedioPositivos;
let sumaNegativos = 0;
let acumuladorNegativos = 0;
let numMax =0;
let letMax;
let numMin=0;
let letMin;
let pregunta;

do {
    num = parseFloat(prompt("Ingrese un numero"));

        while (!(num > -100 && num < 100)) {
            
            num = parseFloat(prompt("Numero invalido, ingrese un numero"));
        }

    letr = prompt("Ingrese una letra");

    if (num%2 == 0) {
        
        acumuladorPares++
    }else{

        acumuladorImpares++
    }

    if (num == 0) {

        acumulador0 ++
        
    }

    if (num > 0) {
        
        sumaPositivos += num;
        acumuladorPositivos ++
        promedioPositivos = sumaPositivos/acumuladorPositivos
    }else{
        sumaNegativos += num
        acumuladorNegativos ++
    }

    if (num > numMax) {
        
        numMax = num

        letMax = letr
    }

    if (num < numMin) {
        
        numMin = num

        letMin = letr
    }
    

pregunta = prompt("Desea ingresar nuevamente un numero y una letra? s/n") 
} while ((pregunta == "s"));


alert("a) La cantidad de numeros pares es "+ acumuladorPares)
alert("b) La cantidad de numeros impares es "+ acumuladorImpares)
alert("c) La cantidad de ceros es "+ acumulador0)
alert("d) El promedio de los numeros positivos es "+ promedioPositivos)
alert("e) La suma de los numeros negativos es "+ sumaNegativos)
alert("f) El mayor numero  y letra es "+ numMax + letMax + " el menor numero y letra es "+ numMin + letMin )




}
