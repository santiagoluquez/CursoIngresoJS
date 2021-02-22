/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{/*
const PRECIO = 35;
let cantidadLamparas;
let marca;
let descuento;
let importeFinal;
let iibb;
let importeFinalIIBB;
let precioDescontado


cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);

marca = document.getElementById("Marca").value;

switch (cantidadLamparas) {
    case 1:
    case 2:
        descuento = 0
        break;

    case 3:
        if (marca == "ArgentinaLuz") {
            
            descuento = 0.15
           
        
        } else if (marca == "FelipeLamparas") {
           
            descuento = 0.10
        } else{
            
            descuento = 0.05
        }

        break;

    
    case 4:
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            descuento = 0.25
            
        } else {
            descuento = 0.20
        }
        break;

    
    case 5:
        if (marca == "ArgentinaLuz") {
            descuento = 0.40
            
        } else {
            descuento = 0.30
        }
        break;

            
    default:
        descuento = 0.50
        break;
}

precioDescontado = PRECIO - (PRECIO * descuento);

document.getElementById("txtIdprecioDescuento").value = precioDescontado

importeFinal = precioDescontado * cantidadLamparas

iibb = importeFinal *0.1

if (importeFinal > 120) {
    importeFinal = importeFinal + iibb
    alert("Total $"+importeFinal+ " ingresos brutos $" + iibb )
} else {
    alert ("Total $"+ importeFinal)
}


*/
let cantidad;
const PRECIO = 35;
let importe;
let importeDescontado;
let importeFinal
let marca;


cantidad = parseInt(document.getElementById("txtIdCantidad").value)

marca = document.getElementById("Marca").value;

importe = PRECIO * cantidad;



switch (cantidad) {
    case 5:
        if (marca == "ArgentinaLuz") {
            importeDescontado = importe * 0.60;
        }else{
            importeDescontado = importe * 0.70;
        }
        break;
    
    case 4:
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            importeDescontado = importe * 0.75;
        }else{
            importeDescontado = importe * 0.80;
        }
        break;
    
    case 3:
        if (marca == "ArgentinaLuz") {
            importeDescontado = importe * 0.85;
        }
        else if  (marca == "FelipeLamparas") {
            importeDescontado = importe * 0.90;
        }else{
            importeDescontado = importe * 0.95;
        }
        break;

    case 1:
    case 2:
        importeDescontado = importe 
        break;

    default:
    importeDescontado = importe * 0.5;
    break;
}

document.getElementById("txtIdprecioDescuento").value = importeDescontado

if (importeDescontado > 120) {
    
    importeFinal = importeDescontado * 1.1

    alert("”IIBB Usted pago " + importeFinal + " siendo " + importeDescontado * 0.1 + " el impuesto que se pagó.")
}

}

