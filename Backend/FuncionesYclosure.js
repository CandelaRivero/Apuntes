// Punto 1 funcion de mostrar lista
function mostrarLista(lista) {
    if(lista.length != 0) {
        console.log(lista);
    } else {
        console.log("lista vacia");
    }
}
mostrarLista([]);
mostrarLista([1,2,3]);

// Punto 2 definir funcion anonima que haga lo del punto1 e invocarla pasando la lista

(function (lista) {
    if(lista.length != 0) {
        console.log(lista);
    } else {
        console.log("lista vacia");
    }
}) ([1,2,3]);

//Punto 3  reciba un numero y devuelva una funcion
function crearMultiplicador(numero) {
    let numero_interno = numero
    return function(numero2) {
        return numero_interno = numero2;
    }
}

let duplicar = crearMultiplicador(2);
console.log(duplicar(2)); //4

let triplicar = crearMultiplicador(3); 
console.log(triplicar(3)); //9