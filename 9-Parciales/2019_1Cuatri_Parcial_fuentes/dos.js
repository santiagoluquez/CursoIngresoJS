function mostrar()
{
let nombre1;
let nombre2;
let peso1;
let peso2;
let sumaPeso;
let promedioPeso;

nombre1 = prompt("Inserte nombre 1")
nombre2 = prompt("Inserte nombre 2")

peso1 = parseFloat(prompt("Inserte peso 1"))
peso2 = parseFloat(prompt("Inserte peso 2"))

sumaPeso = peso1 + peso2;

promedioPeso = sumaPeso/2

alert("Ustedes se llaman "+ nombre1 + " y "+ nombre2 +" y pesan " + peso1+ " y " + peso2 +" kilos, que sumados son " +  sumaPeso + " kilos y el promedio de peso es "+ promedioPeso)

}
