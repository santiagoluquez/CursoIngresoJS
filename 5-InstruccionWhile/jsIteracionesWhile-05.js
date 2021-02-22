/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{

let sexo;

sexo = prompt("Ingrese su sexo, `f`para femenino o `m`para masculino")

while (sexo != "f" && sexo != "m") {
	
	alert("Dato invalido");

	sexo = prompt("Reingrese su sexo")
}

if (sexo == "f") {
	
	document.getElementById("txtIdSexo").value = "femenino"
	
} 
else{
	document.getElementById("txtIdSexo").value = "Masculino"
}



}//FIN DE LA FUNCIÓN