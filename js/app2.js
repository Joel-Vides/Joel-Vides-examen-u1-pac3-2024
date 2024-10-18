alert('-----Ejercicio 2-----');

const numero = parseFloat(prompt('Ingresar un Número del 1 al 100'));
if(numero>100 || numero<0){
    alert('Ingresar un Valor del 1 al 100')
}

if(numero>=90 && numero<=100){
    alert(`El Número ${numero} Equivale a la letra A.`)
}

if(numero>=80 && numero<=89){
    alert(`El Número ${numero} Equivale a la letra B.`)
}

if(numero>=70 && numero<=79){
    alert(`El Número ${numero} Equivale a la letra C.`)
}

if(numero>=60 && numero<=69){
    alert(`El Número ${numero} Equivale a la letra D.`)
}

if(numero>=0 && numero<=59){
    alert(`El Número ${numero} Equivale a la letra F.`)
}