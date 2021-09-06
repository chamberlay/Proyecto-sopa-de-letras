var primeraFila;
var segundaFila;
var terceraFila;
var cuartaFila;
var quintaFila;
var resultado;

var matrizDos = 
[
	["E", "A", "E", "B", "E"],
	["M", "I", "I", "I", "C"],
	["E", "I", "O", "I", "E"],
	["H", "I", "I", "I", "D"],
	["E", "J", "E", "Z", "E"]
];

function primeraFila(matrizDos)
{
	var contadorPalabra = 0;
	var arrayPosicion = [];
	var contadorCeldas = 0;
	var contadorLetra = 0;
	var primeraPosicionX;
	var i = 0;

	while(contadorCeldas < 5)
	{
		if (matrizDos[0][contadorCeldas] == "O") 
		{
			arrayPosicion[i] = contadorCeldas;
			contadorCeldas ++;
			contadorLetra ++;
			i++;
		}
		else
		{
			contadorCeldas ++;
		}
	}

	if (contadorLetra > 0) 
	{
		primeraPosicionX = arrayPosicion[0];
	}
	else
	{
		primeraPosicionX = "error";
	}

	//este
	if(matrizDos[0][primeraPosicionX+1] == "I" && matrizDos[0][primeraPosicionX+2] == "E")
	{
		contadorPalabra ++;
	}
	//sureste
	if (matrizDos[1][primeraPosicionX+1] == "I" && matrizDos[2][primeraPosicionX+2] == "E") 
	{
		contadorPalabra ++;
	}
	//sur
	if (matrizDos[1][primeraPosicionX] == "I" && matrizDos[2][primeraPosicionX] == "E") 
	{
		contadorPalabra ++;
	}
	//suroeste
	if (matrizDos[1][primeraPosicionX-1] == "I" && matrizDos[2][primeraPosicionX-2] == "E") 
	{
		contadorPalabra ++;
	}
	//oeste
	if(matrizDos[0][primeraPosicionX-1] == "I" && matrizDos[0][primeraPosicionX-2] == "E")
	{
		contadorPalabra ++;
	}	

	return contadorPalabra;
}

function segundaFila(matrizDos)
{
	var contadorPalabra = 0;
	var arrayPosicion = [];
	var contadorCeldas = 0;
	var contadorLetra = 0;
	var primeraPosicionX;
	var i = 0;

	while(contadorCeldas < 5)
	{
		if (matrizDos[1][contadorCeldas] == "O") 
		{
			arrayPosicion[i] = contadorCeldas;
			contadorCeldas ++;
			contadorLetra ++;
			i++;
		}
		else
		{
			contadorCeldas ++;
		}
	}		

	if (contadorLetra > 0) 
	{
		primeraPosicionX = arrayPosicion[0];
	}
	else
	{
		primeraPosicionX = "error";
	}

	//este
	if(matrizDos[1][primeraPosicionX+1] == "I" && matrizDos[1][primeraPosicionX+2] == "E")
	{
		contadorPalabra ++;
	}
	//sureste
	if (matrizDos[2][primeraPosicionX+1] == "I" && matrizDos[3][primeraPosicionX+2] == "E") 
	{
		contadorPalabra ++;
	}
	//sur
	if (matrizDos[2][primeraPosicionX] == "I" && matrizDos[3][primeraPosicionX] == "E") 
	{
		contadorPalabra ++;
	}
	//suroeste
	if (matrizDos[2][primeraPosicionX-1] == "I" && matrizDos[3][primeraPosicionX-2] == "E") 
	{
		contadorPalabra ++;
	}
	//oeste
	if(matrizDos[1][primeraPosicionX-1] == "I" && matrizDos[1][primeraPosicionX-2] == "E")
	{
		contadorPalabra ++;
	}	

	return contadorPalabra;
}

