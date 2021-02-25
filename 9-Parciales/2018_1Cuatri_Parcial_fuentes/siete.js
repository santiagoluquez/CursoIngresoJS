function mostrar()
{

let nota;
let sexo;
let promedio;
let sumaNotas = 0;
let notaBaja;
let cantidadV = 0;
let flag = 0;


for (let i = 0; i < 5 ; i++) {
    
    nota = parseFloat(prompt("Ingrese nota"))
    
        while (!(nota > 0 && nota <=10)) {
            nota = parseFloat(prompt("Nota invalida, ingresela nuevamente "))
        }
        
    sumaNotas +=  nota;

    sexo = prompt("Ingrese sexo f o m")

        while (!(sexo == "f" || sexo == "m")) {
            sexo = prompt("Sexo invalido, ingreselo nuevamente")
        }
    
    switch (sexo) {
        case "m":

            if (nota <= 6) {
                cantidadV ++     
            }
            
            break;
    }

    if (flag == 0) {
        
        notaBaja = nota
        sexoNotaBaja = sexo
        flag = 1
    }

    if (nota < notaBaja) {
        
        notaBaja = nota;
        sexoNotaBaja = sexo
    }

}
promedio = sumaNotas/5
alert("A) El promedio de notas totales es "+ promedio)
alert("B) La nota mas baja es "+ notaBaja +" y su sexo "+ sexoNotaBaja)
alert("C) La cantidad de varones que se sacaron una nota de 6 o menos es " +cantidadV )

}
