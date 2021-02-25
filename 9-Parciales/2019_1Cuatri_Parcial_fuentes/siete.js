function mostrar()
{
    let altura;
    let sexo;
    let acumuladorAl = 0;
    let promedioAl;
    let alturaBaja = 250;
    let sexoBajo;
    let ContadorAlBaja = 0;
    
    for(let i = 0 ; i < 5 ; i++){
    
        altura = parseInt(prompt("Ingrese altura"));
    
        while (!(altura > 0 && altura < 250)) {
            
            altura = parseInt(prompt("Altura invalida, ingreselo nuevamente"));
        }
    
        acumuladorAl += altura;
    
        sexo = prompt("Ingrese sexo, f para femenino, y m para masculuno")
    
        if (altura < alturaBaja) {
            
            alturaBaja = altura
        
            sexoBajo = sexo
        }
    
        if (altura < 190 && sexo == "f") {
            
            ContadorAlBaja ++
        }
    }
    
    promedio = acumuladorAl/5
    alert("A) El promedio de las alturas es "+ promedio)
    
    alert("B) La altura mas baja es "+ alturaBaja +" y su sexo es "+ sexoBajo)
    
    alert("C) La cantidad de mujeres de altura menor a 190cm es "+ ContadorAlBaja)
}
