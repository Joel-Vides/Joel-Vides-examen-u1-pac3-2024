alert('-----Ejercicio 3-----');

const numero = parseFloat(prompt('Ingresar el Año: '));

if(numero%4===0 && numero%100>0){
    alert(`El Año ${numero} es Bisiesto`)
}else{
    alert(`El Año ${numero} no es Bisiesto`)
}