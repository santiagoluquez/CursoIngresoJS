function mostrar()
{
let n1;
let n2;
let resta;

n1 = parseFloat(prompt("Inserte primer numero"))
n2 = parseFloat(prompt("Inserte segundo numero"))

resta = n1 - n2;

if (n1 == n2 ) {
    alert(n1 + "" +n2);
}
else if(n1 > n2) {
    
    alert(n1 - n2)

} else {
    alert(n1 + n2)
}

if (resta > 10){

    alert("La resta es " + resta + " y supero el 10")

}
}
