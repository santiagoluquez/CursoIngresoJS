function mostrar()
{

let hora;
let momento;

hora = document.getElementById("laHora").value;

hora = parseInt(hora);


if (hora >= 6 && hora <= 11) {
    alert("Es de mañana")
}
else if (hora > 12 && hora <= 19) {
    alert("Es de tarde")
}
else if (hora > 20 && hora < 24){
    alert("Es de noche")
    alert("A dormir")
}
else if (hora > 0 && hora < 6) {
    alert("Es de noche")
}
else{
    alert("Hora no valida")
}

}
