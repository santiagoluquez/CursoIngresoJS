function mostrar()
{
let pregunta;
let producto;
let cantidad;
let acumulacionCal = 0;
let acumulacionCemento = 0;
let acumulacionArena = 0;
let precioMayor = 0;
let productoMasCaro;
let importeXCompraCal;
let importeXCompraArena;
let importeXCompraCemento; 
let importeXCompraCalAc = 0;
let importeXCompraArenaAc = 0;
let importeXCompraCementoAc = 0;
let importeBruto;
let cantidadBolsasTotales;
let importeDescontado;

do {
  
  producto = prompt(`Ingrese producto a comprar "cal", "arena" o "cemento"`);

    while (!(producto == "cal" || producto == "arena" || producto == "cemento")) {
      
      producto = prompt("Producto invalido, reingreselo nuevamente")
    }
  
  cantidad = parseInt(prompt("Ingrese cantidad de bolsas"))

    while (!(cantidad > 0 )) {
      
      cantidad = parseInt(prompt("Cantidad ingresada invalida, ingreselo nuevamente"))
    }

  precio = parseFloat(prompt("Ingrese precio, debe ser mayor a $0"));

    while (!(precio > 0)) {
      
      precio = parseFloat(prompt("Precio ingresado invalida, ingreselo nuevamente"))
    }

    switch (producto) {
      case "cal":
        
        acumulacionCal += cantidad;

        importeXCompraCal = cantidad * precio

        importeXCompraCalAc += importeXCompraCal        
        break;
    
      case "arena":

        acumulacionArena += cantidad;

        importeXCompraArena = cantidad * precio
        
        importeXCompraArenaAc += importeXCompraArena
        break;

      case "cemento":

        acumulacionCemento += cantidad;

        importeXCompraCemento = cantidad * precio;

        importeXCompraCementoAc += importeXCompraCemento;
        break;
        }

    if (precio > precioMayor) {
      
      precioMayor = precio

      productoMasCaro = producto
    }

  pregunta = prompt("Desea ingresar otro producto? si/no")
} while (pregunta == "si");

cantidadBolsasTotales = acumulacionArena + acumulacionCal + acumulacionCemento;

importeBruto = importeXCompraCementoAc + importeXCompraCalAc + importeXCompraArenaAc;
alert("El importe bruto a pagar sin descuento es de $"+importeBruto)

if (cantidadBolsasTotales > 30) {
  
    importeDescontado = importeBruto * .75

    alert("El importe con descuento a pagar es de $"+importeDescontado)

} 
else if (cantidadBolsasTotales > 10 && cantidadBolsasTotales <= 30) {
  
    importeDescontado = importeBruto * .85

    alert("El importe con descuento a pagar es de $"+importeDescontado)
}
else{

    alert("El importe a pagar es de $"+importeDescontado)    
}

if (acumulacionArena > acumulacionCal && acumulacionArena > acumulacionCemento) {

    alert("El producto con mas unidades compradas es la arena con "+acumulacionArena +" bolsas compradas")
  
} 

else if( acumulacionCal > acumulacionArena && acumulacionCal > acumulacionCemento  ) {
  
    alert("El producto con mas unidades compradas es la cal con "+acumulacionCal +" bolsas compradas")

}
else{
     alert("El producto con mas unidades compradas es el cemento con "+acumulacionCemento +" bolsas compradas")
}
}