function terceraFila(matrizDos)
{
	var contadorPalabra = 0;
	var arrayPosicion = [];
	var contadorCeldas = 0;
	var contadorLetra = 0;
	var primeraPosicionX;
	var i = 0;

	while(contadorCeldas < 5)
	{
		if (matrizDos[2][contadorCeldas] == "O") 
		{
			arrayPosicion[i] = contadorCeldas;
			contadorCeldas ++;
			contadorLetra ++;
			i++;
		}
		else
		{
			contadorCeldas ++;
		}
	}	

	if (contadorLetra > 0) 
	{
		primeraPosicionX = arrayPosicion[0];
	}
	else
	{
		primeraPosicionX = "error";
	}

	//norte
	if (matrizDos[1][primeraPosicionX] == "I" && matrizDos[0][primeraPosicionX] == "E") 
	{
		contadorPalabra ++;
	}
	//noreste
	if (matrizDos[1][primeraPosicionX+1] == "I" && matrizDos[0][primeraPosicionX+2] == "E") 
	{
		contadorPalabra ++;
	}
	//este
	if(matrizDos[2][primeraPosicionX+1] == "I" && matrizDos[2][primeraPosicionX+2] == "E")
	{
		contadorPalabra ++;
	}
	//sureste
	if (matrizDos[3][primeraPosicionX+1] == "I" && matrizDos[4][primeraPosicionX+2] == "E") 
	{
		contadorPalabra ++;
	}
	//sur
	if (matrizDos[3][primeraPosicionX] == "I" && matrizDos[4][primeraPosicionX] == "E") 
	{
		contadorPalabra ++;
	}
	//suroeste
	if (matrizDos[3][primeraPosicionX-1] == "I" && matrizDos[4][primeraPosicionX-2] == "E") 
	{
		contadorPalabra ++;
	}
	//oeste
	if(matrizDos[2][primeraPosicionX-1] == "I" && matrizDos[2][primeraPosicionX-2] == "E")
	{
		contadorPalabra ++;
	}	
	//noroeste
	if (matrizDos[1][primeraPosicionX-1] == "I" && matrizDos[0][primeraPosicionX-2] == "E") 
	{
		contadorPalabra ++;
	}

	return contadorPalabra;
}

function cuartaFila(matrizDos)
{
	var contadorPalabra = 0;
	var arrayPosicion = [];
	var contadorCeldas = 0;
	var contadorLetra = 0;
	var primeraPosicionX;
	var i = 0;

	while(contadorCeldas < 5)
	{
		if (matrizDos[3][contadorCeldas] == "O") 
		{
			arrayPosicion[i] = contadorCeldas;
			contadorCeldas ++;
			contadorLetra ++;
			i++;
		}
		else
		{
			contadorCeldas ++;
		}
	}	

	if (contadorLetra > 0) 
	{
		primeraPosicionX = arrayPosicion[0];
	}
	else
	{
		primeraPosicionX = "error";
	}

	//norte
	if (matrizDos[2][primeraPosicionX] == "I" && matrizDos[1][primeraPosicionX] == "E") 
	{
		contadorPalabra ++;
	}
	//noreste
	if (matrizDos[2][primeraPosicionX+1] == "I" && matrizDos[1][primeraPosicionX+2] == "E") 
	{
		contadorPalabra ++;
	}
	//este
	if(matrizDos[3][primeraPosicionX+1] == "I" && matrizDos[3][primeraPosicionX+2] == "E")
	{
		contadorPalabra ++;
	}
	//oeste
	if(matrizDos[3][primeraPosicionX-1] == "I" && matrizDos[3][primeraPosicionX-2] == "E")
	{
		contadorPalabra ++;
	}	
	//noroeste
	if (matrizDos[2][primeraPosicionX-1] == "I" && matrizDos[1][primeraPosicionX-2] == "E") 
	{
		contadorPalabra ++;
	}

	return contadorPalabra;
}

function quintaFila(matrizDos)
{
	var contadorPalabra = 0;
	var arrayPosicion = [];
	var contadorCeldas = 0;
	var contadorLetra = 0;
	var primeraPosicionX;
	var i = 0;

	while(contadorCeldas < 5)
	{
		if (matrizDos[4][contadorCeldas] == "O") 
		{
			arrayPosicion[i] = contadorCeldas;
			contadorCeldas ++;
			contadorLetra ++;
			i++;
		}
		else
		{
			contadorCeldas ++;
		}
	}

	if (contadorLetra > 0) 
	{
		primeraPosicionX = arrayPosicion[0];
	}
	else
	{
		primeraPosicionX = "error";
	}

	//norte
	if (matrizDos[3][primeraPosicionX] == "I" && matrizDos[2][primeraPosicionX] == "E") 
	{
		contadorPalabra ++;
	}
	//noreste
	if (matrizDos[3][primeraPosicionX+1] == "I" && matrizDos[2][primeraPosicionX+2] == "E") 
	{
		contadorPalabra ++;
	}
	//este
	if(matrizDos[4][primeraPosicionX+1] == "I" && matrizDos[4][primeraPosicionX+2] == "E")
	{
		contadorPalabra ++;
	}
	//oeste
	if(matrizDos[4][primeraPosicionX-1] == "I" && matrizDos[4][primeraPosicionX-2] == "E")
	{
		contadorPalabra ++;
	}	
	//noroeste
	if (matrizDos[3][primeraPosicionX-1] == "I" && matrizDos[2][primeraPosicionX-2] == "E") 
	{
		contadorPalabra ++;
	}

	return contadorPalabra;
}

resultado = primeraFila(matrizDos) + segundaFila(matrizDos) + terceraFila(matrizDos) + cuartaFila(matrizDos) + quintaFila(matrizDos);
console.log("En la segunda matriz, la palabra se repite: " + resultado);