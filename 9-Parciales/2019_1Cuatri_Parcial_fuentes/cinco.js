function mostrar()
{

let continente;
let dias;
let formaPago;
let precio = 100;
let importe;
let importeDescontado;

continente = document.getElementById("Marca").value 

dias = parseInt(prompt("Ingrese cantidad de dias"))

formaPago = prompt(`Ingrese forma de pago, "debito", "tarjeta", "mercadoPago" o "efectivo"`)

    
importe = (precio * dias)

switch (continente) {
    case "América":
        if(formaPago == "debito"){
        
            importeDescontado = importe * .5 * .9
        }
        else{
            importeDescontado = importe * .5
        }
        break;

    case "África":
        if(formaPago == "mercadoPago" || formaPago == "efectivo"){
        
            importeDescontado = importe * .4 * .9 * .85
        }
        break;

    case "Europa":

        if (formaPago == "debito") {
            importeDescontado = importe * .8 * .85;
        } 
        else if (formaPago == "mercadoPago ") {
            importeDescontado = importe * .8 * .90
        }
        else{
            importeDescontado = importe * .8 * .95
        }
        break;

    default:
        importeDescontado =importe * 1.2;

        break;
    

}

alert("El precio final es "+ importeDescontado)
}
