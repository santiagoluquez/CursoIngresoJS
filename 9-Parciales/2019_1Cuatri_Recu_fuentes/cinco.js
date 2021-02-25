function mostrar()
{
let dias;
let formaPago;
let destino;
let importeBruto;
let importeDescontado;
const PRECIO = 100;


destino = document.getElementById("selecContinente").value;

formaPago = document.getElementById("selecPago").value;

dias = prompt("Ingrese cantidad de dias")

importeBruto = dias * PRECIO

switch (destino) {
    case "America":

        importeDescontado = importeBruto * .85
        if (formaPago == "Débito") {
            importeDescontado = importeBruto * .85 * .90
            
        }else if (formaPago == "cheque"){
            importeDescontado = importeBruto *.85 * 1.15
            }
        break;

    case "África":
    case "Oceania":
        
        importeDescontado = importeBruto * .70
        if (formaPago == "MercadoPago" || formaPago == "efectivo") {
            importeDescontado = importeBruto * .70 * .85
        }else if (formaPago == "cheque"){
            importeDescontado = importeBruto *.7 * 1.15
            }
        break;

    case "Europa":

        importeDescontado = importeBruto * .8
        if (formaPago == "débito") {
            importeDescontado = importeBruto * .85 * .85
        }else if (formaPago == "mercadoPago" ) {
            importeDescontado = importeBruto * .85 * .9
        }else if (formaPago == "cheque"){
            importeDescontado = importeBruto *.8 * 1.15
            }
        
        else{
            importeDescontado = importeBruto * .85 * .95
        }
        break;

    default:

        importeDescontado = importeBruto * 1.2
        if (formaPago == "cheque"){
            importeDescontado = importeBruto * 1.15
            }
        break;
}

alert("El importe del viaje es de $"+importeDescontado)
}
