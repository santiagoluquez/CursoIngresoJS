function mostrar()
{

let pregunta;
let producto;
let cantidadCal;
let acumuladorCal = 0;
let precioCal;
let importeXCompraCal;
let acumuladorImporteXCompraCal = 0;
let cantidadCemento;
let acumuladorCemento = 0;
let precioCemento;
let importeXCompraCemento;
let acumuladorImporteXCompraCemento = 0;
let cantidadArena;
let acumuladorArena = 0;
let importeXCompraArena;
let acumuladorImporteXCompraArena = 0;
let acumuladorBolsasTotales;
let aculadorImporteTotal;
let flagCal = 0;
let precioCalMayor = 0;
let flagCemento = 0;
let precioCementoMayor = 0;
let flagArena = 0;
let precioArenaMayor = 0;


do {
  
  
  producto = prompt(`Ingrese un producto, "cal", "arena", "cemento"`)

    while (!(producto == "cal" || producto == "arena" || producto == "cemento")) {
      
      producto = prompt(`Producto invalido, ingrese un producto, "cal", "arena", "cemento"`)
    } 

    

switch (producto) {
  case "cal":

    cantidadCal = parseInt(prompt("Ingrese cantidad de bolsas, debe ser mayor a 0"))

    while (!(cantidadCal > 0)) {
      cantidadCal = parseInt(prompt("Cantidad invalida, debe ser mayor a 0"))
    }

    acumuladorCal+= cantidadCal

    precioCal = parseInt(prompt("Ingrese precio de bolsas, debe ser mayor a 0"))

    while (!(precioCal > 0)) {
      precioCal = parseInt(prompt("Cantidad invalida, debe ser mayor a 0"))
    }

    if (precioCal >= precioCalMayor ) {
  
      precioCalMayor = precioCal
    }
    
    importeXCompraCal = precioCal * cantidadCal;

    acumuladorImporteXCompraCal += importeXCompraCal

    flagCal = 1;

    break;

  case "cemento":

    cantidadCemento = parseInt(prompt("Ingrese cantidad de bolsas, debe ser mayor a 0"))

    while (!(cantidadCemento > 0)) {
      cantidadCemento = parseInt(prompt("Cantidad invalida, debe ser mayor a 0"))
    }

    acumuladorCemento+= cantidadCemento

    precioCemento = parseInt(prompt("Ingrese precio de bolsas, debe ser mayor a 0"))

    while (!(precioCemento > 0)) {
      precioCemento = parseInt(prompt("Cantidad invalida, debe ser mayor a 0"))
    }

        if (precioCemento >= precioCementoMayor) {
  
          precioCementoMayor = precioCemento
        }

    importeXCompraCemento = precioCemento * cantidadCemento;

    acumuladorImporteXCompraCemento += importeXCompraCemento;

    flagCemento = 1;
    break;

  case "arena":

    cantidadArena = parseInt(prompt("Ingrese cantidad de bolsas, debe ser mayor a 0"))

    while (!(cantidadArena > 0)) {
      cantidadArena = parseInt(prompt("Cantidad invalida, debe ser mayor a 0"))
    }

    acumuladorArena += cantidadArena

    precioArena = parseInt(prompt("Ingrese precio de bolsas, debe ser mayor a 0"))

    while (!(precioArena > 0)) {
      precioArena = parseInt(prompt("Cantidad invalida, debe ser mayor a 0"))
    }

      if (precioArena > precioArenaMayor) {
  
         precioArenaMayor = precioArena;
        }

    importeXCompraArena = precioArena * cantidadArena;

    acumuladorImporteXCompraArena += importeXCompraArena

    flagArena = 1
    break;
}

pregunta = prompt(`Desea ingresar otro producto "si" o "no"`)
} while (pregunta == "si");

acumuladorBolsasTotales = acumuladorCal + acumuladorCemento + acumuladorArena

aculadorImporteTotal = acumuladorImporteXCompraArena + acumuladorImporteXCompraCemento + acumuladorImporteXCompraCal


alert("El importe total bruto, sin descuento es del " + aculadorImporteTotal)

if (acumuladorBolsasTotales >= 30) {

  alert ("El importe total con descuento es " + aculadorImporteTotal * .75)
  
} 
else if (acumuladorBolsasTotales > 10 && acumuladorBolsasTotales < 30) {
  
  alert("El importe total con descuento es " + aculadorImporteTotal * .85)
} 
else {
  
  alert("El importe total es " + aculadorImporteTotal)
}

if (acumuladorCemento > acumuladorCal && acumuladorCemento > acumuladorArena) {
  
  alert("El producto con mas cantidad de bolsas compradas es cemento con " + acumuladorCemento + " bolsas compradas")
} 

else if (acumuladorCal > acumuladorCemento && acumuladorCal > acumuladorArena) {
  
  alert("El producto con mas cantidad de bolsas compradas es cal con " + acumuladorCal + " bolsas compradas")
} 

else {
  
  alert("El producto con mas cantidad de bolsas compradas es arena con " + acumuladorArena + " bolsas compradas")
} 


if (precioArenaMayor > precioCalMayor && precioArenaMayor > precioCementoMayor) {
  
  alert("El producto de mayor precio es la arena con un precio de $ " + precioArenaMayor)

}
else if (precioCalMayor > precioArenaMayor && precioCalMayor > precioCementoMayor) {
  
  alert("El producto de mayor precio es la cal con un precio de $ " + precioCalMayor)
}

else{
  alert("El producto de mayor precio es el cemento con un precio de $ " + precioCementoMayor)

}

}