function mostrar()
{
let kg;
let sabor;
let AcKg = 0;
let KgLiviano;
let saborLiviano;
let sumaCarne;
let promedioCarne;
let AcKgC = 0;
let ContadorC = 0;
let flag = 0;

for ( let i = 0 ; i < 3 ; i++){


    kg = parseInt(prompt("Ingrese kg por bolsa"));

        while (!(kg >= 0 && kg <= 500)) {
            
            kg = parseInt(prompt("Dato invalido, ingreselo nuevamente"));
        }

    sabor = prompt("Ingrese sabor")

        while (!(sabor == "carne" || sabor == "pollo" || sabor == "vegetales")) {
            
            sabor = prompt("Dato invalido, ingreselo nuevamente");
        }
        switch (sabor) {
            case "carne":
                AcKgC += kg
                ContadorC ++
                break;
        }
    
    AcKg += kg

    if (flag == 0) {
        
        KgLiviano = kg;
        saborLiviano = sabor
        flag = 1;

    }

    if (kg < KgLiviano) {
        
        KgLiviano = kg;
        saborLiviano = sabor;
    }
}

alert("a) El promedio de los kilos totales es "+ AcKg/3)
alert("b) El peso mas liviano es "+KgLiviano+" de sabor "+ saborLiviano)
alert("c) La cantidad de carne comprada es " + AcKgC+" y su promedio es "+ AcKgC/ContadorC) 
}