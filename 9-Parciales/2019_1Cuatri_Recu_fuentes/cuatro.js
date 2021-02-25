function mostrar()
{
let n1;
let n2;
let resto;
let resta;
let resto3;

n1 = parseInt(prompt("Ingrese el primer numero"));
n2 = parseInt(prompt("Ingrese el segundo numero"));

if (n1 == n2 ) {
    
    alert("Los numeros ingresados son "+ n1+  " y "+ n2);
}

resta = n1 - n2
resto = n1 % n2

alert(resto)

if (n1 % n2 == 0) {
    alert(resta)
}else{
    alert(resto)
}

if ((n1 % n2) > 3) {
    
    alert("El resto es mayor a tres y es "+ resto)
}
}
