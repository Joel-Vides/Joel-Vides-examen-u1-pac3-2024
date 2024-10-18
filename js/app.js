alert('-----Ejercicio 1-----');

const numero = parseFloat(prompt('Ingresar un Número: '));

if(numero%3===0 && numero%5===0){
    alert(`El Número ${numero} es Multiplo de 3 y de 5`)
}else{

    if(numero%3===0){
        alert(`El Número ${numero} es Multiplo de 3`)
    }
    
    if(numero%5===0){
        alert(`El Número ${numero} es Multiplo de 5`)
    }
    
}

if(numero%3>0 && numero%5>0){
    alert(`El Número ${numero} NO es Multiplo de 3 ni de 5`)
}